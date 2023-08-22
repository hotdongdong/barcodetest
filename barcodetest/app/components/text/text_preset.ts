import {TextStyle} from 'react-native';
import {Colors, Typography} from '../../theme';

const DEFAULT: TextStyle = {
  color: Colors.ColorTextPrimary,
  fontSize: Typography.FontSizeBase,
};

export const presets = {
  default: DEFAULT,
};

export type TextPresets = keyof typeof presets;
