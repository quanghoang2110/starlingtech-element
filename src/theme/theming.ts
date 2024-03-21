import { starlingFonts, starlingSizes } from '../starlingTheme';

export const sizes = {
  text: 14,
  radius: 6,
  margin: 16,
  padding: 16,
  hint: 13,
  icon: 24,
  //button
  buttonWidth: 330,
  buttonHeight: 44,
  buttonRadius: 8,
  buttonText: 14,
  buttonDisabledOpacity: 0.5,
  animateButtonRadius: 100,
  animateButtonOpacity: 0.9,
  //input
  input: 14,
  inputHeight: 50,
  inputRadius: 9,
  inputMaxWidth: 600,
  inputHorizontalPadding: 12,
  ...starlingSizes,
};

export const fonts = {
  black: '',
  extraBold: '',
  bold: '',
  semiBold: '',
  medium: '',
  regular: '',
  light: '',
  extraLight: '',
  thin: '',
  ...starlingFonts,
};
