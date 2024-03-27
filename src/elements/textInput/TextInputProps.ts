import type { StyleProp, TextInput, TextStyle } from 'react-native';
import type { ReactElement, RefObject } from 'react';
import type { ElementDimensionProps } from '../element.props';

export interface AppTextInputProps extends ElementDimensionProps {
  required?: boolean;
  requiredLabel?: boolean;
  label?: string;
  errorColor?: string;
  containerStyle?: StyleProp<TextStyle>;
  inputTextStyle?: StyleProp<TextStyle>;
  /**
   * input inline
   */
  inline?: boolean;
  labelStyle?: TextStyle;
  /**
   * Custom left icon component
   */
  leftIcon?: ReactElement;
  rightIcon?: ReactElement;
  iconColor?: string;
  noBorder?: boolean;
  helpTxtStyle?: TextStyle;
  noHelper?: boolean;
  /**
   * used to validate email input
   */
  email?: boolean;
  iconShowPass?: ReactElement;
  iconHidePass?: ReactElement;
  /**
   * close action visible, default=true
   */
  iconCloseVisible?: boolean;
  onValidate?(_str: string): string | undefined;
  /**
   * next input ref
   *
   * used to auto focus the next input
   */
  nextInput?: RefObject<TextInput> | undefined;
  /**
   * custom required message
   */
  requiredMessage?: string;
  /**
   * custom invalid email message
   */
  invalidEmailMessage?: string;
  /**
   * right component (default=false)
   */
  noRight?: boolean;
}
