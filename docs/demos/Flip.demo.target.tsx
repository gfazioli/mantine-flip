import { Flip } from '@gfazioli/mantine-flip';
import { Button, Group, Paper, Text } from '@mantine/core';
import { MantineDemo } from '@mantinex/demo';

const code = `
import { Flip } from '@gfazioli/mantine-flip';
import { Button, Group, Paper, Text } from '@mantine/core';

function Demo() {
  return (
    <Group justify="center">
      <Flip w={300} h={200}>
        <Paper shadow="md" p="xl" withBorder w="100%" h="100%">
          <Text>This card has multiple targets</Text>
          
          <Group mt="xl">
            <Flip.Target>
              <Button>Button Target</Button>
            </Flip.Target>
            
            <Flip.Target>
              <Text style={{ cursor: 'pointer' }} td="underline" c="blue">
                Text Target
              </Text>
            </Flip.Target>
          </Group>
        </Paper>

        <Paper shadow="md" p="xl" withBorder w="100%" h="100%">
          <Text>Back Side</Text>
          <Flip.Target>
            <Button mt="xl" color="gray">
              Go Back
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
      <Flip w={300} h={200}>
        <Paper shadow="md" p="xl" withBorder w="100%" h="100%">
          <Text>This card has multiple targets</Text>

          <Group mt="xl">
            <Flip.Target>
              <Button>Button Target</Button>
            </Flip.Target>

            <Flip.Target>
              <Text style={{ cursor: 'pointer' }} td="underline" c="blue">
                Text Target
              </Text>
            </Flip.Target>
          </Group>
        </Paper>

        <Paper shadow="md" p="xl" withBorder w="100%" h="100%">
          <Text>Back Side</Text>
          <Flip.Target>
            <Button mt="xl" color="gray">
              Go Back
            </Button>
          </Flip.Target>
        </Paper>
      </Flip>
    </Group>
  );
}

export const target: MantineDemo = {
  type: 'code',
  code,
  component: Demo,
  centered: true,
  defaultExpanded: false,
  dimmed: true,
};
