<template>
  <div id="app">
    <keep-alive :include="cachePages">
      <!-- 路由的出口 -->
      <router-view />
    </keep-alive>
  </div>
</template>
<script>
import { mapState } from 'vuex'
export default {
  name: 'App',
  computed: {
    ...mapState(['cachePages'])
  }
}
</script>
<style lang="less"></style>
