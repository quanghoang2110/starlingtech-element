import React from 'react';
import { AppBlock } from '../../block/Block';
import { AppText } from '../../text/Text';
import type { StyleProp, TextStyle } from 'react-native';
import styles from '../styles';

type AppInputLabelProps = {
  required?: boolean;
  requiredLabel: boolean;
  label?: string;
  labelStyle?: StyleProp<TextStyle>;
  inline?: boolean;
  hasError?: boolean;
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
    <AppBlock style={[styles.labelContainer, inline && styles.inlineLabel]}>
      <AppText style={labelStyle}>{label}</AppText>
      {requiredLabel && required ? (
        <AppText color={'required'}>{' *'}</AppText>
      ) : null}
    </AppBlock>
  );
}
