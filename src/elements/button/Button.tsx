import React, { Component } from 'react';

import Ripple from './Ripple';
import { sizes } from '../../theme/theming';
import { type AppButtonProps } from './ButtonProps';
import ButtonLoading from './ButtonLoading';
import { AppText } from '../text/Text';
import { StyleSheet } from 'react-native';
import { handleButtonStarlingStyle } from '../../helper/styleHelper';
import type { StarlingTheme } from '../../theme/type';
import StarlingThemeContext from '../../theme/ThemeContext';

export class AppButton extends Component<AppButtonProps> {
  static contextType = StarlingThemeContext;
  static defaultProps = {
    allowFontScaling: false,
  };

  context: StarlingTheme = {} as StarlingTheme;

  render() {
    const { colors } = this.context;
    if (this.props?.processing !== undefined) {
      return <ButtonLoading {...this.props} />;
    }

    const props = {
      ...this.props,

      disabledOpacity:
        this.props.disabledOpacity ?? sizes.buttonDisabledOpacity,
    };

    if (!props.reset) {
      props.width = this.props.width ?? sizes.buttonWidth;
      props.height = this.props.height ?? sizes.buttonHeight;
    }

    const { elementProps, elementStyles } = handleButtonStarlingStyle(
      props,
      colors
    );

    let textColor = props.textColor ?? 'text';
    if (!props.textColor && props.primary) {
      textColor = 'white';
    }

    return (
      <Ripple
        {...elementProps}
        rippleContainerBorderRadius={
          typeof props.radius === 'boolean' ? sizes.radius : props.radius
        }
        style={[
          !props.reset && styles.button,
          elementStyles,
          props.disabled && props.disabledStyle,
        ]}
      >
        {props.children || (
          <AppText
            adjustsFontSizeToFit
            textAlign="center"
            size={sizes.buttonText}
            style={props.textStyle}
            color={textColor}
          >
            {props.text || ''}
          </AppText>
        )}
      </Ripple>
    );
  }
}

const styles = StyleSheet.create({
  button: { alignItems: 'center', justifyContent: 'center' },
});
