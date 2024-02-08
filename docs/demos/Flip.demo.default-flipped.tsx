import { Flip } from '@gfazioli/mantine-flip';
import { Button, Code, Group, Paper } from '@mantine/core';
import { MantineDemo } from '@mantinex/demo';

const code = `
import { Flip } from '@gfazioli/mantine-flip';

function Demo() {
  return (
    <Flip h={200} w={400} defaultFlipped={true}>

      <Paper radius="md" withBorder p="lg" shadow="md">
        <h3>Front Card</h3>
            <p>The front card</p>
            <Group justify="right">
              <Flip.Target>
                  <Button>Flip to Back</Button>
              </Flip.Target>
            </Group>
      </Paper>

      <Paper radius="md" withBorder p="lg" shadow="md">
        <h3>Back Card</h3>
        <p>In this case the <Code>defaultFlipped</Code> prop is set to <Code>true</Code>, and the back card is visible</p>
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
    <Flip h={200} w={400} defaultFlipped={true}>
      <Paper radius="md" withBorder p="lg" shadow="md">
        <h3>Front Card</h3>
        <p>The front card</p>
        <Group justify="right">
          <Flip.Target>
            <Button>Flip to Back</Button>
          </Flip.Target>
        </Group>
      </Paper>

      <Paper radius="md" withBorder p="lg" shadow="md">
        <h3>Back Card</h3>
        <p>
          In this case the <Code>defaultFlipped</Code> prop is set to <Code>true</Code>, and the
          back card is visible
        </p>
        <Flip.Target>
          <Button variant="outline">Flip to Front</Button>
        </Flip.Target>
      </Paper>
    </Flip>
  );
}

export const defaultFlipped: MantineDemo = {
  type: 'code',
  code,
  component: Demo,
  centered: true,
  maxWidth: 400,
  minHeight: 220,
  dimmed: true,
};
