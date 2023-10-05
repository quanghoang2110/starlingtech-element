import React from 'react';

import Ripple from './Ripple';
import { useThemeContext } from '../../hook/contextHook';
import { sizes } from '../../theme/theming';
import { handleStarlingStyle } from '../element.props';
import type { ButtonProps } from './elements.button.props';
import ButtonLoading from './ButtonLoading';
import Text from '../text/Text';
import { StyleSheet } from 'react-native';

type Props = ButtonProps &
  (
    | { processing?: undefined }
    | {
        processing: boolean;
        width: number;
        height: number;
      }
  );

export default function Button(props: Props) {
  const { colors } = useThemeContext();
  const { elementProps, elementStyles } = handleStarlingStyle(props, colors);

  if (props?.processing !== undefined) {
    return <ButtonLoading {...props} />;
  }

  const children = props.children || (
    <Text
      adjustsFontSizeToFit
      textAlign="center"
      size={sizes.buttonText}
      style={[props.textStyle]}
      color={props.textColor || props.primary ? 'white' : 'text'}
    >
      {props.text || ''}
    </Text>
  );

  return (
    <Ripple
      {...elementProps}
      rippleContainerBorderRadius={
        typeof props.radius === 'boolean' ? sizes.radius : props.radius
      }
      style={[styles.button, elementStyles]}
    >
      {children}
    </Ripple>
  );
}

Button.defaultProps = {
  width: sizes.buttonWidth,
  height: sizes.buttonHeight,
  // radius: sizes.buttonRadius,
};

const styles = StyleSheet.create({
  button: { alignItems: 'center', justifyContent: 'center' },
});
