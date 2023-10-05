import React, { PureComponent } from 'react';
import type { LayoutChangeEvent } from 'react-native';
import type { GestureResponderEvent } from 'react-native';
import type { TouchableWithoutFeedbackProps } from 'react-native';
import {
  View,
  Animated,
  Easing,
  Platform,
  TouchableWithoutFeedback,
  I18nManager,
} from 'react-native';

import { StyleSheet } from 'react-native';

interface Props extends TouchableWithoutFeedbackProps {
  rippleColor?: string;
  rippleOpacity?: number;
  rippleDuration?: number;
  rippleSize?: number;
  rippleContainerBorderRadius?: number;
  rippleCentered?: boolean;
  rippleSequential?: boolean;
  rippleFades?: boolean;
  nativeID?: string;
  onRippleAnimation?: (
    animation: Animated.CompositeAnimation,
    callback: () => void
  ) => any;
}

type RippleType = {
  unique: number;
  progress: Animated.Value;
  locationX: number;
  locationY: number;
  R: number;
};

type State = {
  width: number;
  height: number;
  ripples: RippleType[];
};

export default class Ripple extends PureComponent<Props, State> {
  static defaultProps = {
    rippleColor: 'rgb(0, 0, 0)',
    rippleOpacity: 0.3,
    rippleDuration: 400,
    rippleSize: 0,
    rippleContainerBorderRadius: 0,
    rippleCentered: false,
    rippleSequential: false,
    rippleFades: true,
    disabled: false,
    onRippleAnimation: (
      animation: Animated.CompositeAnimation,
      callback: () => void
    ) => animation.start(callback),
  };

  mounted = false;
  unique = 0;

  constructor(props: Props) {
    super(props);

    this.onLayout = this.onLayout.bind(this);
    this.onPress = this.onPress.bind(this);
    this.onPressIn = this.onPressIn.bind(this);
    this.onPressOut = this.onPressOut.bind(this);
    this.onLongPress = this.onLongPress.bind(this);
    this.onAnimationEnd = this.onAnimationEnd.bind(this);

    this.renderRipple = this.renderRipple.bind(this);

    this.state = {
      width: 0,
      height: 0,
      ripples: [],
    };
  }

  componentDidMount() {
    this.mounted = true;
  }

  componentWillUnmount() {
    this.mounted = false;
  }

  onLayout(event: LayoutChangeEvent) {
    const { width, height } = event.nativeEvent.layout;
    const { onLayout } = this.props;

    if (typeof onLayout === 'function') {
      onLayout(event);
    }

    this.setState({ width, height });
  }

  onPress(event: GestureResponderEvent) {
    const { ripples } = this.state;
    const { onPress, rippleSequential } = this.props;

    if (!rippleSequential || !ripples.length) {
      if (typeof onPress === 'function') {
        requestAnimationFrame(() => onPress(event));
      }

      this.startRipple(event);
    }
  }

  onLongPress(event: GestureResponderEvent) {
    const { onLongPress } = this.props;

    if (typeof onLongPress === 'function') {
      requestAnimationFrame(() => onLongPress(event));
    }

    this.startRipple(event);
  }

  onPressIn(event: GestureResponderEvent) {
    const { onPressIn } = this.props;

    if (typeof onPressIn === 'function') {
      onPressIn(event);
    }
  }

  onPressOut(event: GestureResponderEvent) {
    const { onPressOut } = this.props;

    if (typeof onPressOut === 'function') {
      onPressOut(event);
    }
  }

  onAnimationEnd() {
    if (this.mounted) {
      this.setState(({ ripples }) => ({ ripples: ripples.slice(1) }));
    }
  }

  startRipple(event: GestureResponderEvent) {
    const { width, height } = this.state;
    const { rippleDuration, rippleCentered, rippleSize, onRippleAnimation } =
      this.props;

    const w2 = 0.5 * width;
    const h2 = 0.5 * height;

    const { locationX, locationY } = rippleCentered
      ? { locationX: w2, locationY: h2 }
      : event.nativeEvent;

    const offsetX = Math.abs(w2 - locationX);
    const offsetY = Math.abs(h2 - locationY);

    const R =
      rippleSize && rippleSize > 0
        ? 0.5 * rippleSize
        : Math.sqrt(Math.pow(w2 + offsetX, 2) + Math.pow(h2 + offsetY, 2));

    const ripple = {
      unique: this.unique++,
      progress: new Animated.Value(0),
      locationX,
      locationY,
      R,
    };

    let animation = Animated.timing(ripple.progress, {
      toValue: 1,
      easing: Easing.out(Easing.ease),
      duration: rippleDuration,
      useNativeDriver: true,
    });

    onRippleAnimation && onRippleAnimation(animation, this.onAnimationEnd);

    this.setState(({ ripples }) => ({ ripples: ripples.concat(ripple) }));
  }

  renderRipple({ unique, progress, locationX, locationY, R }: RippleType) {
    const { rippleColor, rippleOpacity, rippleFades } = this.props;

    const rippleStyle = {
      top: locationY - radius,
      [I18nManager.isRTL ? 'right' : 'left']: locationX - radius,
      backgroundColor: rippleColor,

      transform: [
        {
          scale: progress.interpolate({
            inputRange: [0, 1],
            outputRange: [0.5 / radius, R / radius],
          }),
        },
      ],

      opacity: rippleFades
        ? progress.interpolate({
            inputRange: [0, 1],
            outputRange: [rippleOpacity || 0.3, 0],
          })
        : rippleOpacity,
    };

    return <Animated.View style={[styles.ripple, rippleStyle]} key={unique} />;
  }

  render() {
    const { ripples } = this.state;
    const {
      delayLongPress,
      delayPressIn,
      delayPressOut,
      disabled,
      hitSlop,
      pressRetentionOffset,
      children,
      rippleContainerBorderRadius,
      testID,
      nativeID,
      accessible,
      accessibilityHint,
      accessibilityLabel,
      onLongPress,
      ...props
    } = this.props;

    const touchableProps = {
      delayLongPress,
      delayPressIn,
      delayPressOut,
      disabled,
      hitSlop,
      pressRetentionOffset,
      testID,
      accessible,
      accessibilityHint,
      accessibilityLabel,
      onLayout: this.onLayout,
      onPress: this.onPress,
      onPressIn: this.onPressIn,
      onPressOut: this.onPressOut,
      onLongPress: onLongPress ? this.onLongPress : undefined,

      ...(Platform.OS !== 'web' ? { nativeID } : null),
    };

    let containerStyle = {
      borderRadius: rippleContainerBorderRadius,
    };

    return (
      <TouchableWithoutFeedback {...touchableProps}>
        <Animated.View {...props} pointerEvents="box-only">
          {children}
          <View style={[styles.container, containerStyle]}>
            {ripples.map(this.renderRipple)}
          </View>
        </Animated.View>
      </TouchableWithoutFeedback>
    );
  }
}

const radius = 10;
const styles = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject,

    backgroundColor: 'transparent',
    overflow: 'hidden',
  },

  ripple: {
    width: radius * 2,
    height: radius * 2,
    borderRadius: radius,
    overflow: 'hidden',
    position: 'absolute',
  },
});
