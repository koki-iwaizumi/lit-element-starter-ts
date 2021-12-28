import * as React from 'react';
import {createComponent} from '@lit-labs/react';
import {TextElement} from './TextElement';

export const Text = createComponent(React, 'text-element', TextElement);
