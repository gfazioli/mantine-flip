import { Flip } from '@gfazioli/mantine-flip';
import { Button, Paper } from '@mantine/core';
import { MantineDemo } from '@mantinex/demo';
import { FlipStylesApi } from '../styles-api/Flip.styles-api';

const code = `
import { Flip } from '@gfazioli/mantine-flip';

function Demo() {
  return (
    <Flip h={200} w={200}{{props}}>
      <Paper radius="md" withBorder p="lg" shadow="md">
        <h3>Front Card</h3>
        <Flip.Target>
          <Button>Show Back</Button>
        </Flip.Target>
      </Paper>

      <Paper radius="md" withBorder p="lg" shadow="md">
        <h3>Back Card</h3>
        <Flip.Target>
          <Button>Show Front</Button>
        </Flip.Target>
      </Paper>
    </Flip>
  );
}
`;

function Demo(props: any) {
  return (
    <Flip h={200} w={200} {...props}>
      <Paper radius="md" withBorder p="lg" shadow="md">
        <h3>Front Card</h3>
        <Flip.Target>
          <Button>Show Back</Button>
        </Flip.Target>
      </Paper>

      <Paper radius="md" withBorder p="lg" shadow="md">
        <h3>Back Card</h3>
        <Flip.Target>
          <Button>Show Front</Button>
        </Flip.Target>
      </Paper>
    </Flip>
  );
}

export const stylesApi: MantineDemo = {
  type: 'styles-api',
  data: FlipStylesApi,
  component: Demo,
  code,
  centered: true,
  maxWidth: 340,
  dimmed: true,
};
