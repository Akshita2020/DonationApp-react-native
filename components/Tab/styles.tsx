import {StyleSheet} from 'react-native';
import {getFontFamily} from '../../android/app/build/intermediates/assets/debug/mergeDebugAssets/custom/helper';
import {
  horizontalScale,
  scaleFontSize,
  verticalScale,
} from '../../assets/styles/scaling';

const styles = StyleSheet.create({
  tab: {
    backgroundColor: '#2979F2',
    height: verticalScale(50),
    justifyContent: 'center',
    borderRadius: horizontalScale(50),
  },
  title: {
    fontFamily: getFontFamily('Inter_18pt', '500'),
    fontSize: scaleFontSize(14),
    lineHeight: scaleFontSize(17),
    color: '#FFFFFF',
    textAlign: 'center',
  },
  inactiveTitle: {
    color: '#79869F',
  },
  inActiveTab: {
    backgroundColor: '#F3F5F9',
  },
});

export default styles;
