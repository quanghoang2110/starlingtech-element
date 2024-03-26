import { StyleSheet, type TextStyle, type ViewStyle } from 'react-native';
import { appSize } from './sizeHelper';
import { handleBorder, handleMargin, handlePadding } from './utilHelper';
import type { ElementProps } from '../elements/element.props';
import type { StarlingColorScheme } from '../starlingTheme';
import { fonts, sizes } from '../theme/theming';
import type { AppBlockProps } from '../elements/block/BlockProps';
import type { ButtonProps } from '../elements/button/ButtonProps';
import type { AppTextInputProps } from '../elements/textInput/TextInputProps';
import type { AppTextProps } from '../elements/text/TextProps';

export function handleStarlingStyle<T extends ElementProps & { style?: any }>(
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
      tempStyles.borderRadius = appSize(sizes.radius);
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
    elementStyles: StyleSheet.flatten([tempStyles, props.style]),
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

export function handleBlockStarlingStyle(
  props: AppBlockProps,
  color: StarlingColorScheme
) {
  const { primary } = props;

  const { elementProps, elementStyles } = handleStarlingStyle(props, color);

  const tempStyles = { ...elementStyles };
  const tempProps = { ...elementProps };
  if (primary) {
    tempStyles.backgroundColor = color.primary;
    delete tempProps.primary;
  }
  if (props.position) {
    tempStyles.position = props.position;
    delete tempProps.position;
  }
  if (props.row || props.column) {
    tempStyles.flexDirection = props.row ? 'row' : 'column';
    delete tempProps.row;
    delete tempProps.column;
  }
  if (props.center) {
    tempStyles.alignItems = 'center';
    tempStyles.justifyContent = 'center';
    delete tempProps.center;
  }

  return {
    elementProps: tempProps,
    elementStyles: StyleSheet.flatten([tempStyles, props.style]),
  };
}

export function handleButtonStarlingStyle(
  props: ButtonProps,
  color: StarlingColorScheme
) {
  const { primary, radius } = props;

  const { elementProps: tempProps, elementStyles: tempStyles } =
    handleStarlingStyle(props, color);
  if (typeof radius === 'number') {
    tempStyles.borderRadius = appSize(radius);
    delete tempProps.radius;
  }

  if (primary) {
    tempStyles.backgroundColor = color.primary;
    delete tempProps.primary;
  }
  if (props.row || props.column) {
    tempStyles.flexDirection = props.row ? 'row' : 'column';
    delete tempProps.row;
    delete tempProps.column;
  }
  if (props.center) {
    tempStyles.alignItems = 'center';
    tempStyles.justifyContent = 'center';
    delete tempProps.center;
  }

  if (props.disabled) {
    tempStyles.opacity = props.disabledOpacity ?? sizes.buttonDisabledOpacity;
  }

  return {
    elementProps: tempProps,
    elementStyles: tempStyles,
  };
}

export function handleTextStarlingStyle(
  props: AppTextProps,
  themeColor: StarlingColorScheme
) {
  const {
    primary,
    size = sizes.text,
    weight = '400',
    color: textColor = 'text',
    allowFontScaling = false,
  } = props;

  const { elementProps, elementStyles } = handleStarlingStyle(
    props,
    themeColor
  );

  const tempStyles: TextStyle = {
    ...elementStyles,
    fontSize: appSize(size),
    fontWeight: weight,
  };
  const tempProps = { ...elementProps };
  if (textColor) {
    tempStyles.color =
      textColor in themeColor ? themeColor[textColor] : textColor;
  }
  if (primary) {
    tempStyles.color = themeColor.primary;
    delete tempProps.primary;
  }
  let fontFamily = fonts.regular;
  const _weight = StyleSheet.flatten(props.style)?.fontWeight || weight;
  switch (_weight) {
    case '100':
      fontFamily = fonts.thin;
      break;
    case '200':
      fontFamily = fonts.extraLight;
      break;
    case '300':
      fontFamily = fonts.light;
      break;
    case '500':
      fontFamily = fonts.medium;
      break;
    case '600':
      fontFamily = fonts.semiBold;
      break;
    case '700':
    case 'bold':
      fontFamily = fonts.bold;
      break;
    case '800':
      fontFamily = fonts.extraBold;
      break;
    case '900':
      fontFamily = fonts.black;
      break;
    default:
      fontFamily = fonts.regular;
      break;
  }
  tempStyles.fontFamily = fontFamily;

  if (props.weight) {
    delete tempProps.weight;
  }

  if (props.textAlign) {
    tempStyles.textAlign = props.textAlign;
    delete tempProps.textAlign;
  }
  if (props.letterSpacing) {
    tempStyles.letterSpacing = props.letterSpacing;
    delete tempProps.letterSpacing;
  }
  if (props.lineHeight) {
    tempStyles.lineHeight = props.lineHeight;
    delete tempProps.lineHeight;
  }
  if (props.transform) {
    tempStyles.textTransform = props.transform;
    delete tempProps.transform;
  }

  return {
    elementProps: { ...tempProps, allowFontScaling },
    elementStyles: StyleSheet.flatten([tempStyles, props.style]),
  };
}

export function handleTextInputProps(props: AppTextInputProps) {
  const elementProps = { ...props };
  const elementStyles = StyleSheet.flatten(props.inputTextStyle);
  delete elementProps.padding;
  delete elementProps.margin;
  delete elementProps.pv;
  delete elementProps.ph;
  delete elementProps.pr;
  delete elementProps.pl;
  delete elementProps.pt;
  delete elementProps.pb;
  delete elementProps.mr;
  delete elementProps.ml;
  delete elementProps.mt;
  delete elementProps.mb;
  delete elementProps.mv;
  delete elementProps.mh;
  delete elementProps.required;
  delete elementProps.requiredLabel;
  delete elementProps.label;
  delete elementProps.labelStyle;
  delete elementProps.errorColor;
  delete elementProps.containerStyle;
  delete elementProps.inputTextStyle;
  delete elementProps.inline;
  delete elementProps.leftIcon;
  delete elementProps.rightIcon;
  delete elementProps.iconColor;
  delete elementProps.noBorder;
  delete elementProps.helpTxtStyle;
  delete elementProps.noHelper;
  delete elementProps.email;
  delete elementProps.iconCloseVisible;
  delete elementProps.iconShowPass;
  delete elementProps.iconHidePass;
  delete elementProps.nextInput;
  delete elementProps.onValidate;

  return {
    elementProps,
    elementStyles,
  };
}
