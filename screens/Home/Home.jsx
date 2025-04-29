import React, {useState, useEffect} from 'react';
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
  const categories = useSelector(state => state.categories);
  const donations = useSelector(state => state.donations);
  const dispatch = useDispatch();
  // dispatch(resetDonations());
  console.log(donations);
  console.log('Categories:', categories);

  const updateUserName = () => {
    dispatch(updateFirstName('John'));
  };

  const [categoryPage, setCategoryPage] = useState(1);
  const [categoryList, setCategoryList] = useState([]);
  const [isLoadingCategories, setIsLoadingCategories] = useState(false);
  const categoryPageSize = 4;

  const pagination = (items, pageNumber, pageSize) => {
    const startIndex = (pageNumber - 1) * pageSize;
    const endIndex = startIndex + pageSize;
    if (startIndex >= items.length) {
      return [];
    }
    return items.slice(startIndex, endIndex);
  };

  useEffect(() => {
    setIsLoadingCategories(true);
    setCategoryList(pagination(categories, categoryPage, categoryPageSize));
    setCategoryPage(prevPage => prevPage + 1);
    setIsLoadingCategories(false);
  }, []);
  console.log(categoryList.length);

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
        <View style={styles.categoriesHeader}>
          <Header title={'Select Category '} type={2} />
        </View>
        <View style={styles.categories}>
          <FlatList
            onEndReachedThreshold={0.5}
            onEndReached={() => {
              if (isLoadingCategories) return;
              console.log(
                'User has reached the end of the list and we are getting more data for pageNumber',
                categoryPage,
              );
              setIsLoadingCategories(true);

              let newData = pagination(
                categories,
                categoryPage,
                categoryPageSize,
              );
              if (newData.lenght > 0) {
                setCategoryList(prevData => [...prevData, ...newData]);
                setCategoryPage(prevPage => prevPage + 1);
              }
              setIsLoadingCategories(false);
            }}
            horizontal={true}
            keyExtractor={item => item.categoryId.toString()}
            showsHorizontalScrollIndicator={false}
            data={categoryList}
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
