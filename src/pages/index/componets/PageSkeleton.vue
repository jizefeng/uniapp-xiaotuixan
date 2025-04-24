<!--
此文件为开发者工具生成，生成时间: 2025/4/23下午10:35:12
使用方法：
在 C:\项目\Vue3Uniapp小兔鲜\heima-shop\dist\dev\mp-weixin\pages\index\index.wxml 引入模板

```
<import src="index.skeleton.wxml"/>
<template is="skeleton" wx:if="{{loading}}" />
```

在 C:\项目\Vue3Uniapp小兔鲜\heima-shop\dist\dev\mp-weixin\pages\index\index.wxss 中引入样式
```
@import "./index.skeleton.wxss";
```

更多详细信息可以参考文档：https://developers.weixin.qq.com/miniprogram/dev/devtools/skeleton.html
-->
<script setup lang="ts"></script>

<template name="skeleton">
  <view class="sk-container">
    <view is="components/XtxSwiper">
      <view class="carousel XtxSwiper--carousel">
        <swiper :circular="true" :interval="3000" :current="0" :autoplay="false">
          <swiper-item
            style="
              position: absolute;
              width: 100%;
              height: 100%;
              transform: translate(0%, 0px) translateZ(0px);
            "
          >
            <navigator class="navigator XtxSwiper--navigator" hover-class="none">
              <image class="image XtxSwiper--image sk-image" mode="aspectFill"></image>
            </navigator>
          </swiper-item>
        </swiper>
        <view class="indicator XtxSwiper--indicator">
          <text class="dot XtxSwiper--dot active XtxSwiper--active"></text>
          <text class="dot XtxSwiper--dot"></text>
          <text class="dot XtxSwiper--dot"></text>
          <text class="dot XtxSwiper--dot"></text>
          <text class="dot XtxSwiper--dot"></text>
        </view>
      </view>
    </view>
    <view is="pages/index/componets/CategoryPanel">
      <view class="category CategoryPanel--category">
        <navigator class="category-item CategoryPanel--category-item" hover-class="none">
          <image class="icon CategoryPanel--icon sk-image"></image>
          <text class="text CategoryPanel--text sk-transparent sk-text-14-2857-648 sk-text"
            >居家</text
          >
        </navigator>
        <navigator class="category-item CategoryPanel--category-item" hover-class="none">
          <image class="icon CategoryPanel--icon sk-image"></image>
          <text class="text CategoryPanel--text sk-transparent sk-text-14-2857-345 sk-text"
            >锦鲤</text
          >
        </navigator>
        <navigator class="category-item CategoryPanel--category-item" hover-class="none">
          <image class="icon CategoryPanel--icon sk-image"></image>
          <text class="text CategoryPanel--text sk-transparent sk-text-14-2857-920 sk-text"
            >服饰</text
          >
        </navigator>
        <navigator class="category-item CategoryPanel--category-item" hover-class="none">
          <image class="icon CategoryPanel--icon sk-image"></image>
          <text class="text CategoryPanel--text sk-transparent sk-text-14-2857-432 sk-text"
            >母婴</text
          >
        </navigator>
        <navigator class="category-item CategoryPanel--category-item" hover-class="none">
          <image class="icon CategoryPanel--icon sk-image"></image>
          <text class="text CategoryPanel--text sk-transparent sk-text-14-2857-619 sk-text"
            >个护</text
          >
        </navigator>
        <navigator class="category-item CategoryPanel--category-item" hover-class="none">
          <image class="icon CategoryPanel--icon sk-image"></image>
          <text class="text CategoryPanel--text sk-transparent sk-text-14-2857-608 sk-text"
            >严选</text
          >
        </navigator>
        <navigator class="category-item CategoryPanel--category-item" hover-class="none">
          <image class="icon CategoryPanel--icon sk-image"></image>
          <text class="text CategoryPanel--text sk-transparent sk-text-14-2857-324 sk-text"
            >数码</text
          >
        </navigator>
        <navigator class="category-item CategoryPanel--category-item" hover-class="none">
          <image class="icon CategoryPanel--icon sk-image"></image>
          <text class="text CategoryPanel--text sk-transparent sk-text-14-2857-743 sk-text"
            >运动</text
          >
        </navigator>
        <navigator class="category-item CategoryPanel--category-item" hover-class="none">
          <image class="icon CategoryPanel--icon sk-image"></image>
          <text class="text CategoryPanel--text sk-transparent sk-text-14-2857-211 sk-text"
            >杂项</text
          >
        </navigator>
        <navigator class="category-item CategoryPanel--category-item" hover-class="none">
          <image class="icon CategoryPanel--icon sk-image"></image>
          <text class="text CategoryPanel--text sk-transparent sk-text-14-2857-502 sk-text"
            >品牌</text
          >
        </navigator>
      </view>
    </view>
    <view is="pages/index/componets/HotPanel">
      <view
        class="panel HotPanel--panel hot HotPanel--hot data-v-dff78052 HotPanel--data-v-dff78052"
      >
        <view class="item HotPanel--item data-v-dff78052 HotPanel--data-v-dff78052">
          <view class="title HotPanel--title data-v-dff78052 HotPanel--data-v-dff78052">
            <text
              class="title-text HotPanel--title-text data-v-dff78052 HotPanel--data-v-dff78052 sk-transparent sk-text-14-2857-74 sk-text"
            >
              特惠推荐
            </text>
            <text
              class="title-desc HotPanel--title-desc data-v-dff78052 HotPanel--data-v-dff78052 sk-transparent sk-text-14-2857-721 sk-text"
            >
              精选全攻略
            </text>
          </view>
          <navigator
            class="cards HotPanel--cards data-v-dff78052 HotPanel--data-v-dff78052"
            hover-class="none"
          >
            <image
              class="image HotPanel--image data-v-dff78052 HotPanel--data-v-dff78052 sk-image"
              mode="aspectFit"
            ></image>
            <image
              class="image HotPanel--image data-v-dff78052 HotPanel--data-v-dff78052 sk-image"
              mode="aspectFit"
            ></image>
          </navigator>
        </view>
        <view class="item HotPanel--item data-v-dff78052 HotPanel--data-v-dff78052">
          <view class="title HotPanel--title data-v-dff78052 HotPanel--data-v-dff78052">
            <text
              class="title-text HotPanel--title-text data-v-dff78052 HotPanel--data-v-dff78052 sk-transparent sk-text-14-2857-739 sk-text"
            >
              爆款推荐
            </text>
            <text
              class="title-desc HotPanel--title-desc data-v-dff78052 HotPanel--data-v-dff78052 sk-transparent sk-text-14-2857-990 sk-text"
            >
              最受欢迎
            </text>
          </view>
          <navigator
            class="cards HotPanel--cards data-v-dff78052 HotPanel--data-v-dff78052"
            hover-class="none"
          >
            <image
              class="image HotPanel--image data-v-dff78052 HotPanel--data-v-dff78052 sk-image"
              mode="aspectFit"
            ></image>
            <image
              class="image HotPanel--image data-v-dff78052 HotPanel--data-v-dff78052 sk-image"
              mode="aspectFit"
            ></image>
          </navigator>
        </view>
        <view class="item HotPanel--item data-v-dff78052 HotPanel--data-v-dff78052">
          <view class="title HotPanel--title data-v-dff78052 HotPanel--data-v-dff78052">
            <text
              class="title-text HotPanel--title-text data-v-dff78052 HotPanel--data-v-dff78052 sk-transparent sk-text-14-2857-141 sk-text"
            >
              一站买全
            </text>
            <text
              class="title-desc HotPanel--title-desc data-v-dff78052 HotPanel--data-v-dff78052 sk-transparent sk-text-14-2857-258 sk-text"
            >
              精心优选
            </text>
          </view>
          <navigator
            class="cards HotPanel--cards data-v-dff78052 HotPanel--data-v-dff78052"
            hover-class="none"
          >
            <image
              class="image HotPanel--image data-v-dff78052 HotPanel--data-v-dff78052 sk-image"
              mode="aspectFit"
            ></image>
            <image
              class="image HotPanel--image data-v-dff78052 HotPanel--data-v-dff78052 sk-image"
              mode="aspectFit"
            ></image>
          </navigator>
        </view>
        <view class="item HotPanel--item data-v-dff78052 HotPanel--data-v-dff78052">
          <view class="title HotPanel--title data-v-dff78052 HotPanel--data-v-dff78052">
            <text
              class="title-text HotPanel--title-text data-v-dff78052 HotPanel--data-v-dff78052 sk-transparent sk-text-14-2857-935 sk-text"
            >
              新鲜好物
            </text>
            <text
              class="title-desc HotPanel--title-desc data-v-dff78052 HotPanel--data-v-dff78052 sk-transparent sk-text-14-2857-285 sk-text"
            >
              生活加分项
            </text>
          </view>
          <navigator
            class="cards HotPanel--cards data-v-dff78052 HotPanel--data-v-dff78052"
            hover-class="none"
          >
            <image
              class="image HotPanel--image data-v-dff78052 HotPanel--data-v-dff78052 sk-image"
              mode="aspectFit"
            ></image>
            <image
              class="image HotPanel--image data-v-dff78052 HotPanel--data-v-dff78052 sk-image"
              mode="aspectFit"
            ></image>
          </navigator>
        </view>
      </view>
    </view>
    <view is="components/XtxGuess" class="r r">
      <view class="caption XtxGuess--caption">
        <text
          class="text XtxGuess--text sk-transparent sk-text-0-0000-438 sk-text sk-pseudo sk-pseudo-circle"
        >
          猜你喜欢
        </text>
      </view>
    </view>
  </view>
