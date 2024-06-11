import { Dimensions } from 'react-native';

import { UI_WIDTH, UI_HEIGHT } from '../starlingTheme';

const { width: _windowWidth, height: _windowHeight } = Dimensions.get('window');

const windowWidth = _windowWidth > _windowHeight ? _windowHeight : _windowWidth;
const windowHeight =
  _windowWidth < _windowHeight ? _windowHeight : _windowWidth;

export function appSize<TData = string | number>(
  size: TData,
  uiWidth = UI_WIDTH
): TData {
  if (typeof size === 'string') {
    return size;
  }

  return ((windowWidth * Number(size)) / uiWidth) as TData;
}

export function appSizeByHeight<TData = string | number>(
  size: TData,
  uiHeight = UI_HEIGHT
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
