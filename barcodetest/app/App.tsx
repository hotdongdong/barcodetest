import React from 'react';
import {SafeAreaView, Text, View, Button} from 'react-native';

import * as style from './styles';

export const App = () => {
  return (
    <SafeAreaView style={style.SAFEAREAVIEW}>
      <View style={style.APP}>
        <Text>test</Text>
        <Button title="press me" onPress={() => console.log('press me')} />
      </View>
    </SafeAreaView>
  );
};
