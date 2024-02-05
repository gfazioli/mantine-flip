import { Button } from '@mantine/core';
import React from 'react';
import { Flip } from './Flip';

export default { title: 'Flip' };

export function Usage() {
  return (
    <div style={{ padding: 40 }}>
      <Flip w={200} h={200}>
        <div>
          First
          <Flip.Target>
            <Button>Flip</Button>
          </Flip.Target>
        </div>
        <div>
          Second
          <Flip.Target>
            <Button>Back</Button>
          </Flip.Target>
        </div>
      </Flip>
    </div>
  );
}
