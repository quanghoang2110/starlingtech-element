import React, { useEffect, useState } from 'react';
import { Platform } from 'react-native';

import Animated, {
  useAnimatedStyle,
  withTiming,
} from 'react-native-reanimated';

import Ripple from './Ripple';
import { ActivityIndicator } from 'react-native';
import { useThemeContext } from '../../hook/contextHook';
import {
  handleButtonStarlingStyle,
  type ButtonProps,
} from './elements.button.props';
import { appSize } from '../../helper/sizeHelper';
import { sizes } from '../../theme/theming';
import Text from '../text/Text';
import { StyleSheet } from 'react-native';

interface Props extends ButtonProps {
  width: number;
  height: number;
}

const AnimatedText = Animated.createAnimatedComponent(Text);
const AnimatedButton = Animated.createAnimatedComponent(Ripple);

export default function ButtonLoading(props: Props) {
  const { processing, width, height } = props;
  const maxWidth = appSize(width);
  const { colors } = useThemeContext();

  const borderRadius =
    props.radius !== undefined && typeof props.radius !== 'boolean'
      ? appSize(props.radius)
      : appSize(sizes.radius);

  const [isLoading, setIsLoading] = useState(false);

  const minWidth = height ? appSize(height) : Platform.OS === 'ios' ? 60 : 50;

  useEffect(() => {
    setIsLoading(processing || false);
  }, [processing]);

  const animTextStyle = useAnimatedStyle(() => {
    return {
      transform: [{ scale: withTiming(isLoading ? 0 : 1, { duration: 450 }) }],
    };
  }, [isLoading]);

  const children = isLoading ? (
    <ActivityIndicator
      animating
      color={props.primary ? colors.white : colors.buttonText}
    />
  ) : (
    props.children || (
      <>
        <AnimatedText
          adjustsFontSizeToFit
          textAlign="center"
          size={sizes.buttonText}
          style={[props.textStyle, animTextStyle]}
          color={props.textColor || props.primary ? 'white' : 'text'}
        >
          {props.text || ''}
        </AnimatedText>
      </>
    )
  );

  const { elementStyles, elementProps } = handleButtonStarlingStyle(
    props,
    colors
  );

  const animStyle = useAnimatedStyle(() => {
    return {
      borderRadius: withTiming(isLoading ? 100 : borderRadius, {
        duration: 650,
      }),
      width: withTiming(isLoading ? minWidth : maxWidth, {
        duration: 450,
      }),
      opacity: withTiming(isLoading ? 0.9 : 1, { duration: 450 }),
    };
  }, [isLoading]);

  return (
    <AnimatedButton
      {...elementProps}
      rippleContainerBorderRadius={borderRadius}
      disabled={props.disabled || props.processing || isLoading}
      style={[styles.button, elementStyles, animStyle]}
    >
      {children}
    </AnimatedButton>
  );
}

ButtonLoading.defaultProps = {
  width: sizes.buttonWidth,
  height: sizes.buttonHeight,
  radius: sizes.radius,
};

const styles = StyleSheet.create({
  button: { alignItems: 'center', justifyContent: 'center' },
});
