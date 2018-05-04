<template>
  <div>
    <div class="top-icon">
      <ul class="icon-wrapper">
        <li class="list" v-for="(item,index) in RspData" :key="index">
          <img :src="item.PictureUrl" width="40" height="32"/>
          <p>{{ item.BannerName }}</p>
        </li>
      </ul>
      <i class="new"><img src="http://img05.yiguoimg.com/e/web/170113/00581/160217/new.png" width="30" height="24" /></i>
    </div>
    <div class="desc" v-for="(item,index) in show.List" :key="index">
      <div class="desc-wrapper">
        <span class="other">{{ item.OtherCategoryName }}</span>
        <span class="watch">{{ item.TotalReadNum }}<i class="icon-watch"></i></span>
        <img :src="item.PictureUrl" width="354" height="201"/>
        <p class="tit1">{{ item.EfruitArticleTitle }}</p>
        <p class="tit2">{{ item.EfruitArticleSummary }}</p>
        <div class="time">
          <img :src="item.AuthorPicture" width="34" height="34"/>
          <span class="text1">{{ item.Author }}</span>
          <span class="text2">{{ item.PublishedTimed }}</span>
        </div>
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
      RspData: [],
      show: {}
    }
  },
  created () {
    const url = debug ? '/api/RspData' : 'http://ustbhuangyi.com/sell/api/RspData'
    this.$http.get(url)
      .then((response) => {
        response = response.body
        if (response.errno === ERR_OK) {
          this.RspData = response.data.Banners
        }
      })
    const url1 = debug ? '/api/show' : 'http://ustbhuangyi.com/sell/api/RspData'
    this.$http.get(url1)
      .then((response) => {
        response = response.body
        if (response.errno === ERR_OK) {
          this.show = response.data.ArticleList
        }
      })
  }
}
</script>

<style lang="stylus" rel="stylesheet/stylus">
.top-icon
  width 100%
  height 91px
  position relative
  &:before
    content ""
    width 100%
    height 1px
    position absolute
    bottom  0
    left 0
    border-bottom 1px solid #ccc
    transform scaleY(.5)
  &:after
    content ""
    width 100%
    height 1px
    position absolute
    top -1px
    left 0
    border-bottom 1px solid #ccc
    transform scaleY(.5)
  .icon-wrapper
    height 100%
    padding 0 14px
    .list
      display inline-block
      text-align center
      width 20%
      padding 14px 0
      img
        padding-top 8px
      p
        padding-top 8px
        font-size 14px
        color #808080
  .new
    width 30px
    height 23px
    display block
    position absolute
    top 3px
    right 23px
.desc
  width 94.5%
  padding 2.6% 2.6% 0 2.6%
  position relative
  margin-top 5px
  &:before
    content ""
    width 100%
    height 1px
    position absolute
    bottom  0
    left 0
    border-bottom 1px solid #ccc
    transform scaleY(.5)
  &:after
    content ""
    width 100%
    height 1px
    position absolute
    top -1px
    left 0
    border-bottom 1px solid #ccc
    transform scaleY(.5)
  .tit1
    padding-top 14px
    font-size 18px
  .tit2
    color #6d6d6d
    font-size 13px
    padding-top 10px
  .other
    height 23px
    display inline-block
    background #fb3d61
    position absolute
    top 18px
    left 10px
    color white
    font-size 13px
    border-radius 0 15px 15px 0
    padding 2px 9px 0px 4px
    line-height 20px
    opacity 0.9
  .watch
    line-height 16px
    height 17px
    background rgba(255,255,255,0.85)
    text-align center
    color #656565
    font-size 12px
    position absolute
    padding 2px 8px 0 20px
    border-radius 20px
    position absolute
    top 20px
    right 20px
    .icon-watch
      width 12px
      height 9px
      background url("http://img07.yiguoimg.com/e/web/161012/00584/105027/icon.png")
      background-position 0px 0
      background-repeat no-repeat
      background-size 100%
      position absolute
      line-height 16px
      top 6px
      left 6px
  .time
    width 64.6%
    height 57px
    margin-top 10px
    padding 0 80px 0 45px
    position relative
    border-top 1px solid #f1f1f1
    img
      position absolute
      top 11px
      left 0
    .text1,.text2
      line-height 57px
      font-size 13px
      color #8d8a8a
    .text2
      position absolute
      right 0
</style>
