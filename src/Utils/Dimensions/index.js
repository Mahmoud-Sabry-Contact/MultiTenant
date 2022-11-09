import { widthPercentageToDP as wp2dp, heightPercentageToDP as hp2dp } from 'react-native-responsive-screen';

const stand_width = 375;
const stand_height = 812;

export const wp = (dimension) => {
  return wp2dp((dimension / stand_width) * 100 + '%');
};

export const hp = (dimension) => {
  return hp2dp((dimension / stand_height) * 100 + '%');
};
