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
import Block from '../block/Block';

export interface ButtonLoadingProps extends ButtonProps {
  width: number;
  height: number;
  animateWidth?: number;
  animateRadius?: number;
  animateOpacity?: number;
  animateCenter?: boolean;
}

const AnimatedText = Animated.createAnimatedComponent(Text);
const AnimatedButton = Animated.createAnimatedComponent(Ripple);

export default function ButtonLoading(props: ButtonLoadingProps) {
  const {
    processing,
    width,
    height,
    animateRadius = sizes.animateButtonRadius,
    animateOpacity = sizes.animateButtonOpacity,
  } = props;
  const maxWidth = appSize(width);
  const { colors } = useThemeContext();

  const borderRadius =
    props.radius !== undefined && typeof props.radius !== 'boolean'
      ? appSize(props.radius)
      : appSize(sizes.radius);

  const [isLoading, setIsLoading] = useState(false);

  const minWidth = props.animateWidth
    ? appSize(props.animateWidth)
    : height
    ? appSize(height)
    : Platform.OS === 'ios'
    ? 60
    : 50;

  useEffect(() => {
    if (processing) {
      setIsLoading(true);
    } else {
      setTimeout(() => setIsLoading(false), 1200);
    }
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
      borderRadius: withTiming(isLoading ? animateRadius : borderRadius, {
        duration: 650,
      }),
      width: withTiming(isLoading ? minWidth : maxWidth, {
        duration: 450,
      }),
      // left: withTiming(isLoading ? (maxWidth - minWidth) / 2 : 0, {
      //   duration: 450,
      // }),
      opacity: props.disabled
        ? props.disabledOpacity
        : withTiming(isLoading ? animateOpacity : 1, {
            duration: 450,
          }),
    };
  }, [
    isLoading,
    animateOpacity,
    animateRadius,
    props.disabled,
    props.disabledOpacity,
  ]);

  return (
    <Block center={props.animateCenter}>
      <AnimatedButton
        {...elementProps}
        rippleContainerBorderRadius={borderRadius}
        disabled={props.disabled || props.processing || isLoading}
        style={[
          styles.button,
          elementStyles,
          animStyle,
          props.disabled && props.disabledStyle,
        ]}
      >
        {children}
      </AnimatedButton>
    </Block>
  );
}

ButtonLoading.defaultProps = {
  width: sizes.buttonWidth,
  height: sizes.buttonHeight,
  radius: sizes.radius,
  animateCenter: true,
  animateRadius: sizes.animateButtonRadius,
  animateOpacity: sizes.animateButtonOpacity,
};

const styles = StyleSheet.create({
  button: { alignItems: 'center', justifyContent: 'center' },
});
