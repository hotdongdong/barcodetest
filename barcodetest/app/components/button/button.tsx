import React from 'react';
import {TouchableOpacity, StyleProp, ViewStyle, TextStyle} from 'react-native';
import {Text} from '../text/text';

import {viewPresets, ButtonPresets, textPresets} from './button_preset';

interface ButtonProps {
  preset?: ButtonPresets;
  text?: string | number;
  style?: StyleProp<ViewStyle>;
  textStyle?: StyleProp<TextStyle>;
}

export const Button = (props: ButtonProps) => {
  const {
    preset = 'primary',
    text,
    style: styleOverride,
    textStyle: textStyleOverride,
  } = props;

  const viewStyle = viewPresets[preset] || viewPresets.primary;
  const viewStyles = [viewStyle, styleOverride];

  const textStyle = textPresets[preset] || textPresets.primary;
  const textStyles = [textStyle, textStyleOverride];

  return (
    <TouchableOpacity style={viewStyles}>
      <Text text={text} style={textStyles} />
    </TouchableOpacity>
  );
};
