# Mantine Flip Component

https://github.com/user-attachments/assets/cc968450-9d8c-4b16-be58-a6766597742e

---

<div align="center">

  [![NPM version](https://img.shields.io/npm/v/%40gfazioli%2Fmantine-flip?style=for-the-badge)](https://www.npmjs.com/package/@gfazioli/mantine-flip)
  [![NPM Downloads](https://img.shields.io/npm/dm/%40gfazioli%2Fmantine-flip?style=for-the-badge)](https://www.npmjs.com/package/@gfazioli/mantine-flip)
  [![NPM Downloads](https://img.shields.io/npm/dy/%40gfazioli%2Fmantine-flip?style=for-the-badge&label=%20&color=f90)](https://www.npmjs.com/package/@gfazioli/mantine-flip)
  ![NPM License](https://img.shields.io/npm/l/%40gfazioli%2Fmantine-flip?style=for-the-badge)

</div>

## Overview

This component is created on top of the [Mantine](https://mantine.dev/) library.

[![Mantine UI Library](https://img.shields.io/badge/-MANTINE_UI_LIBRARY-blue?style=for-the-badge&labelColor=black&logo=mantine
)](https://mantine.dev/)

It allows for easy management of two separate views, such as in the cases of a registration form and a login form.
Essentially, when switching between views, the component will handle the flip animation.


[![Video](https://img.shields.io/badge/-Watch_the_Video-blue?style=for-the-badge&labelColor=black&logo=youtube
)](https://youtu.be/RzRUb3IDcDw)
[![Demo and Documentation](https://img.shields.io/badge/-Demo_%26_Documentation-blue?style=for-the-badge&labelColor=black&logo=typescript
)](https://gfazioli.github.io/mantine-flip/)
[![Mantine Extensions HUB](https://img.shields.io/badge/-Mantine_Extensions_Hub-blue?style=for-the-badge&labelColor=blue
)](https://mantine-extensions.vercel.app/)

👉 You can find more components on the [Mantine Extensions Hub](https://mantine-extensions.vercel.app/) library.


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

<div align="center">
  
[![Star History Chart](https://api.star-history.com/svg?repos=gfazioli/mantine-flip&type=Timeline)](https://www.star-history.com/#gfazioli/mantine-flip&Timeline)

</div>
