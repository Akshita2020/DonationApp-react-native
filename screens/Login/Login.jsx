import React, {useState} from 'react';
import styles from './styles';
import {Pressable, View, SafeAreaView, ScrollView, Text} from 'react-native';
import {loginUser} from '../../api/users';
import globalStyle from '../../assets/styles/globalStyle';
import Input from '../../components/Input/Input';
import Header from '../../components/Header/Header';
import Button from '../../components/Button/Button';
import {Routes} from '../../navigation/Routes';
import {useDispatch} from 'react-redux';
import {resetToInitialState, login} from '../../redux/reducers/Users';

const Login = ({navigation}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const dispatch = useDispatch();

  dispatch(resetToInitialState());
  console.log(password);
  console.log(email);
  return (
    <SafeAreaView style={[globalStyle.backgroundWhite, globalStyle.flex]}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.container}>
        <View style={globalStyle.marginBottom24}>
          <Header type={1} title={'Welcome '} />
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
        <View style={globalStyle.marginBottom24}>
          <Button
            onPress={async () => {
              let user = await loginUser(email, password);
              if (user.status) {
                dispatch(login(user.data));
                navigation.navigate(Routes.Home);
              } else {
                setError(user.error);
              }
            }}
            title={'Login'}
            isDisabled={email.length < 5 || password.length < 8}
          />
        </View>
        <Pressable
          style={styles.registrationButton}
          onPress={() => navigation.navigate(Routes.Registration)}>
          <Header color={'#156CF7'} type={3} title={"Don't have an account?"} />
        </Pressable>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Login;
