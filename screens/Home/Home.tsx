import React from 'react';
import {SafeAreaView, View} from 'react-native';
import globalStyle from '../../assets/styles/globalStyle';

import Search from '../../components/Search/Search';
import SingleDontionItem from '../../components/SingleDontionItem/SingleDontionItem';
import styles from './styles';
import { horizontalScale } from '../../assets/styles/scaling';
const cactus =
  'https://img.pixers.pics/pho_wat(s3:700/FO/44/24/64/31/700_FO44246431_ab024cd8251bff09ce9ae6ecd05ec4a8.jpg,525,700,cms:2018/10/5bd1b6b8d04b8_220x50-watermark.png,over,305,650,jpg)/stickers-cactus-cartoon-illustration.jpg.jpg';

const Home = () => {
  return (
    <SafeAreaView style={[globalStyle.backgroundWhite, globalStyle.flex]}>
      <View style={{flexDirection:'row', justifyContent:'space-between', paddingHorizontal:horizontalScale(24)}}>
        <SingleDontionItem
          uri={cactus}
          badgeTitle={'Enviorment'}
          donationTitle={'Tree Cactus'}
          price={44}
        />
        <SingleDontionItem
          uri={cactus}
          badgeTitle={'Enviorment'}
          donationTitle={'Tree Cactus'}
          price={44}
        />
      </View>
    </SafeAreaView>
  );
};

export default Home;
