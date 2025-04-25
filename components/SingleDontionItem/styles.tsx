import {StyleSheet} from 'react-native';
import {getFontFamily} from '../../android/app/build/intermediates/assets/debug/mergeDebugAssets/custom/helper';
import {horizontalScale, scaleFontSize, verticalScale} from '../../assets/styles/scaling';

const styles = StyleSheet.create({
  image: {
    width: horizontalScale(155),
    height: verticalScale(170),
  },
});

export default styles;
