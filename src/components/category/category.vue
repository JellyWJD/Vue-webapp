<template>
  <div>
    <div class="search-1">
      <i class="icon-search"></i>
      <div class="content">
        <input type="text" placeholder="请输入商品名称" class="search-input">
        <span class="text">搜索</span>
      </div>
    </div>
    <div class="category-wrapper">
      <div class="menu-category" ref="menuWrapper">
        <ul>
          <li class="menu-list" @click="selectMenu(index)" ref="menuList" :class="{'active' : currentIndex === index}" v-for="(item,index) in Category" :key="index">{{ item.CategoryName }}</li>
        </ul>
      </div>
      <div class="list-category" ref="foodsWrapper">
        <ul>
          <li class="item" v-for="(item,index) in Category" :key="index" ref="foodList">
            <ul>
              <li v-for="(items,index) in item.Childs" :key="index" class="items">
                <img :src="items.PictureUrl" width="57.06" height="57.06">
                <p>{{ items.CategoryName }}</p>
              </li>
            </ul>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
import BScroll from 'better-scroll'
const ERR_OK = 0
const debug = process.env.NODE_ENV !== 'production'
export default {
  data () {
    return {
      Category: [],
      listHeight: [],
      scrollY: 0
    }
  },
  created () {
    const url = debug ? '/api/index' : 'http://ustbhuangyi.com/sell/api/goods'
    this.$http.get(url)
      .then((response) => {
        response = response.body
        // console.log(response)
        if (response.errno === ERR_OK) {
          this.Category = response.data
          // 保证先刷新页面，然后再进行计算
          this.$nextTick(() => {
            // 初始化better-scroll对象
            this._initScroll()
            this._calculateHeight()
          })
        }
      })
  },
  methods: {
    _initScroll () {
      this.menuScroll = new BScroll(this.$refs.menuWrapper, {
        click: true
      })
      this.foodsScroll = new BScroll(this.$refs.foodsWrapper, {
        click: true,
        probeType: 3
      })
      this.menuScroll.refresh()
      this.foodsScroll.refresh()
      this.foodsScroll.on('scroll', (pos) => {
        // console.log('scrollY:' + this.scrollY)
        // 如果向上滚动pos.y为负数
        if (pos.y <= 0) {
          this.scrollY = Math.abs(Math.round(pos.y))
        }
      })
    },
    _calculateHeight () {
      let foodList = this.$refs.foodList
      let height = 0
      this.listHeight.push(height)
      for (let i = 0; i < foodList.length; i++) {
        let item = foodList[i]
        height += item.clientHeight
        this.listHeight.push(height)
      }
    },
    _followScroll (index) {
      let menuList = this.$refs.menuList
      let el = menuList[index]
      /**
       * 参数1：表示滚动到哪个元素
       * 参数2：表示滚动的时间
       * 参数3-4：表示滚动的起始点和终点
       */
      this.menuScroll.scrollToElement(el, 300, 0, -100)
    },
    selectMenu (index) {
      let foodList = this.$refs.foodList
      let el = foodList[index]
      this.foodsScroll.scrollToElement(el, 300)
    }
  },
  computed: {
    currentIndex () {
      for (let i = 0; i < this.listHeight.length; i++) {
        let height1 = this.listHeight[ i ]
        let height2 = this.listHeight[ i + 1 ]
        if (!height2 ||
          (this.scrollY >= height1 && this.scrollY < height2)) {
          this._followScroll(i)
          return i
        }
      }
      return 0
    }
  }
}
</script>

<style lang="stylus" rel="stylesheet/stylus">
.search-1
  position fixed
  top 0
  width 100%
  height 45px
  border-bottom 1px solid rgba(7,17,27,0.1)
  background white
  .icon-search
    font-size 20px
    position absolute
    left 15px
    top 13px
  .content
    height 29px
    padding 8px 10px
    .search-input
      width 70%
      height 100%
      background #f4f4f4
      padding 0 30px
      border-radius 20px
      font-size 12px
      outline none
    .text
      position absolute
      right 0
      top 0
      color #11b57c
      font-size 14px
      line-height 45px
      padding-right 14px
.category-wrapper
  width 100%
  display flex
  position absolute
  top 45px
  bottom 51px
  overflow hidden
  .menu-category
    background rgb(244,244,244)
    flex 0 0 80px
    width 80px
    text-align center
    padding-top 20px
    .menu-list
      padding 21.7px 0
      font-size 13.5px
      &.active
        border-left 3px solid #11b57c
        color #11b57c
        background white
  .list-category
    flex 1
    padding 20px
    .item
      height 592px
      overflow hidden
      .items
        display inline-block
        padding 0 13px
        width 57.6px
        text-align center
        p
          padding-bottom 24px
          color #808080
          font-size 11px
          white-space nowrap
          overflow hidden
          text-overflow ellipsis
</style>
