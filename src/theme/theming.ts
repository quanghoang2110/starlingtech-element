import { starlingFonts, starlingSizes } from '../starlingTheme';

export const sizes = {
  /**
   * normal font size
   */
  text: 14,
  /**
   * box radius
   */
  radius: 6,
  /**
   * default margin
   */
  margin: 16,
  /**
   * default padding
   */
  padding: 16,
  /**
   * default hint font size
   */
  hint: 9,
  /**
   * default icon size
   */
  icon: 24,
  //button
  /**
   * default button width
   */
  buttonWidth: 330,
  /**
   * default button height
   */
  buttonHeight: 44,
  /**
   * default button radius
   */
  buttonRadius: 8,
  /**
   * default button text font size
   */
  buttonText: 14,
  /**
   * default button disabled opacity
   */
  buttonDisabledOpacity: 0.5,
  /**
   * default button radius (loading state)
   */
  animateButtonRadius: 100,
  /**
   * default button opacity (loading state)
   */
  animateButtonOpacity: 0.9,
  //input
  /**
   * default input font size
   */
  input: 14,
  /**
   * default input border width
   */
  inputBorder: 1,
  /**
   * default input height
   */
  inputHeight: 50,
  /**
   * default input radius
   */
  inputRadius: 9,
  /**
   * default input max width
   */
  inputMaxWidth: 600,
  /**
   * default input horizontal padding
   */
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
