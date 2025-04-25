import React from 'react';
import {Text, View, Image} from 'react-native';
import Badge from '../Badge/Badge';
import styles from './styles';
import Header from '../Header/Header';

interface SingleDontionItemProps {
  uri: string;
  badgeTitle: string;
  donationTitle: string;
  price: number;
}

const SingleDontionItem = ({
  uri,
  badgeTitle,
  donationTitle,
  price,
}: SingleDontionItem) => {
  return (
    <View>
      <View>
        <Badge title={badgeTitle} />
        <Image source={{uri: uri}} style={styles.image} />
      </View>
      <Header title={donationTitle} type={3} color={'#0A043C'} />
      <Header title={'$'+price.toFixed(2)} type={3} color={'#156CF7'} />
    </View>
  );
};

export default SingleDontionItem;
