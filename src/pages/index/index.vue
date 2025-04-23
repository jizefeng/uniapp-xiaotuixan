<script setup lang="ts">
import CustomNavbar from '@/pages/index/componets/CustomNavbar.vue'
import XtxSwiper from '@/components/XtxSwiper.vue'
import { getHomeBannerApi, getHomeCategoryApi, getHomeHotAPI } from '@/services/home.ts'
import { onLoad } from '@dcloudio/uni-app'
import { ref } from 'vue'
import type { BannerItem, CategoryItem, HotItem } from '@/types/home'
import CategoryPanel from '@/pages/index/componets/CategoryPanel.vue'
import HotPanel from '@/pages/index/componets/HotPanel.vue'
import XtxGuess from '@/components/XtxGuess.vue'
import type { XtxGuessInstance } from '@/types/component'

// 获取轮播图数据
const bannerList = ref<BannerItem[]>([])
const getBannerData = async () => {
  const res = await getHomeBannerApi()
  bannerList.value = res.result
}
// 获取前台分类数据
const categoryList = ref<CategoryItem[]>([])
const getCategoryData = async () => {
  const res = await getHomeCategoryApi()
  categoryList.value = res.result
}
// 获取热门推荐数据
const hotList = ref<HotItem[]>([])
const getHotData = async () => {
  const res = await getHomeHotAPI()
  hotList.value = res.result
}

const guessRef = ref<XtxGuessInstance>()
const onScrolltolower = () => {
  guessRef.value?.getMore()
}
// 页面加载时获取数据
onLoad(() => {
  getBannerData()
  getCategoryData()
  getHotData()
})
</script>

<template>
  <!--  自定义导航栏-->
  <CustomNavbar />
  <!--  滚动容器-->
  <scroll-view @scrolltolower="onScrolltolower" scroll-y class="scroll-view">
    <!--  自定义轮播图-->
    <XtxSwiper :list="bannerList" />
    <!--  分类面板-->
    <CategoryPanel :list="categoryList" />
    <!--  热门推荐-->
    <HotPanel :list="hotList" />
    <!--  猜你喜欢-->
    <XtxGuess ref="guessRef" />
  </scroll-view>
</template>

<style lang="scss">
page {
  background-color: #f7f7f7;
  height: 100%;
  display: flex;
  flex-direction: column;

  .scroll-view {
    flex: 1;
  }
}
</style>
