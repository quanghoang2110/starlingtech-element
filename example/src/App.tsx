import * as React from 'react';

import { Text, TextInput } from 'react-native';
import {
  AppBlock,
  AppButton,
  appSize,
  AppText,
  AppTextInput,
  KeyboardDismiss,
  Skeleton,
  StarlingContainer,
} from '@starlingtech/element';
import { useAppColor } from './color';
import light from '../vn.starlingTech/theme/color/light';

export default function App() {
  const refInput1 = React.useRef<TextInput>(null);
  const refInput2 = React.useRef<TextInput>(null);

  const [result, setResult] = React.useState<number | undefined>();

  React.useEffect(() => {
    setResult(appSize(100));
  }, []);

  const [processing, setProcessing] = React.useState(false);

  const onPress = () => {
    setProcessing(true);
    setTimeout(() => {
      setProcessing(false);
    }, 2000);
  };

  const onValidate = (e: string) => {
    if (e.includes('a')) {
      return 'Invalid password!';
    }
    return undefined;
  };

  const onButtonPress = () => {};

  const { colors } = useAppColor();

  return (
    <StarlingContainer
      theme={{
        colors: light,
      }}
    >
      <KeyboardDismiss flex>
        <AppBlock flex background="white" ph={16} center>
          <AppBlock row mb={20}>
            <Skeleton animation="pulse" height={45} width={45} radius={10} />
            <AppBlock ml={10}>
              <Skeleton animation="pulse" height={20} width={150} radius />
              <Skeleton
                animation="pulse"
                height={20}
                width={200}
                radius
                mt={5}
              />
            </AppBlock>
          </AppBlock>

          <Text>Result: {result}</Text>
          <AppText size={20} style={{ color: colors.primary1 }}>
            Result???
          </AppText>
          <AppText color={'primary'}>TEST COLOR</AppText>

          <AppTextInput
            required
            requiredLabel
            label="Name"
            ref={refInput1}
            nextInput={refInput2}
            mb={10}
          />
          <AppTextInput
            required
            onValidate={onValidate}
            ref={refInput2}
            secureTextEntry
            label="Password"
          />
          <AppButton
            processing={processing}
            onPress={onPress}
            text="Submit"
            primary
            mt={30}
          />
          <AppButton onPress={onButtonPress} border={1} mt={10}>
            <AppText>Hello world</AppText>
          </AppButton>
        </AppBlock>
      </KeyboardDismiss>
    </StarlingContainer>
  );
}
