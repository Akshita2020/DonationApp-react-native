import React from 'react';
import {Text, View} from 'react-native';
import styles from './styles';

interface HeaderProps {
  title: string;
  type?: number;
  color?: string;
  placeholder?: string;
}

const Header = ({
  title,
  type = 1,
  color = '#000000',
  placeholder = 'Search',
}: HeaderProps) => {
  const styleToApply = () => {
    switch (type) {
      case 1:
        return styles.title1;
      case 2:
        return styles.title2;
      case 3:
        return styles.title3;
    }
  };
  return (
    <View style={styles.titleContainer}>
      {/* <Text style={styles.subtitle}>Hello,</Text> */}
      <Text style={[styleToApply(), color && {color}]}>{title}</Text>
    </View>
  );
};

export default Header;
