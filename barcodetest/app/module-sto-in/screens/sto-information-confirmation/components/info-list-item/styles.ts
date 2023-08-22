import {TextStyle, ViewStyle} from 'react-native';
import {adapter, Colors, Typography} from '../../../../../theme';

export const LISTHEAD: ViewStyle = {
  flexDirection: 'row',
  height: adapter.H(65),
  alignItems: 'center',
  marginHorizontal: adapter.W(10),
};

export const DRIVER: ViewStyle = {
  backgroundColor: Colors.ColorDivider,
  height: 1,
};

export const NO: ViewStyle = {
  width: adapter.W(50),
};

export const STONUMBER: ViewStyle = {
  width: adapter.W(120),
  alignItems: 'center',
};

export const SHIPPINGADRESS: ViewStyle = {
  width: adapter.W(100),
  alignItems: 'center',
};

export const LIST_DATA: TextStyle = {
  fontSize: Typography.FontSizeExtralarge,
  fontWeight: Typography.FontWeightPrimary,
};

export const BLUE: TextStyle = {
  fontSize: Typography.FontSizeExtralarge,
  fontWeight: Typography.FontWeightPrimary,
  color: Colors.ColorTextCode,
};

export const SELECT_ALL_BTN: ViewStyle = {
  paddingHorizontal: adapter.W(0),
  paddingVertical: adapter.H(10),
  width: adapter.W(60),
};

export const SELECT_ALL_BTN_TEXT: TextStyle = {
  fontSize: Typography.FontSizeMedium,
};
