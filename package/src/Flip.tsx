import React, { useMemo, useRef, useState } from 'react';
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
import { useDidUpdate, useUncontrolled } from '@mantine/hooks';
import { FlipContextProvider } from './Flip.context';
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

  /** Flip animation timing function. Default `ease-in-out` */
  easing?: React.CSSProperties['transitionTimingFunction'];

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
  };
}>;

const defaultProps: Partial<FlipProps> = {
  direction: 'horizontal',
  directionFlipIn: 'negative',
  directionFlipOut: 'positive',
};

const varsResolver = createVarsResolver<FlipFactory>((_, { perspective, easing, duration }) => ({
  root: {
    '--flip-perspective': perspective === undefined ? '1000px' : perspective,
    '--flip-transition-duration': duration === undefined ? '.8s' : `${duration}s`,
    '--flip-transition-timing-function': easing === undefined ? 'ease-in-out' : easing,
  },
  'flip-container': {},
  'flip-front-face': {},
  'flip-back-face': {},
}));

export const Flip = polymorphicFactory<FlipFactory>((_props, ref) => {
  const props = useProps('Flip', defaultProps, _props);
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
    ...others
  } = props;

  const containerRef = useRef(null);

  const [rotateValue, setRotateValue] = useState<number>(defaultFlipped ? -180 : 0);

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

  useDidUpdate(() => {
    setRotateValue(0);
  }, [directionFlipIn, directionFlipOut, direction]);

  useDidUpdate(() => {
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

  if (childrenArray.length !== 2) {
    throw new Error('Flip component must have exactly two children');
  }

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

  // get the first child from children
  const frontChild = childrenArray[0] as React.ReactElement;
  const backChild = childrenArray[1] as React.ReactElement;

  const front = () => {
    setFlipped(false);
    _flipped && onFront?.();
  };

  const back = () => {
    setFlipped(true);
    !_flipped && onBack?.();
  };

  const toggleFlip = () => (_flipped ? front() : back());

  return (
    <FlipContextProvider
      value={{
        toggleFlip,
        flipped: _flipped,
      }}
    >
      <Box ref={ref} {...getStyles('root')} {...others}>
        <div ref={containerRef} {...getStyles('flip-container', { style: getDirectionIn })}>
          <div {...getStyles('flip-front-face', { style: { zIndex: 0 } })}>{frontChild}</div>
          <div {...getStyles('flip-back-face', { style: getBackRotation })}>{backChild}</div>
        </div>
      </Box>
    </FlipContextProvider>
  );
});

Flip.classes = classes;
Flip.displayName = 'Flip';
Flip.Target = FlipTarget;
