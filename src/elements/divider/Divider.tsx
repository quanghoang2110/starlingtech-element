import React from 'react';
import { StyleSheet } from 'react-native';
import type { AppBlockProps } from '../block/BlockProps';
import { AppBlock } from '../block/Block';

export function Divider(props: AppBlockProps) {
  return (
    <AppBlock
      {...props}
      width={props.width ?? '100%'}
      height={props.height ?? StyleSheet.hairlineWidth}
      background={props.background ?? 'divider'}
      style={[props.style]}
    />
  );
}
