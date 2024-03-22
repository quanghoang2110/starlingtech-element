import React from 'react';
import { StyleSheet } from 'react-native';
import type { AppBlockProps } from '../block/BlockProps';
import { AppBlock } from '../block/Block';

export function Divider(props: AppBlockProps) {
  return (
    <AppBlock
      {...props}
      height={props.height ?? StyleSheet.hairlineWidth}
      background={props.background ?? 'divider'}
      style={[styles.line, props.style]}
    />
  );
}

const styles = StyleSheet.create({
  line: { width: '100%' },
});
