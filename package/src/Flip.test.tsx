import React from 'react';
import { Button } from '@mantine/core';
import { render } from '@mantine-tests/core';
import { Flip } from './Flip';

describe('Flip', () => {
  it('renders without crashing', () => {
    const { container } = render(
      <Flip>
        <div>
          Pane 1
          <Flip.Target>
            <Button>Flip Back</Button>
          </Flip.Target>
        </div>
        <div>Pane 2</div>
      </Flip>
    );
    expect(container).toBeTruthy();
  });
});
