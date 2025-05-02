import {StyleSheet} from 'react-native';
import {getFontFamily} from '../../assets/fonts/helper';
import {
  horizontalScale,
  verticalScale,
  scaleFontSize,
} from '../../assets/styles/scaling';
const styles = StyleSheet.create({
  container: {
    marginHorizontal: horizontalScale(24),
    flex: 1,
    justifyContent: 'center',
  },
  registrationButton: {
    alignItems: 'center',
  },
  error: {
    fontFamily: getFontFamily('Inter_18pt', '500'),
    fontSize: scaleFontSize(16),
    color: '#FF0000',
    marginBottom: verticalScale(24),
  },
});

export default styles;
