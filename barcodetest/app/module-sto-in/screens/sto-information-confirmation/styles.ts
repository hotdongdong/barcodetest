import {ViewStyle} from 'react-native';
import {Colors, adapter, Typography} from '../../../theme';

export const INFOTIPS: ViewStyle = {
  backgroundColor: Colors.ColorPrimary,
  height: adapter.H(65),
  paddingHorizontal: adapter.W(15),
  justifyContent: 'center',
};

export const INFOTIPSTEXT = {
  color: Colors.ColorTextWhite,
  fontSize: Typography.FontSizeLarge,
};
