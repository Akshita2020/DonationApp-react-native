import React, {useState} from 'react';
import {Text, TextInput, View, KeyboardTypeOptions} from 'react-native';
import styles from './styles';

interface InputProps {
  label: string;
  secureTextEntry?: boolean;
  keyboardType?: KeyboardTypeOptions;
  placeholder?: string;
  onChangeText?: (text: string) => void;
}

const Input = ({
  label,
  secureTextEntry = false,
  keyboardType = 'default',
  placeholder = '',
  onChangeText,
}: InputProps) => {
  const [value, setValue] = useState<string>('');

  return (
    <View style={styles.container}>
      <Text style={styles.label}>{label}</Text>
      <TextInput
        value={value}
        onChangeText={val => {
          setValue(val);
          onChangeText && onChangeText(val);
        }}
        style={styles.input}
        placeholder={placeholder}
        secureTextEntry={secureTextEntry}
        keyboardType={keyboardType}
      />
    </View>
  );
};

export default Input;
