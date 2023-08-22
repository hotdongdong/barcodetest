/**
 * Font Size
 * 字体大小
 */
import {adapter} from './adapter';

type fontWeight =
  | 'normal'
  | 'bold'
  | '100'
  | '200'
  | '300'
  | '400'
  | '500'
  | '600'
  | '700'
  | '800'
  | '900';

export const Typography = {
  /**
   * 主要文字粗细 "500"
   */
  FontWeightPrimary: '500' as fontWeight,

  /**
   * 主标题文字大小 px(30)
   */
  FontSizeExtralarge: adapter.setSp(30),

  /**
   * 标题文字大小 px(28)
   */
  FontSizeLarge: adapter.setSp(28),

  /**
   * 小标题文字大小 px(26)
   */
  FontSizeMedium: adapter.setSp(26),

  /**
   * 正文文字大小 px(24)
   */
  FontSizeBase: adapter.setSp(24),
};
