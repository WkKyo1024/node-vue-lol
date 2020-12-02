<template>
  <div>
    <h1>{{ id ? "编辑" : "新建" }}英雄</h1>
    <el-form label-width="120px" @submit.native.prevent="save">
      <el-tabs value="basic" type="border-card">
        <el-tab-pane label="基本信息" name="basic">
          <el-form-item label="头像">
            <el-upload
              class="avatar-uploader"
              :action="uploadUrl"
              :headers="getAuthHeaders()"
              :show-file-list="false"
              :on-success="(res) => (model.banner = res.url)"
            >
              <img v-if="model.avatar" :src="model.avatar" class="avatar" />
              <i v-else class="el-icon-plus avatar-uploader-icon"></i>
            </el-upload>
          </el-form-item>
          <el-form-item label="背景图">
            <el-upload
              class="avatar-uploader"
              :action="uploadUrl"
              :headers="getAuthHeaders()"
              :show-file-list="false"
              :on-success="(res) => (model.banner = res.url)"
            >
              <img v-if="model.banner" :src="model.banner" class="avatar" />
              <i v-else class="el-icon-plus avatar-uploader-icon"></i>
            </el-upload>
          </el-form-item>
          <el-form-item label="名称">
            <el-input v-model="model.name"></el-input>
          </el-form-item>
          <el-form-item label="称号">
            <el-input v-model="model.title"></el-input>
          </el-form-item>
          <el-form-item label="英雄类型">
            <el-select v-model="model.categories" multiple>
              <el-option
                v-for="item of categories"
                :label="item.name"
                :key="item._id"
                :value="item._id"
              ></el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="物理攻击">
            <el-rate
              v-model="model.scores.attack"
              show-score
              :max="10"
              style="margin-top:0.6rem"
            ></el-rate>
          </el-form-item>
          <el-form-item label="魔法攻击">
            <el-rate
              v-model="model.scores.skills"
              show-score
              :max="10"
              style="margin-top:0.6rem"
            ></el-rate>
          </el-form-item>
          <el-form-item label="防御能力">
            <el-rate
              v-model="model.scores.defense"
              show-score
              :max="10"
              style="margin-top:0.6rem"
            ></el-rate>
          </el-form-item>
          <el-form-item label="上手难度">
            <el-rate
              v-model="model.scores.difficult"
              show-score
              :max="10"
              style="margin-top:0.6rem"
            ></el-rate>
          </el-form-item>
          <el-form-item label="顺风出装">
            <el-select v-model="model.items1" multiple>
              <el-option
                v-for="item of items"
                :label="item.name"
                :key="item._id"
                :value="item._id"
              >
                <span style="float: left">{{ item.name }}</span>
                <img
                  :src="item.icon"
                  style="width:1rem;float: right;margin-top:0.5rem;"
                />
              </el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="逆风出装">
            <el-select v-model="model.items2" multiple>
              <el-option
                v-for="item of items"
                :label="item.name"
                :key="item._id"
                :value="item._id"
              >
                <span style="float: left">{{ item.name }}</span>
                <img
                  :src="item.icon"
                  style="width:1rem;float: right;margin-top:0.5rem;"
                />
              </el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="使用技巧">
            <el-input type="textarea" v-model="model.useTips"></el-input>
          </el-form-item>
          <el-form-item label="对抗技巧">
            <el-input type="textarea" v-model="model.battleTips"></el-input>
          </el-form-item>
          <el-form-item label="团战打法">
            <el-input type="textarea" v-model="model.teamTips"></el-input>
          </el-form-item>
        </el-tab-pane>

        <el-tab-pane label="技能" name="skills">
          <el-button @click="model.skills.push({})"
            ><i class="el-icon-plus"></i>添加技能</el-button
          >
          <el-row type="flex" style="flex-wrap: wrap;">
            <el-col :md="12" v-for="(item, i) in model.skills" :key="i">
              <el-card style="margin: 0.5rem 0.5rem"
                ><el-form-item label="技能名">
                  <el-input v-model="item.name"></el-input>
                </el-form-item>
                <el-form-item label="技能图标">
                  <el-upload
                    class="avatar-uploader"
                    :action="uploadUrl"
                    :headers="getAuthHeaders()"
                    :show-file-list="false"
                    :on-success="(res) => (item.icon = res.url)"
                  >
                    <img v-if="item.icon" :src="item.icon" class="avatar" />
                    <i v-else class="el-icon-plus avatar-uploader-icon"></i>
                  </el-upload>
                </el-form-item>
                <el-form-item label="描述">
                  <el-input v-model="item.description"></el-input>
                </el-form-item>
                <el-form-item label="小提示">
                  <el-input v-model="item.tips"></el-input>
                </el-form-item>
                <el-form-item>
                  <el-button
                    size="small"
                    type="danger"
                    @click="model.skills.splice(i, 1)"
                    >删除</el-button
                  ></el-form-item
                ></el-card
              >
            </el-col>
          </el-row>
        </el-tab-pane>

        <el-tab-pane label="羁绊" name="partners">
          <el-button @click="model.partners.push({})"
            ><i class="el-icon-plus"></i>添加羁绊</el-button
          >
          <el-row type="flex" style="flex-wrap: wrap;">
            <el-col :md="12" v-for="(item, i) in model.partners" :key="i">
              <el-card style="margin: 0.5rem 0.5rem"
                ><el-form-item label="英雄">
                  <el-select v-model="item.hero" filterable>
                    <el-option
                      v-for="hero in heroes"
                      :label="hero.name"
                      :key="hero._id"
                      :value="hero._id"
                    >
                    </el-option>
                  </el-select>
                </el-form-item>
                <el-form-item label="描述">
                  <el-input v-model="item.description"></el-input>
                </el-form-item>
                <el-form-item>
                  <el-button
                    size="small"
                    type="danger"
                    @click="model.partners.splice(i, 1)"
                    >删除</el-button
                  ></el-form-item
                ></el-card
              >
            </el-col>
          </el-row>
        </el-tab-pane>
      </el-tabs>

      <el-form-item style="margin-top:3rem;">
        <el-button type="primary" native-type="submit">保存</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {
  props: {
    id: {},
  },
  data() {
    return {
      categories: [],
      items: [],
      model: {
        name: "",
        avatar: "",
        heroes: "",
        banner: "",
        scores: {
          attack: 0,
          skills: 0,
          defense: 0,
          difficult: 0,
        },
        partners: [],
        skills: [
          {
            icon: "",
            name: "",
            description: "",
            tips: "",
          },
        ],
      },
    };
  },
  methods: {
    // afterUpload(res) {
    //   console.log(res);
    //   // model中原本不存在avatar属性 下面是一个方法
    //   // this.$set(this.model, 'avatar', res.url)
    //   this.model.avatar = res.url;
    // },
    async save() {
      let res;
      if (this.id) {
        res = await this.$http.put(`/rest/heros/${this.id}`, this.model);
      } else {
        res = await this.$http.post(`/rest/heros`, this.model);
      }
      console.log(res);
      this.$message({
        type: "success",
        message: "保存成功",
      });
    },
    async fetch() {
      const res = await this.$http.get(`/rest/heros/${this.id}`);
      this.model = Object.assign({}, this.model, res.data);
      // this.model = res.data;
    },
    async fetchCategories() {
      const res = await this.$http.get(`/rest/categories`);
      this.categories = res.data;
    },
    async fetchItems() {
      const res = await this.$http.get(`/rest/items`);
      this.items = res.data;
    },
    async fetchHeroes() {
      const res = await this.$http.get(`/rest/heroes`);
      this.heroes = res.data;
    },
  },
  created() {
    this.fetchCategories();
    this.fetchItems();
    this.fetchHeroes();
    this.id && this.fetch();
  },
};
</script>
<style></style>