</template>

<style>
/*
此文件为开发者工具生成，生成时间: 2025/4/23下午10:35:12

在 C:\项目\Vue3Uniapp小兔鲜\heima-shop\dist\dev\mp-weixin\pages\index\index.wxss 中引入样式
```
@import "./index.skeleton.wxss";
```

更多详细信息可以参考文档：https://developers.weixin.qq.com/miniprogram/dev/devtools/skeleton.html
*/
.sk-transparent {
  color: transparent !important;
}

.sk-text-6-2500-11 {
  background-image: linear-gradient(
    transparent 6.25%,
    #eeeeee 0%,
    #eeeeee 93.75%,
    transparent 0%
  ) !important;
  background-size: 100% 27.907rpx;
  position: relative !important;
}

.sk-text {
  background-origin: content-box !important;
  background-clip: content-box !important;
  background-color: transparent !important;
  color: transparent !important;
  background-repeat: repeat-y !important;
}

.sk-text-14-2857-647 {
  background-image: linear-gradient(
    transparent 14.2857%,
    #eeeeee 0%,
    #eeeeee 85.7143%,
    transparent 0%
  ) !important;
  background-size: 100% 39.0698rpx;
  position: relative !important;
}

.sk-text-14-2857-648 {
  background-image: linear-gradient(
    transparent 14.2857%,
    #eeeeee 0%,
    #eeeeee 85.7143%,
    transparent 0%
  ) !important;
  background-size: 100% 34.186rpx;
  position: relative !important;
}

