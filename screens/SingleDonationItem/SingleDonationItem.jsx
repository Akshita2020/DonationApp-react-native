import React from 'react';
import styles from './styles';
import {View, Text} from 'react-native';
import {useSelector} from 'react-redux';

const SingleDonationItem = () => {
  const donationItemInformation = useSelector(
    state => state.donations.selectedDonationinformation,
  );
  console.log(
    'SingleDonationItem -> donationItemInformation',
    donationItemInformation,
  );

  return (
    <View style={styles.container}>
      <Text>SingleDonationItem</Text>
    </View>
  );
};

export default SingleDonationItem;
