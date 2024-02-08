import { Flip } from '@gfazioli/mantine-flip';
import { Button, Group, Paper } from '@mantine/core';
import { MantineDemo } from '@mantinex/demo';

const code = `
import { Flip } from '@gfazioli/mantine-flip';

function Demo() {
  return (
    <Flip h={200} w={200}>

    <Paper radius="md" withBorder p="lg" shadow="md">
      <h3>Front Card</h3>
      <Flip.Target>
        <Button>Flip Back</Button>
      </Flip.Target>
    </Paper>

    <Paper radius="md" withBorder p="lg" shadow="md">
      <h3>Back Card</h3>
      <Flip.Target>
        <Button>Flip Front</Button>
      </Flip.Target>
    </Paper>

  </Flip>
  );
}
`;

function Demo() {
  return (
    <Flip h={200} w={400} defaultFlipped={true}>
      <Paper radius="md" withBorder p="lg" shadow="md">
        <h3>Front Card</h3>
        <p>The front card</p>
        <Group justify="right">
          <Flip.Target>
            <Button>Show Back</Button>
          </Flip.Target>
        </Group>
      </Paper>

      <Paper radius="md" withBorder p="lg" shadow="md">
        <h3>Back Card</h3>
        <Flip.Target>
          <Button variant="outline">Back to Front</Button>
        </Flip.Target>
      </Paper>
    </Flip>
  );
}

export const uncontrolled: MantineDemo = {
  type: 'code',
  code,
  component: Demo,
  centered: true,
  maxWidth: 400,
  dimmed: true,
};
