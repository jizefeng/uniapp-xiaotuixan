<script setup lang="ts">
import CustomNavbar from '@/pages/index/componets/CustomNavbar.vue'
import XtxSwiper from '@/components/XtxSwiper.vue'
import { getHomeBannerApi } from '@/services/home.ts'
import { onLoad } from '@dcloudio/uni-app'
import { ref } from 'vue'
import type { BannerItem } from '@/types/home'
import CategoryPanel from '@/pages/index/componets/CategoryPanel.vue'

// 获取轮播图数据
const bannerList = ref<BannerItem[]>([])
const getBannerData = async () => {
  const res = await getHomeBannerApi()
  bannerList.value = res.result
}

onLoad(() => {
  getBannerData()
})
</script>

<template>
  <!--  自定义导航栏-->
  <CustomNavbar />
  <!--  自定义轮播图-->
  <XtxSwiper :list="bannerList" />
  <!--  分类面板-->
  <CategoryPanel />
  <view class="index"></view>
</template>

<style lang="scss">
page {
  background-color: #f7f7f7;
}
</style>
