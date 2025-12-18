# Mantine Flip Component

<img width="2752" height="1536" alt="Mantine Flip" src="https://github.com/user-attachments/assets/81a00eee-c1f2-40f1-8ad4-4357619cf855" />

<div align="center">

  [![NPM version](https://img.shields.io/npm/v/%40gfazioli%2Fmantine-flip?style=for-the-badge)](https://www.npmjs.com/package/@gfazioli/mantine-flip)
  [![NPM Downloads](https://img.shields.io/npm/dm/%40gfazioli%2Fmantine-flip?style=for-the-badge)](https://www.npmjs.com/package/@gfazioli/mantine-flip)
  [![NPM Downloads](https://img.shields.io/npm/dy/%40gfazioli%2Fmantine-flip?style=for-the-badge&label=%20&color=f90)](https://www.npmjs.com/package/@gfazioli/mantine-flip)
  ![NPM License](https://img.shields.io/npm/l/%40gfazioli%2Fmantine-flip?style=for-the-badge)

</div>

## Overview

This component is created on top of the [Mantine](https://mantine.dev/) library.

[Mantine Flip](https://gfazioli.github.io/mantine-flip/) is a two-face container that animates between a front and a back view, ideal for compact UIs that need progressive disclosure (e.g., editing panels, settings, sign-in/sign-up toggles, or profile details). It supports both uncontrolled usage with Flip.Target to wire any element as a click trigger, and controlled usage via flipped/defaultFlipped using React state for full synchronization with your app logic. The component enforces exactly two children, accepts size constraints (w/h), and offers transition customization such as vertical flipping and distinct rotation directions for flip-in and flip-out. Styling hooks (classNames/Styles API) let you target inner parts for design refinement, while examples demonstrate practical patterns like credit-card editing, modal-like settings panes, and multi-target triggers within a single face.

> [!note]
>
> → [Demo and Documentation](https://gfazioli.github.io/mantine-flip/) → [Youtube Video](https://www.youtube.com/playlist?list=PL85tTROKkZrWyqCcmNCdWajpx05-cTal4) → [More Mantine Components](https://mantine-extensions.vercel.app/)

## Installation

```sh
npm install @gfazioli/mantine-flip
```
or 

```sh
yarn add @gfazioli/mantine-flip
```

After installation import package styles at the root of your application:

```tsx
import '@gfazioli/mantine-flip/styles.css';
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

---

https://github.com/user-attachments/assets/cc968450-9d8c-4b16-be58-a6766597742e

---
  
[![Star History Chart](https://api.star-history.com/svg?repos=gfazioli/mantine-flip&type=Timeline)](https://www.star-history.com/#gfazioli/mantine-flip&Timeline)

