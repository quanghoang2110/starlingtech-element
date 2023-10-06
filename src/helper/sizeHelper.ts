import { Dimensions } from 'react-native';

import { starlingConfig } from '../starlingConfig';

const { width: windowWidth, height: windowHeight } = Dimensions.get('window');

export function appSize<TData = string | number>(
  size: TData,
  uiWidth = starlingConfig.UI_WIDTH
): TData {
  if (typeof size === 'string') {
    return size;
  }

  return ((windowWidth * Number(size)) / uiWidth) as TData;
}

export function appSizeByHeight<TData = string | number>(
  size: TData,
  uiHeight = starlingConfig.UI_HEIGHT
): TData {
  if (typeof size === 'string') {
    return size;
  }
  const value = (windowHeight * Number(size)) / uiHeight;
  return value as TData;
}

export function getDimension(
  currentWidth: number,
  currentHeight: number,
  newWidth?: string | number,
  newHeight?: string | number
) {
  if (newWidth !== undefined) {
    return {
      width: appSize(Number(newWidth)),
      height: appSize((Number(newWidth) * currentHeight) / currentWidth),
    };
  }
  if (newHeight !== undefined) {
    return {
      width: appSize((Number(newHeight) * currentWidth) / currentHeight),
      height: appSize(Number(newHeight)),
    };
  }
  return {
    width: appSize(currentWidth),
    height: appSize(currentHeight),
  };
}
