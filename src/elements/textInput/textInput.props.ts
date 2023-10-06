import type {
  StyleProp,
  TextInput,
  TextInputProps,
  TextStyle,
} from 'react-native';
import type { ReactElement, RefObject } from 'react';
import { StyleSheet } from 'react-native';

export interface ElementTextInputProps extends TextInputProps {
  margin?: boolean | number | `${number}%` | number[];
  padding?: boolean | number | number[];
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
  required?: boolean;
  requiredLabel?: boolean;
  label?: string;
  errorColor?: string;
  containerStyle?: StyleProp<TextStyle>;
  inputTextStyle?: StyleProp<TextStyle>;
  inline?: boolean;
  labelStyle?: TextStyle;
  leftIcon?: ReactElement;
  rightIcon?: ReactElement;
  iconColor?: string;
  noBorder?: boolean;
  helpTxtStyle?: TextStyle;
  noHelper?: boolean;
  email?: boolean;
  iconShowPass?: ReactElement;
  iconHidePass?: ReactElement;
  iconCloseVisible?: boolean;
  onValidate?(_str: string): string | undefined;
  nextInput?: RefObject<TextInput> | undefined;
}

export function handleTextInputProps(props: ElementTextInputProps) {
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
