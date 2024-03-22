import React from 'react';
import { ActivityIndicator } from 'react-native';
import { StyleSheet } from 'react-native';
import { useThemeContext } from '../../hook/contextHook';
import { AppBlock } from '../block/Block';
import { AppText } from '../text/Text';
import type { StarlingColorScheme } from '../../starlingTheme';

export type OverlayProps = {
  visible: boolean;
  color?: keyof StarlingColorScheme;
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
}: OverlayProps) => {
  const { colors } = useThemeContext();
  return (
    (visible && (
      <AppBlock
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
          <AppText mt={12} color={color || 'white'}>
            {message}
          </AppText>
        ) : null}
      </AppBlock>
    )) ||
    null
  );
};

export { OverlayLoading };
