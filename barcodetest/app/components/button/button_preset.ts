import {ViewStyle, TextStyle} from 'react-native';
import {adapter, Colors} from '../../theme';

const PRIMARY_VIEW: ViewStyle = {
  paddingVertical: adapter.W(8),
  paddingHorizontal: adapter.H(8),
  borderRadius: 4,
  justifyContent: 'center',
  alignItems: 'center',
};

const PRIMARY_TEXT: TextStyle = {
  paddingHorizontal: adapter.H(3),
};

export const viewPresets = {
  primary: {...PRIMARY_VIEW, backgroundColor: Colors.ColorPrimary},
};

export const textPresets = {
  primary: {...PRIMARY_TEXT, fontSize: 9, color: Colors.ColorTextWhite},
};

export type ButtonPresets = keyof typeof viewPresets;
