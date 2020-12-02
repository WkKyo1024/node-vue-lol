<template>
  <div class="page-article" v-if="this.model">
    <div class="d-flex ai-center pt-2 pb-3 px-2 border-bottom">
      <div class="iconfont icon-back text-blue"></div>
      <strong class="flex-1 fs-sm text-blue">
        {{ model.title }}
      </strong>
      <div class="text-grey fs-xs">
        {{ model.updatedAt }}
      </div>
    </div>
    <div v-html="model.body" class="px-3 fs-lg"></div>

    <div class="px-3 border-top py-3">
      <div class="d-flex ai-center">
        <i class="iconfont icon-news"></i>
        <strong class="text-blue fs-lg ml-2">相关资讯</strong>
      </div>
    </div>
    <div class="py-2 fs-sm">
      <router-link
        tag="div"
        :to="`/articles/${item._id}`"
        v-for="item in model.related"
        :key="item._id"
        class="py-1"
      >
        {{ item.title }}
      </router-link>
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
    };
  },
  watch: {
    id: "fetch",
  },
  methods: {
    async fetch() {
      const res = await this.$http.get(`/articles/${this.id}`);
      this.model = res.data;
    },
  },
  created() {
    this.fetch();
  },
};
</script>
<style lang="scss">
.page-article {
  .body {
    img {
      max-width: 100%;
      height: auto;
    }
    iframe {
      width: 100%;
      height: auto;
    }
  }
}
</style>
