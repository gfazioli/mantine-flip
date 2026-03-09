import { useState } from 'react';
import { Flip } from '@gfazioli/mantine-flip';
import { Button, Group, Paper, Switch } from '@mantine/core';
import { MantineDemo } from '@mantinex/demo';

const code = `
import { useState } from 'react';
import { Flip } from '@gfazioli/mantine-flip';
import { Button, Group, Paper, Switch } from '@mantine/core';

function Demo() {
  const [disabled, setDisabled] = useState(true);

  return (
    <>
      <Group mb="md">
        <Switch
          checked={disabled}
          onChange={(event) => setDisabled(event.currentTarget.checked)}
          label="Disabled"
        />
      </Group>

      <Flip h={200} w={400} disabled={disabled}>
        <Paper radius="md" withBorder p="lg" shadow="md">
          <h3>Front Card</h3>
          <p>The flip is disabled, click the switch to enable it</p>
          <Group justify="right">
            <Flip.Target>
              <Button>Flip to Back</Button>
            </Flip.Target>
          </Group>
        </Paper>

        <Paper radius="md" withBorder p="lg" shadow="md">
          <h3>Back Card</h3>
          <Flip.Target>
            <Button variant="outline">Flip to Front</Button>
          </Flip.Target>
        </Paper>
      </Flip>
    </>
  );
}
`;

function Demo() {
  const [disabled, setDisabled] = useState(true);

  return (
    <>
      <Group mb="md">
        <Switch
          checked={disabled}
          onChange={(event) => setDisabled(event.currentTarget.checked)}
          label="Disabled"
        />
      </Group>

      <Flip h={200} w={400} disabled={disabled}>
        <Paper radius="md" withBorder p="lg" shadow="md">
          <h3>Front Card</h3>
          <p>The flip is disabled, click the switch to enable it</p>
          <Group justify="right">
            <Flip.Target>
              <Button>Flip to Back</Button>
            </Flip.Target>
          </Group>
        </Paper>

        <Paper radius="md" withBorder p="lg" shadow="md">
          <h3>Back Card</h3>
          <Flip.Target>
            <Button variant="outline">Flip to Front</Button>
          </Flip.Target>
        </Paper>
      </Flip>
    </>
  );
}

export const disabled: MantineDemo = {
  type: 'code',
  code,
  component: Demo,
  defaultExpanded: false,
  centered: true,
  maxWidth: 400,
  dimmed: true,
};
