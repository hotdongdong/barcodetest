import {Dimensions, PixelRatio} from 'react-native';

export const deviceWidth: number = Dimensions.get('window').width;

export const deviceHeight: number = Dimensions.get('window').height;

export const adapter = {
  uiWidth: 720, // 设计稿的宽高
  uiHeight: 1280,
  screenWidth: deviceHeight, // 当前屏幕的宽高
  screenHeight: deviceHeight,
  pixel: 1 / PixelRatio.get(), // 设备的像素密度
  pixelRatio: PixelRatio.get(), // 设备的像素比率
  fontScale: PixelRatio.getFontScale(), // 设备的字体缩放比率
  scale: Math.min(
    // 表示一个比例值，用于实现宽高的等比缩放
    deviceWidth / 1280,
    deviceHeight / 720,
  ),

  // 宽度适配，例如我的设计稿某个样式宽度是50pt，那么使用就是：adapter.autoWidth(50)
  W: function (value: number) {
    return value * (this.screenWidth / this.uiWidth);
  },

  // 高度适配，例如我的设计稿某个样式高度是50pt，那么使用就是：adapter.autoheight(50)
  H: function (value: number) {
    return value * (this.screenHeight / this.uiHeight);
  },

  // 字体大小适配，例如我的设计稿字体大小是17pt，那么使用就是：adapter.setSp(17)
  setSp: function (number: number) {
    number = Math.round(
      ((number * this.scale + 0.5) * this.pixelRatio) / this.fontScale,
    );
    return number / PixelRatio.get();
  },
};
