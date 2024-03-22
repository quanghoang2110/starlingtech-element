declare module '@starling/theme' {
  export const sizes = {};
  export const fonts = {};
  export const UI_WIDTH = 375;
  export const UI_HEIGHT = 812;
  export type ColorScheme = {
    /**
     * primary color scheme
     */
    primary: string;
    /**
     * accent color scheme
     */
    accent: string;
    /**
     * secondary color scheme
     */
    secondary: string;
    /**
     * screen background color
     */
    background: string;
    /**
     * text color
     */
    text: string;
    /**
     * disabled color
     */
    disabled: string;
    /**
     * placeholder text/input placeholder color
     */
    placeholder: string;
    /**
     * backdrop background color
     */
    backdrop: string;
    notification: string;
    transparent: string;
    /**
     * button text color
     */
    buttonText: string;
    /**
     * danger color
     */
    danger: string;
    /**
     * success color
     */
    success: string;
    /**
     * warning color
     */
    warning: string;
    /**
     * divider color
     */
    divider: string;
    /**
     * box border/input border color
     */
    border: string;
    /**
     * icon color
     */
    icon: string;
    /**
     * input text color
     */
    inputTextColor: string;
    /**
     * input background color
     */
    inputBackground: string;
    /**
     * input border color
     */
    inputBorder: string;
    /**
     * input disabled background color
     */
    inputDisabled: string;
    /**
     * input required label color (*)
     */
    required: string;
    /**
     * skeleton background color
     */
    skeleton: string;
    /**
     * skeleton highlight background color
     */
    skeletonHighlight: string;
    /**
     * white color (hex)
     */
    white: string;
    /**
     * black color (hex)
     */
    black: string;
  };
}
