import { type ElementProps } from '../element.props';
import type { StyleProp } from 'react-native';
import type { TextStyle } from 'react-native';
import type { StarlingColorScheme } from '../../starlingTheme';

export interface AppTextProps extends ElementProps {
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
  style?: StyleProp<TextStyle>;
}
