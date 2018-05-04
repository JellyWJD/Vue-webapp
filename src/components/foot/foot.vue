<template>
  <div class="foot">
    <div class="foot-con">
      <div class="nav">
        <router-link tag="li" to="/index" class="home">
          <img v-show="false" src="http://img05.yiguoimg.com/e/web/170110/00583/164146/nav_home_selected.png" width="32" height="24" />
          <img src="http://home.m.yiguo.com/Content/images/nav_home_selected_active.png" width="32" height="24" />
          <p>首页</p>
        </router-link>
        <router-link tag="li" to="/category" class="category">
          <img src="http://home.m.yiguo.com/Content/images/nav_classify.png" width="32" height="24" />
          <p>分类</p>
        </router-link>
        <router-link tag="li" to="/eat" class="eat">
          <img src="http://home.m.yiguo.com/Content/images/nav_eat.png" width="32" height="24" />
          <p>吃饭吧</p>
        </router-link>
        <router-link tag="li" to="/shopcart" class="shopcart">
          <img src="http://home.m.yiguo.com/Content/images/nav_list.png" width="32" height="24" />
          <p>购物车</p>
        </router-link>
        <router-link tag="li" to="/user" class="user">
          <img src="http://img07.yiguoimg.com/e/web/170110/00583/164146/nav_user.png" width="32" height="24" />
          <p>我的易果</p>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
export default {
  data () {
    return {
    }
  }
}
</script>

<style lang="stylus" rel="stylesheet/stylus">
.foot
  width 100%
  height 51px
  position fixed
  bottom 0
  z-index 100
  padding 0 11px
  background white
  box-sizing border-box
  .foot-con
    width 100%
    height 51px
    overflow hidden
    .nav
      text-align center
      margin-top 5px
      .home,.eat,.category,.shopcart,.user
        width 20%
        height 51px
        display inline-block
        float left
        img
          vertical-align top
        p
          color #8d8a8a
          font-size 11px
          margin-top 5px
</style>
