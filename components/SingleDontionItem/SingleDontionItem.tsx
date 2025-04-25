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
}: SingleDontionItemProps) => {
  return (
    <View>
      <View>
        <View style={styles.badge}>
          <Badge title={badgeTitle} />
        </View>
        <Image source={{uri: uri}} style={styles.image} resizeMode='contain' />
      </View>
      <View style={styles.donationConatiner}>
        <Header title={donationTitle} type={3} color={'#0A043C'} />
        <View style={styles.price}>
          <Header title={'$' + price.toFixed(2)} type={3} color={'#156CF7'} />
        </View>
      </View>
    </View>
  );
};

export default SingleDontionItem;
