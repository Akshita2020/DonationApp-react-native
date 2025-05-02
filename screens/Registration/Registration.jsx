import React, {useState} from 'react';
import styles from './styles';
import {Pressable, View, SafeAreaView, ScrollView, Text} from 'react-native';
import BackButton from '../../components/BackButton/BackButton';
import globalStyle from '../../assets/styles/globalStyle';
import Input from '../../components/Input/Input';
import Header from '../../components/Header/Header';
import Button from '../../components/Button/Button';
import {createUser} from '../../api/users';

const Registration = ({navigation}) => {
  const [fullName, setfullName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  console.log(password);
  console.log(email);
  return (
    <SafeAreaView style={[globalStyle.backgroundWhite, globalStyle.flex]}>
      <View style={styles.backButton}>
        <BackButton onPress={() => navigation.goBack()} />
      </View>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.container}>
        <View style={globalStyle.marginBottom24}>
          <Header type={1} title={'Hello and Welcome! '} />
        </View>
        <View style={globalStyle.marginBottom24}>
          <Input
            keyboardType={'email-address'}
            label={'First & Last Name'}
            placeholder={'Enter your full name...'}
            onChangeText={value => setfullName(value)}
          />
        </View>
        <View style={globalStyle.marginBottom24}>
          <Input
            keyboardType={'email-address'}
            label={'Email'}
            placeholder={'Enter your email...'}
            onChangeText={value => setEmail(value)}
          />
        </View>
        <View style={globalStyle.marginBottom24}>
          <Input
            secureTextEntry={true}
            label={'Password'}
            placeholder={'******'}
            onChangeText={value => setPassword(value)}
          />
        </View>
        {error.length > 0 && <Text style={styles.error}>{error}</Text>}
        {success.length > 0 && <Text style={styles.success}>{success}</Text>}

        <View style={globalStyle.marginBottom24}>
          <Button
            isDisabled={
              fullName.length <= 2 || email.length <= 5 || password.length <= 8
            }
            title={'Registration'}
            onPress={async () => {
              setError('');
              setSuccess('');
              const user = await createUser(fullName, email, password);
              if (user.error) {
                setError(user.message);
              } else {
                setSuccess('You have successfully registered');
                setTimeout(() => {
                  navigation.goBack();
                }, 3000);
              }
            }}
          />
        </View>
        <Pressable style={styles.registrationButton} />
      </ScrollView>
    </SafeAreaView>
  );
};

export default Registration;
