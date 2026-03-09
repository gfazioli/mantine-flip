import React, { forwardRef } from 'react';
import { useProps } from '@mantine/core';

export interface FlipBackProps {
  /** Back face content */
  children: React.ReactNode;
}

export const FlipBack = forwardRef<HTMLDivElement, FlipBackProps>((props, ref) => {
  const { children } = useProps('FlipBack', {}, props);
  return <div ref={ref}>{children}</div>;
});

FlipBack.displayName = 'FlipBack';
