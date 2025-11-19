import { Flip } from '@gfazioli/mantine-flip';
import { Button, Group, Paper, Text } from '@mantine/core';
import { MantineDemo } from '@mantinex/demo';

const code = `
import { Flip } from '@gfazioli/mantine-flip';
import { Button, Group, Paper, Text } from '@mantine/core';

function Demo() {
  return (
    <Group justify="center">
      <Flip w={300} h={200} directionFlipIn="positive" directionFlipOut="negative">
        <Paper shadow="md" p="xl" withBorder w="100%" h="100%">
          <Text fw={700}>Custom Transitions</Text>
          <Text size="sm" mt="xs">
            Flip In: Positive
            <br />
            Flip Out: Negative
          </Text>
          <Flip.Target>
            <Button mt="md">Flip Me</Button>
          </Flip.Target>
        </Paper>

        <Paper shadow="md" p="xl" withBorder w="100%" h="100%" bg="var(--mantine-color-blue-light)">
          <Text fw={700}>Back Side</Text>
          <Text size="sm" mt="xs">
            Notice the different rotation direction
          </Text>
          <Flip.Target>
            <Button mt="md" variant="white">
              Flip Back
            </Button>
          </Flip.Target>
        </Paper>
      </Flip>
    </Group>
  );
}
`;

function Demo() {
  return (
    <Group justify="center">
      <Flip w={300} h={200} directionFlipIn="positive" directionFlipOut="negative">
        <Paper shadow="md" p="xl" withBorder w="100%" h="100%">
          <Text fw={700}>Custom Transitions</Text>
          <Text size="sm" mt="xs">
            Flip In: Positive
            <br />
            Flip Out: Negative
          </Text>
          <Flip.Target>
            <Button mt="md">Flip Me</Button>
          </Flip.Target>
        </Paper>

        <Paper shadow="md" p="xl" withBorder w="100%" h="100%" bg="var(--mantine-color-blue-light)">
          <Text fw={700}>Back Side</Text>
          <Text size="sm" mt="xs">
            Notice the different rotation direction
          </Text>
          <Flip.Target>
            <Button mt="md" variant="white">
              Flip Back
            </Button>
          </Flip.Target>
        </Paper>
      </Flip>
    </Group>
  );
}

export const customFlip: MantineDemo = {
  type: 'code',
  code,
  component: Demo,
  centered: true,
  defaultExpanded: false,
  dimmed: true,
};
