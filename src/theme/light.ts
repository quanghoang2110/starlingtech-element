import type { ColorSchemeKey } from './color';

const light: Record<ColorSchemeKey, string> = {
  primary: '#6200EE',
  accent: '#6200EE',
  secondary: '#1EB8FE',
  background: '#f6f6f6',
  error: '#B00020',
  text: '#000000',
  disabled: 'rgba(0,0,0,0.26)',
  placeholder: 'rgba(0,0,0,0.54)',
  backdrop: 'rgba(0,0,0,0.8)',
  notification: '#ff6d00',
  transparent: 'transparent',
  buttonDisabledText: '#666',
  buttonText: '#333',
  white: '#FFF',
  black: '#000',
  //custom
  danger: '#FF2D55',
  success: '#18d676',
  warning: '#F0C330',
  border: '#e9e9e9',
  icon: '#999999',
  inputTextColor: '#000000',
  inputBackground: '#F4F6FB',
  inputBorder: '#848484',
  inputDisabled: '#f5f6f7',
  //
  required: '#FF2D55',
};

export default light;
