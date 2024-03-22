import React, { useEffect, useRef } from 'react';
import {
  Animated,
  Platform,
  type StyleProp,
  type ViewStyle,
  StyleSheet,
} from 'react-native';

import { useThemeContext } from '../../hook/contextHook';
import { AppBlock } from '../block/Block';
import type { AppBlockProps } from '../block/BlockProps';

export interface SkeletonProps extends AppBlockProps {
  /**
   * show circular variant
   */
  circle?: boolean;
  /**
   * Type of animation
   */
  animation?: 'none' | 'pulse' | 'wave';
  /**
   * Custom style for skeleton gradient
   */
  skeletonStyle?: StyleProp<ViewStyle>;
}

const AnimatedBlock = Animated.createAnimatedComponent(AppBlock);

const Skeleton: React.FunctionComponent<SkeletonProps> = (props) => {
  const {
    circle,
    width = '100%',
    height,
    animation = 'pulse',
    style,
    skeletonStyle,
  } = props;
  const { colors } = useThemeContext();

  const animationRef = useRef(new Animated.Value(0));
  const animationLoop = useRef<Animated.CompositeAnimation>();

  const [layoutWidth, setLayoutWidth] = React.useState<number>(0);

  useEffect(() => {
    animationLoop.current = Animated.timing(animationRef.current, {
      toValue: 2,
      delay: 400,
      duration: 1500,
      useNativeDriver: !!Platform.select({
        web: false,
        native: true,
      }),
    });
    animationRef.current.setValue(0);
    Animated.loop(animationLoop.current).start();
  }, []);

  const opacity = animationRef.current.interpolate({
    inputRange: [0, 1, 2],
    outputRange: [1, 0, 1],
  });

  return (
    <AppBlock
      {...props}
      accessibilityRole="none"
      accessibilityLabel="loading..."
      accessible={false}
      onLayout={({ nativeEvent }) => {
        setLayoutWidth(nativeEvent.layout.width);
      }}
      style={[
        styles.container,
        {
          backgroundColor: colors.skeleton,
        },
        circle && {
          ...styles.circle,
          height: height || width,
        },
        style,
      ]}
    >
      {animation !== 'none' && (
        <AnimatedBlock
          style={[
            styles.skeleton,
            {
              backgroundColor: colors.skeletonHighlight,
            },
            animation === 'pulse' && {
              ...styles.fullWidth,
              opacity,
            },
            animation === 'wave' && {
              transform: [
                {
                  translateX: animationRef.current.interpolate({
                    inputRange: [0, 2],
                    outputRange: [-layoutWidth * 2, layoutWidth * 2],
                  }),
                },
              ],
            },
            skeletonStyle,
          ]}
        />
      )}
    </AppBlock>
  );
};

const styles = StyleSheet.create({
  container: {
    overflow: 'hidden',
  },
  skeleton: {
    height: '100%',
  },
  circle: {
    borderRadius: 50,
  },
  fullWidth: {
    width: '100%',
  },
});

export { Skeleton };
