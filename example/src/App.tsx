import * as React from 'react';

import { StyleSheet, Text } from 'react-native';
import { AppBlock, appSize, StarlingContainer } from '@starlingtech/element';

export default function App() {
  const [result, setResult] = React.useState<number | undefined>();

  React.useEffect(() => {
    setResult(appSize(100));
  }, []);

  return (
    <StarlingContainer>
      <AppBlock flex center background="backdrop">
        <Text>Result: {result}</Text>
      </AppBlock>
    </StarlingContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  box: {
    width: 60,
    height: 60,
    marginVertical: 20,
  },
});
