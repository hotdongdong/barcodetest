import React from 'react';
import {View} from 'react-native';
import {Button, Text} from '../../../../../components';
import {SwipeListView} from 'react-native-swipe-list-view';

import * as style from './styles';
import {useAction} from './hook';
import {IInfoItemListProps} from './props';

const RenderItem = (props: {item: IInfoItemListProps; index: number}) => {
  const {item, index} = props;

  return (
    <>
      <View style={style.LISTHEAD}>
        <View style={style.NO}>
          <Text style={style.LIST_DATA} text={index + 1} />
        </View>
        <View style={style.STONUMBER}>
          <Text style={style.BLUE} text={item.StoNumber} />
        </View>
        {/* <View style={style.SHIPPINGADRESS}>
          <Text style={style.LIST_DATA} text={item.ShippingAddress} />
        </View> */}
      </View>
      <View style={style.DRIVER} />
    </>
  );
};

export const InfoListItem = () => {
  const {infoItemList} = useAction();

  return (
    <View>
      <View style={style.LISTHEAD}>
        <View style={style.NO}>
          <Text style={style.LIST_DATA} text={'NO.'} />
        </View>
        <View style={style.STONUMBER}>
          <Text style={style.LIST_DATA} text={'STO Number'} />
        </View>
        <View style={style.SHIPPINGADRESS}>
          <Text style={style.LIST_DATA} text={'Shipping Address'} />
        </View>
        <Button style={style.SELECT_ALL_BTN} text={'Select All'} />
      </View>
      <View style={style.DRIVER} />
      <View />
      <SwipeListView
        data={infoItemList}
        renderItem={({item, index}) => <RenderItem item={item} index={index} />}
      />
    </View>
  );
};
