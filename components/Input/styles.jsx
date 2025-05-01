import {StyleSheet} from 'react-native';
import {
  horizontalScale,
  verticalScale,
  scaleFontSize,
} from '../../assets/styles/scaling';
import {getFontFamily} from '../../assets/fonts/helper';

const styles = StyleSheet.create({
  label: {
    fontFamily: getFontFamily('Inter_18pt', '500'),
    fontSize: scaleFontSize(14),
    lineHeight: scaleFontSize(16),
    color: '#36455A',
  },
  input: {
    paddingVertical: verticalScale(12),
    borderBottomWidth: 1,
    borderBottomColor: 'rgba(167, 167, 167, 0.5)',
  },
});

export default styles;
