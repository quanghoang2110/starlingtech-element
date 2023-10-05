import { type FlexAlignType, StyleSheet, type ViewStyle } from 'react-native';

import {
  handleBorder,
  handleMargin,
  handlePadding,
} from '../helper/utilHelper';
import type {
  StarlingColorScheme,
  StarlingColorSchemeKey,
} from '../theme/color';
import { sizes } from '../theme/theming';
import { appSize } from '../helper/sizeHelper';

export interface ElementProps {
  radius?: number | boolean;
  width?: number | `${number}%`;
  height?: number | `${number}%`;
  margin?: boolean | number | `${number}%` | number[];
  padding?: boolean | number | number[];
  flex?: number | boolean;
  background?: StarlingColorSchemeKey;
  border?: boolean | number | number[];
  ph?: number | `${number}%`;
  pv?: number | `${number}%`;
  pl?: number | `${number}%`;
  pr?: number | `${number}%`;
  pt?: number | `${number}%`;
  pb?: number | `${number}%`;
  mh?: number | `${number}%`;
  mv?: number | `${number}%`;
  ml?: number | `${number}%`;
  mr?: number | `${number}%`;
  mt?: number | `${number}%`;
  mb?: number | `${number}%`;
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
}

export function handleStarlingStyle<T extends ElementProps>(
  props: T,
  color: StarlingColorScheme
) {
  const { width, height, margin, padding, radius, background, flex, border } =
    props;

  const tempProps = { ...props };
  let tempStyles: ViewStyle = {};

  if (border) {
    tempStyles = { ...tempStyles, ...handleBorder(border, color.border) };
    delete tempProps.border;
  }
  if (margin) {
    tempStyles = { ...tempStyles, ...handleMargin(margin) };
    delete tempProps.margin;
  }
  if (padding) {
    tempStyles = { ...tempStyles, ...handlePadding(padding) };
    delete tempProps.padding;
  }
  if (radius) {
    if (typeof radius === 'boolean') {
      tempStyles.borderRadius = sizes.radius;
    } else {
      tempStyles.borderRadius = appSize(radius);
    }
    delete tempProps.radius;
  }
  if (props.ph) {
    tempStyles.paddingHorizontal = appSize(props.ph);
    delete tempProps.ph;
  }
  if (props.pv) {
    tempStyles.paddingVertical = appSize(props.pv);
    delete tempProps.pv;
  }
  if (props.pt) {
    tempStyles.paddingTop = appSize(props.pt);
    delete tempProps.pt;
  }
  if (props.pb) {
    tempStyles.paddingBottom = appSize(props.pb);
    delete tempProps.pb;
  }
  if (props.pl) {
    tempStyles.paddingLeft = appSize(props.pl);
    delete tempProps.pl;
  }
  if (props.pr) {
    tempStyles.paddingRight = appSize(props.pr);
    delete tempProps.pr;
  }
  if (props.mh) {
    tempStyles.marginHorizontal = appSize(props.mh);
    delete tempProps.mh;
  }
  if (props.mv) {
    tempStyles.marginVertical = appSize(props.mv);
    delete tempProps.mv;
  }
  if (props.mt) {
    tempStyles.marginTop = appSize(props.mt);
    delete tempProps.mt;
  }
  if (props.mb) {
    tempStyles.marginBottom = appSize(props.mb);
    delete tempProps.mb;
  }
  if (props.ml) {
    tempStyles.marginLeft = appSize(props.ml);
    delete tempProps.ml;
  }
  if (props.mr) {
    tempStyles.marginRight = appSize(props.mr);
    delete tempProps.mr;
  }
  if (width) {
    tempStyles.width = appSize(width);
    delete tempProps.width;
  }
  if (height) {
    tempStyles.height = appSize(height);
    delete tempProps.height;
  }
  if (flex) {
    tempStyles.flex = typeof flex === 'boolean' ? 1 : flex;
    delete tempProps.flex;
  }
  if (background) {
    tempStyles.backgroundColor =
      background in color ? color[background] : background;
    delete tempProps.background;
  }
  if (props.justifyContent) {
    tempStyles.justifyContent = props.justifyContent;
    delete tempProps.justifyContent;
  }
  if (props.alignContent) {
    tempStyles.alignContent = props.alignContent;
    delete tempProps.alignContent;
  }
  if (props.alignItems) {
    tempStyles.alignItems = props.alignItems;
    delete tempProps.alignItems;
  }
  if (props.alignSelf) {
    tempStyles.alignSelf = props.alignSelf;
    delete tempProps.alignSelf;
  }
  if (props.display) {
    tempStyles.display = props.display;
    delete tempProps.display;
  }
  if (props.top !== undefined) {
    tempStyles.top = props.top;
    delete tempProps.top;
  }
  if (props.left !== undefined) {
    tempStyles.left = props.left;
    delete tempProps.left;
  }
  if (props.right !== undefined) {
    tempStyles.right = props.right;
    delete tempProps.right;
  }
  if (props.bottom !== undefined) {
    tempStyles.bottom = props.bottom;
    delete tempProps.bottom;
  }
  if (props.zIndex !== undefined) {
    tempStyles.zIndex = props.zIndex;
    delete tempProps.zIndex;
  }
  if (props.overflow) {
    tempStyles.overflow = props.overflow;
    delete tempProps.overflow;
  }
  if (props.flexWrap) {
    tempStyles.flexWrap = props.flexWrap;
    delete tempProps.flexWrap;
  }
  if (props.wrap) {
    tempStyles.flexWrap = 'wrap';
    delete tempProps.wrap;
  }

  return {
    elementProps: tempProps,
    elementStyles: StyleSheet.flatten(tempStyles),
  };
}

export function handleButtonViewProps(props: any, color: StarlingColorScheme) {
  let tempStyles: ViewStyle = {};
  const tempProps = { ...props };
  if (props.margin !== undefined) {
    tempStyles = { ...handleMargin(props.margin) };
    delete tempProps.margin;
  }
  if (props.mh) {
    tempStyles.marginHorizontal = appSize(props.mh);
    delete tempProps.mh;
  }
  if (props.mv) {
    tempStyles.marginVertical = appSize(props.mv);
    delete tempProps.mv;
  }
  if (props.mt) {
    tempStyles.marginTop = appSize(props.mt);
    delete tempProps.mt;
  }
  if (props.mb) {
    tempStyles.marginBottom = appSize(props.mb);
    delete tempProps.mb;
  }
  if (props.ml) {
    tempStyles.marginLeft = appSize(props.ml);
    delete tempProps.ml;
  }
  if (props.mr) {
    tempStyles.marginRight = appSize(props.mr);
    delete tempProps.mr;
  }
  if (props.border) {
    tempStyles = { ...tempStyles, ...handleBorder(props.border, color.border) };
    delete tempProps.border;
  }
  return { marginStyles: tempStyles, marginProps: tempProps };
}

export function removeInvalidProps(tmp: object) {
  return {
    ...tmp,
    margin: undefined,
    padding: undefined,
    border: undefined,
    right: undefined,
    center: undefined,
    middle: undefined,
  };
}
