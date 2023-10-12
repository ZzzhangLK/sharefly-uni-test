<script setup lang="ts">
import { onLaunch, onShow, onHide } from '@dcloudio/uni-app'

onLaunch(() => {
  // const res = await CommonAPI.BackEndLogin({
  //   accountNo: 'admin',
  //   passWord: 'mmc123456'
  // })
  // if (res && res.code === '200') {
  //   uni.setStorageSync('token', res.result.token)
  // }
})
onShow(() => {
  console.log('App Show')
})
onHide(() => {
  console.log('App Hide')
})
</script>

<style lang="scss">
/* 注意要写在第一行，同时给style标签加入lang="scss"属性 */
@import 'uview-plus/theme.scss';
</style>
