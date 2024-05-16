import { type ElementProps } from '../element.props';
import type { TouchableWithoutFeedbackProps, ViewStyle } from 'react-native';
import type { TextStyle } from 'react-native';
import type { StarlingColorScheme } from '../../starlingTheme';

export interface ButtonProps extends ElementProps {
  /**
   * loading button (animation)
   */
  processing?: boolean;
  text?: string;
  textColor?: keyof StarlingColorScheme;
  textDisabledColor?: string;
  textStyle?: TextStyle;
  rippleColor?: string;
  rippleOpacity?: number;
  rippleDuration?: number;
  rippleSize?: number;
  rippleContainerBorderRadius?: number;
  rippleCentered?: boolean;
  rippleSequential?: boolean;
  rippleFades?: boolean;
  center?: boolean;
  row?: boolean;
  column?: boolean;
  /**
   * backgroundColor=primary
   */
  primary?: boolean;
  /**
   * custom style for disabled state
   */
  disabledStyle?: ViewStyle;
  /**
   * opacity when the state is disabled
   */
  disabledOpacity?: number;
  disabled?: boolean;
}

export interface ButtonLoadingProps extends ButtonProps {
  width?: number;
  height?: number;
  /**
   * width of the loading button (default = height)
   */
  animateWidth?: number;
  /**
   * radius of the loading button (default = circle)
   */
  animateRadius?: number;
  /**
   * opacity of the loading button
   */
  animateOpacity?: number;
  /**
   * loading always center
   */
  animateCenter?: boolean;
  children?: React.ReactNode;
}

export type AppButtonProps = ButtonProps &
  TouchableWithoutFeedbackProps &
  ({ processing?: undefined } | ButtonLoadingProps);

export interface AppPressableProps extends ElementProps {
  sentryLabel?: string;
}
