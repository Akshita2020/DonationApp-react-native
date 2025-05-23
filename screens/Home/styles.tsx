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
    width: horizontalScale(40),
    height: verticalScale(40),
    borderRadius: horizontalScale(40) / 2,
    backgroundColor: '#156CF7',
    marginBottom: horizontalScale(-2),
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
  donationItemsContainer: {
    marginTop: verticalScale(20),
    marginHorizontal: horizontalScale(24),
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  singleDonationItem: {
    maxWidth: '49%',
    marginBottom: verticalScale(23),
  },
});

export default styles;
