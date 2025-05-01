import React, {useState} from 'react';
import styles from './styles';
import {TextInput, SafeAreaView, ScrollView} from 'react-native';
import BackButton from '../../components/BackButton/BackButton';
import globalStyle from '../../assets/styles/globalStyle';
import Input from '../../components/Input/Input';

const Login = () => {
  const [email, setEmail] = useState('');
  console.log(email);
  return (
    <SafeAreaView style={[globalStyle.backgroundWhite, globalStyle.flex]}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.container}>
        <Input
          keyboardType={'email-address'}
          label={'Email'}
          placeholder={'Enter your email...'}
          onChangeText={value => setEmail(value)}
        />
      </ScrollView>
    </SafeAreaView>
  );
};

export default Login;
