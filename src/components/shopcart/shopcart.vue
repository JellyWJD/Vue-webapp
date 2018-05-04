<template>
  <div>
    <div class="top-login">
      登录可同步购物车内商品
    <router-link to="/login" tag="a" class="btn">登录</router-link>
    </div>
    <div class="postage">全场满100元包邮，还差<span class="red">100.00</span>元包邮</div>
    <div class="shopcart-1">
      <div class="shopcart-1-con">
        <div class="icon"></div>
        <p class="text">购物车空空的，快去逛逛吧！</p>
        <div class="btn">去逛逛</div>
      </div>
    </div>
    <div class="like">
      <div class="title"><h2>· 猜你喜欢 ·</h2></div>
      <div class="goods">
        <ul class="item-wrapper">
          <li class="items" v-for="(item,index) in goods" :key="index">
            <img :src="item.SmallPic" width="150" height="150"/>
            <h2>{{ item.CommodityName }}</h2>
            <p class="price">￥<strong>{{ item.CommodityPrice }}</strong></p>
            <div class="add"></div>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
const ERR_OK = 0
const debug = process.env.NODE_ENV !== 'production'
export default {
  data () {
    return {
      goods: []
    }
  },
  created () {
    const url = debug ? '/api/like' : 'http://ustbhuangyi.com/sell/api/like'
    this.$http.get(url)
      .then((response) => {
        response = response.body
        // console.log(response)
        if (response.errno === ERR_OK) {
          this.goods = response.data.desc
        }
      })
  }
}
</script>

<style lang="stylus" rel="stylesheet/stylus">
.top-login
  position fixed
  top 0
  left 0
  width 100%
  height 40px
  background white
  font-size 13px
  color #808080
  line-height 40px
  text-align center
  border-bottom 1px solid #ddd
  z-index 99
  a
    width 55px
    height 23px
    border 1px solid #808080
    display inline-block
    vertical-align top
    line-height 23px
    margin-top 7px
    margin-left 5px
    border-radius 6px
.postage
  width 100%
  padding-left 10px
  position fixed
  top 41px
  height 40px
  color #333
  font-size 12px
  line-height 40px
  box-sizing border-box
  border-bottom 1px solid #ddd
  background #fff9eb
  z-index 99
  .red
    color red
.shopcart-1
  width 100%
  height 283px
  padding-top 89px
  text-align center
  border-bottom 1px solid #ddd
  .shopcart-1-con
    width 100%
    height 175px
    padding 55px 0
    border-top 1px solid #ddd
    .icon
      width 93px
      height 82px
      background url("http://weixin.m.yiguo.com/Images/catimg/cart.png")
      background-size auto 100%
      display inline-block
    .text
      padding 30px 0 15px 0
      font-size 13px
      color #808080
    .btn
      width 136px
      height 36px
      display inline-block
      font-size 14px
      color #11b57c
      border 1px solid #11b57c
      border-radius 6px
      line-height 36px
.like
  width 100%
  height 1162px
  .title
    width 100%
    height 50px
    text-align center
    line-height 50px
  .goods
    width 96.7%
    height 1200px
    padding 3px 6px 22px 6px
    .items
      width 41%
      height 218px
      padding 5px 16px
      display inline-block
      position relative
      h2
        overflow hidden
        text-overflow ellipsis
        white-space nowrap
        height 33px
        -webkit-box-orient: vertical;
        -webkit-line-clamp: 2;
      .price
        color red
        font-size 11px
      .add
        width 24px
        height 24px
        background url("http://weixin.m.yiguo.com/Images/catimg/add.png")
        background-size 100%
        position absolute
        bottom 20px
        right 23px
</style>
