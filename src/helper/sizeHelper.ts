import { Dimensions } from 'react-native';

import { starlingConfig } from '../starlingConfig';

const { width: windowWidth } = Dimensions.get('window');

export function appSize<TData = string | number>(
  size: TData,
  uiWidth = starlingConfig.UI_WIDTH
): TData {
  if (typeof size === 'string') {
    return size;
  }

  return ((windowWidth * Number(size)) / uiWidth) as TData;
}
