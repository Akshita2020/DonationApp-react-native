import React from 'react';
import {View, Text, SafeAreaView, ScrollView} from 'react-native';
import styles from './styles';
import globalStyle from '../../assets/styles/globalStyle';
import Header from '../../components/Header/Header';
import {useSelector} from 'react-redux';
import Button from '../../components/Button/Button';

const Payment = () => {
  const donationItemInformation = useSelector(
    state => state.donations.selectedDonationinformation,
  );
  return (
    <SafeAreaView style={[globalStyle.backgroundWhite, globalStyle.flex]}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.paymentContainer}>
        <Header type={1} title={'Making Donation'} />
        <Text style={styles.donationAmountDescription}>
          You are about to donate {donationItemInformation.price}{' '}
        </Text>
        <View />
      </ScrollView>
      <View style={styles.donateButton}>
        <Button title={'Donate '} />
      </View>
    </SafeAreaView>
  );
};

export default Payment;
