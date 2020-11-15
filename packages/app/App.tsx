import React from 'react';
import {StyleSheet, View} from 'react-native';

import {Button} from '@rncl/ui';

const App = () => {
  return (
    <View
      style={{
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1,
      }}>
      <Button onPress={() => null} text={'hi'} />
    </View>
  );
};

const styles = StyleSheet.create({});
export default App;
