import { Flip } from '@gfazioli/mantine-flip';
import { Button, Paper, Text } from '@mantine/core';
import { MantineDemo } from '@mantinex/demo';

const code = `
import { Flip } from '@gfazioli/mantine-flip';
import { Button, Paper, Text } from '@mantine/core';

function Demo() {
  return (
    <Flip h={200} w={300} swipeable>
      <Paper radius="md" withBorder p="lg" shadow="md" h="100%">
        <h3>Front Card</h3>
        <Text size="sm" c="dimmed">
          Swipe horizontally to flip, or use the button below.
        </Text>
        <Flip.Target>
          <Button mt="md">Flip</Button>
        </Flip.Target>
      </Paper>

      <Paper radius="md" withBorder p="lg" shadow="md" h="100%">
        <h3>Back Card</h3>
        <Text size="sm" c="dimmed">
          Swipe again to flip back.
        </Text>
        <Flip.Target>
          <Button variant="outline" mt="md">Flip Back</Button>
        </Flip.Target>
      </Paper>
    </Flip>
  );
}
`;

function Demo() {
  return (
    <Flip h={200} w={300} swipeable>
      <Paper radius="md" withBorder p="lg" shadow="md" h="100%">
        <h3>Front Card</h3>
        <Text size="sm" c="dimmed">
          Swipe horizontally to flip, or use the button below.
        </Text>
        <Flip.Target>
          <Button mt="md">Flip</Button>
        </Flip.Target>
      </Paper>

      <Paper radius="md" withBorder p="lg" shadow="md" h="100%">
        <h3>Back Card</h3>
        <Text size="sm" c="dimmed">
          Swipe again to flip back.
        </Text>
        <Flip.Target>
          <Button variant="outline" mt="md">
            Flip Back
          </Button>
        </Flip.Target>
      </Paper>
    </Flip>
  );
}

export const swipeable: MantineDemo = {
  type: 'code',
  code,
  component: Demo,
  defaultExpanded: false,
  centered: true,
  maxWidth: 340,
  dimmed: true,
};
