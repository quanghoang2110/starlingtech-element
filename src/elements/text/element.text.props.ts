import { StyleSheet } from 'react-native';
import type {
  StarlingColorScheme,
  StarlingColorSchemeKey,
} from '../../theme/color';
import { sizes, type fonts } from '../../theme/theming';
import { handleStarlingStyle, type ElementProps } from '../element.props';
import type { TextProps } from 'react-native';
import type { TextStyle } from 'react-native';

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
  color?: StarlingColorSchemeKey;
  transform?: 'none' | 'capitalize' | 'uppercase' | 'lowercase';
  textAlign?: 'left' | 'center' | 'right' | undefined;
  letterSpacing?: number;
  allowFontScaling?: boolean;
}

export function handleTextStarlingStyle(
  props: ElementTextProps,
  themeColor: StarlingColorScheme,
  themeFonts: typeof fonts
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
  let fontFamily = themeFonts.regular;
  const _weight = StyleSheet.flatten(props.style)?.fontWeight || weight;
  switch (_weight) {
    case '100':
      fontFamily = themeFonts.thin;
      break;
    case '200':
      fontFamily = themeFonts.extraLight;
      break;
    case '300':
      fontFamily = themeFonts.light;
      break;
    case '500':
      fontFamily = themeFonts.medium;
      break;
    case '600':
      fontFamily = themeFonts.semiBold;
      break;
    case '700':
    case 'bold':
      fontFamily = themeFonts.bold;
      break;
    case '800':
      fontFamily = themeFonts.extraBold;
      break;
    case '900':
      fontFamily = themeFonts.black;
      break;
    default:
      fontFamily = themeFonts.regular;
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