.sk-text-14-2857-345 {
  background-image: linear-gradient(
    transparent 14.2857%,
    #eeeeee 0%,
    #eeeeee 85.7143%,
    transparent 0%
  ) !important;
  background-size: 100% 34.186rpx;
  position: relative !important;
}

.sk-text-14-2857-920 {
  background-image: linear-gradient(
    transparent 14.2857%,
    #eeeeee 0%,
    #eeeeee 85.7143%,
    transparent 0%
  ) !important;
  background-size: 100% 34.186rpx;
  position: relative !important;
}

.sk-text-14-2857-432 {
  background-image: linear-gradient(
    transparent 14.2857%,
    #eeeeee 0%,
    #eeeeee 85.7143%,
    transparent 0%
  ) !important;
  background-size: 100% 34.186rpx;
  position: relative !important;
}

.sk-text-14-2857-619 {
  background-image: linear-gradient(
    transparent 14.2857%,
    #eeeeee 0%,
    #eeeeee 85.7143%,
    transparent 0%
  ) !important;
  background-size: 100% 34.186rpx;
  position: relative !important;
}

.sk-text-14-2857-608 {
  background-image: linear-gradient(
    transparent 14.2857%,
    #eeeeee 0%,
    #eeeeee 85.7143%,
    transparent 0%
  ) !important;
  background-size: 100% 34.186rpx;
  position: relative !important;
}

