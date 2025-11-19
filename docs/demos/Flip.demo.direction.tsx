import { Flip } from '@gfazioli/mantine-flip';
import { Button, Group, Paper, Text } from '@mantine/core';
import { MantineDemo } from '@mantinex/demo';

const code = `
import { Flip } from '@gfazioli/mantine-flip';
import { Button, Group, Paper, Text } from '@mantine/core';

function Demo() {
  return (
    <Group justify="center">
      <Flip w={200} h={300} direction="vertical">
        <Paper shadow="md" p="xl" withBorder w="100%" h="100%">
          <Text>Front Side</Text>
          <Text size="sm" c="dimmed" mt="md">
            Click the button below to flip vertically
          </Text>
          <Flip.Target>
            <Button fullWidth mt="xl">
              Flip Vertical
            </Button>
          </Flip.Target>
        </Paper>

        <Paper shadow="md" p="xl" withBorder w="100%" h="100%">
          <Text>Back Side</Text>
          <Text size="sm" c="dimmed" mt="md">
            Click the button below to flip back
          </Text>
          <Flip.Target>
            <Button fullWidth mt="xl" color="red">
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
      <Flip w={200} h={300} direction="vertical">
        <Paper shadow="md" p="xl" withBorder w="100%" h="100%">
          <Text>Front Side</Text>
          <Text size="sm" c="dimmed" mt="md">
            Click the button below to flip vertically
          </Text>
          <Flip.Target>
            <Button fullWidth mt="xl">
              Flip Vertical
            </Button>
          </Flip.Target>
        </Paper>

        <Paper shadow="md" p="xl" withBorder w="100%" h="100%">
          <Text>Back Side</Text>
          <Text size="sm" c="dimmed" mt="md">
            Click the button below to flip back
          </Text>
          <Flip.Target>
            <Button fullWidth mt="xl" color="red">
              Flip Back
            </Button>
          </Flip.Target>
        </Paper>
      </Flip>
    </Group>
  );
}

export const direction: MantineDemo = {
  type: 'code',
  code,
  component: Demo,
  centered: true,
  defaultExpanded: false,
  dimmed: true,
};
