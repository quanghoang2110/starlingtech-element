import React from 'react';
import { StyleSheet } from 'react-native';
import { useThemeContext } from '../../hook/contextHook';
import type { BlockProps } from '../block/element.block.props';
import Block from '../block/Block';

interface Props extends BlockProps {}

export default function Divider(props: Props) {
  const { colors } = useThemeContext();
  return (
    <Block
      style={[styles.line, { backgroundColor: colors.divider }, props.style]}
    />
  );
}

const styles = StyleSheet.create({
  line: { width: '100%', height: StyleSheet.hairlineWidth },
});
