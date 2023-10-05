import React from 'react';
import { ActivityIndicator } from 'react-native';
import { StyleSheet } from 'react-native';
import { useThemeContext } from '../../hook/contextHook';
import Block from '../block/Block';
import Text from '../text/Text';
import type { StarlingColorSchemeKey } from '../../theme/color';

type Props = {
  visible: boolean;
  color?: string;
  backdropColor?: string;
  zIndex?: number;
  message?: string;
};

const OverlayLoading = ({
  visible,
  color,
  backdropColor,
  zIndex,
  message,
}: Props) => {
  const { colors } = useThemeContext();
  return (
    (visible && (
      <Block
        center
        style={[
          StyleSheet.absoluteFill,
          {
            backgroundColor: backdropColor || colors.backdrop,
            zIndex: zIndex || 1,
          },
        ]}
      >
        <ActivityIndicator color={color || 'white'} />
        {message ? (
          <Text mt={12} color={(color as StarlingColorSchemeKey) || 'white'}>
            {message}
          </Text>
        ) : null}
      </Block>
    )) ||
    null
  );
};

export default OverlayLoading;
