import {StyleSheet} from 'react-native';
import {getFontFamily} from '../../android/app/build/intermediates/assets/debug/mergeDebugAssets/custom/helper';
import {
  horizontalScale,
  scaleFontSize,
  verticalScale,
} from '../../assets/styles/scaling';

const styles = StyleSheet.create({
  badge: {
    backgroundColor: '#145855',
    height: verticalScale(24),
    justifyContent: 'center',
    borderRadius: horizontalScale(52),
  },
  title: {
    fontFamily: getFontFamily('Inter_18pt', '600'),
    fontSize: scaleFontSize(12),
    lineHeight: scaleFontSize(14),
    color: '#FFFFFF',
    textAlign: 'center',
  },
});

export default styles;
