import React from 'react';
import {Pressable, View, Image} from 'react-native';
import Badge from '../Badge/Badge';
import styles from './styles';
import Header from '../Header/Header';

interface SingleDontionItemProps {
  uri: string;
  badgeTitle: string;
  donationTitle: string;
  price: number;
  onPress: (donationItemId: number) => void;
  donationItemId: number;
}

const SingleDontionItem = ({
  uri,
  badgeTitle,
  donationItemId,
  donationTitle,
  price,
  onPress,
}: SingleDontionItemProps) => {
  return (
    <Pressable
      onPress={() => {
        onPress(donationItemId);
        console.log('Donation item ID:', donationItemId);
      }}>
      <View>
        <View style={styles.badge}>
          <Badge title={badgeTitle} />
        </View>
        <Image source={{uri: uri}} style={styles.image} resizeMode="cover" />
      </View>
      <View style={styles.donationConatiner}>
        <Header
          title={donationTitle}
          type={3}
          color={'#0A043C'}
          numberOfLines={1}
        />
        <View style={styles.price}>
          <Header title={'$' + price.toFixed(2)} type={3} color={'#156CF7'} />
        </View>
      </View>
    </Pressable>
  );
};

export default SingleDontionItem;
