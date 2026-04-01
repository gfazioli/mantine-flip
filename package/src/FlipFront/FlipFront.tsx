import React from 'react';
import { useProps } from '@mantine/core';

export interface FlipFrontProps {
  /** Front face content */
  children: React.ReactNode;
}

export function FlipFront(props: FlipFrontProps) {
  const { children } = useProps('FlipFront', {}, props);
  return <div>{children}</div>;
}

FlipFront.displayName = 'FlipFront';
