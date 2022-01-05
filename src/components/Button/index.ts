import * as React from 'react';
import {createComponent} from '@lit-labs/react';
import {ButtonElement} from './ButtonElement';

export const Button = createComponent(React, 'button-element', ButtonElement, {
  onClickButton: 'onClickButton',
});
