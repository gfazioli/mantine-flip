import { Flip } from '@gfazioli/mantine-flip';
import { Button, Paper } from '@mantine/core';
import { MantineDemo } from '@mantinex/demo';
import classes from './Flip.module.css';

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

const moduleCss = `@keyframes pulse {
  0% {
    opacity: 0;
  }

  100% {
    opacity: 1;
  }
}

.flip-front-face {
  transform: rotateY(45deg);
}

.flip-back-face {
  animation: pulse 0.6s infinite alternate;
}

`;

function Demo() {
  return (
    <Flip h={200} w={200} classNames={classes}>
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

export const styled: MantineDemo = {
  type: 'code',
  component: Demo,
  defaultExpanded: false,
  dimmed: true,
  code: [
    { fileName: 'Demo.tsx', code, language: 'tsx' },
    { fileName: 'JsonTree.module.css', code: moduleCss, language: 'css' },
  ],
};
