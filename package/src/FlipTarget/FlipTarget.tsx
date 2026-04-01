import React, { cloneElement } from 'react';
import { createEventHandler, isElement, useProps } from '@mantine/core';
import { useFlipContext } from '../Flip.context';

export interface FlipTargetProps {
  /** Target element */
  children: React.ReactNode;

  /** Key of the prop that should be used to get element ref */
  refProp?: string;
}

const defaultProps: Partial<FlipTargetProps> = {
  refProp: 'ref',
};

export function FlipTarget(props: FlipTargetProps) {
  const { children, refProp, ...others } = useProps('FlipTarget', defaultProps, props);

  if (!isElement(children)) {
    throw new Error(
      'Flip.Target component children should be an element or a component that accepts ref. Fragments, strings, numbers and other primitive values are not supported'
    );
  }

  const ctx = useFlipContext();

  const onClick = createEventHandler((children as React.ReactElement<any>).props.onClick, () =>
    ctx.toggleFlip()
  );

  return (
    <div {...others}>
      {cloneElement(children as React.ReactElement<any>, {
        onClick,
        'data-flipped': ctx.flipped ? true : undefined,
        'data-disabled': ctx.disabled ? true : undefined,
        'aria-disabled': ctx.disabled || undefined,
      })}
    </div>
  );
}

FlipTarget.displayName = 'FlipTarget';
