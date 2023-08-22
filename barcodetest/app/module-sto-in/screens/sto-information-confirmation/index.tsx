import React from 'react';
import {View, Text} from 'react-native';
import * as style from './styles';

import {InfoHeader} from './components/info-header';
import {InfoListItem} from './components/info-list-item';

export const InfomationConfirmation = () => {
  return (
    <View>
      <InfoHeader />
      <View style={style.INFOTIPS}>
        <View>
          <Text style={style.INFOTIPSTEXT}>
            Please check the paperwork，tick the matching information.
          </Text>
        </View>
      </View>
      <InfoListItem />
    </View>
  );
};
