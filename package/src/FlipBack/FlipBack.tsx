import { useProps } from '@mantine/core';
import React from 'react';

export interface FlipBackProps {
  /** Back face content */
  children: React.ReactNode;
}

export function FlipBack(props: FlipBackProps) {
  const { children } = useProps('FlipBack', {}, props);
  return <div>{children}</div>;
}

FlipBack.displayName = 'FlipBack';
