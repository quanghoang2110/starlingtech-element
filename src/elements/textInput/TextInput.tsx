import React, { useEffect, useState } from 'react';
import { StyleSheet, TextInput as RNTextInput } from 'react-native';
import { useThemeContext } from '../../hook/contextHook';
import { isValidEmail } from '@starlingtech/util';
import { AppBlock } from '../block/Block';
import { TextInputLabel } from './components/TextInput.Label';
import formStyles from './styles';
import TextInputRight from './components/TextInput.Right';
import TextInputMessage from './components/TextInput.Message';
import { type AppTextInputProps } from './TextInputProps';
import { handleTextInputProps } from '../../helper/styleHelper';
import type { TextInputProps } from 'react-native';

const AppTextInput = React.forwardRef(
  (
    props: AppTextInputProps & TextInputProps,
    ref?: React.LegacyRef<RNTextInput>
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
      noRight = false,
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
      let _hasError = false;
      if (required) {
        _hasError = !text;
        setError(_hasError);
        setErrorMessage(
          _hasError ? props.requiredMessage ?? 'This field is required' : ''
        );
      }

      if (!_hasError && text && props.email) {
        _hasError = isValidEmail(text) === false;
        setError(_hasError);
        setErrorMessage(
          _hasError
            ? props.invalidEmailMessage ?? 'Please enter a valid email'
            : ''
        );
      }

      if (!_hasError && props.onValidate !== undefined) {
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
      <AppBlock
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
        <AppBlock flex={props.inline}>
          <AppBlock
            row
            style={[
              formStyles.inputView,
              {
                borderColor: colors.inputBorder,
                backgroundColor: colors.inputBackground,
              },
              editable === false && {
                backgroundColor: colors.inputDisabled,
              },
              focused && { borderColor: colors.primary },
              error && { borderColor: errorColor },
              props.noBorder && styles.noBorder,
              props.inputStyle,
            ]}
          >
            {props.leftIcon}
            <RNTextInput
              {...elementProps}
              allowFontScaling={allowFontScaling}
              ref={ref}
              secureTextEntry={!passwordShowing}
              value={value}
              style={[
                formStyles.input,
                {
                  color: colors.inputTextColor,
                },
                props.leftIcon && formStyles.inputWithLeftIcon,
                !noRight && formStyles.inputWithRightIcon,
                elementStyles,
                resetVisible &&
                  props.secureTextEntry !== undefined &&
                  styles.securePadding,
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
            {!noRight && (
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
            )}
          </AppBlock>
          {!props.noHelper && (
            <TextInputMessage color={errorColor} message={errorMessage} />
          )}
        </AppBlock>
      </AppBlock>
    );
  }
);

export { AppTextInput };

const styles = StyleSheet.create({
  securePadding: { paddingRight: 70 },
  noBorder: {
    borderLeftWidth: 0,
    borderRightWidth: 0,
    borderTopWidth: 0,
    borderBottomWidth: 0,
  },
});
