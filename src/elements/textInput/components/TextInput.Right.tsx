import React, { type ReactElement } from 'react';
import { StyleSheet } from 'react-native';

import { useThemeContext } from '../../../hook/contextHook';
import { AppBlock } from '../../block/Block';
import formStyles from '../styles';
import { TouchableOpacity } from 'react-native';
import { Asset } from '../../../assets/Asset';
import Animated, {
  FadeIn,
  FadeInRight,
  FadeOut,
  FadeOutRight,
} from 'react-native-reanimated';

type AppInputRightProps = {
  resetVisible: boolean;
  rightIcon?: ReactElement; //custom right icon
  secureTextEntry?: boolean; //secure text entry
  iconShowPassword?: ReactElement;
  iconHidePassword?: ReactElement;
  passwordShowing?: boolean;
  iconColor?: string;
  onResetValue: () => void;
  onTogglePasswordVisible: () => void;
};

export default function TextInputRight(props: AppInputRightProps) {
  const { colors } = useThemeContext();

  const {
    resetVisible,
    rightIcon,
    secureTextEntry,
    iconShowPassword,
    iconHidePassword,
    passwordShowing,
    onResetValue,
    onTogglePasswordVisible,
  } = props;

  const iconColor = props.iconColor ?? colors.icon;

  if (props.rightIcon !== undefined) {
    return (
      <AppBlock style={styles.container} center mr={5}>
        <Animated.View
          entering={FadeInRight}
          exiting={FadeOutRight}
          key={'right-icon-1'}
        >
          {resetVisible ? (
            <TouchableOpacity onPress={onResetValue}>
              <Asset name="close" />
            </TouchableOpacity>
          ) : (
            rightIcon
          )}
        </Animated.View>
      </AppBlock>
    );
  }

  return (
    <AppBlock
      style={[styles.container, props.secureTextEntry && styles.container2]}
      center
      row
    >
      {resetVisible === true && (
        <Animated.View entering={FadeIn} exiting={FadeOut}>
          <TouchableOpacity onPress={onResetValue} style={formStyles.rightIcon}>
            <Asset name="close" />
          </TouchableOpacity>
        </Animated.View>
      )}
      {secureTextEntry === true && (
        <TouchableOpacity
          onPress={onTogglePasswordVisible}
          style={formStyles.rightIcon}
        >
          {passwordShowing === true &&
            (iconShowPassword ?? <Asset name="eye-off" color={iconColor} />)}
          {passwordShowing === false &&
            (iconHidePassword ?? <Asset name="eye" color={iconColor} />)}
        </TouchableOpacity>
      )}
    </AppBlock>
  );
}

const styles = StyleSheet.create({
  container: {
    height: '100%',
    overflow: 'hidden',
    paddingRight: 0,
    position: 'absolute',
    right: 5,
  },
  container2: {
    height: '100%',
    justifyContent: 'flex-end',
    position: 'absolute',
    right: 0,
    paddingRight: 5,
    minWidth: 50,
  },
});
