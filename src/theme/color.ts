const color = {
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
  divider: '#e0e0e0',
  border: '#e9e9e9',
  icon: '#999999',
  inputTextColor: '#000000',
  inputBackground: '#F4F6FB',
  inputBorder: '#848484',
  inputDisabled: '#f5f6f7',
  //
  required: '#FF2D55',
  //grey
  grey0: '#393e42',
  grey1: '#43484d',
  grey2: '#5e6977',
  grey3: '#86939e',
  grey4: '#bdc6cf',
  grey5: '#e1e8ee',
  skeleton: '#e4e6eb',
  skeletonHighlight: '#f1f2f3',
};

export default color;

export type StarlingColorScheme = typeof color;
export type StarlingColorSchemeKey = keyof StarlingColorScheme;
