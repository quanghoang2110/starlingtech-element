import React from 'react';
import Block from '../../block/Block';
import Text from '../../text/Text';
import type { StyleProp, TextStyle } from 'react-native';
import styles from '../styles';

type AppInputLabelProps = {
  required?: boolean;
  requiredLabel: boolean;
  label?: string;
  labelStyle?: StyleProp<TextStyle>;
  inline?: boolean;
};

export function TextInputLabel({
  label,
  required,
  requiredLabel,
  labelStyle,
  inline,
}: AppInputLabelProps) {
  if (label === undefined) {
    return null;
  }

  return (
    <Block style={[styles.labelContainer, inline && styles.inlineLabel]}>
      <Text style={labelStyle}>{label}</Text>
      {requiredLabel && required ? (
        <Text color={'required'}>{' *'}</Text>
      ) : null}
    </Block>
  );
}
