import { Flip } from '@gfazioli/mantine-flip';
import {
  Container,
  Group,
  Paper,
  Stack,
  TextInput,
  Title,
  getGradient,
  useMantineTheme,
} from '@mantine/core';
import { MonthPickerInput } from '@mantine/dates';
import { MantineDemo } from '@mantinex/demo';
import { useState } from 'react';

const code = `
function Demo() {
  const [flipped, setFlipped] = useState(false);

  const theme = useMantineTheme();

  function FrontCreditCard() {
    return (
      <Paper
        onClick={() => setFlipped(true)}
        style={{ cursor: 'pointer' }}
        bg={getGradient({ deg: 180, from: 'blue', to: 'cyan.7' }, theme)}
        w={400}
        h={220}
        withBorder
        shadow="md"
        p={30}
        radius="md"
      >
        <Stack>
          <Title order={3} c="white" style={{ textAlign: 'right' }}>
            The Bank
          </Title>
          <Paper
            w={60}
            h={40}
            radius="sm"
            shadow="none"
            p={10}
            bg={getGradient({ deg: 45, from: 'yellow.1', to: 'yellow.6' }, theme)}
          />
        </Stack>
      </Paper>
    );
  }

  function BackCreditCard() {
    return (
      <Paper
        bg={getGradient({ deg: 180, from: 'gray.1', to: 'indigo.1' }, theme)}
        w={400}
        h={220}
        withBorder
        shadow="md"
        p={30}
        radius="md"
        autoFocus
      >
        <Stack>
          <TextInput
            label="Number"
            type="tel"
            pattern="[0-9\s]{13,19}"
            autoComplete="cc-number"
            maxLength={16}
            placeholder="xxxx xxxx xxxx xxxx"
            required
          />
          <Group>
            <MonthPickerInput
              w={100}
              required
              label="Expire"
              placeholder="MM/YY"
              valueFormat="MM/YY"
            />
            <TextInput w={100} label="CVV" placeholder="" required />
          </Group>
        </Stack>
      </Paper>
    );
  }

  return (
    <Container size={420} my={40}>
      <Flip h={200} w={400} flipped={flipped} mt={30}>
        <FrontCreditCard />
        <BackCreditCard />
      </Flip>
    </Container>
  );
}
`;

function Demo() {
  const [flipped, setFlipped] = useState(false);

  const theme = useMantineTheme();

  function FrontCreditCard() {
    return (
      <Paper
        onClick={() => setFlipped(true)}
        style={{ cursor: 'pointer' }}
        bg={getGradient({ deg: 180, from: 'blue', to: 'cyan.7' }, theme)}
        w={400}
        h={220}
        withBorder
        shadow="md"
        p={30}
        radius="md"
      >
        <Stack>
          <Title order={3} c="white" style={{ textAlign: 'right' }}>
            The Bank
          </Title>
          <Paper
            w={60}
            h={40}
            radius="sm"
            shadow="none"
            p={10}
            bg={getGradient({ deg: 45, from: 'yellow.1', to: 'yellow.6' }, theme)}
          />
        </Stack>
      </Paper>
    );
  }

  function BackCreditCard() {
    return (
      <Paper
        bg={getGradient({ deg: 180, from: 'gray.1', to: 'indigo.1' }, theme)}
        w={400}
        h={220}
        withBorder
        shadow="md"
        p={30}
        radius="md"
        autoFocus
      >
        <Stack>
          <TextInput
            label="Number"
            type="tel"
            pattern="[0-9\s]{13,19}"
            autoComplete="cc-number"
            maxLength={16}
            placeholder="xxxx xxxx xxxx xxxx"
            required
          />
          <Group>
            <MonthPickerInput
              w={100}
              required
              label="Expire"
              placeholder="MM/YY"
              valueFormat="MM/YY"
            />
            <TextInput w={100} label="CVV" placeholder="" required />
          </Group>
        </Stack>
      </Paper>
    );
  }

  return (
    <Container size={420} my={40}>
      <Flip h={200} w={400} flipped={flipped} mt={30}>
        <FrontCreditCard />
        <BackCreditCard />
      </Flip>
    </Container>
  );
}

export const creditCard: MantineDemo = {
  type: 'code',
  code: [{ fileName: 'Demo.tsx', code, language: 'tsx' }],
  component: Demo,
  centered: true,
  maxWidth: 400,
  minHeight: 300,
  dimmed: true,
};
