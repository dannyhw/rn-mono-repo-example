import React from 'react';
import {storiesOf} from '@storybook/react-native';
import {Button} from './Button';

storiesOf('button', module).add('mybutton', () => (
  <Button onPress={() => null} text="hello world" />
));
