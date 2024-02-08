import { Flip } from '@gfazioli/mantine-flip';
import { Button, Group, Paper, Stack, Switch } from '@mantine/core';
import { MantineDemo } from '@mantinex/demo';
import { useState } from 'react';

const code = `
function Demo() {
  const [flipped, setFlipped] = useState(false);

  return (
    <Stack>
      <Group>
        <Switch checked={flipped}
                onChange={(event) => setFlipped(event.currentTarget.checked)}
                label="Show settings" />
      </Group>

    <Flip h={200} w={400} flipped={flipped}>

      <Paper radius="md" withBorder p="lg" shadow="md">
        <h3>Front Card</h3>
        <p>The front card</p>
        <Group justify="right">
          <Button onClick={()=>setFlipped(true)}>Show Settings</Button>
        </Group>
      </Paper>

      <Paper radius="md" withBorder p="lg" shadow="md">
        <h3>Back Card</h3>
        <Button onClick={()=>setFlipped(false)} variant="outline">Back to Front</Button>
      </Paper>

    </Flip>
    </Stack>
  );
}
`;

function Demo() {
  const [flipped, setFlipped] = useState(false);

  return (
    <Stack>
      <Group>
        <Switch
          checked={flipped}
          onChange={(event) => setFlipped(event.currentTarget.checked)}
          label="Show settings"
        />
      </Group>

      <Flip h={200} w={400} flipped={flipped}>
        <Paper radius="md" withBorder p="lg" shadow="md">
          <h3>Front Card</h3>
          <p>The front card</p>
          <Group justify="right">
            <Button onClick={() => setFlipped(true)}>Show Settings</Button>
          </Group>
        </Paper>

        <Paper radius="md" withBorder p="lg" shadow="md">
          <h3>Back Card</h3>
          <Button onClick={() => setFlipped(false)} variant="outline">
            Back to Front
          </Button>
        </Paper>
      </Flip>
    </Stack>
  );
}

export const controlled: MantineDemo = {
  type: 'code',
  code,
  component: Demo,
  centered: true,
  maxWidth: 400,
  dimmed: true,
};
