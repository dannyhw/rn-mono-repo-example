import React, {FunctionComponent} from 'react';
import {
  TouchableOpacity,
  StyleSheet,
  StyleProp,
  ViewStyle,
  Text,
} from 'react-native';

const styles = StyleSheet.create({
  button: {
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 4,
  },
});

interface ButtonProps {
  onPress: () => void;
  style?: StyleProp<ViewStyle>;
  text: string;
}

export const Button: FunctionComponent<ButtonProps> = ({
  onPress,
  style,
  text,
}) => {
  return (
    <TouchableOpacity onPress={onPress} style={[styles.button, style]}>
      <Text>{text}</Text>
    </TouchableOpacity>
  );
};
