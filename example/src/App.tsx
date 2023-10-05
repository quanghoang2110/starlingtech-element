import * as React from 'react';

import { Text } from 'react-native';
import {
  AppBlock,
  AppButton,
  appSize,
  AppText,
  Divider,
  KeyboardDismiss,
  Skeleton,
  StarlingContainer,
} from '@starlingtech/element';
// import { AppImage } from '@starlingtech/element/image';

export default function App() {
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

  return (
    <StarlingContainer>
      <KeyboardDismiss>
        {/* <AppImage /> */}
        <AppBlock flex center background="white">
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
          <Skeleton animation="pulse" height={100} width={330} radius={100} />
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
