<template>
  <uni-rate :size="18" :value="5" />
  <view>hello-world</view>

  <u-button type="primary">主要按钮</u-button>
  <u-button type="success">成功按钮</u-button>
  <u-button type="info">信息按钮</u-button>
  <u-button type="warning">警告按钮</u-button>
  <!--  <u-button type="error" @click="goLogin">危险按钮</u-button>-->
  <uni-popup ref="popup" type="bottom" background-color="#fff">
    <image class="logo" src="@/static/logo.png" />
  </uni-popup>
</template>

<script lang="ts">
import { defineComponent, reactive, ref } from 'vue'
import { useStore } from 'vuex'

export default defineComponent({
  name: 'HelloWorld',
  setup() {
    const store = useStore()
    const city = ref('')
    const laglnt = reactive({
      lat: '',
      lng: ''
    })
    const popup = ref()

    console.log('useStore访问store', store.state.system.title)

    return { city, laglnt, popup }
  }
  // mounted() {
  //     console.log('this访问store', this.$store.state.system.title)
  // }
})
</script>

<!--function resolve(res: UniApp.LoginRes) { throw new Error('Function not implemented.') } function-->
<!--reject(err: any) { throw new Error('Function not implemented.') } function resolve(res:-->
<!--UniApp.LoginRes) { throw new Error('Function not implemented.') }-->
