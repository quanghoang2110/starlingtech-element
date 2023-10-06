import React from 'react';
import { StyleSheet } from 'react-native';
import Animated, {
  useAnimatedStyle,
  withTiming,
} from 'react-native-reanimated';
import type { TextStyle } from 'react-native';
import { sizes } from '../../../theme/theming';
import Text from '../../text/Text';

type Props = {
  style?: TextStyle;
  message?: string;
  color?: string;
};
const TextInputMessage = (props: Props) => {
  const { style, message, color } = props;

  const marginTop =
    style?.marginTop && typeof style.marginTop === 'number'
      ? style.marginTop
      : 10;

  const animStyle = useAnimatedStyle(() => {
    return {
      minHeight: withTiming(message ? 10 : 0, { duration: 300 }),
      marginTop: withTiming(message ? marginTop : 0, {
        duration: 300,
      }),
    };
  }, [message, marginTop]);

  return (
    <AnimatedText style={[styles.helperTxt, style, { color }, animStyle]}>
      {message}
    </AnimatedText>
  );
};

const AnimatedText = Animated.createAnimatedComponent(Text);

export default TextInputMessage;

const styles = StyleSheet.create({
  securePadding: { paddingRight: 70 },
  noBorder: {
    borderLeftWidth: 0,
    borderRightWidth: 0,
    borderTopWidth: 0,
    borderBottomWidth: 0,
  },
  helperTxt: {
    fontSize: sizes.hint,
    marginHorizontal: 1,
  },
});
