import React, { forwardRef } from 'react';
import { useProps } from '@mantine/core';

export interface FlipFrontProps {
  /** Front face content */
  children: React.ReactNode;
}

export const FlipFront = forwardRef<HTMLDivElement, FlipFrontProps>((props, ref) => {
  const { children } = useProps('FlipFront', {}, props);
  return <div ref={ref}>{children}</div>;
});

FlipFront.displayName = 'FlipFront';
