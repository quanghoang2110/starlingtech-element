import * as React from 'react';

import { Text, TextInput } from 'react-native';
import {
  AppBlock,
  AppButton,
  appSize,
  AppText,
  AppTextInput,
  Divider,
  KeyboardDismiss,
  StarlingContainer,
} from '@starlingtech/element';
// import { AppImage } from '@starlingtech/element/image';

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
      return 'Invalid date!';
    }
    return undefined;
  };

  return (
    <StarlingContainer>
      <KeyboardDismiss flex>
        {/* <AppImage /> */}
        <AppBlock flex center background="white" ph={16}>
          <Text>Result: {result}</Text>
          <AppText size={20} color="danger">
            Result???
          </AppText>
          {/* <OverlayLoading visible /> */}
          <AppButton onPress={() => {}}>
            <AppText>aaa</AppText>
          </AppButton>
          <Divider />
          <AppButton onPress={() => {}} text="aaa" />
          {/* <Skeleton animation="pulse" height={100} width={330} radius={100} /> */}
          <AppTextInput
            label="Name"
            // inline
            onValidate={onValidate}
            ref={refInput1}
            nextInput={refInput2}
          />
          <AppTextInput ref={refInput2} secureTextEntry label="Password" />
          <AppButton
            processing={processing}
            onPress={onPress}
            text="aaa"
            primary
            width={330}
            radius={12}
            mt={30}
          />
        </AppBlock>
      </KeyboardDismiss>
    </StarlingContainer>
  );
}
