import React from 'react';
import {SafeAreaView, View} from 'react-native';
import globalStyle from '../../assets/styles/globalStyle';
import Header from '../../components/Header/Header';
import Button from '../../components/Button/Button';
const Home = () => {
  return (
    <SafeAreaView style={[globalStyle.backgroundWhite, globalStyle.flex]}>
      <View>
        <Header title={'Azzhari A.'} type={1} />
        <Header title={'Azzhari A.'} type={2} />
        <Header title={'Azzhari A.'} type={3} />
        <Button
          title={'Donate'}
          onPress={() => {
            console.log('you just pressed me');
          }}
        />
        <Button title={'Donate'} isDisabled={true} onPress={() => null} />
      </View>
    </SafeAreaView>
  );
};

export default Home;
