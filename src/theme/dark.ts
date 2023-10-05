import type { StarlingColorSchemeKey } from './color';

const dark: Record<StarlingColorSchemeKey, string> = {
  primary: '#000000',
  accent: '#6200EE',
  secondary: '#1EB8FE',
  background: '#f6f6f6',
  error: '#B00020',
  text: '#FFFFFF',
  disabled: 'rgba(255,255,255,0.26)',
  placeholder: 'rgba(255,255,255,0.54)',
  backdrop: 'rgba(255,255,255,0.2)',
  notification: '#ff6d00',
  transparent: 'transparent',
  buttonDisabledText: '#666666',
  buttonText: '#333333',
  white: '#FFFFFF',
  black: '#000000',
  //custom
  danger: '#FF2D55',
  success: '#18d676',
  warning: '#F0C330',
  divider: '#e0e0e0',
  border: '#e9e9e9',
  icon: '#999999',
  inputTextColor: '#FFFFFF',
  inputBackground: '#F4F6FB',
  inputBorder: '#848484',
  inputDisabled: '#f5f6f7',
  //
  required: '#FF2D55',
  grey0: '#393e42',
  grey1: '#43484d',
  grey2: '#5e6977',
  grey3: '#86939e',
  grey4: '#bdc6cf',
  grey5: '#e1e8ee',
  skeleton: '#e4e6eb',
  skeletonHighlight: '#f1f2f3',
};

export default dark;
