import React, { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import {
  Box,
  BoxProps,
  createVarsResolver,
  PolymorphicFactory,
  polymorphicFactory,
  StylesApiProps,
  useProps,
  useStyles,
} from '@mantine/core';
import { useDidUpdate, useMergedRef, useUncontrolled } from '@mantine/hooks';
import { FlipContextProvider } from './Flip.context';
import { FlipBack } from './FlipBack/FlipBack';
import { FlipFront } from './FlipFront/FlipFront';
import { FlipTarget } from './FlipTarget/FlipTarget';
import classes from './Flip.module.css';

export type FlipStylesNames = 'root' | 'flip-container' | 'flip-front-face' | 'flip-back-face';

export type FlipCssVariables = {
  root: '--flip-perspective' | '--flip-transition-duration' | '--flip-transition-timing-function';
  'flip-container': never;
  'flip-front-face': never;
  'flip-back-face': never;
};

export type FlipDirection = 'horizontal' | 'vertical';

export type FlipIn = 'positive' | 'negative';

export type FlipOut = FlipIn;

export interface FlipBaseProps {
  /** Perspective value for flip animation. Default `1000px` */
  perspective?: string;

  /** Flip animation duration in seconds. Default `.8` */
  duration?: number;

  /** Flip animation timing function. Accepts any CSS timing function or `"spring"` for a physics-based spring curve. Default `ease-in-out` */
  easing?: React.CSSProperties['transitionTimingFunction'] | 'spring';

  /** Controlled flip opened state */
  flipped?: boolean;

  /** Uncontrolled flip initial opened state */
  defaultFlipped?: boolean;

  /** Flip direction to show the front and back side. Default `horizontal` */
  direction?: FlipDirection;

  /** Flip direction to show the back side. Default `negative` */
  directionFlipIn?: FlipIn;

  /** Flip direction to hide the back side. Default `positive` */
  directionFlipOut?: FlipOut;

  /** Called when flip flipped state changes */
  onChange?: (flipped: boolean) => void;

  /** Called when Flip is shown back side */
  onBack?: () => void;

  /** Called when Flip is shown front side */
  onFront?: () => void;

  /** Called when the flip transition animation ends */
  onTransitionEnd?: () => void;

  /** When true, flip is disabled and Flip.Target clicks are ignored. Default `false` */
  disabled?: boolean;

  /** When true, the back face is not rendered until the first flip. Default `false` */
  lazyBack?: boolean;

  /** When true, enables swipe gestures to trigger flip on touch devices. Swipe direction follows the `direction` prop. Default `false` */
  swipeable?: boolean;

  /** Minimum swipe distance in pixels to trigger a flip. Default `50` */
  swipeThreshold?: number;

  children?: React.ReactNode;
}

export interface FlipProps extends BoxProps, FlipBaseProps, StylesApiProps<FlipFactory> {}

export type FlipFactory = PolymorphicFactory<{
  props: FlipProps;
  defaultComponent: 'div';
  defaultRef: HTMLDivElement;
  stylesNames: FlipStylesNames;
  vars: FlipCssVariables;
  staticComponents: {
    Target: typeof FlipTarget;
    Front: typeof FlipFront;
    Back: typeof FlipBack;
  };
}>;

const defaultProps: Partial<FlipProps> = {
  direction: 'horizontal',
  directionFlipIn: 'negative',
  directionFlipOut: 'positive',
};

const SPRING_EASING =
  'linear(0, 0.009, 0.035 2.1%, 0.141 4.4%, 0.723 12.9%, 0.938 16.7%, 1.017, 1.077 21.8%, 1.121 24%, 1.149 26.3%, 1.159, 1.163 29%, 1.154 31.4%, 1.075 38.5%, 1.033 42.7%, 1.001 48%, 0.985 52.2%, 0.98 56.3%, 0.984 64.3%, 1 100%)';

const resolveEasing = (easing: string | undefined): string => {
  if (easing === undefined) {
    return 'ease-in-out';
  }
  if (easing === 'spring') {
    return SPRING_EASING;
  }
  return easing;
};

const varsResolver = createVarsResolver<FlipFactory>((_, { perspective, easing, duration }) => ({
  root: {
    '--flip-perspective': perspective === undefined ? '1000px' : perspective,
    '--flip-transition-duration': duration === undefined ? '.8s' : `${duration}s`,
    '--flip-transition-timing-function': resolveEasing(easing),
  },
  'flip-container': {},
  'flip-front-face': {},
  'flip-back-face': {},
}));

export const Flip = polymorphicFactory<FlipFactory>((_props) => {
  const { ref, ...restProps } = _props as typeof _props & { ref?: React.Ref<HTMLDivElement> };
  const props = useProps('Flip', defaultProps, restProps);
  const {
    perspective,
    duration,
    easing,
    classNames,
    style,
    styles,
    unstyled,
    vars,
    children,
    className,
    flipped,
    defaultFlipped,
    direction,
    directionFlipIn,
    directionFlipOut,
    onChange,
    onBack,
    onFront,
    onTransitionEnd,
    disabled,
    lazyBack,
    swipeable,
    swipeThreshold,
    ...others
  } = props;

  const initialFlipped = flipped ?? defaultFlipped ?? false;
  const [rotateValue, setRotateValue] = useState<number>(initialFlipped ? -180 : 0);
  const backMountedRef = useRef(initialFlipped || !lazyBack);
  const rootRef = useRef<HTMLDivElement>(null);
  const touchStartRef = useRef<{ x: number; y: number } | null>(null);
  const toggleFlipRef = useRef<() => void>(() => {});

  // Fix #9: ensure disabling lazyBack at runtime mounts the back face immediately
  if (!lazyBack && !backMountedRef.current) {
    backMountedRef.current = true;
  }

  const [_flipped, setFlipped] = useUncontrolled({
    value: flipped,
    defaultValue: defaultFlipped,
    finalValue: false,
    onChange,
  });

  const getStyles = useStyles<FlipFactory>({
    name: 'Flip',
    props,
    classes,
    className,
    style,
    classNames,
    styles,
    unstyled,
    vars,
    varsResolver,
  });

  const directionResetRef = useRef(false);

  useDidUpdate(() => {
    if (_flipped) {
      backMountedRef.current = true;
    }
  }, [_flipped]);

  useDidUpdate(() => {
    if (_flipped) {
      directionResetRef.current = true;
    }
    setRotateValue(0);
    // Only reset flipped state in uncontrolled mode; in controlled mode the parent owns the state
    if (flipped === undefined) {
      setFlipped(false);
    }
  }, [directionFlipIn, directionFlipOut, direction]);

  useDidUpdate(() => {
    if (directionResetRef.current) {
      directionResetRef.current = false;
      return;
    }

    if (directionFlipIn === 'negative' && directionFlipOut === 'positive') {
      setRotateValue((v) => (v ? v + 180 : -180));
    }

    if (directionFlipIn === 'negative' && directionFlipOut === 'negative') {
      setRotateValue((v) => v - 180);
    }

    if (directionFlipIn === 'positive' && directionFlipOut === 'negative') {
      setRotateValue((v) => (v ? v - 180 : 180));
    }

    if (directionFlipIn === 'positive' && directionFlipOut === 'positive') {
      setRotateValue((v) => v + 180);
    }
  }, [_flipped]);

  const childrenArray = React.Children.toArray(children);

  // Detect compound component usage (Flip.Front / Flip.Back)
  const compoundFront = childrenArray.find(
    (child) => React.isValidElement(child) && (child.type as any)?.displayName === 'FlipFront'
  ) as React.ReactElement<{ children: React.ReactNode }> | undefined;

  const compoundBack = childrenArray.find(
    (child) => React.isValidElement(child) && (child.type as any)?.displayName === 'FlipBack'
  ) as React.ReactElement<{ children: React.ReactNode }> | undefined;

  const isCompound = !!(compoundFront || compoundBack);

  if (isCompound) {
    if (!compoundFront || !compoundBack) {
      throw new Error(
        'Flip component requires both Flip.Front and Flip.Back when using compound components'
      );
    }
    if (childrenArray.length !== 2) {
      throw new Error(
        'Flip component with Flip.Front and Flip.Back must have exactly two children, no extra elements allowed'
      );
    }
  } else if (childrenArray.length !== 2) {
    throw new Error(
      'Flip component must have exactly two children, or use Flip.Front and Flip.Back'
    );
  }

  const frontChild = isCompound ? compoundFront!.props.children : childrenArray[0];
  const backChild = isCompound ? compoundBack!.props.children : childrenArray[1];

  const getDirectionIn = useMemo(() => {
    if (direction === 'horizontal') {
      return { transform: `rotateY(${rotateValue}deg)` };
    }
    return { transform: `rotateX(${rotateValue}deg)` };
  }, [direction, rotateValue]);

  const getBackRotation = useMemo(() => {
    if (direction === 'horizontal') {
      return { transform: 'rotateY(180deg)' };
    }
    return { transform: 'rotateX(180deg)' };
  }, [direction]);

  const toggleFlip = useCallback(() => {
    if (disabled) {
      return;
    }
    if (_flipped) {
      setFlipped(false);
      onFront?.();
    } else {
      backMountedRef.current = true;
      setFlipped(true);
      onBack?.();
    }
  }, [disabled, _flipped, onFront, onBack]);

  // Keep a stable ref to toggleFlip so swipe useEffect doesn't rebind on every flip
  toggleFlipRef.current = toggleFlip;

  const handleTransitionEnd = useCallback(
    (event: React.TransitionEvent<HTMLDivElement>) => {
      if (event.propertyName === 'transform' && event.target === event.currentTarget) {
        onTransitionEnd?.();
      }
    },
    [onTransitionEnd]
  );

  // Swipe gesture support
  useEffect(() => {
    if (!swipeable || disabled) {
      return undefined;
    }

    const el = rootRef.current;
    if (!el) {
      return undefined;
    }

    const threshold = swipeThreshold ?? 50;

    const handleTouchStart = (e: TouchEvent) => {
      const touch = e.touches[0];
      touchStartRef.current = { x: touch.clientX, y: touch.clientY };
    };

    const handleTouchEnd = (e: TouchEvent) => {
      if (!touchStartRef.current) {
        return;
      }
      const touch = e.changedTouches[0];
      const dx = touch.clientX - touchStartRef.current.x;
      const dy = touch.clientY - touchStartRef.current.y;
      touchStartRef.current = null;

      if (direction === 'horizontal' && Math.abs(dx) > threshold && Math.abs(dx) > Math.abs(dy)) {
        toggleFlipRef.current();
      } else if (
        direction === 'vertical' &&
        Math.abs(dy) > threshold &&
        Math.abs(dy) > Math.abs(dx)
      ) {
        toggleFlipRef.current();
      }
    };

    el.addEventListener('touchstart', handleTouchStart, { passive: true });
    el.addEventListener('touchend', handleTouchEnd, { passive: true });

    return () => {
      el.removeEventListener('touchstart', handleTouchStart);
      el.removeEventListener('touchend', handleTouchEnd);
    };
  }, [swipeable, disabled, direction, swipeThreshold]);

  return (
    <FlipContextProvider
      value={{
        toggleFlip,
        flipped: _flipped,
        disabled: !!disabled,
      }}
    >
      <Box ref={useMergedRef(ref, rootRef)} {...getStyles('root')} aria-live="polite" {...others}>
        <div
          {...getStyles('flip-container', { style: getDirectionIn })}
          onTransitionEnd={handleTransitionEnd}
        >
          <div
            {...getStyles('flip-front-face', { style: { zIndex: 0 } })}
            inert={_flipped || undefined}
          >
            {frontChild}
          </div>
          <div
            {...getStyles('flip-back-face', { style: getBackRotation })}
            inert={!_flipped || undefined}
          >
            {backMountedRef.current ? backChild : null}
          </div>
        </div>
      </Box>
    </FlipContextProvider>
  );
});

Flip.classes = classes;
Flip.displayName = 'Flip';
Flip.Target = FlipTarget;
Flip.Front = FlipFront;
Flip.Back = FlipBack;
