<script setup lang="ts">
import CustomNavbar from '@/pages/index/componets/CustomNavbar.vue'
import XtxSwiper from '@/components/XtxSwiper.vue'
import { getHomeBannerApi, getHomeCategoryApi } from '@/services/home.ts'
import { onLoad } from '@dcloudio/uni-app'
import { ref } from 'vue'
import type { BannerItem, CategoryItem } from '@/types/home'
import CategoryPanel from '@/pages/index/componets/CategoryPanel.vue'

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
// 页面加载时获取数据
onLoad(() => {
  getBannerData()
  getCategoryData()
})
</script>

<template>
  <!--  自定义导航栏-->
  <CustomNavbar />
  <!--  自定义轮播图-->
  <XtxSwiper :list="bannerList" />
  <!--  分类面板-->
  <CategoryPanel :list="categoryList" />
  <view class="index"></view>
</template>

<style lang="scss">
page {
  background-color: #f7f7f7;
}
</style>
