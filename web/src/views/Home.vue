<template>
  <div>
    <swiper ref="mySwiper" :options="swiperOptions">
      <swiper-slide>
        <img class="w-100" src="../assets/images//1.jpeg" alt="" srcset="" />
      </swiper-slide>
      <swiper-slide>
        <img class="w-100" src="../assets/images/2.jpeg" alt="" srcset="" />
      </swiper-slide>
      <swiper-slide>
        <img class="w-100" src="../assets/images/3.jpeg" alt="" srcset="" />
      </swiper-slide>
      <div class="swiper-pagination pagination-home" slot="pagination"></div>
    </swiper>
    <!-- end of swiper -->
    <div class="nav-icons bg-white mt-3 pt-3 text-center text-grey ai-center">
      <div class=" d-flex d-flex-wrap">
        <div class="nav-item mb-3 py-2">
          <i class="sprite sprite-1"></i>
          <div>秩序殿堂</div>
        </div>
        <div class="nav-item mb-3 py-2">
          <i class="sprite sprite-2"></i>
          <div>游戏资料</div>
        </div>
        <div class="nav-item mb-3 py-2">
          <i class="sprite sprite-3"></i>
          <div>峡谷之巅</div>
        </div>
        <div class="nav-item mb-3 py-2">
          <i class="sprite sprite-4"></i>
          <div>云顶之弈</div>
        </div>
        <div class="nav-item mb-3 py-2">
          <i class="sprite sprite-5"></i>
          <div>攻略中心</div>
        </div>
        <div class="nav-item mb-3 py-2">
          <i class="sprite sprite-6"></i>
          <div>LOL宇宙</div>
        </div>
        <div class="nav-item mb-3 py-2">
          <i class="sprite sprite-7"></i>
          <div>在线客服</div>
        </div>
        <div class="nav-item mb-3 py-2">
          <i class="sprite sprite-8"></i>
          <div>微信绑定</div>
        </div>
        <div class="nav-item mb-3 py-2">
          <i class="sprite sprite-9"></i>
          <div>购物商城</div>
        </div>
      </div>
      <div class="bg-light py-2 fs-md">
        <i class="sprite sprite-arrow mr-1"></i>
        <span>收起</span>
      </div>
    </div>
    <!-- end of nav icons -->
    <!-- <lol-card title="新闻资讯" icon="news">
      <div class="nav jc-between">
        <div class="nav-item active">
          <div class="nav-link">热门</div>
        </div>
        <div class="nav-item">
          <div class="nav-link">新闻</div>
        </div>
        <div class="nav-item">
          <div class="nav-link">公告</div>
        </div>
        <div class="nav-item">
          <div class="nav-link">活动</div>
        </div>
        <div class="nav-item">
          <div class="nav-link">赛事</div>
        </div>
      </div>
      <div class="pt-3">
        <swiper>
          <swiper-slide v-for="m in 5" :key="m">
            <div v-for="n in 5" :key="n" class="py-2">
              <span>[新闻]</span>
              <span>|</span>
              <span>徐老师来巡山292：连接五个技</span>
              <span>06/02</span>
            </div>
          </swiper-slide>
        </swiper>
      </div>
    </lol-card> -->
    <lol-list-card title="新闻资讯" icon="news" :categories="newsCats">
      <template #items="{category}">
        <div v-for="(news, i) in category.newsList" :key="i" class="py-2">
          <span>{{ news.categoryName }}</span>
          <span>|</span>
          <span>{{ news.title }}</span>
          <span>{{ news.data }}</span>
        </div>
      </template>
    </lol-list-card>
    <lol-card title="英雄列表" icon="news"> </lol-card>
    <lol-card title="精彩栏目" icon="news"> </lol-card>

    <p>adfsadfasfasf</p>
    <p>adfsadfasfasf</p>
    <p>adfsadfasfasf</p>
    <p>adfsadfasfasf</p>
    <p>adfsadfasfasf</p>
    <p>adfsadfasfasf</p>
    <p>adfsadfasfasf</p>
    <p>adfsadfasfasf</p>
    <p>adfsadfasfasf</p>
    <p>adfsadfasfasf</p>
    <p>adfsadfasfasf</p>
    <p>adfsadfasfasf</p>
    <p>adfsadfasfasf</p>
    <p>adfsadfasfasf</p>
    <p>adfsadfasfasf</p>
    <p>adfsadfasfasf</p>
    <p>adfsadfasfasf</p>
    <p>adfsadfasfasf</p>
    <p>adfsadfasfasf</p>
    <p>adfsadfasfasf</p>
    <p>adfsadfasfasf</p>
    <p>adfsadfasfasf</p>
    <p>adfsadfasfasf</p>
  </div>
