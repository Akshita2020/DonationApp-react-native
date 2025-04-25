import React from 'react';
import {SafeAreaView, View} from 'react-native';
import globalStyle from '../../assets/styles/globalStyle';
import Header from '../../components/Header/Header';
import Button from '../../components/Button/Button';
import Tab from '../../components/Tab/Tab';
import Badge from '../../components/Badge/Badge';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faSearch} from '@fortawesome/free-solid-svg-icons';



const Home = () => {
  return (
    <SafeAreaView style={[globalStyle.backgroundWhite, globalStyle.flex]}>
      <View>
        <Header title={'Azzhari A.'} type={1} />
        <Tab title={'Highlight'} />
        <Badge title={'Enviorment'} />
        <FontAwesomeIcon icon={faSearch}/>
      </View>
    </SafeAreaView>
  );
};

export default Home;
