import { Flip } from '@gfazioli/mantine-flip';
import { Button, Group, Paper, Text } from '@mantine/core';
import { MantineDemo } from '@mantinex/demo';

const code = `
import { Flip } from '@gfazioli/mantine-flip';
import { Button, Group, Paper, Text } from '@mantine/core';

function Demo() {
  return (
    <Flip h={200} w={400} lazyBack>
      <Paper radius="md" withBorder p="lg" shadow="md">
        <h3>Front Card</h3>
        <Text size="sm" c="dimmed">
          The back face is not rendered until you flip for the first time.
          Inspect the DOM to verify.
        </Text>
        <Group justify="right" mt="md">
          <Flip.Target>
            <Button>Flip to Back</Button>
          </Flip.Target>
        </Group>
      </Paper>

      <Paper radius="md" withBorder p="lg" shadow="md">
        <h3>Back Card</h3>
        <Text size="sm" c="dimmed">
          This content was lazily mounted on first flip.
        </Text>
        <Flip.Target>
          <Button variant="outline">Flip to Front</Button>
        </Flip.Target>
      </Paper>
    </Flip>
  );
}
`;

function Demo() {
  return (
    <Flip h={200} w={400} lazyBack>
      <Paper radius="md" withBorder p="lg" shadow="md">
        <h3>Front Card</h3>
        <Text size="sm" c="dimmed">
          The back face is not rendered until you flip for the first time. Inspect the DOM to
          verify.
        </Text>
        <Group justify="right" mt="md">
          <Flip.Target>
            <Button>Flip to Back</Button>
          </Flip.Target>
        </Group>
      </Paper>

      <Paper radius="md" withBorder p="lg" shadow="md">
        <h3>Back Card</h3>
        <Text size="sm" c="dimmed">
          This content was lazily mounted on first flip.
        </Text>
        <Flip.Target>
          <Button variant="outline">Flip to Front</Button>
        </Flip.Target>
      </Paper>
    </Flip>
  );
}

export const lazyBack: MantineDemo = {
  type: 'code',
  code,
  component: Demo,
  defaultExpanded: false,
  centered: true,
  maxWidth: 400,
  dimmed: true,
};