</template>

<script>
export default {
  name: "carrousel",
  data() {
    return {
      swiperOptions: {
        pagination: {
          el: ".pagination-home",
          clickable: true,
          type: "bullets",
        },
        loop: true,
        speed: 600,
        autoplay: true,
      },
      newsCats: [
        {
          name: "热门",
          newsList: [
            {
              categoryName: "公告",
              title: "徐老师来巡山2：连接五个技",
              data: "06/01",
            },
            {
              categoryName: "公告",
              title: "徐老师来巡山12：连接五个技",
              data: "06/01",
            },
            {
              categoryName: "公告",
              title: "徐老师来巡山22：连接五个技",
              data: "06/01",
            },
            {
              categoryName: "公告",
              title: "徐老师来巡山32：连接五个技",
              data: "06/01",
            },
            {
              categoryName: "公告",
              title: "徐老师来巡山42：连接五个技",
              data: "06/01",
            },
          ],
        },
        {
          name: "新闻",
          newsList: [
            {
              categoryName: "新闻",
              title: "徐老师来巡山292：连接五个技",
              data: "06/01",
            },
            {
              categoryName: "新闻",
              title: "徐老师来巡山24：连接五个技",
              data: "06/01",
            },
            {
              categoryName: "新闻",
              title: "徐老师来巡山242：连接五个技",
              data: "06/01",
            },
            {
              categoryName: "新闻",
              title: "徐老师来巡山292：连接五个技",
              data: "06/01",
            },
            {
              categoryName: "新闻",
              title: "徐老师来巡山292：连接五个技",
              data: "06/01",
            },
          ],
        },
        {
          name: "公告",
          newsList: [
            {
              categoryName: "公告",
              title: "徐老师来巡山292：连接五个技",
              data: "06/01",
            },
            {
              categoryName: "公告",
              title: "徐老师来巡山292：连接五个技",
              data: "06/01",
            },
            {
              categoryName: "公告",
              title: "徐老师来巡山292：连接五个技",
              data: "06/01",
            },
            {
              categoryName: "公告",
              title: "徐老师来巡山292：连接五个技",
              data: "06/01",
            },
            {
              categoryName: "公告",
              title: "徐老师来巡山292：连接五个技",
              data: "06/01",
            },
          ],
        },
      ],
    };
  },
  computed: {
    swiper() {
      return this.$refs.mySwiper.$swiper;
    },
  },
  mounted() {
    // current swiper instance
    // 然后你就可以使用当前上下文内的swiper对象去做你想做的事了
    // console.log("this is current swiper instance object", this.swiper);
    this.swiper.slideTo(1, 1000, true);
  },
};
</script>

<style lang="scss" scoped>
@import "../assets/scss/variables";
.pagination-home {
  .swiper-pagination-bullet {
    background: map-get($colors, "white");
    margin: 0 0.1429rem;
    width: 12px;
    height: 4px;
    border-radius: 20%;
    &.swiper-pagination-bullet-active {
      background: map-get($colors, "info");
    }
  }
}
.nav-icons {
  border-top: 1px solid $border-color;
  border-bottom: 1px solid $border-color;
  .nav-item {
    width: 25%;
    border-right: 1px solid $border-color;
    &:nth-child(4n) {
      border-right: none;
    }
  }
}
</style>
