<template>
  <view class="map-warp">
    <h1>Hello</h1>
    <h2>Hello</h2>
    <h3>Hello</h3>
    <h4>Hello</h4>
    <h5>Hello</h5>
    <br />
    <u-button type="primary" @click="handleClick()">Hello</u-button>
  </view>
</template>
<script setup lang="ts">
// 点击事件
const handleClick = () => {
  uni.showToast({
    title: 'Hello',
    icon: 'none'
  })
}
</script>
<style scoped lang="scss">
.map-warp {
  position: relative;
  width: 100%;
  box-sizing: border-box;
  padding: 32rpx;
}
</style>
