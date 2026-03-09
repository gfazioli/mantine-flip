import { Flip } from '@gfazioli/mantine-flip';
import { Button, Group, Paper, Text } from '@mantine/core';
import { MantineDemo } from '@mantinex/demo';

const code = `
import { Flip } from '@gfazioli/mantine-flip';
import { Button, Group, Paper, Text } from '@mantine/core';

function Demo() {
  return (
    <Group justify="center" gap="xl">
      <div>
        <Text size="sm" fw={500} mb="xs" ta="center">ease-in-out (default)</Text>
        <Flip h={180} w={200}>
          <Paper radius="md" withBorder p="lg" shadow="md" h="100%">
            <Text fw={500}>Front</Text>
            <Flip.Target>
              <Button mt="md" fullWidth>Flip</Button>
            </Flip.Target>
          </Paper>
          <Paper radius="md" withBorder p="lg" shadow="md" h="100%" bg="var(--mantine-color-blue-light)">
            <Text fw={500}>Back</Text>
            <Flip.Target>
              <Button mt="md" fullWidth variant="outline">Flip</Button>
            </Flip.Target>
          </Paper>
        </Flip>
      </div>

      <div>
        <Text size="sm" fw={500} mb="xs" ta="center">spring</Text>
        <Flip h={180} w={200} easing="spring">
          <Paper radius="md" withBorder p="lg" shadow="md" h="100%">
            <Text fw={500}>Front</Text>
            <Flip.Target>
              <Button mt="md" fullWidth>Flip</Button>
            </Flip.Target>
          </Paper>
          <Paper radius="md" withBorder p="lg" shadow="md" h="100%" bg="var(--mantine-color-teal-light)">
            <Text fw={500}>Back</Text>
            <Flip.Target>
              <Button mt="md" fullWidth variant="outline">Flip</Button>
            </Flip.Target>
          </Paper>
        </Flip>
      </div>
    </Group>
  );
}
`;

function Demo() {
  return (
    <Group justify="center" gap="xl">
      <div>
        <Text size="sm" fw={500} mb="xs" ta="center">
          ease-in-out (default)
        </Text>
        <Flip h={180} w={200}>
          <Paper radius="md" withBorder p="lg" shadow="md" h="100%">
            <Text fw={500}>Front</Text>
            <Flip.Target>
              <Button mt="md" fullWidth>
                Flip
              </Button>
            </Flip.Target>
          </Paper>
          <Paper
            radius="md"
            withBorder
            p="lg"
            shadow="md"
            h="100%"
            bg="var(--mantine-color-blue-light)"
          >
            <Text fw={500}>Back</Text>
            <Flip.Target>
              <Button mt="md" fullWidth variant="outline">
                Flip
              </Button>
            </Flip.Target>
          </Paper>
        </Flip>
      </div>

      <div>
        <Text size="sm" fw={500} mb="xs" ta="center">
          spring
        </Text>
        <Flip h={180} w={200} easing="spring">
          <Paper radius="md" withBorder p="lg" shadow="md" h="100%">
            <Text fw={500}>Front</Text>
            <Flip.Target>
              <Button mt="md" fullWidth>
                Flip
              </Button>
            </Flip.Target>
          </Paper>
          <Paper
            radius="md"
            withBorder
            p="lg"
            shadow="md"
            h="100%"
            bg="var(--mantine-color-teal-light)"
          >
            <Text fw={500}>Back</Text>
            <Flip.Target>
              <Button mt="md" fullWidth variant="outline">
                Flip
              </Button>
            </Flip.Target>
          </Paper>
        </Flip>
      </div>
    </Group>
  );
}

export const spring: MantineDemo = {
  type: 'code',
  code,
  component: Demo,
  defaultExpanded: false,
  centered: true,
  dimmed: true,
};
