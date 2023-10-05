import React from 'react';
import {
  Pressable,
  TouchableOpacity as RNTouchableOpacity,
  TouchableWithoutFeedback,
} from 'react-native';
import { handleStarlingStyle, type ElementProps } from '../element.props';
import { useThemeContext } from '../../hook/contextHook';
import type { TouchableOpacityProps } from 'react-native';

interface Props extends ElementProps, TouchableOpacityProps {
  sentryLabel?: string;
}

export function AppTouchableOpacity(props: Props) {
  const { colors } = useThemeContext();
  const { elementProps, elementStyles } = handleStarlingStyle(props, colors);
  return (
    <RNTouchableOpacity
      {...elementProps}
      activeOpacity={props.activeOpacity}
      onPress={props.onPress}
      style={elementStyles}
      sentry-label={props.sentryLabel}
    >
      {props.children}
    </RNTouchableOpacity>
  );
}

export function AppTouchableWithoutFeedback(props: Props) {
  const { colors } = useThemeContext();
  const { elementProps, elementStyles } = handleStarlingStyle(props, colors);
  return (
    <TouchableWithoutFeedback
      {...elementProps}
      onPress={props.onPress}
      style={elementStyles}
      sentry-label={props.sentryLabel}
    >
      {props.children}
    </TouchableWithoutFeedback>
  );
}

export function AppPressable(props: Props) {
  const { colors } = useThemeContext();
  const { elementProps, elementStyles } = handleStarlingStyle(props, colors);
  return (
    <Pressable
      {...elementProps}
      onPress={props.onPress}
      style={elementStyles}
      sentry-label={props.sentryLabel}
    >
      {props.children}
    </Pressable>
  );
}
