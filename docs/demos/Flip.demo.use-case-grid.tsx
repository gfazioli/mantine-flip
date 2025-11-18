import { Flip } from '@gfazioli/mantine-flip';
import { IconArrowRight } from '@tabler/icons-react';
import { Badge, Button, Card, Flex, Image, SimpleGrid, Stack, Text, Title } from '@mantine/core';
import { MantineDemo } from '@mantinex/demo';

const code = `
import { Flip } from '@gfazioli/mantine-flip';
import { Badge, Button, Card, Flex, Image, SimpleGrid, Stack, Text, Title } from '@mantine/core';

import testData from './data';

function Demo() {
  const WIDGET_HEIGHT = 360;
  const IMAGE_HEIGHT = 200;

  return (
    <SimpleGrid cols={3} verticalSpacing="lg">
      {testData.map((item) => (
        <Flip key={item.title} h={WIDGET_HEIGHT} directionFlipIn="positive">
          <Card h={WIDGET_HEIGHT} shadow="sm" radius="md" withBorder>
            <Card.Section>
              <Image h={IMAGE_HEIGHT} src={item.image} alt={item.title} />
            </Card.Section>

            <Stack mt={8}>
              <Title>{item.title}</Title>
              <Text>{item.description}</Text>
              <Flex justify="right">
                <Flip.Target>
                  <Button>More info</Button>
                </Flip.Target>
              </Flex>
            </Stack>
          </Card>
          <Card h={WIDGET_HEIGHT} shadow="sm" radius="md" withBorder>
            <Stack mt={8} justify="space-between" h="100%">
              <Stack>
                <Title>{item.title}</Title>
                <Text>{item.description}</Text>
                <Text>Additional information about {item.title}.</Text>
                <Badge color="green" variant="light">
                  Category
                </Badge>
              </Stack>

              <Flex justify="right">
                <Flip.Target>
                  <Button size="xs" rightSection={<IconArrowRight />} variant="outline">
                    Back
                  </Button>
                </Flip.Target>
              </Flex>
            </Stack>
          </Card>
        </Flip>
      ))}
    </SimpleGrid>
  );
}
`;

const data = `
export default [
  {
    title: 'Test 1',
    description: 'Test 1 description',
    image: 'https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/images/bg-1.png',
  },
  {
    title: 'Test 2',
    description: 'Test 2 description',
    image: 'https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/images/bg-2.png',
  },
  {
    title: 'Test 3',
    description: 'Test 3 description',
    image: 'https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/images/bg-3.png',
  },
  {
    title: 'Test 4',
    description: 'Test 4 description',
    image: 'https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/images/bg-4.png',
  },
  {
    title: 'Test 5',
    description: 'Test 5 description',
    image: 'https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/images/bg-5.png',
  },
  {
    title: 'Test 6',
    description: 'Test 6 description',
    image: 'https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/images/bg-6.png',
  },
  {
    title: 'Test 7',
    description: 'Test 7 description',
    image: 'https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/images/bg-7.png',
  },
  {
    title: 'Test 8',
    description: 'Test 8 description',
    image: 'https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/images/bg-8.png',
  },
  {
    title: 'Test 9',
    description: 'Test 9 description',
    image: 'https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/images/bg-9.png',
  },
];
`;

const testData = [
  {
    title: 'Test 1',
    description: 'Test 1 description',
    image: 'https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/images/bg-1.png',
  },
  {
    title: 'Test 2',
    description: 'Test 2 description',
    image: 'https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/images/bg-2.png',
  },
  {
    title: 'Test 3',
    description: 'Test 3 description',
    image: 'https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/images/bg-3.png',
  },
  {
    title: 'Test 4',
    description: 'Test 4 description',
    image: 'https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/images/bg-4.png',
  },
  {
    title: 'Test 5',
    description: 'Test 5 description',
    image: 'https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/images/bg-5.png',
  },
  {
    title: 'Test 6',
    description: 'Test 6 description',
    image: 'https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/images/bg-6.png',
  },
  {
    title: 'Test 7',
    description: 'Test 7 description',
    image: 'https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/images/bg-7.png',
  },
  {
    title: 'Test 8',
    description: 'Test 8 description',
    image: 'https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/images/bg-8.png',
  },
  {
    title: 'Test 9',
    description: 'Test 9 description',
    image: 'https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/images/bg-9.png',
  },
];

function Demo() {
  const WIDGET_HEIGHT = 360;
  const IMAGE_HEIGHT = 200;

  return (
    <SimpleGrid cols={3} verticalSpacing="lg">
      {testData.map((item) => (
        <Flip key={item.title} h={WIDGET_HEIGHT} directionFlipIn="positive">
          <Card h={WIDGET_HEIGHT} shadow="sm" radius="md" withBorder>
            <Card.Section>
              <Image h={IMAGE_HEIGHT} src={item.image} alt={item.title} />
            </Card.Section>

            <Stack mt={8}>
              <Title>{item.title}</Title>
              <Text>{item.description}</Text>
              <Flex justify="right">
                <Flip.Target>
                  <Button>More info</Button>
                </Flip.Target>
              </Flex>
            </Stack>
          </Card>
          <Card h={WIDGET_HEIGHT} shadow="sm" radius="md" withBorder>
            <Stack mt={8} justify="space-between" h="100%">
              <Stack>
                <Title>{item.title}</Title>
                <Text>{item.description}</Text>
                <Text>Additional information about {item.title}.</Text>
                <Badge color="green" variant="light">
                  Category
                </Badge>
              </Stack>

              <Flex justify="right">
                <Flip.Target>
                  <Button size="xs" rightSection={<IconArrowRight />} variant="outline">
                    Back
                  </Button>
                </Flip.Target>
              </Flex>
            </Stack>
          </Card>
        </Flip>
      ))}
    </SimpleGrid>
  );
}

export const useCaseGrid: MantineDemo = {
  type: 'code',
  code: [
    {
      code,
      fileName: 'Demo.tsx',
      language: 'tsx',
    },
    {
      code: data,
      fileName: 'data.ts',
      language: 'js',
    },
  ],
  component: Demo,
  defaultExpanded: false,
};