.sk-text-14-2857-324 {
  background-image: linear-gradient(
    transparent 14.2857%,
    #eeeeee 0%,
    #eeeeee 85.7143%,
    transparent 0%
  ) !important;
  background-size: 100% 34.186rpx;
  position: relative !important;
}

.sk-text-14-2857-743 {
  background-image: linear-gradient(
    transparent 14.2857%,
    #eeeeee 0%,
    #eeeeee 85.7143%,
    transparent 0%
  ) !important;
  background-size: 100% 34.186rpx;
  position: relative !important;
}

.sk-text-14-2857-211 {
  background-image: linear-gradient(
    transparent 14.2857%,
    #eeeeee 0%,
    #eeeeee 85.7143%,
    transparent 0%
  ) !important;
  background-size: 100% 34.186rpx;
  position: relative !important;
}

.sk-text-14-2857-502 {
  background-image: linear-gradient(
    transparent 14.2857%,
    #eeeeee 0%,
    #eeeeee 85.7143%,
    transparent 0%
  ) !important;
  background-size: 100% 34.186rpx;
  position: relative !important;
}

.sk-text-14-2857-74 {
  background-image: linear-gradient(
    transparent 14.2857%,
    #eeeeee 0%,
    #eeeeee 85.7143%,
    transparent 0%
  ) !important;
  background-size: 100% 43.9535rpx;
  position: relative !important;
}

.sk-text-14-2857-721 {
  background-image: linear-gradient(
    transparent 14.2857%,
    #eeeeee 0%,
    #eeeeee 85.7143%,
    transparent 0%
  ) !important;
  background-size: 100% 31.7442rpx;
  position: relative !important;
}

.sk-text-14-2857-739 {
  background-image: linear-gradient(
    transparent 14.2857%,
    #eeeeee 0%,
    #eeeeee 85.7143%,
    transparent 0%
  ) !important;
  background-size: 100% 43.9535rpx;
  position: relative !important;
}

.sk-text-14-2857-990 {
  background-image: linear-gradient(
    transparent 14.2857%,
    #eeeeee 0%,
    #eeeeee 85.7143%,
    transparent 0%
  ) !important;
  background-size: 100% 31.7442rpx;
  position: relative !important;
}

.sk-text-14-2857-141 {
  background-image: linear-gradient(
    transparent 14.2857%,
    #eeeeee 0%,
    #eeeeee 85.7143%,
    transparent 0%
  ) !important;
  background-size: 100% 43.9535rpx;
  position: relative !important;
}

.sk-text-14-2857-258 {
  background-image: linear-gradient(
    transparent 14.2857%,
    #eeeeee 0%,
    #eeeeee 85.7143%,
    transparent 0%
  ) !important;
  background-size: 100% 31.7442rpx;
  position: relative !important;
}

.sk-text-14-2857-935 {
  background-image: linear-gradient(
    transparent 14.2857%,
    #eeeeee 0%,
    #eeeeee 85.7143%,
    transparent 0%
  ) !important;
  background-size: 100% 43.9535rpx;
  position: relative !important;
}

.sk-text-14-2857-285 {
  background-image: linear-gradient(
    transparent 14.2857%,
    #eeeeee 0%,
    #eeeeee 85.7143%,
    transparent 0%
  ) !important;
  background-size: 100% 31.7442rpx;
  position: relative !important;
}

.sk-text-0-0000-438 {
  background-image: linear-gradient(
    transparent 0%,
    #eeeeee 0%,
    #eeeeee 100%,
    transparent 0%
  ) !important;
  background-size: 100% 31.3953rpx;
  position: relative !important;
}

.sk-image {
  background: #efefef !important;
}

.sk-pseudo::before,
.sk-pseudo::after {
  background: #efefef !important;
  background-image: none !important;
  color: transparent !important;
  border-color: transparent !important;
}

.sk-pseudo-rect::before,
.sk-pseudo-rect::after {
  border-radius: 0 !important;
}

.sk-pseudo-circle::before,
.sk-pseudo-circle::after {
  border-radius: 50% !important;
}

.sk-container {
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
  background-color: transparent;
}
</style>
