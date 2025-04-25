import React, {useState, useRef} from 'react';
import {Text, Pressable} from 'react-native';
import styles from './styles';
import {horizontalScale} from '../../assets/styles/scaling';


interface BadgeProps {
  title: string;
  onPress?: () => void;
}

const Badge = ({title}: BadgeProps) => {
  const [width, setWidth] = useState(0);
  const textRef = useRef(null);
  console.log(width);
  const paddingHorizontal = 10;
  const tabWidth = {
    width: horizontalScale(paddingHorizontal * 2 + width),
  };
  return (
    <Pressable
      style={[styles.badge, tabWidth]}
      // onPress={() => onPress(() => onPress)}
    >
      <Text
        onTextLayout={event => {
          setWidth(event.nativeEvent.lines[0].width);
        }}
        ref={textRef}
        style={[styles.title]}>
        {title}
      </Text>
    </Pressable>
  );
};
export default Badge;
