import React from 'react';
import {storiesOf} from '@storybook/react-native';
import {Button} from './Button';
import {action} from '@storybook/addon-actions';
import {text} from '@storybook/addon-knobs';
storiesOf('button', module).add('mybutton', () => (
  <Button onPress={action('pressed')} text={text('button text', 'Hello')} />
));
