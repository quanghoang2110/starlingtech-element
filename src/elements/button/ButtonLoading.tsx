import React, { useEffect, useState } from 'react';
import { Platform } from 'react-native';

import Animated, {
  useAnimatedStyle,
  withTiming,
} from 'react-native-reanimated';

import Ripple from './Ripple';
import { ActivityIndicator } from 'react-native';
import { useThemeContext } from '../../hook/contextHook';
import { type ButtonLoadingProps } from './ButtonProps';
import { appSize } from '../../helper/sizeHelper';
import { sizes } from '../../theme/theming';
import { AppText } from '../text/Text';
import { StyleSheet } from 'react-native';
import { AppBlock } from '../block/Block';
import { handleButtonStarlingStyle } from '../../helper/styleHelper';

const AnimatedText = Animated.createAnimatedComponent(AppText);
const AnimatedButton = Animated.createAnimatedComponent(Ripple);

export default function ButtonLoading(props: ButtonLoadingProps) {
  const {
    processing,
    width = sizes.buttonWidth,
    height = sizes.buttonHeight,
    radius = sizes.radius,
    animateCenter = true,
    animateRadius = sizes.animateButtonRadius,
    animateOpacity = sizes.animateButtonOpacity,
    animateWidth,
    primary,
    disabled,
    disabledStyle,
    disabledOpacity,
    text,
    textColor,
    textStyle,
  } = props;
  const maxWidth = appSize(width);
  const { colors } = useThemeContext();

  const borderRadius =
    radius !== undefined && typeof radius !== 'boolean'
      ? appSize(radius)
      : appSize(sizes.radius);

  const [isLoading, setIsLoading] = useState(false);

  const minWidth = animateWidth
    ? appSize(animateWidth)
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
      color={primary ? colors.white : colors.buttonText}
    />
  ) : (
    props.children || (
      <>
        <AnimatedText
          adjustsFontSizeToFit
          textAlign="center"
          size={sizes.buttonText}
          style={[textStyle, animTextStyle]}
          color={textColor || primary ? 'white' : 'text'}
        >
          {text || ''}
        </AnimatedText>
      </>
    )
  );

  const { elementStyles, elementProps } = handleButtonStarlingStyle(
    { ...props, width, height, radius },
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
      opacity: disabled
        ? disabledOpacity
        : withTiming(isLoading ? animateOpacity : 1, {
            duration: 450,
          }),
    };
  }, [isLoading, animateOpacity, animateRadius, disabled, disabledOpacity]);

  return (
    <AppBlock center={animateCenter}>
      <AnimatedButton
        {...elementProps}
        rippleContainerBorderRadius={borderRadius}
        disabled={disabled || processing || isLoading}
        style={[
          styles.button,
          elementStyles,
          animStyle,
          disabled && disabledStyle,
        ]}
      >
        {children}
      </AnimatedButton>
    </AppBlock>
  );
}

// ButtonLoading.defaultProps = {
//   width: sizes.buttonWidth,
//   height: sizes.buttonHeight,
//   radius: sizes.radius,
//   animateCenter: true,
//   animateRadius: sizes.animateButtonRadius,
//   animateOpacity: sizes.animateButtonOpacity,
// };

const styles = StyleSheet.create({
  button: { alignItems: 'center', justifyContent: 'center' },
});
