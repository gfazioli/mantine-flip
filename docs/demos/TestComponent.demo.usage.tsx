import React from 'react';
import { MantineDemo } from '@mantinex/demo';
import { TestComponent } from 'mantine-extension-template';

const code = `
import { TestComponent } from 'mantine-extension-template';

function Demo() {
  return <TestComponent label="Test component usage demo" />;
}
`;

function Demo() {
  return <TestComponent label="Test component usage demo" />;
}

export const usage: MantineDemo = {
  type: 'code',
  component: Demo,
  code,
  centered: true,
};
