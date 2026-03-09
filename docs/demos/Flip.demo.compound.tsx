import { Flip } from '@gfazioli/mantine-flip';
import { Button, Group, Paper } from '@mantine/core';
import { MantineDemo } from '@mantinex/demo';

const code = `
import { Flip } from '@gfazioli/mantine-flip';
import { Button, Group, Paper } from '@mantine/core';

function Demo() {
  return (
    <Flip h={200} w={400}>
      <Flip.Front>
        <Paper radius="md" withBorder p="lg" shadow="md">
          <h3>Front Card</h3>
          <p>Using Flip.Front compound component</p>
          <Group justify="right">
            <Flip.Target>
              <Button>Show Back</Button>
            </Flip.Target>
          </Group>
        </Paper>
      </Flip.Front>

      <Flip.Back>
        <Paper radius="md" withBorder p="lg" shadow="md">
          <h3>Back Card</h3>
          <p>Using Flip.Back compound component</p>
          <Flip.Target>
            <Button variant="outline">Show Front</Button>
          </Flip.Target>
        </Paper>
      </Flip.Back>
    </Flip>
  );
}
`;

function Demo() {
  return (
    <Flip h={200} w={400}>
      <Flip.Front>
        <Paper radius="md" withBorder p="lg" shadow="md">
          <h3>Front Card</h3>
          <p>Using Flip.Front compound component</p>
          <Group justify="right">
            <Flip.Target>
              <Button>Show Back</Button>
            </Flip.Target>
          </Group>
        </Paper>
      </Flip.Front>

      <Flip.Back>
        <Paper radius="md" withBorder p="lg" shadow="md">
          <h3>Back Card</h3>
          <p>Using Flip.Back compound component</p>
          <Flip.Target>
            <Button variant="outline">Show Front</Button>
          </Flip.Target>
        </Paper>
      </Flip.Back>
    </Flip>
  );
}

export const compound: MantineDemo = {
  type: 'code',
  code,
  component: Demo,
  defaultExpanded: false,
  centered: true,
  maxWidth: 400,
  dimmed: true,
};
