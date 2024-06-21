import { type FlexAlignType } from 'react-native';

import type { StarlingColorScheme } from '../starlingTheme';

export interface ElementDimensionProps {
  /**
   * typeof boolean: margin is default
   *
   * typeof number: margin = number
   *
   * typeof number[]: margin = [top, right, bottom, left]
   *
   */
  margin?: boolean | number | `${number}%` | number[];
  /**
   * typeof boolean: padding is default
   *
   * typeof number: padding = number
   *
   * typeof number[]: padding = [top, right, bottom, left]
   *
   */
  padding?: boolean | number | number[];
  /**
   * typeof boolean: borderWidth is default
   *
   * typeof number: borderWidth = number
   *
   * typeof number[]: borderWidth = [top, right, bottom, left]
   *
   */
  border?: boolean | number | number[];
  /**
   * padding horizontal
   **/
  ph?: number | `${number}%`;
  /**
   * padding vertical
   **/
  pv?: number | `${number}%`;
  /**
   * padding left
   **/
  pl?: number | `${number}%`;
  /**
   * padding right
   **/
  pr?: number | `${number}%`;
  /**
   * padding top
   **/
  pt?: number | `${number}%`;
  /**
   * padding bottom
   **/
  pb?: number | `${number}%`;
  /**
   * margin horizontal
   **/
  mh?: number | `${number}%`;
  /**
   * margin vertical
   **/
  mv?: number | `${number}%`;
  /**
   * margin left
   **/
  ml?: number | `${number}%`;
  /**
   * margin right
   **/
  mr?: number | `${number}%`;
  /**
   * margin top
   **/
  mt?: number | `${number}%`;
  /**
   * margin bottom
   **/
  mb?: number | `${number}%`;
}

export interface ElementProps extends ElementDimensionProps {
  radius?: number | boolean;
  width?: number | `${number}%`;
  height?: number | `${number}%`;
  flex?: number | boolean;
  background?: keyof StarlingColorScheme;
  justifyContent?:
    | 'flex-start'
    | 'flex-end'
    | 'center'
    | 'space-between'
    | 'space-around'
    | 'space-evenly'
    | undefined;
  alignContent?:
    | 'flex-start'
    | 'flex-end'
    | 'center'
    | 'stretch'
    | 'space-between'
    | 'space-around'
    | undefined;
  alignItems?: FlexAlignType | undefined;
  alignSelf?: 'auto' | FlexAlignType | undefined;
  display?: 'none' | 'flex' | undefined;
  top?: number | undefined;
  right?: number | undefined;
  left?: number | undefined;
  bottom?: number | undefined;
  zIndex?: number | undefined;
  overflow?: 'visible' | 'hidden' | 'scroll' | undefined;
  flexWrap?: 'wrap' | 'nowrap' | 'wrap-reverse' | undefined;
  wrap?: boolean;
  gap?: number;
  rowGap?: number;
  columnGap?: number;
}
