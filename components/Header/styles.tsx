import {StyleSheet} from 'react-native';
import {getFontFamily} from '../../android/app/build/intermediates/assets/debug/mergeDebugAssets/custom/helper';
import {horizontalScale, scaleFontSize} from '../../assets/styles/scaling';

const styles = StyleSheet.create({
  titleContainer: {
    marginVertical: horizontalScale(8),
    marginHorizontal: horizontalScale(-1),
  },
  subtitle: {
    fontFamily: getFontFamily('Inter_18pt', '400'),
    fontSize: scaleFontSize(16),
    color: '#636776',
  },
  title1: {
    fontFamily: getFontFamily('Inter_18pt', '600'),
    fontSize: scaleFontSize(24),
    lineHeight: scaleFontSize(29),
    color: '#022150',
  },
  title2: {
    fontFamily: getFontFamily('Inter_18pt', '600'),
    fontSize: scaleFontSize(18),
    lineHeight: scaleFontSize(22),
    color: '#022150',
  },
  title3: {
    fontFamily: getFontFamily('Inter_18pt', '600'),
    fontSize: scaleFontSize(16),
    lineHeight: scaleFontSize(19),
    color: '#022150',
  },
});

export default styles;
