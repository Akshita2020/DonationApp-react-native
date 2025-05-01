import React from 'react';
import {Pressable, View, Image} from 'react-native';
import Badge from '../Badge/Badge';
import Header from '../Header/Header';
import style from './styles';

interface SingleDonationItemProps {
  uri: string;
  badgeTitle: string;
  donationTitle: string;
  price: number;
  onPress: (donationItemId: number) => void;
  donationItemId: number;
}

const SingleDonationItem = (props: SingleDonationItemProps) => {
  return (
    <Pressable
      onPress={() => {
        props.onPress(props.donationItemId);
        console.log('Donation item ID:', props.donationItemId);
      }}>
      <View>
        <View style={style.badge}>
          <Badge title={props.badgeTitle} />
        </View>
        <Image
          source={{uri: props.uri}}
          style={style.image}
          resizeMode="cover"
        />
      </View>
      <View style={style.donationInformation}>
        <Header
          title={props.donationTitle}
          type={3}
          color={'#0A043C'}
          numberOfLines={1}
        />
        <View style={style.price}>
          <Header
            title={'$' + props.price.toFixed(2)}
            type={3}
            color={'#156CF7'}
          />
        </View>
      </View>
    </Pressable>
  );
};

export default SingleDonationItem;
