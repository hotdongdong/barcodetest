import {ViewStyle, TextStyle} from 'react-native';
import {Colors, Typography, adapter} from '../../../../../theme';

export const INFORMATIONHEADER: ViewStyle = {
  marginVertical: adapter.H(22),
  marginLeft: adapter.W(14),
};

export const INFORMATIONBOX: ViewStyle = {
  flexDirection: 'row',
};

export const DRIVERTEL: ViewStyle = {
  marginLeft: adapter.W(50),
};

export const TEXTTITLE: TextStyle = {
  marginBottom: adapter.H(9),
  color: Colors.ColorTextRegular,
  fontSize: Typography.FontSizeLarge,
  fontWeight: '500',
};

export const TEXTDATA: TextStyle = {
  color: Colors.ColorTextRegular,
  fontSize: Typography.FontSizeExtralarge,
  fontWeight: Typography.FontWeightPrimary,
};

export const SHIPTO: ViewStyle = {
  marginTop: adapter.H(25),
};
