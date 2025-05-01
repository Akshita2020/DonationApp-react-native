import {StyleSheet} from 'react-native';
import {horizontalScale, verticalScale} from '../..//assets/styles/scaling';
const style = StyleSheet.create({
  image: {
    width: horizontalScale(140),
    height: verticalScale(170),
    borderRadius: horizontalScale(20),
  },
  badge: {
    position: 'absolute',
    top: verticalScale(10),
    left: horizontalScale(10),
    zIndex: 1,
  },
  donationInformation: {
    marginTop: verticalScale(10),
    paddingHorizontal: horizontalScale(5),
  },
  price: {
    marginTop: verticalScale(4),
  },
});

export default style;
