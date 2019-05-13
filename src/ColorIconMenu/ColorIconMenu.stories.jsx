import React from 'react';

import { storiesOf } from '@storybook/react';

import { ColorIconMenu } from "..";
import { useMenu } from "@cytoai/hooks";

const { anchorEl, openedMenu, openMenu, closeMenu } = useMenu();

const color = '';

const onColorChange = () => {};

storiesOf('ColorIconMenu', module)
  .add('example', () => (
    <ColorIconMenu
      anchorEl={anchorEl}
      closeMenu={closeMenu}
      color={color}
      onColorChange={onColorChange}
      openedMenu={openedMenu}
      openMenu={openMenu}
    />
  ));