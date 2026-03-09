import { useState } from 'react';
import { Flip } from '@gfazioli/mantine-flip';
import { Badge, Button, Group, Paper, Stack, Text } from '@mantine/core';
import { MantineDemo } from '@mantinex/demo';

const code = `
import { useState } from 'react';
import { Flip } from '@gfazioli/mantine-flip';
import { Badge, Button, Group, Paper, Stack, Text } from '@mantine/core';

function Demo() {
  const [count, setCount] = useState(0);

  return (
    <Stack align="center">
      <Flip
        h={200}
        w={400}
        onTransitionEnd={() => setCount((c) => c + 1)}
      >
        <Paper radius="md" withBorder p="lg" shadow="md">
          <h3>Front Card</h3>
          <Text size="sm" c="dimmed">Flip to trigger onTransitionEnd</Text>
          <Group justify="right" mt="md">
            <Flip.Target>
              <Button>Flip</Button>
            </Flip.Target>
          </Group>
        </Paper>

        <Paper radius="md" withBorder p="lg" shadow="md">
          <h3>Back Card</h3>
          <Text size="sm" c="dimmed">Flip again</Text>
          <Group justify="right" mt="md">
            <Flip.Target>
              <Button variant="outline">Flip</Button>
            </Flip.Target>
          </Group>
        </Paper>
      </Flip>

      <Badge size="lg" variant="light">
        Transitions completed: {count}
      </Badge>
    </Stack>
  );
}
`;

function Demo() {
  const [count, setCount] = useState(0);

  return (
    <Stack align="center">
      <Flip h={200} w={400} onTransitionEnd={() => setCount((c) => c + 1)}>
        <Paper radius="md" withBorder p="lg" shadow="md">
          <h3>Front Card</h3>
          <Text size="sm" c="dimmed">
            Flip to trigger onTransitionEnd
          </Text>
          <Group justify="right" mt="md">
            <Flip.Target>
              <Button>Flip</Button>
            </Flip.Target>
          </Group>
        </Paper>

        <Paper radius="md" withBorder p="lg" shadow="md">
          <h3>Back Card</h3>
          <Text size="sm" c="dimmed">
            Flip again
          </Text>
          <Group justify="right" mt="md">
            <Flip.Target>
              <Button variant="outline">Flip</Button>
            </Flip.Target>
          </Group>
        </Paper>
      </Flip>

      <Badge size="lg" variant="light">
        Transitions completed: {count}
      </Badge>
    </Stack>
  );
}

export const onTransitionEnd: MantineDemo = {
  type: 'code',
  code,
  component: Demo,
  defaultExpanded: false,
  centered: true,
  maxWidth: 400,
  dimmed: true,
};
