import React from 'react';
import {SafeAreaView, Pressable, Text} from 'react-native';
import globalStyle from '../../assets/styles/globalStyle';
import Header from '../../components/Header/Header';
import {useSelector, useDispatch} from 'react-redux';
import {updateFirstName} from '../../redux/reducers/Users';

const Home = () => {
  const user = useSelector(state => state.user);
  const dispatch = useDispatch();
  console.log(user);
  return (
    <SafeAreaView style={[globalStyle.backgroundWhite, globalStyle.flex]}>
      <Header title={user.firstName + ' ' + user.lastName} />
      <Pressable onPress={() => dispatch(updateFirstName('Akshu'))}>
        {' '}
        <Text> Press me to change firstName </Text>
      </Pressable>
    </SafeAreaView>
  );
};

export default Home;
