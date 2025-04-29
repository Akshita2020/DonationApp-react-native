import {StyleSheet} from 'react-native';
import {getFontFamily} from '../../assets/fonts/helper';
import {
  horizontalScale,
  scaleFontSize,
  verticalScale,
} from '../../assets/styles/scaling';

const styles = StyleSheet.create({
  header: {
    marginTop: verticalScale(20),
    marginHorizontal: horizontalScale(20),
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  headerInfoText: {
    fontFamily: getFontFamily('Inter_18pt', '700'),
    fontSize: scaleFontSize(16),
    lineHeight: scaleFontSize(19),
    color: '#636776',
  },
  userName: {
    marginTop: verticalScale(-2),
  },
  profileImage: {
    width: horizontalScale(50),
    height: verticalScale(50),
  },
  searchConatiner: {
    marginHorizontal: horizontalScale(20),
    marginTop: verticalScale(20),
  },
  highlightedImageConatiner: {
    marginHorizontal: horizontalScale(20),
    marginTop: verticalScale(20),
  },
  highlightedImage: {
    width: '100%',
    height: verticalScale(160),
  },
  categories: {
    marginLeft: verticalScale(24),
  },
  categoryItem: {
    marginRight: horizontalScale(10),
  },
  categoriesHeader: {
    marginHorizontal: horizontalScale(24),
    marginBottom: verticalScale(16),
    marginTop: verticalScale(6),
  },
});

export default styles;
