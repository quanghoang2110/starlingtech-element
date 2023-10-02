import { Dimensions } from 'react-native';

import starlingConfig from '../../starling.config.json';

export function multiply(a: number, b: number): Promise<number> {
  return Promise.resolve(a * b);
}

const { width: windowWidth } = Dimensions.get('window');

export function appSize<TData = string | number>(
  size: TData,
  UIWidth = starlingConfig.UI_WIDTH
): TData {
  if (typeof size === 'string') {
    return size;
  }
  return ((windowWidth * Number(size)) / UIWidth) as TData;
}
