import React from 'react';

import Ripple from './Ripple';
import { useThemeContext } from '../../hook/contextHook';
import { sizes } from '../../theme/theming';
import {
  handleButtonStarlingStyle,
  type ButtonProps,
} from './elements.button.props';
import ButtonLoading, { type ButtonLoadingProps } from './ButtonLoading';
import Text from '../text/Text';
import { StyleSheet } from 'react-native';

type Props = ButtonProps & ({ processing?: undefined } | ButtonLoadingProps);

export default function Button(props: Props) {
  const { colors } = useThemeContext();

  if (props?.processing !== undefined) {
    return <ButtonLoading {...props} />;
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
        styles.button,
        elementStyles,
        props.disabled && props.disabledStyle,
      ]}
    >
      {props.children || (
        <Text
          adjustsFontSizeToFit
          textAlign="center"
          size={sizes.buttonText}
          style={props.textStyle}
          color={textColor}
        >
          {props.text || ''}
        </Text>
      )}
    </Ripple>
  );
}

Button.defaultProps = {
  width: sizes.buttonWidth,
  height: sizes.buttonHeight,
  disabledOpacity: sizes.buttonDisabledOpacity,
  // radius: sizes.buttonRadius,
};

const styles = StyleSheet.create({
  button: { alignItems: 'center', justifyContent: 'center' },
});
