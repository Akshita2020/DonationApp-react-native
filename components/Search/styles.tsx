import {StyleSheet} from 'react-native';
import {getFontFamily} from '../../android/app/build/intermediates/assets/debug/mergeDebugAssets/custom/helper';
import {
  horizontalScale,
  scaleFontSize,
  verticalScale,
} from '../../assets/styles/scaling';

const styles = StyleSheet.create({
  searchInputContainer: {
    height: verticalScale(50),
    paddingHorizontal: horizontalScale(16),
    backgroundColor: '#F3F5F9',
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: horizontalScale(15),
  },
  searchIcon: {
    color: '#25C0FF',
  },

  searchInput: {
    flex: 1,
    marginLeft: horizontalScale(6),
    height: '100%',
    fontFamily: getFontFamily('Inter_18pt', '600'),
    lineHeight: scaleFontSize(14),
    color: '#686C7A',
    fontSize: scaleFontSize(14),
  },
});

export default styles;
