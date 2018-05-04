<template>
  <div id="app">
    <router-view/>
    <foot></foot>
  </div>
</template>

<script type="text/ecmascript-6">
import foot from '@/components/foot/foot'
export default {
  name: 'App',
  data () {
    return {
    }
  },
  components: {
    foot
  }
}
</script>

<style lang="stylus" rel="stylesheet/stylus">
</style>
