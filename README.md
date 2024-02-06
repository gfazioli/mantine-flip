# Mantine Flip Component

![Flip](https://github.com/gfazioli/mantine-flip/assets/432181/cf1917a3-e7eb-4ecb-a525-85ff933c601d)

This component is created on top of the [Mantine](https://mantine.dev/) library.
It allows for easy management of two separate views, such as in the cases of a registration form and a login form.
Essentially, when switching between views, the component will handle the flip animation.

## Installation

```sh
npm install @gfazioli/mantine-flip
```
or 

```sh
yarn add @gfazioli/mantine-flip
```

## Usage

```tsx
import { Flip } from '@gfazioli/mantine-flip';

function Demo() {
  return (
    <Flip h={200} w={200}>

        <Paper radius="md" withBorder p="lg" shadow="md">
          <h3>Front Card</h3>
          <Flip.Target>
            <Button>Flip Back</Button>
          </Flip.Target>
        </Paper>

        <Paper radius="md" withBorder p="lg" shadow="md">
          <h3>Back Card</h3>
          <Flip.Target>
            <Button>Flip Front</Button>
          </Flip.Target>
        </Paper>

    </Flip>
  );
}
```

As you can see, the `Flip` component wraps two children, which are the two views that you want to flip between.
The `Flip.Target` component is used to define the trigger for the flip animation. It can be any component, such as a button, or a link, or even a div.

## Props

| Prop | Type | Default | Description |
| ---- | ---- | ------- | ----------- |
| perspective | string | 1000px | The perspective property defines how far the object is away from the user. |
| duration | number | .8 | The duration in seconds of the flip animation. |
| easing | string | ease-in-out | The easing function to be used for the flip animation. |
| flipped | boolean | false | The initial state of the controlled Flip component. |
| defaultFlipped | boolean | false | The default state of the uncontrolled flip component. |
| direction | 'horizontal' or 'vertical' | 'horizontal' | The direction of the flip animation. |
| directionFlipIn | 'negative' or 'positive' | 'negative' | The direction of the flip animation when flipping in. |
| directionFlipOut | 'negative' or 'positive' | 'positive' | The direction of the flip animation when flipping out. |
| onChange | (flipped: boolean) => void | - | Callback to be called when the flip state changes. |
| onBack | () => void | - | Callback to be called when the flip state changes to false. |
| onFront | () => void | - | Callback to be called when the flip state changes to true. |

