import { Flip } from '@gfazioli/mantine-flip';
import { IconBrandGithub, IconBrandLinkedin, IconBrandTwitter, IconX } from '@tabler/icons-react';
import {
  ActionIcon,
  Avatar,
  Badge,
  Button,
  Card,
  Center,
  Group,
  Text,
  useMantineTheme,
} from '@mantine/core';
import { MantineDemo } from '@mantinex/demo';

const code = `
import { Flip } from '@gfazioli/mantine-flip';
import { Avatar, Badge, Button, Card, Center, Group, Text, ActionIcon, useMantineTheme } from '@mantine/core';
import { IconBrandGithub, IconBrandTwitter, IconBrandLinkedin, IconX } from '@tabler/icons-react';

function Demo() {
  const theme = useMantineTheme();

  return (
    <Center>
      <Flip w={300} h={400}>
        {/* Front Face */}
        <Card shadow="sm" padding="lg" radius="md" withBorder h="100%">
          <Card.Section>
            <div
              style={{
                height: 100,
                backgroundColor: theme.colors.blue[6],
              }}
            />
          </Card.Section>

          <Avatar
            src="https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/avatars/avatar-1.png"
            size={80}
            radius={80}
            mx="auto"
            mt={-30}
            style={{ border: \`2px solid \${theme.white}\` }}
          />

          <Text ta="center" fz="lg" fw={500} mt="sm">
            Jane Fingerlicker
          </Text>
          <Text ta="center" c="dimmed" fz="sm">
            Fullstack Engineer
          </Text>

          <Group mt="md" justify="center" gap={30}>
            <div style={{ textAlign: 'center' }}>
              <Text ta="center" fw={500} fz="lg">
                34K
              </Text>
              <Text ta="center" fz="xs" c="dimmed">
                Followers
              </Text>
            </div>
            <div style={{ textAlign: 'center' }}>
              <Text ta="center" fw={500} fz="lg">
                187
              </Text>
              <Text ta="center" fz="xs" c="dimmed">
                Following
              </Text>
            </div>
            <div style={{ textAlign: 'center' }}>
              <Text ta="center" fw={500} fz="lg">
                1.9K
              </Text>
              <Text ta="center" fz="xs" c="dimmed">
                Posts
              </Text>
            </div>
          </Group>

          <Flip.Target>
            <Button fullWidth radius="md" mt="xl" size="md" variant="default">
              View Profile
            </Button>
          </Flip.Target>
        </Card>

        {/* Back Face */}
        <Card shadow="sm" padding="lg" radius="md" withBorder h="100%" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
            <div>
                <Group justify="space-between" mb="xs">
                    <Text fw={500}>Contact Info</Text>
                    <Flip.Target>
                        <ActionIcon variant="subtle" color="gray">
                            <IconX size={16} />
                        </ActionIcon>
                    </Flip.Target>
                </Group>
                
                <Text size="sm" c="dimmed" mb="md">
                    jane@fingerlicker.dev
                </Text>

                <Text fw={500} mb="xs">Socials</Text>
                <Group gap="md">
                    <ActionIcon size="lg" variant="default" radius="xl">
                        <IconBrandGithub size={18} />
                    </ActionIcon>
                    <ActionIcon size="lg" variant="default" radius="xl">
                        <IconBrandTwitter size={18} />
                    </ActionIcon>
                    <ActionIcon size="lg" variant="default" radius="xl">
                        <IconBrandLinkedin size={18} />
                    </ActionIcon>
                </Group>
            </div>

            <Group gap="xs" mt="xl">
                <Badge color="pink" variant="light">React</Badge>
                <Badge color="blue" variant="light">TypeScript</Badge>
                <Badge color="cyan" variant="light">Mantine</Badge>
            </Group>
            
            <Flip.Target>
                <Button fullWidth mt="md">
                    Back to Card
                </Button>
            </Flip.Target>
        </Card>
      </Flip>
    </Center>
  );
}
`;

function Demo() {
  const theme = useMantineTheme();

  return (
    <Center>
      <Flip w={300} h={400}>
        {/* Front Face */}
        <Card shadow="sm" padding="lg" radius="md" withBorder h="100%">
          <Card.Section>
            <div
              style={{
                height: 100,
                backgroundColor: theme.colors.blue[6],
              }}
            />
          </Card.Section>

          <Avatar
            src="https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/avatars/avatar-1.png"
            size={80}
            radius={80}
            mx="auto"
            mt={-30}
            style={{ border: `2px solid ${theme.white}` }}
          />

          <Text ta="center" fz="lg" fw={500} mt="sm">
            Jane Fingerlicker
          </Text>
          <Text ta="center" c="dimmed" fz="sm">
            Fullstack Engineer
          </Text>

          <Group mt="md" justify="center" gap={30}>
            <div style={{ textAlign: 'center' }}>
              <Text ta="center" fw={500} fz="lg">
                34K
              </Text>
              <Text ta="center" fz="xs" c="dimmed">
                Followers
              </Text>
            </div>
            <div style={{ textAlign: 'center' }}>
              <Text ta="center" fw={500} fz="lg">
                187
              </Text>
              <Text ta="center" fz="xs" c="dimmed">
                Following
              </Text>
            </div>
            <div style={{ textAlign: 'center' }}>
              <Text ta="center" fw={500} fz="lg">
                1.9K
              </Text>
              <Text ta="center" fz="xs" c="dimmed">
                Posts
              </Text>
            </div>
          </Group>

          <Flip.Target>
            <Button fullWidth radius="md" mt="xl" size="md" variant="default">
              View Profile
            </Button>
          </Flip.Target>
        </Card>

        {/* Back Face */}
        <Card
          shadow="sm"
          padding="lg"
          radius="md"
          withBorder
          h="100%"
          style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}
        >
          <div>
            <Group justify="space-between" mb="xs">
              <Text fw={500}>Contact Info</Text>
              <Flip.Target>
                <ActionIcon variant="subtle" color="gray">
                  <IconX size={16} />
                </ActionIcon>
              </Flip.Target>
            </Group>

            <Text size="sm" c="dimmed" mb="md">
              jane@fingerlicker.dev
            </Text>

            <Text fw={500} mb="xs">
              Socials
            </Text>
            <Group gap="md">
              <ActionIcon size="lg" variant="default" radius="xl">
                <IconBrandGithub size={18} />
              </ActionIcon>
              <ActionIcon size="lg" variant="default" radius="xl">
                <IconBrandTwitter size={18} />
              </ActionIcon>
              <ActionIcon size="lg" variant="default" radius="xl">
                <IconBrandLinkedin size={18} />
              </ActionIcon>
            </Group>
          </div>

          <Group gap="xs" mt="xl">
            <Badge color="pink" variant="light">
              React
            </Badge>
            <Badge color="blue" variant="light">
              TypeScript
            </Badge>
            <Badge color="cyan" variant="light">
              Mantine
            </Badge>
          </Group>

          <Flip.Target>
            <Button fullWidth mt="md">
              Back to Card
            </Button>
          </Flip.Target>
        </Card>
      </Flip>
    </Center>
  );
}

export const profile: MantineDemo = {
  type: 'code',
  code: [{ fileName: 'Demo.tsx', code, language: 'tsx' }],
  component: Demo,
  centered: true,
  maxWidth: 400,
  dimmed: true,
  defaultExpanded: false,
};
