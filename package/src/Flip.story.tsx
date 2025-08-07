import React from 'react';
import {
  Badge,
  Button,
  Card,
  Flex,
  Image,
  Paper,
  SimpleGrid,
  Stack,
  Text,
  Title,
} from '@mantine/core';
import { Flip } from './Flip';

export default {
  title: 'Components/Flip',
};

export function Usage() {
  return (
    <Flip w={200} h={200} duration={2} directionFlipIn="positive">
      <Paper withBorder p={16} w={200} h={200} bg="violet">
        First
        <Flip.Target>
          <Button>Flip</Button>
        </Flip.Target>
      </Paper>
      <Paper withBorder p={16} w={400} h={400} bg="red">
        Second
        <Flip.Target>
          <Button>Back</Button>
        </Flip.Target>
      </Paper>
    </Flip>
  );
}

export function CorrectGrid() {
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
  return (
    <SimpleGrid cols={3} verticalSpacing="lg">
      {testData.map((item) => (
        <Card key={item.title} shadow="sm" radius="md" withBorder>
          <Card.Section>
            <Image src={item.image} alt={item.title} />
          </Card.Section>
          <Card.Section className="p-4">
            <Text>{item.title}</Text>
            <Text>{item.description}</Text>
          </Card.Section>
        </Card>
      ))}
    </SimpleGrid>
  );
}

export function WithinGrid() {
  const WIDGET_HEIGHT = 350;
  const IMAGE_HEIGHT = 200;

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
  return (
    <SimpleGrid cols={3} verticalSpacing="lg">
      {testData.map((item) => (
        <Flip key={item.title} h={WIDGET_HEIGHT}>
          <Card h={WIDGET_HEIGHT} shadow="sm" radius="md" withBorder>
            <Card.Section>
              <Image h={IMAGE_HEIGHT} src={item.image} alt={item.title} />
            </Card.Section>

            <Stack mt={8}>
              <Title>{item.title}</Title>
              <Text>{item.description}</Text>
            </Stack>
            <Flex justify="right">
              <Flip.Target>
                <Button>More info</Button>
              </Flip.Target>
            </Flex>
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
                  <Button>Back</Button>
                </Flip.Target>
              </Flex>
            </Stack>
          </Card>
        </Flip>
      ))}
    </SimpleGrid>
  );
}
