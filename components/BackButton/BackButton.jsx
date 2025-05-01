import React from 'react';
import {Pressable} from 'react-native';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faArrowLeft} from '@fortawesome/free-solid-svg-icons';
import styles from './styles';

const BackButton = ({onPress}) => {
  return (
    <Pressable onPress={() => onPress()}  style={styles.container}>
      <FontAwesomeIcon icon={faArrowLeft} size={24} color="black" />
    </Pressable>
  );
};
export default BackButton;
