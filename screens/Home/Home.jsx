import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  Text,
  View,
  Image,
  Pressable,
  FlatList,
} from 'react-native';
import globalStyle from '../../assets/styles/globalStyle';
import Header from '../../components/Header/Header';
import Search from '../../components/Search/Search';
import {useSelector, useDispatch} from 'react-redux';
import {updateFirstName} from '../../redux/reducers/Users';
import styles from './styles';
import Tab from '../../components/Tab/Tab';
import {updateSelectedCategoryId} from '../../redux/reducers/Categories';

const Home = () => {
  const user = useSelector(state => state.user);
  const dispatch = useDispatch();
  const categories = useSelector(state => state.categories);
  console.log('Categories:', categories);

  const updateUserName = () => {
    dispatch(updateFirstName('John'));
  };

  console.log(user);
  return (
    <SafeAreaView style={[globalStyle.backgroundWhite, globalStyle.flex]}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.header}>
          <View>
            <Text style={styles.headerInfoText}>Hello, </Text>
            <View style={styles.userName}>
              <Header title={user.firstName + ' ' + user.lastName[0] + '.👋'} />
            </View>
          </View>
          <Image
            source={{uri: user.profileImage}}
            style={styles.profileImage}
            resizeMode={'contain'}
          />
        </View>
        <View style={styles.searchConatiner}>
          <Search />
        </View>
        <Pressable style={styles.highlightedImageConatiner}>
          <Image
            style={styles.highlightedImage}
            source={require('../../assets/images/highlighted_image.png')}
            resizeMode={'contain'}
          />
        </Pressable>
        <View style = {styles.categoriesHeader}>
          <Header title={'Select Category '} type={2} />
        </View>
        <View style={styles.categories}>
          <FlatList
            horizontal={true}
            keyExtractor={item => item.categoryId.toString()}
            showsHorizontalScrollIndicator={false}
            data={categories}
            renderItem={({item}) => (
              <View style={styles.categoryItem} key={item.categoryId}>
                <Tab
                  tabId={item.categoryId}
                  title={item.name}
                  isInactive={item.categoryId !== categories.selectedCategoryId}
                  onPress={value => {
                    dispatch(updateSelectedCategoryId(value));
                  }}
                />
              </View>
            )}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Home;
