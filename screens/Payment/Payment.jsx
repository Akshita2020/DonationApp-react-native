import React from 'react';
import {View, Text, SafeAreaView, ScrollView, Alert} from 'react-native';
import styles from './styles';
import globalStyle from '../../assets/styles/globalStyle';
import Header from '../../components/Header/Header';
import {useSelector} from 'react-redux';
import Button from '../../components/Button/Button';
import {
  CardForm,
  StripeProvider,
  useConfirmPayment,
} from '@stripe/stripe-react-native';
import {STRIPE_PUBLISHABLE_KEY} from '@env';

const Payment = () => {
  const donationItemInformation = useSelector(
    state => state.donations.selectedDonationinformation,
  );
  const user = useSelector(state => state.user);

  const [isReady, setIsReady] = React.useState(false);
  const {confirmPayment, loading} = useConfirmPayment();

  const fetchPaymentIntentClientSecret = async () => {
    const response = await fetch(
      'http://localhost:3000/create-payment-intent',
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email: user.email,
          amount: donationItemInformation.price * 100,
          currency: 'usd',
        }),
      },
    );
    const {clientSecret} = await response.json();
    console.log('Client secret:', clientSecret);
    return clientSecret;
  };

  const handlePayment = async () => {
    const clientSecret = await fetchPaymentIntentClientSecret();
    const {error, PaymentIntent} = await confirmPayment(clientSecret, {
      type: 'Card',
      billingDetails: {
        email: user.email,
        name: user.displayName,
      },
    });
    if (error) {
      Alert.alert('Payment failed', error.localizedMessage);
    } else if (PaymentIntent) {
      Alert.alert('Successful', 'Payment successful');
    }

    return (
      <SafeAreaView style={[globalStyle.backgroundWhite, globalStyle.flex]}>
        <ScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={styles.paymentContainer}>
          <Header type={1} title={'Making Donation'} />
          <Text style={styles.donationAmountDescription}>
            You are about to donate {donationItemInformation.price}{' '}
          </Text>
          <View>
            <StripeProvider publishableKey={STRIPE_PUBLISHABLE_KEY}>
              <CardForm
                style={styles.CardForm}
                onFormComplete={() => {
                  setIsReady(true);
                }}
              />
            </StripeProvider>
          </View>
        </ScrollView>
        <View style={styles.donateButton}>
          <Button
            title={'Donate '}
            isDisabled={!isReady || loading}
            onPress={async () => await handlePayment()}
          />
        </View>
      </SafeAreaView>
    );
  };
};
export default Payment;
