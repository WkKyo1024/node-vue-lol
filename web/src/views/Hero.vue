<template>
  <div class="page-hero" v-if="model">
    <div class="topbar bg-black py-2 px-3 d-flex ai-center">
      <img src="../../public/jks.png" alt="" height="40" />
      <div class="flex-1">
        <span class="text-white pl-2">英雄联盟</span>
        <span class="text-white pl-2">攻略</span>
      </div>
      <router-link to="/" tag="div" class="text-light-1"
        >更多英雄 &gt;</router-link
      >
    </div>
    <div class="top" :style="{ 'background-image': `url(${model.banner})` }">
      <div class="info text-white p-3 d-flex d-flex-column jc-end">
        <div class="fs-sm">{{ model.title }}</div>
        <h2 class="my-2">{{ model.name }}</h2>
        <div class="fs-sm">
          {{
            model.categories
              .map((v) => {
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
                return v.name;
              })
              .join("/")
          }}
        </div>
        <div class="d-flex jc-between pt-2">
          <div class="scores d-flex ai-center fs-sm" v-if="model.scores">
            <span>攻击</span>
            <span class="badge bg-primary-2">{{ model.scores.attack }}</span>
            <span>技能</span>
            <span class="badge bg-primary-1">{{ model.scores.skills }}</span>
            <span>防御</span>
            <span class="badge bg-blue">{{ model.scores.defense }}</span>
            <span>难度</span>
            <span class="badge bg-green-1">{{ model.scores.difficult }}</span>
          </div>
          <span class="text-light" @click="prev()">返回</span>
          <!-- <router-link
            tag="span"
            v-show="model.scores"
            class="text-light"
            to="/"
            >返回</router-link
          > -->
        </div>
      </div>
    </div>
    <!-- end of header top -->
    <div>
      <div class="bg-white px-3">
        <div class="nav d-flex jc-around pt-3 pb-2 border-bottom">
          <div class="nav-item active">
            <div class="nav-link">英雄初识</div>
          </div>
          <div class="nav-item">
            <div class="nav-link">进阶攻略</div>
          </div>
        </div>
      </div>

      <swiper>
        <swiper-slide>
          <div>
            <div class="p-3 bg-white border-bottom">
              <div class="d-flex">
                <router-link tag="button" to="/" class="btn btn-lg flex-1">
                  <i class="iconfont icon-card-hero"></i>
                  <span>英雄介绍视频</span> </router-link
                ><router-link
                  tag="button"
                  to="/"
                  class="btn btn-lg flex-1 ml-2"
                >
                  <i class="iconfont icon-card-hero"></i>
                  <span>进阶攻略</span>
                </router-link>
              </div>

              <!-- skills -->
              <div class="skills mt-4">
                <div class="d-flex jc-around">
                  <img
                    class="icon"
                    @click="currentSkillIndex = i"
                    :class="{ active: currentSkillIndex === i }"
                    :src="item.icon"
                    v-for="(item, i) in model.skills"
                    :key="item._id"
                  />
                </div>
                <div v-if="currentSkill">
                  <div class="d-flex pt-4 pb-2">
                    <h3 class="m-0">{{ currentSkill.name }}</h3>
                    <span class="text-grey ml-4">{{ currentSkill.tips }}</span>
                  </div>
                  <p>{{ currentSkill.description }}</p>
                  <div class="border-bottom"></div>
                  <p>小提示: {{ currentSkill.tips }}</p>
                </div>
              </div>
            </div>

            <lol-card plain icon="menu1" title="出装推荐" class="hero-items">
              <div class="fs-llg">顺风出装</div>
              <div class="d-flex jc-around text-center mt-3">
                <div v-for="item in model.items1" :key="item.name">
                  <img :src="item.icon" class="icon" />
                  <div class="fs-xs">{{ item.name }}</div>
                </div>
              </div>
              <div class="border-bottom mt-3"></div>
              <div class="fs-llg mt-3">逆风出装</div>
              <div class="d-flex jc-around text-center mt-3">
                <div v-for="item in model.items2" :key="item.name">
                  <img :src="item.icon" class="icon" />
                  <div class="fs-xs">{{ item.name }}</div>
                </div>
              </div>
            </lol-card>
            <lol-card plain icon="menu1" title="使用技巧">
              <p>
                {{ model.useTips }}
              </p>
            </lol-card>
            <lol-card plain icon="menu1" title="对抗技巧">
              <p>
                {{ model.battleTips }}
              </p>
            </lol-card>
            <lol-card plain icon="menu1" title="团战技巧">
              <p>
                {{ model.teamTips }}
              </p>
            </lol-card>
            <lol-card plain icon="menu1" title="羁绊">
              <div
                v-for="item in model.partners"
                :key="item.name"
                class="d-flex py-3"
              >
                <img :src="item.hero.avatar" height="50" />
                <p class="flex-1 ml-3 m-0">{{ item.description }}</p>
              </div>
              <div class="border-bottom mt-3"></div>
            </lol-card>
          </div>
        </swiper-slide>
        <swiper-slide></swiper-slide>
      </swiper>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    id: { required: true },
  },
  data() {
    return {
      model: null,
      // 默认显示的技能索引值
      currentSkillIndex: 0,
    };
  },
  computed: {
    currentSkill() {
      return this.model.skills[this.currentSkillIndex];
    },
  },
  methods: {
    prev() {
      this.$router.go(-1);
    },
    async fetch() {
      const res = await this.$http.get(`heroes/${this.id}`);
      this.model = res.data;
      console.log(this.model);
    },
  },
  created() {
    this.fetch();
  },
};
</script>
<style lang="scss">
@import "../assets/scss/_variables.scss";
.page-hero {
  .top {
    height: 50vw;
    background: #fff no-repeat top center;
    background-size: 100% 100%;
  }
  .info {
    height: 100%;
    background: linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.8));
    .scores {
      .badge {
        margin: 0 0.25rem;
        display: inline-block;
        width: 1rem;
        height: 1rem;
        line-height: 0.9rem;
        text-align: center;
        border-radius: 50%;
        font-size: 0.7rem;
        border: 1px solid rgba(255, 255, 255, 0.2);
      }
    }
  }
  .skills {
    img.icon {
      width: 60;
      height: 60;
      border: 3px solid map-get($map: $colors, $key: "white");
      &.active {
        border-color: map-get($map: $colors, $key: "primary");
      }
    }
  }
  .hero-items {
    img.icon {
      width: 50px;
      height: 50px;
      border-radius: 50%;
    }
  }
}
</style>
