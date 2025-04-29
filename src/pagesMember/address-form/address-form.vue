<script setup lang="ts">
import { ref } from 'vue'
import {
  getMemberAddressByIdAPI,
  postMemberAddressAPI,
  putMemberAddressByIdAPI,
} from '@/services/address.ts'
import { onLoad } from '@dcloudio/uni-app'

// 表单数据
const form = ref({
  // 收货人
  receiver: '',
  // 联系方式
  contact: '',
  // 省市区(前端展示)
  fullLocation: '',
  // 省份编码(后端参数)
  provinceCode: '',
  // 城市编码(后端参数)
  cityCode: '',
  // 区/县编码(后端参数)
  countyCode: '',
  // 详细地址
  address: '',
  // 默认地址，1为是，0为否
  isDefault: 0,
})
//接受参数
const query = defineProps<{
  id?: string
}>()
//动态设置标题
uni.setNavigationBarTitle({ title: query.id ? '修改地址' : '新增地址' })
// 收集所在地区
const onRegionChange: UniHelper.RegionPickerOnChange = (en) => {
  // 省市区(前端展示)
  form.value.fullLocation = en.detail.value.join(' ')
  // 省市区(后端参数)
  const [provinceCode, cityCode, countyCode] = en.detail.code!
  // 合并数据
  Object.assign(form.value, { provinceCode, cityCode, countyCode })
}
// 收集是否默认收货地址
const onSwitchChange: UniHelper.SwitchOnChange = (en) => {
  form.value.isDefault = en.detail.value ? 1 : 0
}
// 提交表单
const isLoading = ref(false)
const onSubmit = async () => {
  try {
    // 1. 添加加载状态
    if (isLoading.value) return // 防止重复提交
    isLoading.value = true
    // 判断当前页面是否有地址 id
    if (query.id) {
      // 修改地址请求
      await putMemberAddressByIdAPI(query.id, form.value)
    } else {
      // 新建地址请求
      await postMemberAddressAPI(form.value)
    }
    // 2. 添加表单验证
    // if (!validateForm(form.value)) {
    //   await uni.showToast({
    //     icon: 'none',
    //     title: '请填写完整表单信息',
    //     duration: 2000
    //   })
    //   return
    // }
    // 3. 优化API调用和错误处理
    // const response = await postMemberAddressAPI(form.value)

    // 4. 检查API响应是否成功
    // if (response.code !== 200) {
    //   throw new Error(response.msg || '保存失败')
    // }

    // 5. 优化
    await uni.showToast({
      icon: 'success',
      title: query.id ? '修改成功' : '保存成功',
      duration: 1500,
    })

    // 6. 使用更精确的导航返回
    setTimeout(() => {
      const pages = getCurrentPages()
      if (pages.length > 1) {
        uni.navigateBack({ delta: 1 })
      } else {
        uni.switchTab({ url: '/pages/my/my' }) // 备用方案
      }
    }, 1500)
  } catch (error: any) {
    console.error('提交失败:', error)
    await uni.showToast({
      icon: 'error',
      title: error.message || '保存失败，请重试',
      duration: 2000,
    })
  } finally {
    isLoading.value = false
  }
}
// 获取收货地址详情数据
const getMemberAddressByIdData = async () => {
  // 有 id 才调用接口
  if (query.id) {
    // 发送请求
    const result = await getMemberAddressByIdAPI(query.id)
    // 把数据合并到表单中
    Object.assign(form.value, result.result)
  }
}
onLoad(() => {
  getMemberAddressByIdData()
})
</script>

<template>
  <view class="content">
    <form>
      <!-- 表单内容 -->
      <view class="form-item">
        <text class="label">收货人</text>
        <input class="input" placeholder="请填写收货人姓名" v-model="form.receiver" />
      </view>
      <view class="form-item">
        <text class="label">手机号码</text>
        <input class="input" placeholder="请填写收货人手机号码" v-model="form.contact" />
      </view>
      <view class="form-item">
        <text class="label">所在地区</text>
        <picker
          class="picker"
          mode="region"
          @change="onRegionChange"
          :value="form.fullLocation.split(' ')"
        >
          <view v-if="form.fullLocation">广东省 广州市 天河区</view>
          <view v-else class="placeholder">请选择省/市/区(县)</view>
        </picker>
      </view>
      <view class="form-item">
        <text class="label">详细地址</text>
        <input class="input" placeholder="街道、楼牌号等信息" v-model="form.address" />
      </view>
      <view class="form-item">
        <label class="label">设为默认地址</label>
        <switch
          class="switch"
          color="#27ba9b"
          :checked="form.isDefault === 1"
          @change="onSwitchChange"
        />
      </view>
    </form>
  </view>
  <!-- 提交按钮 -->
  <button class="button" @tap="onSubmit">保存并使用</button>
</template>

<style lang="scss">
page {
  background-color: #f4f4f4;
}

.content {
  margin: 20rpx 20rpx 0;
  padding: 0 20rpx;
  border-radius: 10rpx;
  background-color: #fff;

  .form-item,
  .uni-forms-item {
    display: flex;
    align-items: center;
    min-height: 96rpx;
    padding: 25rpx 10rpx 40rpx;
    background-color: #fff;
    font-size: 28rpx;
    border-bottom: 1rpx solid #ddd;
    position: relative;
    margin-bottom: 0;

    // 调整 uni-forms 样式
    .uni-forms-item__content {
      display: flex;
    }

    .uni-forms-item__error {
      margin-left: 200rpx;
    }

    &:last-child {
      border: none;
    }

    .label {
      width: 200rpx;
      color: #333;
    }

    .input {
      flex: 1;
      display: block;
      height: 46rpx;
    }

    .switch {
      position: absolute;
      right: -20rpx;
      transform: scale(0.8);
    }

    .picker {
      flex: 1;
    }

    .placeholder {
      color: #808080;
    }
  }
}

.button {
  height: 80rpx;
  margin: 30rpx 20rpx;
  color: #fff;
  border-radius: 80rpx;
  font-size: 30rpx;
  background-color: #27ba9b;
}
</style>
