import React from 'react';
import {Text as ReactNativeText, StyleProp, TextStyle} from 'react-native';

import {presets, TextPresets} from './text_preset';

interface TextProps {
  preset?: TextPresets;
  text?: string | number;
  children?: React.ReactNode;
  style?: StyleProp<TextStyle>;
}

export const Text = (props: TextProps) => {
  const {preset = 'default', text, children, style: styleOverride} = props;

  const style = presets[preset] || presets.default;
  const styles = [style, styleOverride];

  const content = text || children;

  return <ReactNativeText style={styles}>{content}</ReactNativeText>;
};
