import React from 'react';
import { render, tests, screen } from '@mantine-tests/core';
import { TestComponent, TestComponentProps, TestComponentStylesNames } from './TestComponent';

const defaultProps: TestComponentProps = {};

describe('@mantine/core/TestComponent', () => {
  tests.itSupportsSystemProps<TestComponentProps, TestComponentStylesNames>({
    component: TestComponent,
    props: defaultProps,
    polymorphic: true,
    styleProps: true,
    extend: true,
    variant: true,
    size: true,
    classes: true,
    refType: HTMLDivElement,
    displayName: 'TestComponent',
    stylesApiSelectors: ['root'],
  });

  it('renders without crashing', () => {
    render(<TestComponent label="test-label" />);
    expect(screen.getByText('test-label')).toBeInTheDocument();
  });
});
