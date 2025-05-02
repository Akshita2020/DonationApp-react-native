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
  backButton: {
    marginLeft: horizontalScale(14),
    marginTop: verticalScale(7),
  },
  error: {
    fontFamily: getFontFamily('Inter_18pt', '500'),
    fontSize: scaleFontSize(16),
    color: '#FF0000',
    marginBottom: verticalScale(24),
  },
  success: {
    fontFamily: getFontFamily('Inter_18pt', '500'),
    fontSize: scaleFontSize(16),
    color: '#28a745',
    marginBottom: verticalScale(24),
  },
});

export default styles;
