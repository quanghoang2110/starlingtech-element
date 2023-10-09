import { StyleSheet } from 'react-native';
import { sizes, fonts } from '../../theme/theming';
import { handleStarlingStyle, type ElementProps } from '../element.props';
import type { TextProps } from 'react-native';
import type { TextStyle } from 'react-native';
import type { StarlingColorScheme } from '../../starlingTheme';
import { appSize } from '../../helper/sizeHelper';

export interface ElementTextProps extends ElementProps, TextProps {
  size?: number;
  primary?: boolean;
  lineHeight?: number;
  weight?:
    | '100'
    | '200'
    | '300'
    | '400'
    | '500'
    | '600'
    | '700'
    | '800'
    | '900'
    | undefined;
  color?: keyof StarlingColorScheme;
  transform?: 'none' | 'capitalize' | 'uppercase' | 'lowercase';
  textAlign?: 'left' | 'center' | 'right' | undefined;
  letterSpacing?: number;
  allowFontScaling?: boolean;
}

export function handleTextStarlingStyle(
  props: ElementTextProps,
  themeColor: StarlingColorScheme
) {
  const {
    primary,
    size = appSize(sizes.text),
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
    fontSize: size,
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
