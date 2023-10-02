import type { ColorSchemeKey } from './color';

const dark: Record<ColorSchemeKey, string> = {
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
  border: '#e9e9e9',
  icon: '#999999',
  inputTextColor: '#FFFFFF',
  inputBackground: '#F4F6FB',
  inputBorder: '#848484',
  inputDisabled: '#f5f6f7',
  //
  required: '#FF2D55',
};

export default dark;
