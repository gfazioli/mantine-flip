import { Button, Container, Paper } from '@mantine/core';
import React from 'react';
import { Flip } from './Flip';

export default { title: 'Flip' };

export function Usage() {
  return (
    <div style={{ padding: 40 }}>
      <Container size="xl" mt="40%">
        <Flip w={200} h={200} duration={2} directionFlipIn="positive">
          <Paper withBorder p={16} w={200} h={200} bg="violet">
            First
            <Flip.Target>
              <Button>Flip</Button>
            </Flip.Target>
          </Paper>
          <Paper withBorder p={16} w={400} h={400} bg="red">
            Second
            <Flip.Target>
              <Button>Back</Button>
            </Flip.Target>
          </Paper>
        </Flip>
      </Container>
    </div>
  );
}
