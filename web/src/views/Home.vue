<template>
  <div>
    <swiper ref="mySwiper" :options="swiperOptions">
      <router-link
        tag="swiper-slide"
        :to="`${item.url}`"
        v-for="(item, i) in adCats"
        :key="i"
        class="py-2 d-flex picture"
      >
        <img
          class="w-100 index-100"
          :src="`${item.image}`"
          @click="jump(`${item.url}`)"
        />
      </router-link>
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
        <div class="nav-item mb-3 py-2" v-if="showSwitch === 1">
          <i class="sprite sprite-5"></i>
          <div>攻略中心</div>
        </div>
        <div class="nav-item mb-3 py-2" v-if="showSwitch === 1">
          <i class="sprite sprite-6"></i>
          <div>LOL宇宙</div>
        </div>
        <div class="nav-item mb-3 py-2" v-if="showSwitch === 1">
          <i class="sprite sprite-7"></i>
          <div>在线客服</div>
        </div>
        <div class="nav-item mb-3 py-2" v-if="showSwitch === 1">
          <i class="sprite sprite-8"></i>
          <div>微信绑定</div>
        </div>
        <div class="nav-item mb-3 py-2" v-if="showSwitch === 1">
          <i class="sprite sprite-9"></i>
          <div>购物商城</div>
        </div>
      </div>
      <div class="bg-light py-2 fs-md">
        <i class="sprite sprite-arrow mr-1" v-if="showSwitch === 1"></i>
        <i class="sprite sprite-arrow1 mr-1" v-else></i>
        <span @click="changeSwitch()" v-if="showSwitch === 1">收起</span>
        <span @click="changeSwitch()" v-else>展开</span>
      </div>
    </div>
    <!-- end of nav icons -->
    <!-- 新闻列表 -->
    <lol-list-card title="新闻资讯" icon="news" :categories="newsCats">
      <template #items="{category}">
        <router-link
          tag="div"
          :to="`/articles/${news._id}`"
          v-for="(news, i) in category.newsList"
          :key="i"
          class="py-2 d-flex"
        >
          <span class="text-info">[{{ news.categoryName }}]</span>
          <span class="px-2">|</span>
          <span class="flex-1 fs-dark-1 text-ellipsis pr-2">{{
            news.title
          }}</span>
          <span class="text-grey fs-sm">{{ news.createdAt | data }}</span>
        </router-link>
      </template>
    </lol-list-card>
    <!-- 英雄列表 -->
    <lol-list-card
      title="英雄列表"
      icon="LOL-xiaguxianfeng"
      :categories="heroCats"
    >
      <template #items="{category}">
        <div class="d-flex d-flex-wrap" style="margin: 0 -0.5rem;">
          <router-link
            tag="div"
            :to="`/heros/${hero._id}`"
            v-for="(hero, i) in category.heroList"
            :key="i"
            class="p-2 text-center"
            style="width:20%"
          >
            <img :src="hero.avatar" class="w-100" />
            <div>{{ hero.name }}</div>
          </router-link>
        </div>
      </template>
    </lol-list-card>
    <lol-card title="精彩栏目" icon="news"> </lol-card>
  </div>
</template>
<script>
import dayjs from "dayjs";
export default {
  filters: {
    data(val) {
      return dayjs(val).format("MM/DD");
    },
  },
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
      showSwitch: 0,
      newsCats: [],
      heroCats: [],
      adCats: [],
    };
  },
  methods: {
    changeSwitch() {
      this.showSwitch === 1 ? (this.showSwitch = 0) : (this.showSwitch = 1);
      console.log(this.showSwitch);
    },
    jump(url) {
      window.location.href = url;
      console.log(url);
    },
    async fetchNewsCats() {
      const res = await this.$http.get("news/list");
      this.newsCats = res.data;
      console.log(window.location.href);
    },
    async fetchAdCats() {
      const res = await this.$http.get("ads/list");
      // this.adCats = res.data;
      this.adCats = res.data.items.slice(0, 5);
      console.log(this.adCats, 1);
    },
    async fetchHeroCats() {
      const res = await this.$http.get("heros/list");
      res.data.map((v) => {
        if (v.name === "mage") {
          v.name = "法师";
        } else if (v.name === "fighter") {
          v.name = "战士";
        } else if (v.name === "tank") {
          v.name = "坦克";
        } else if (v.name === "assassin") {
          v.name = "刺客";
        } else if (v.name === "support") {
          v.name = "辅助";
        }
      });
      this.heroCats = res.data;
      console.log(this.heroCats);
    },
  },
  created() {
    this.fetchNewsCats();
    this.fetchAdCats();
    this.fetchHeroCats();
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
@media (max-width: 768px) {
  .picture {
    height: 12rem;
  }
}
@media (min-width: 769px) {
  .picture {
    height: 30rem;
  }
}
</style>
