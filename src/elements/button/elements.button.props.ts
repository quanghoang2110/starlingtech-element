import { handleStarlingStyle, type ElementProps } from '../element.props';
import type { ViewStyle } from 'react-native';
import type { TextStyle } from 'react-native';
import { appSize } from '../../helper/sizeHelper';
import type { TouchableWithoutFeedbackProps } from 'react-native';
import type { StarlingColorScheme } from '../../starlingTheme';

export interface ButtonProps
  extends ElementProps,
    TouchableWithoutFeedbackProps {
  processing?: boolean;
  text?: string;
  textColor?: keyof StarlingColorScheme;
  textDisabledColor?: string;
  textStyle?: TextStyle;
  disabledStyle?: ViewStyle;
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
  primary?: boolean;
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

  return {
    elementProps: tempProps,
    elementStyles: tempStyles,
  };
}
