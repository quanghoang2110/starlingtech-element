import React from 'react';
import { Image, StyleSheet } from 'react-native';
import { appSize } from '../helper/sizeHelper';
import { sizes } from '../theme/theming';
import { useThemeContext } from '../hook/contextHook';

const images = {
  close: require('./close.png'),
  eye: require('./eye.png'),
  ['eye-off']: require('./eye-off.png'),
} as const;

type AssetType = keyof typeof images;

type Props = {
  name: AssetType;
  size?: number;
  color?: string;
};

export function Asset({ name, size, color }: Props) {
  const { colors } = useThemeContext();
  return (
    <Image
      source={images[name]}
      style={[
        styles.icon,
        { tintColor: colors.icon },
        size !== undefined && { width: appSize(size), height: appSize(size) },
        color !== undefined && { tintColor: color },
      ]}
    />
  );
}

const styles = StyleSheet.create({
  icon: { width: sizes.icon, height: sizes.icon },
});
