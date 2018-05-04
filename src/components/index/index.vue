<template>
  <div>
    <div class="search-wrapper">
      <div class="place">
        <span class="text">广州</span>
        <i class="icon-keyboard_arrow_down"></i>
      </div>
      <div class="search">
        <input type="text" class="search-con">
        <i class="icon-search"></i>
      </div>
    </div>
    <div class="swiper-container">
      <div class="swiper-wrapper">
        <div class="swiper-slide"><img src="http://img12.yiguoimg.com/e/items/2017/170206/9288700888982086_1125x652.jpg"/></div>
        <div class="swiper-slide"><img src="http://img11.yiguoimg.com/e/items/2017/170206/9288700888818246_1125x652.jpg"/></div>
        <div class="swiper-slide"><img src="http://img12.yiguoimg.com/e/items/2017/170208/9288700933775944_1125x652.jpg"/></div>
        <div class="swiper-slide"><img src="http://img11.yiguoimg.com/e/items/2017/170208/9288700935610952_1125x652.jpg"/></div>
        <div class="swiper-slide"><img src="http://img10.yiguoimg.com/e/items/2017/170117/9288700430361137_1125x652.jpg"/></div>
        <div class="swiper-pagination swiper-pagination-white"></div>
      </div>
    </div>
    <div class="act">
      <img src="http://img10.yiguoimg.com/e/items/2017/170119/9288700546654771_1125x408.jpg" width="375" height="117"/>
    </div>
    <div class="sort">
      <ul class="nav-wrapper" v-if="index === 0" v-for="(item,index) in banner.componentList" :key="index">
        <li class="nav"  v-for="(items,index) in item.componentNavs" :key="index">
          <img class="img" :src="items.pictureUrl" width="48.3" height="48.3">
          <p class="text">{{ items.navName }}</p>
        </li>
      </ul>
    </div>
    <div class="banner-1">
      <img src="http://img12.yiguoimg.com/e/items/2017/170210/9288700988760650_1125x652.jpg">
    </div>
    <div class="banner-1-con" ref="picWrapper">
      <div class="banner-1-nav" ref="picList">
        <ul class="items-wrapper" v-if="index === 3" v-for="(item,index) in banner.componentList" :key="index">
          <li class="items" v-for="(items,index) in item.componentCommoditys" :key="index">
            <img :src="items.pictureUrl" width="105.6" height="105.6"/>
            <div class="desc">
              <p class="name">{{ items.commodityName }}</p>
              <p class="price">¥{{ items.commodityPrice }} <span class="size">/{{ items.commoditySpec }}</span></p>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
import Swiper from 'swiper'
import 'swiper/dist/css/swiper.min.css'
import BScroll from 'better-scroll'
export default {
  data () {
    return {
      banner: [],
      item: {}
    }
  },
  created () {
    this.$http.get('/api/banner')
      .then((response) => {
        response = response.body
        this.banner = response.data.template
      })
    this.$nextTick(() => {
      this.InitTabScroll()
    })
  },
  mounted () {
    var mySwiper = new Swiper('.swiper-container', {
      loop: true,
      speed: 600,
      autoplay: {
        delay: 2000,
        stopOnLastSlide: false,
        disableOnInteraction: false
      },
      pagination: {
        el: 'swiper-pagination'
      },
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev'
      },
      onTouchEnd: function () {
        mySwiper.startAutoplay()
      }
    })
  },
  methods: {
    InitTabScroll () {
      if (this.banner) {
        let picWidth = 105.6
        let margin = 6
        let width = (picWidth + margin) * 6 - margin
        this.$refs.picList.style.width = width + 'px'
        this.$nextTick(() => {
          if (!this.picScroll) {
            this.picScroll = new BScroll(this.$refs.picWrapper, {
              scrollX: true,
              eventPassthrough: 'vertical'
            })
          } else {
            this.picScroll.refresh()
          }
        })
      }
    }
  }
}
</script>

<style lang="stylus" rel="stylesheet/stylus">
.search-wrapper
  position: fixed;
  top 0
  left 0
  width 100%
  height 37.44px
  box-sizing border-box
  padding 5px 10px 5px 67px
  background linear-gradient(to right, #36db84 , #0eb27b)
  z-index: 100
  .place
    width 66.4px
    height 18px
    text-align center
    font-size 0
    position absolute
    top 10px
    left 0px
    .text
      color white
      font-size 13px
      vertical-align top
      display inline-block
    .icon-keyboard_arrow_down
      font-size 14px
      color white
      vertical-align top
  .search
    position relative
    .search-con
      width 88%
      height 26px
      padding 0 10px 0 30px
      outline none
      background rgba(255,255,255,.2)
      border-radius 20px
    .icon-search
      color rgba(255,255,255,.7)
      font-size 19px
      position absolute
      top 3.5px
      left 6px
.swiper-container
  width 100%
  height 217.39px
  margin-top 37.44px
  overflow hidden
  .swiper-slide
    width 100%
    height 100%
    background-size: 100% 100% cover
    img
      padding 10px 10px 10px 12px
      border-radius 20px
      width 94%
      height 91%
.act
  width 100%
  height 114.72px
  img
    width 84%
    height 86%
    border-radius 50px
    margin 5px 30px
.sort
  width 100%
  height 163.42px
  border-top 1px solid #f1f1f1
  border-bottom  1px solid #f1f1f1
  .nav-wrapper
    padding 5px
    .nav
      width 25%
      display inline-block
      text-align center
      font-size 14px
      color #7e8c8d
      padding-bottom 10px
.sort:after
  content ""
  border 2px solid #f1f1f1
  display block
  width 99%
.banner-1
  width 100%
  height 211px
  img
    width 94%
    height 91%
    padding 10px 10px 10px 12px
    border-radius 15px
.banner-1-con
  width 100%
  height 217px
  overflow hidden
  .banner-1-nav
    overflow hidden
    white-space nowrap
    .items-wrapper
      width 105.6px
      display inline-block
      .items
        width 105.6px
        height 200px
        display inline-block
        text-align center
        margin-right 6px
        .desc
          width 100%
          height 40%
          .name
            font-size 11px
            color #333
            text-overflow ellipsis
            white-space nowrap
            width 100%
            overflow hidden
          .price
            font-size 8px
            color red
          .size
            font-size 8px
            color #7e8c8d
            margin-left -5px
          &:last-child
            margin 0
</style>
