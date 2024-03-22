import React from 'react';
import { StyleSheet } from 'react-native';
import Animated, {
  useAnimatedStyle,
  withTiming,
} from 'react-native-reanimated';
import type { TextStyle } from 'react-native';
import { sizes } from '../../../theme/theming';
import { AppText } from '../../text/Text';
import { appSize } from '../../../helper/sizeHelper';

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
      : 5;

  const animStyle = useAnimatedStyle(() => {
    return {
      height: withTiming(message ? sizes.hint * 1.6 : 0, { duration: 300 }),
      marginTop: withTiming(message ? marginTop : 0, {
        duration: 200,
      }),
      opacity: withTiming(message ? 1 : 0, { duration: 300 }),
    };
  }, [message, marginTop]);

  // if (!message) {
  //   return null;
  // }

  return (
    <AnimatedText style={[styles.helperTxt, style, { color }, animStyle]}>
      {message}
    </AnimatedText>
  );
};

const AnimatedText = Animated.createAnimatedComponent(AppText);

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
    fontSize: appSize(sizes.hint),
    marginHorizontal: 1,
  },
});
