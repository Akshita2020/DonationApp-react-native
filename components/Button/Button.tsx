import React from 'react';
import {Text, Pressable} from 'react-native';
import styles from './styles';

interface ButtonProps {
  title: string;
  isDisabled?: boolean;
  onPress: () => void;
}

const Button = ({title, isDisabled = false, onPress}: ButtonProps) => {
  return (
    <Pressable
      disabled={isDisabled}
      style={[styles.button, isDisabled && styles.disabled]}
      onPress={() => onPress()}>
      <Text style={styles.title}> {title}</Text>
    </Pressable>
  );
};
export default Button;
