import React from 'react';
import styles from './styles';
import {Text, SafeAreaView, ScrollView, View, Image} from 'react-native';
import BackButton from '../../components/BackButton/BackButton';
import {useSelector} from 'react-redux';
import globalStyle from '../../assets/styles/globalStyle';
import Header from '../../components/Header/Header';
import Badge from '../../components/Badge/Badge';
import Button from '../../components/Button/Button';
import PropTypes from 'prop-types';

const SingleDonationItem = ({navigation, route}) => {
  const donationItemInformation = useSelector(
    state => state.donations.selectedDonationinformation,
  );
  const categoryInformation = route.params.categoryInformation;

  console.log(
    'SingleDonationItem -> donationItemInformation',
    donationItemInformation,
  );
  console.log('route>>>>', route);

  return (
    <SafeAreaView style={[globalStyle.backgroundWhite, globalStyle.flex]}>
      <ScrollView showsVerticalScrollIndicator={false} style={styles.container}>
        <BackButton onPress={() => navigation.goBack()} />
        <Image
          source={{uri: donationItemInformation.image}}
          style={styles.image}
        />
        <View style={styles.badge}>
          <Badge title={categoryInformation.name} />
        </View>
        <Header type={1} title={donationItemInformation.name} />
        <Text style={styles.description}>
          {donationItemInformation.description}
          {donationItemInformation.description}
          {donationItemInformation.description}
          {donationItemInformation.description}
          {donationItemInformation.description}
          {donationItemInformation.description}
          {donationItemInformation.description}
        </Text>
      </ScrollView>
      <View style={styles.button}>
        <Button title={'Donate'} />
      </View>
    </SafeAreaView>
  );
};
SingleDonationItem.propTypes = {
  route: PropTypes.shape({
    params: PropTypes.shape({
      categoryInformation: PropTypes.shape({
        name: PropTypes.string.isRequired,
      }).isRequired,
    }).isRequired,
  }).isRequired,
  navigation: PropTypes.shape({
    goBack: PropTypes.func.isRequired,
  }).isRequired,
};

export default SingleDonationItem;
