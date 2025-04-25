import {StyleSheet} from 'react-native';
import {getFontFamily} from '../../android/app/build/intermediates/assets/debug/mergeDebugAssets/custom/helper';
import {
  horizontalScale,
  scaleFontSize,
  verticalScale,
} from '../../assets/styles/scaling';

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#2979F2',
    height: verticalScale(55),
    justifyContent: 'center',
    borderRadius: horizontalScale(50),
  },
  title: {
    fontFamily: getFontFamily('Inter_18pt', '500'),
    fontSize: scaleFontSize(16),
    lineHeight: scaleFontSize(19),
    color: '#FFFFFF',
    textAlign: 'center',
  },
  disabled: {
    opacity: 0.5,
  },
});

export default styles;
