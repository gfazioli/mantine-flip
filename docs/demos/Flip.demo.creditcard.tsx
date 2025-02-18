import { Flip } from '@gfazioli/mantine-flip';
import {
  Container,
  getGradient,
  Group,
  Paper,
  Stack,
  Text,
  TextInput,
  Title,
  useMantineColorScheme,
  useMantineTheme,
} from '@mantine/core';
import { MonthPickerInput } from '@mantine/dates';
import { useDisclosure, useHotkeys } from '@mantine/hooks';
import { MantineDemo } from '@mantinex/demo';

const code = `
function Demo() {
  const [flipped, { toggle, close, open }] = useDisclosure(false);

  const theme = useMantineTheme();
  const { colorScheme } = useMantineColorScheme();
  useHotkeys([['escape', close]]);


  function FrontCreditCard() {
    return (
      <Paper
        onClick={() => open()}
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
        bg={
          colorScheme === 'light'
            ? getGradient({ deg: 180, from: 'gray.1', to: 'indigo.1' }, theme)
            : getGradient({ deg: 180, from: 'dark.8', to: 'dark.9' }, theme)
        }
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
            autoFocus
            onKeyUp={(event) => {
              if (event.key === 'Escape') {
                event.preventDefault();
                close();
              }
            }}
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
          <Group justify="right">
            <Text fs={'italic'} c="dimmed" size="xs">
              Press ESC to flip back
            </Text>
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
  const [flipped, { toggle, close, open }] = useDisclosure(false);

  const theme = useMantineTheme();
  const { colorScheme } = useMantineColorScheme();
  useHotkeys([['escape', close]]);

  function FrontCreditCard() {
    return (
      <Paper
        onClick={() => open()}
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
        bg={
          colorScheme === 'light'
            ? getGradient({ deg: 180, from: 'gray.1', to: 'indigo.1' }, theme)
            : getGradient({ deg: 180, from: 'dark.8', to: 'dark.9' }, theme)
        }
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
            autoFocus
            onKeyUp={(event) => {
              if (event.key === 'Escape') {
                event.preventDefault();
                close();
              }
            }}
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
          <Group justify="right">
            <Text fs={'italic'} c="dimmed" size="xs">
              Press ESC to flip back
            </Text>
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
  defaultExpanded: false,
  centered: true,
  maxWidth: 400,
  minHeight: 300,
  dimmed: true,
};
