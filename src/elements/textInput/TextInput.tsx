import React, { useEffect, useState } from 'react';
import { StyleSheet, TextInput as RNTextInput } from 'react-native';
import { useThemeContext } from '../../hook/contextHook';
import { isValidEmail } from '@starlingtech/util';
import Block from '../block/Block';
import { TextInputLabel } from './components/TextInput.Label';
import formStyles from './styles';
import TextInputRight from './components/TextInput.Right';
import TextInputMessage from './components/TextInput.Message';
import {
  handleTextInputProps,
  type ElementTextInputProps,
} from './textInput.props';

const TextInput = React.forwardRef(
  (
    props: ElementTextInputProps,
    ref: React.LegacyRef<RNTextInput> | undefined
  ) => {
    const { colors } = useThemeContext();

    const {
      required,
      containerStyle,
      label,
      editable,
      errorColor = colors.danger,
      requiredLabel = true,
      iconCloseVisible = true,
      allowFontScaling = false,
    } = props;
    const [value, setValue] = useState(props.value);
    const [error, setError] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');
    const [passwordShowing, setPasswordShowing] = useState(
      !props.secureTextEntry || false
    );
    const [focused, setFocused] = useState(false);

    useEffect(() => {
      setValue(props.value);
    }, [props.value]);

    const onChangeText = (text: string) => {
      setValue(text);
      if (required) {
        const hasError = !text;
        setError(hasError);
        setErrorMessage(hasError ? 'This field is required' : '');
      }

      if (text && props.email) {
        const hasError = isValidEmail(text) === false;
        setError(hasError);
        setErrorMessage(hasError ? 'Please enter a valid email' : '');
      }

      if (props.onValidate !== undefined) {
        const _validateMsg = props.onValidate(text);
        setError(Boolean(_validateMsg));
        setErrorMessage(_validateMsg || '');
      }
      props.onChangeText && props.onChangeText(text);
    };

    const onResetValue = () => {
      onChangeText('');
    };

    const onTogglePasswordVisible = () => {
      setPasswordShowing(!passwordShowing);
    };

    const onFocus = (e: any) => {
      if (props.onFocus) {
        props.onFocus(e);
      }
      setFocused(true);
    };

    const onBlur = (e: any) => {
      if (props.onBlur) {
        props.onBlur(e);
      }
      setFocused(false);
    };

    const onSubmitEditing = (e: any) => {
      if (props.onSubmitEditing) {
        props.onSubmitEditing(e);
      }
      if (props.nextInput) {
        props.nextInput.current?.focus();
      }
    };

    const disabled = editable !== undefined && !editable;
    const resetVisible = iconCloseVisible && !disabled && Boolean(value);

    const { elementProps, elementStyles } = handleTextInputProps(props);

    return (
      <Block
        {...props}
        width={undefined}
        height={undefined}
        background={undefined}
        border={undefined}
        style={[
          formStyles.item,
          props.inline && formStyles.inline,
          containerStyle,
        ]}
      >
        <TextInputLabel
          labelStyle={props.labelStyle}
          inline={props.inline}
          label={label}
          required={required}
          requiredLabel={requiredLabel}
        />
        <Block>
          <Block>
            {props.leftIcon}
            <RNTextInput
              {...elementProps}
              allowFontScaling={allowFontScaling}
              ref={ref}
              secureTextEntry={!passwordShowing}
              value={value}
              style={[
                formStyles.inputView,
                {
                  color: colors.inputTextColor,
                  borderColor: colors.inputBorder,
                },
                elementStyles,
                resetVisible &&
                  props.secureTextEntry !== undefined &&
                  styles.securePadding,
                focused && { borderColor: colors.primary },
                error && { borderColor: errorColor },
                props.noBorder && styles.noBorder,
              ]}
              placeholderTextColor={
                props.placeholderTextColor ?? colors.placeholder
              }
              onChangeText={onChangeText}
              onFocus={onFocus}
              onBlur={onBlur}
              onSubmitEditing={onSubmitEditing}
              returnKeyType={
                props.returnKeyType ?? (props.nextInput ? 'next' : 'default')
              }
            />
            <TextInputRight
              resetVisible={resetVisible}
              secureTextEntry={props.secureTextEntry}
              onResetValue={onResetValue}
              onTogglePasswordVisible={onTogglePasswordVisible}
              passwordShowing={passwordShowing}
              iconHidePassword={props.iconHidePass}
              iconShowPassword={props.iconShowPass}
              iconColor={props.iconColor}
              rightIcon={props.rightIcon}
            />
          </Block>
          {!props.noHelper && (
            <TextInputMessage color={errorColor} message={errorMessage} />
          )}
        </Block>
      </Block>
    );
  }
);

export default TextInput;

const styles = StyleSheet.create({
  securePadding: { paddingRight: 70 },
  noBorder: {
    borderLeftWidth: 0,
    borderRightWidth: 0,
    borderTopWidth: 0,
    borderBottomWidth: 0,
  },
});
