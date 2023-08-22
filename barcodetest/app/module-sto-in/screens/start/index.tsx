import React from 'react';
import {View, Button} from 'react-native';

export const Start = ({navigation}) => {
  return (
    <View>
      <Button
        title="Infomation Confirmation"
        onPress={() => navigation.navigate('InfomationConfirmation')}
      />
      <Button
        title="PREVIEW Mode"
        onPress={() => navigation.navigate('PreviewMode')}
      />
    </View>
  );
};
