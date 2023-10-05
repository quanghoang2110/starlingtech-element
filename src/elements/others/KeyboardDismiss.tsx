import React from 'react';
import { Keyboard, Pressable, StyleSheet } from 'react-native';
import { useKeyboard } from '../../hook/keyboardHook';

type Props = {
  children: React.ReactNode;
  disabled?: boolean;
  flex?: boolean;
};

const KeyboardDismiss: React.FunctionComponent<Props> = (props) => {
  const { keyboardVisible } = useKeyboard();

  return (
    <Pressable
      style={props.flex && styles.fill}
      disabled={props.disabled || !keyboardVisible}
      onPress={Keyboard.dismiss}
    >
      {props.children}
    </Pressable>
  );
};
export default KeyboardDismiss;
const styles = StyleSheet.create({
  fill: { flex: 1 },
});
