import React, {useState, useRef} from 'react';
import {Text, Pressable} from 'react-native';
import styles from './styles';
import {horizontalScale} from '../../assets/styles/scaling';

interface TabProps {
  title: string;
  isInactive?: boolean;
  onPress: () => void;
}

const Tab = ({title, isInactive = false, onPress}: TabProps) => {
  const [width, setWidth] = useState(0);
  const textRef = useRef(null);
  console.log(width);
  const paddingHorizontal = 33;
  const tabWidth = {
    width: horizontalScale(paddingHorizontal * 2 + width),
  };
  return (
    <Pressable
      disabled={isInactive}
      style={[styles.tab, isInactive && styles.inActiveTab, tabWidth]}
      onPress={() => onPress()}>
      <Text
        onTextLayout={event => {
          setWidth(event.nativeEvent.lines[0].width);
        }}
        ref={textRef}
        style={[styles.title, isInactive && styles.inactiveTitle]}>
        {' '}
        {title}
      </Text>
    </Pressable>
  );
};
export default Tab;
