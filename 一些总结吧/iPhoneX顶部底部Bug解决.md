# iphoneX 设备基础信息

> iphoneX 屏幕组成：上部齐刘海（44px）+ 安全区域（safe area）+ 底部手势区域（34px）。默认，页面只显示在“安全区域”中，导致屏幕顶部和底部看起来很别扭，此时可以通过如下几种方式进行适配

## 在 meta 标签中添加 viewport-fit

##### viewport-fit

- contain 可视窗口完全包含网页内容
- cover 网页内容完全覆盖可视窗口
- auto 类似 contain

只有打开 cover 配置，才开启了 IPX 的全屏开关，IPX 默认会有保护区域的

```html
<meta name="viewport" content="width=device-width,initial-scale=1,maximum-scale=1,user-scalable=no,viewport-fit=cover">
```

##### 当设置 viewport-fit=cover 时，如下四个值需要设置，页面才会显示在安全区域中，设置如下：

```css
body {
  padding-top: constant(safe-area-inset-top); //为导航栏+状态栏总高度（88px）
  padding-left: constant(safe-area-inset-left); //如果未竖屏时，为0
  padding-right: constant(safe-area-inset-right); //如果未竖屏时，为0
  padding-bottom: constant(safe-area-inset-bottom); //为底部圆弧高度（34px）
}
```

## 判断iPhoneX机型

```css
@media only screen and (device-width: 375px) and (device-height: 812px) and (-webkit-device-pixel-ratio: 3) {
    /* 这代表IPX 的屏幕竖屏模式*/
}

@media only screen and (width: 812px) and (height: 375px) and (-webkit-device-pixel-ratio: 3) {
    /* 这代表IPX的横屏模式 */
}
```

## 定义类样式

```css
.fix_iphonex {
  @media only screen and (device-width: 375px) and (device-height: 812px) and (-webkit-device-pixel-ratio: 3) {
    padding-bottom: 34px;
  }
}
```

## ios手机页面里可滚动内容滚动不流畅

```css
/* ios手机上，网页中可滚动区域滚动不流畅，手指滑动多少页面就只滚动多少，没有弹性效果 解决办法： */
-webkit-overflow-scrolling : touch;
```