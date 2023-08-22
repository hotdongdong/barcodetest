import {IInfoItemListProps} from './props';

export const useAction = () => {
  const infoItemList: IInfoItemListProps[] = [
    {
      No: 1,
      StoNumber: '5000043515',
      ShippingAddress: 'adress1',
    },
    {
      No: 2,
      StoNumber: '5000043516',
      ShippingAddress: 'adress2',
    },
    {
      No: 3,
      StoNumber: '5000043517',
      ShippingAddress: 'adress3',
    },
    {
      No: 4,
      StoNumber: '5000043514',
      ShippingAddress: 'adress4',
    },
  ];

  return {infoItemList};
};
