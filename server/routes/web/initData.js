// 初始化 批量导入新闻
router.get("/news/init", async (req, res) => {
  const parent = await Category.findOne({
    name: "新闻分类",
  });
  const cats = await Category.find()
    .where({
      parent: parent,
    })
    .lean();
  const newsTitles = [
    "LPL全明星周末每日票数汇总，截止至11月24日中午12点整",
    "一图带你了解2020LPL全明星周末选手投票规则",
    "LPL全明星周末每日票数汇总，截止至11月23日中午12点整",
    "LPL全明星周末每日票数汇总，截止至11月22日中午12点整",
    "2020英雄联盟职业青训营《新星报告》第二期：破茧，再出发",
    "LPL全明星周末每日票数汇总，截止至11月21日中午12点整",
    "新英雄芮尔背景解析，诺克萨斯内鬼？",
    "TheShy“你问我答”：从中国开始打职业不会优先考虑LCK",
    "【10.24版本】风琴璐娜星大胜利？两款辅助新皮肤鉴赏",
    "从万人瞩目到遗憾退场！带你回顾RNG的兴衰",
    "奥恩杰作装备命名的含义——枫语解读",
    "徐老师来巡山292：连接五个技能，凯特琳死于太菜",
    "【带你看季前赛】S11季前赛虚空之女大型攻略火热来袭",
    "空大的劫亲笔：王者ZED新赛季分享摒弃暮刃星蚀当道",
    "【带你看季前赛】一文包学会，版本T1硬辅曙光女神",
    "【排位黑科技】Rookie峡谷制造者阿卡丽横空出世",
    "螳螂星蚀暮刃怎么选？新赛季刷野路线及打法！",
    "【苏御】王者野王教你玩蔚！超详细保姆级教学",
    "10.24云顶之弈版本更新公告",
    "星界携星之守护者索拉卡至臻即将上线",
    "2020年11月23日不停机更新公告",
    "游戏环境公示及处罚名单11月20日",
    "2020年11月20日不停机更新公告",
    "峡谷之巅第七赛季奖励公告",
    "10.24云顶之弈版本更新公告",
    "星界携星之守护者索拉卡至臻即将上线",
    "八年积淀传承LPL名人堂正式成立",
    "用心守护每一份热爱英雄联盟客服“英雄服务站”来了",
    "一图带你了解2020LPL全明星周末选手投票规则",
    "欢迎来到女帝们的世界！",
  ];
  const newsList = newsTitles.map((title) => {
    const randomCats = cats.slice(0).sort((a, b) => {
      return Math.random() - 0.5;
    });
    return {
      categories: randomCats.slice(0, 1),
      title: title,
    };
  });
  await Article.deleteMany({});
  await Article.insertMany(newsList);
  res.send(newsList);
});

 // 初始化  导入英雄数据
 router.get("/heros/init", async (req, res) => {
  const rawData = [
    {
      title: "黑暗之女",
      name: "安妮",
      categories: ["mage"],
      avatar: "https://game.gtimg.cn/images/lol/act/img/champion/Annie.png",
    },
    {
      title: "狂战士",
      name: "奥拉夫",
      categories: ["fighter", "tank"],
      avatar: "https://game.gtimg.cn/images/lol/act/img/champion/Olaf.png",
    },
    {
      title: "正义巨像",
      name: "加里奥",
      categories: ["tank", "mage"],
      avatar: "https://game.gtimg.cn/images/lol/act/img/champion/Galio.png",
    },
    {
      title: "卡牌大师",
      name: "崔斯特",
      categories: ["mage"],
      avatar:
        "https://game.gtimg.cn/images/lol/act/img/champion/TwistedFate.png",
    },
    {
      title: "德邦总管",
      name: "赵信",
      categories: ["fighter", "assassin"],
      avatar: "https://game.gtimg.cn/images/lol/act/img/champion/XinZhao.png",
    },
    {
      title: "无畏战车",
      name: "厄加特",
      categories: ["fighter", "tank"],
      avatar: "https://game.gtimg.cn/images/lol/act/img/champion/Urgot.png",
    },
    {
      title: "诡术妖姬",
      name: "乐芙兰",
      categories: ["assassin", "mage"],
      avatar: "https://game.gtimg.cn/images/lol/act/img/champion/Leblanc.png",
    },
    {
      title: "猩红收割者",
      name: "弗拉基米尔",
      categories: ["mage"],
      avatar:
        "https://game.gtimg.cn/images/lol/act/img/champion/Vladimir.png",
    },
    {
      title: "远古恐惧",
      name: "费德提克",
      categories: ["mage", "support"],
      avatar:
        "https://game.gtimg.cn/images/lol/act/img/champion/FiddleSticks.png",
    },
    {
      title: "正义天使",
      name: "凯尔",
      categories: ["fighter", "support"],
      avatar: "https://game.gtimg.cn/images/lol/act/img/champion/Kayle.png",
    },
    {
      title: "无极剑圣",
      name: "易",
      categories: ["assassin", "fighter"],
      avatar:
        "https://game.gtimg.cn/images/lol/act/img/champion/MasterYi.png",
    },
    {
      title: "牛头酋长",
      name: "阿利斯塔",
      categories: ["tank", "support"],
      avatar: "https://game.gtimg.cn/images/lol/act/img/champion/Alistar.png",
    },
    {
      title: "符文法师",
      name: "瑞兹",
      categories: ["mage", "fighter"],
      avatar: "https://game.gtimg.cn/images/lol/act/img/champion/Ryze.png",
    },
    {
      title: "亡灵战神",
      name: "赛恩",
      categories: ["tank", "fighter"],
      avatar: "https://game.gtimg.cn/images/lol/act/img/champion/Sion.png",
    },
    {
      title: "战争女神",
      name: "希维尔",
      categories: ["marksman"],
      avatar: "https://game.gtimg.cn/images/lol/act/img/champion/Sivir.png",
    },
    {
      title: "众星之子",
      name: "索拉卡",
      categories: ["support", "mage"],
      avatar: "https://game.gtimg.cn/images/lol/act/img/champion/Soraka.png",
    },
    {
      title: "迅捷斥候",
      name: "提莫",
      categories: ["marksman", "assassin"],
      avatar: "https://game.gtimg.cn/images/lol/act/img/champion/Teemo.png",
    },
    {
      title: "麦林炮手",
      name: "崔丝塔娜",
      categories: ["marksman", "assassin"],
      avatar:
        "https://game.gtimg.cn/images/lol/act/img/champion/Tristana.png",
    },
    {
      title: "祖安怒兽",
      name: "沃里克",
      categories: ["fighter", "tank"],
      avatar: "https://game.gtimg.cn/images/lol/act/img/champion/Warwick.png",
    },
    {
      title: "雪原双子",
      name: "努努和威朗普",
      categories: ["tank", "fighter"],
      avatar: "https://game.gtimg.cn/images/lol/act/img/champion/Nunu.png",
    },
    {
      title: "赏金猎人",
      name: "厄运小姐",
      categories: ["marksman"],
      avatar:
        "https://game.gtimg.cn/images/lol/act/img/champion/MissFortune.png",
    },
    {
      title: "寒冰射手",
      name: "艾希",
      categories: ["marksman", "support"],
      avatar: "https://game.gtimg.cn/images/lol/act/img/champion/Ashe.png",
    },
    {
      title: "蛮族之王",
      name: "泰达米尔",
      categories: ["fighter", "assassin"],
      avatar:
        "https://game.gtimg.cn/images/lol/act/img/champion/Tryndamere.png",
    },
    {
      title: "武器大师",
      name: "贾克斯",
      categories: ["fighter", "assassin"],
      avatar: "https://game.gtimg.cn/images/lol/act/img/champion/Jax.png",
    },
    {
      title: "堕落天使",
      name: "莫甘娜",
      categories: ["mage", "support"],
      avatar: "https://game.gtimg.cn/images/lol/act/img/champion/Morgana.png",
    },
    {
      title: "时光守护者",
      name: "基兰",
      categories: ["support", "mage"],
      avatar: "https://game.gtimg.cn/images/lol/act/img/champion/Zilean.png",
    },
    {
      title: "炼金术士",
      name: "辛吉德",
      categories: ["tank", "fighter"],
      avatar: "https://game.gtimg.cn/images/lol/act/img/champion/Singed.png",
    },
    {
      title: "痛苦之拥",
      name: "伊芙琳",
      categories: ["assassin", "mage"],
      avatar: "https://game.gtimg.cn/images/lol/act/img/champion/Evelynn.png",
    },
    {
      title: "瘟疫之源",
      name: "图奇",
      categories: ["marksman", "assassin"],
      avatar: "https://game.gtimg.cn/images/lol/act/img/champion/Twitch.png",
    },
    {
      title: "死亡颂唱者",
      name: "卡尔萨斯",
      categories: ["mage"],
      avatar: "https://game.gtimg.cn/images/lol/act/img/champion/Karthus.png",
    },
    {
      title: "虚空恐惧",
      name: "科加斯",
      categories: ["tank", "mage"],
      avatar: "https://game.gtimg.cn/images/lol/act/img/champion/Chogath.png",
    },
    {
      title: "殇之木乃伊",
      name: "阿木木",
      categories: ["tank", "mage"],
      avatar: "https://game.gtimg.cn/images/lol/act/img/champion/Amumu.png",
    },
    {
      title: "披甲龙龟",
      name: "拉莫斯",
      categories: ["tank", "fighter"],
      avatar: "https://game.gtimg.cn/images/lol/act/img/champion/Rammus.png",
    },
    {
      title: "冰晶凤凰",
      name: "艾尼维亚",
      categories: ["mage", "support"],
      avatar: "https://game.gtimg.cn/images/lol/act/img/champion/Anivia.png",
    },
    {
      title: "恶魔小丑",
      name: "萨科",
      categories: ["assassin"],
      avatar: "https://game.gtimg.cn/images/lol/act/img/champion/Shaco.png",
    },
    {
      title: "祖安狂人",
      name: "蒙多医生",
      categories: ["fighter", "tank"],
      avatar: "https://game.gtimg.cn/images/lol/act/img/champion/DrMundo.png",
    },
    {
      title: "琴瑟仙女",
      name: "娑娜",
      categories: ["support", "mage"],
      avatar: "https://game.gtimg.cn/images/lol/act/img/champion/Sona.png",
    },
    {
      title: "虚空行者",
      name: "卡萨丁",
      categories: ["assassin", "mage"],
      avatar:
        "https://game.gtimg.cn/images/lol/act/img/champion/Kassadin.png",
    },
    {
      title: "刀锋舞者",
      name: "艾瑞莉娅",
      categories: ["fighter", "assassin"],
      avatar: "https://game.gtimg.cn/images/lol/act/img/champion/Irelia.png",
    },
    {
      title: "风暴之怒",
      name: "迦娜",
      categories: ["support", "mage"],
      avatar: "https://game.gtimg.cn/images/lol/act/img/champion/Janna.png",
    },
    {
      title: "海洋之灾",
      name: "普朗克",
      categories: ["fighter"],
      avatar:
        "https://game.gtimg.cn/images/lol/act/img/champion/Gangplank.png",
    },
    {
      title: "英勇投弹手",
      name: "库奇",
      categories: ["marksman"],
      avatar: "https://game.gtimg.cn/images/lol/act/img/champion/Corki.png",
    },
    {
      title: "天启者",
      name: "卡尔玛",
      categories: ["mage", "support"],
      avatar: "https://game.gtimg.cn/images/lol/act/img/champion/Karma.png",
    },
    {
      title: "瓦洛兰之盾",
      name: "塔里克",
      categories: ["support", "fighter"],
      avatar: "https://game.gtimg.cn/images/lol/act/img/champion/Taric.png",
    },
    {
      title: "邪恶小法师",
      name: "维迦",
      categories: ["mage"],
      avatar: "https://game.gtimg.cn/images/lol/act/img/champion/Veigar.png",
    },
    {
      title: "巨魔之王",
      name: "特朗德尔",
      categories: ["fighter", "tank"],
      avatar: "https://game.gtimg.cn/images/lol/act/img/champion/Trundle.png",
    },
    {
      title: "诺克萨斯统领",
      name: "斯维因",
      categories: ["mage", "fighter"],
      avatar: "https://game.gtimg.cn/images/lol/act/img/champion/Swain.png",
    },
    {
      title: "皮城女警",
      name: "凯特琳",
      categories: ["marksman"],
      avatar: "https://game.gtimg.cn/images/lol/act/img/champion/Caitlyn.png",
    },
    {
      title: "蒸汽机器人",
      name: "布里茨",
      categories: ["tank", "fighter", "support"],
      avatar:
        "https://game.gtimg.cn/images/lol/act/img/champion/Blitzcrank.png",
    },
    {
      title: "熔岩巨兽",
      name: "墨菲特",
      categories: ["tank", "fighter"],
      avatar:
        "https://game.gtimg.cn/images/lol/act/img/champion/Malphite.png",
    },
    {
      title: "不祥之刃",
      name: "卡特琳娜",
      categories: ["assassin", "mage"],
      avatar:
        "https://game.gtimg.cn/images/lol/act/img/champion/Katarina.png",
    },
    {
      title: "永恒梦魇",
      name: "魔腾",
      categories: ["assassin", "fighter"],
      avatar:
        "https://game.gtimg.cn/images/lol/act/img/champion/Nocturne.png",
    },
    {
      title: "扭曲树精",
      name: "茂凯",
      categories: ["tank", "mage"],
      avatar: "https://game.gtimg.cn/images/lol/act/img/champion/Maokai.png",
    },
    {
      title: "荒漠屠夫",
      name: "雷克顿",
      categories: ["fighter", "tank"],
      avatar:
        "https://game.gtimg.cn/images/lol/act/img/champion/Renekton.png",
    },
    {
      title: "德玛西亚皇子",
      name: "嘉文四世",
      categories: ["tank", "fighter"],
      avatar:
        "https://game.gtimg.cn/images/lol/act/img/champion/JarvanIV.png",
    },
    {
      title: "蜘蛛女皇",
      name: "伊莉丝",
      categories: ["mage", "fighter"],
      avatar: "https://game.gtimg.cn/images/lol/act/img/champion/Elise.png",
    },
    {
      title: "发条魔灵",
      name: "奥莉安娜",
      categories: ["mage", "support"],
      avatar: "https://game.gtimg.cn/images/lol/act/img/champion/Orianna.png",
    },
    {
      title: "齐天大圣",
      name: "孙悟空",
      categories: ["fighter", "tank"],
      avatar:
        "https://game.gtimg.cn/images/lol/act/img/champion/MonkeyKing.png",
    },
    {
      title: "复仇焰魂",
      name: "布兰德",
      categories: ["mage"],
      avatar: "https://game.gtimg.cn/images/lol/act/img/champion/Brand.png",
    },
    {
      title: "盲僧",
      name: "李青",
      categories: ["fighter", "assassin"],
      avatar: "https://game.gtimg.cn/images/lol/act/img/champion/LeeSin.png",
    },
    {
      title: "暗夜猎手",
      name: "薇恩",
      categories: ["marksman", "assassin"],
      avatar: "https://game.gtimg.cn/images/lol/act/img/champion/Vayne.png",
    },
    {
      title: "机械公敌",
      name: "兰博",
      categories: ["fighter", "mage"],
      avatar: "https://game.gtimg.cn/images/lol/act/img/champion/Rumble.png",
    },
    {
      title: "魔蛇之拥",
      name: "卡西奥佩娅",
      categories: ["mage"],
      avatar:
        "https://game.gtimg.cn/images/lol/act/img/champion/Cassiopeia.png",
    },
    {
      title: "水晶先锋",
      name: "斯卡纳",
      categories: ["fighter", "tank"],
      avatar: "https://game.gtimg.cn/images/lol/act/img/champion/Skarner.png",
    },
    {
      title: "大发明家",
      name: "黑默丁格",
      categories: ["mage", "support"],
      avatar:
        "https://game.gtimg.cn/images/lol/act/img/champion/Heimerdinger.png",
    },
    {
      title: "沙漠死神",
      name: "内瑟斯",
      categories: ["fighter", "tank"],
      avatar: "https://game.gtimg.cn/images/lol/act/img/champion/Nasus.png",
    },
    {
      title: "狂野女猎手",
      name: "奈德丽",
      categories: ["assassin", "mage"],
      avatar: "https://game.gtimg.cn/images/lol/act/img/champion/Nidalee.png",
    },
    {
      title: "兽灵行者",
      name: "乌迪尔",
      categories: ["fighter", "tank"],
      avatar: "https://game.gtimg.cn/images/lol/act/img/champion/Udyr.png",
    },
    {
      title: "圣锤之毅",
      name: "波比",
      categories: ["tank", "fighter"],
      avatar: "https://game.gtimg.cn/images/lol/act/img/champion/Poppy.png",
    },
    {
      title: "酒桶",
      name: "古拉加斯",
      categories: ["fighter", "mage"],
      avatar: "https://game.gtimg.cn/images/lol/act/img/champion/Gragas.png",
    },
    {
      title: "不屈之枪",
      name: "潘森",
      categories: ["fighter", "assassin"],
      avatar:
        "https://game.gtimg.cn/images/lol/act/img/champion/Pantheon.png",
    },
    {
      title: "探险家",
      name: "伊泽瑞尔",
      categories: ["marksman", "mage"],
      avatar: "https://game.gtimg.cn/images/lol/act/img/champion/Ezreal.png",
    },
    {
      title: "铁铠冥魂",
      name: "莫德凯撒",
      categories: ["fighter"],
      avatar:
        "https://game.gtimg.cn/images/lol/act/img/champion/Mordekaiser.png",
    },
    {
      title: "牧魂人",
      name: "约里克",
      categories: ["fighter", "tank"],
      avatar: "https://game.gtimg.cn/images/lol/act/img/champion/Yorick.png",
    },
    {
      title: "离群之刺",
      name: "阿卡丽",
      categories: ["assassin"],
      avatar: "https://game.gtimg.cn/images/lol/act/img/champion/Akali.png",
    },
    {
      title: "狂暴之心",
      name: "凯南",
      categories: ["mage", "marksman"],
      avatar: "https://game.gtimg.cn/images/lol/act/img/champion/Kennen.png",
    },
    {
      title: "德玛西亚之力",
      name: "盖伦",
      categories: ["fighter", "tank"],
      avatar: "https://game.gtimg.cn/images/lol/act/img/champion/Garen.png",
    },
    {
      title: "曙光女神",
      name: "蕾欧娜",
      categories: ["tank", "support"],
      avatar: "https://game.gtimg.cn/images/lol/act/img/champion/Leona.png",
    },
    {
      title: "虚空先知",
      name: "玛尔扎哈",
      categories: ["mage", "assassin"],
      avatar:
        "https://game.gtimg.cn/images/lol/act/img/champion/Malzahar.png",
    },
    {
      title: "刀锋之影",
      name: "泰隆",
      categories: ["assassin"],
      avatar: "https://game.gtimg.cn/images/lol/act/img/champion/Talon.png",
    },
    {
      title: "放逐之刃",
      name: "锐雯",
      categories: ["fighter", "assassin"],
      avatar: "https://game.gtimg.cn/images/lol/act/img/champion/Riven.png",
    },
    {
      title: "深渊巨口",
      name: "克格莫",
      categories: ["marksman", "mage"],
      avatar: "https://game.gtimg.cn/images/lol/act/img/champion/KogMaw.png",
    },
    {
      title: "暮光之眼",
      name: "慎",
      categories: ["tank"],
      avatar: "https://game.gtimg.cn/images/lol/act/img/champion/Shen.png",
    },
    {
      title: "光辉女郎",
      name: "拉克丝",
      categories: ["mage", "support"],
      avatar: "https://game.gtimg.cn/images/lol/act/img/champion/Lux.png",
    },
    {
      title: "远古巫灵",
      name: "泽拉斯",
      categories: ["mage"],
      avatar: "https://game.gtimg.cn/images/lol/act/img/champion/Xerath.png",
    },
    {
      title: "龙血武姬",
      name: "希瓦娜",
      categories: ["fighter", "tank"],
      avatar: "https://game.gtimg.cn/images/lol/act/img/champion/Shyvana.png",
    },
    {
      title: "九尾妖狐",
      name: "阿狸",
      categories: ["mage", "assassin"],
      avatar: "https://game.gtimg.cn/images/lol/act/img/champion/Ahri.png",
    },
    {
      title: "法外狂徒",
      name: "格雷福斯",
      categories: ["marksman"],
      avatar: "https://game.gtimg.cn/images/lol/act/img/champion/Graves.png",
    },
    {
      title: "潮汐海灵",
      name: "菲兹",
      categories: ["assassin", "fighter"],
      avatar: "https://game.gtimg.cn/images/lol/act/img/champion/Fizz.png",
    },
    {
      title: "不灭狂雷",
      name: "沃利贝尔",
      categories: ["fighter", "tank"],
      avatar:
        "https://game.gtimg.cn/images/lol/act/img/champion/Volibear.png",
    },
    {
      title: "傲之追猎者",
      name: "雷恩加尔",
      categories: ["assassin", "fighter"],
      avatar: "https://game.gtimg.cn/images/lol/act/img/champion/Rengar.png",
    },
    {
      title: "惩戒之箭",
      name: "韦鲁斯",
      categories: ["marksman", "mage"],
      avatar: "https://game.gtimg.cn/images/lol/act/img/champion/Varus.png",
    },
    {
      title: "深海泰坦",
      name: "诺提勒斯",
      categories: ["tank", "fighter"],
      avatar:
        "https://game.gtimg.cn/images/lol/act/img/champion/Nautilus.png",
    },
    {
      title: "机械先驱",
      name: "维克托",
      categories: ["mage"],
      avatar: "https://game.gtimg.cn/images/lol/act/img/champion/Viktor.png",
    },
    {
      title: "北地之怒",
      name: "瑟庄妮",
      categories: ["tank", "fighter"],
      avatar: "https://game.gtimg.cn/images/lol/act/img/champion/Sejuani.png",
    },
    {
      title: "无双剑姬",
      name: "菲奥娜",
      categories: ["fighter", "assassin"],
      avatar: "https://game.gtimg.cn/images/lol/act/img/champion/Fiora.png",
    },
    {
      title: "爆破鬼才",
      name: "吉格斯",
      categories: ["mage"],
      avatar: "https://game.gtimg.cn/images/lol/act/img/champion/Ziggs.png",
    },
    {
      title: "仙灵女巫",
      name: "璐璐",
      categories: ["support", "mage"],
      avatar: "https://game.gtimg.cn/images/lol/act/img/champion/Lulu.png",
    },
    {
      title: "荣耀行刑官",
      name: "德莱文",
      categories: ["marksman"],
      avatar: "https://game.gtimg.cn/images/lol/act/img/champion/Draven.png",
    },
    {
      title: "战争之影",
      name: "赫卡里姆",
      categories: ["fighter", "tank"],
      avatar: "https://game.gtimg.cn/images/lol/act/img/champion/Hecarim.png",
    },
    {
      title: "虚空掠夺者",
      name: "卡兹克",
      categories: ["assassin"],
      avatar: "https://game.gtimg.cn/images/lol/act/img/champion/Khazix.png",
    },
    {
      title: "诺克萨斯之手",
      name: "德莱厄斯",
      categories: ["fighter", "tank"],
      avatar: "https://game.gtimg.cn/images/lol/act/img/champion/Darius.png",
    },
    {
      title: "未来守护者",
      name: "杰斯",
      categories: ["fighter", "marksman"],
      avatar: "https://game.gtimg.cn/images/lol/act/img/champion/Jayce.png",
    },
    {
      title: "冰霜女巫",
      name: "丽桑卓",
      categories: ["mage"],
      avatar:
        "https://game.gtimg.cn/images/lol/act/img/champion/Lissandra.png",
    },
    {
      title: "皎月女神",
      name: "黛安娜",
      categories: ["fighter", "mage"],
      avatar: "https://game.gtimg.cn/images/lol/act/img/champion/Diana.png",
    },
    {
      title: "德玛西亚之翼",
      name: "奎因",
      categories: ["marksman", "assassin"],
      avatar: "https://game.gtimg.cn/images/lol/act/img/champion/Quinn.png",
    },
    {
      title: "暗黑元首",
      name: "辛德拉",
      categories: ["mage", "support"],
      avatar: "https://game.gtimg.cn/images/lol/act/img/champion/Syndra.png",
    },
    {
      title: "铸星龙王",
      name: "奥瑞利安索尔",
      categories: ["mage"],
      avatar:
        "https://game.gtimg.cn/images/lol/act/img/champion/AurelionSol.png",
    },
    {
      title: "影流之镰",
      name: "凯隐",
      categories: ["fighter", "assassin"],
      avatar: "https://game.gtimg.cn/images/lol/act/img/champion/Kayn.png",
    },
    {
      title: "暮光星灵",
      name: "佐伊",
      categories: ["mage", "support"],
      avatar: "https://game.gtimg.cn/images/lol/act/img/champion/Zoe.png",
    },
    {
      title: "荆棘之兴",
      name: "婕拉",
      categories: ["mage", "support"],
      avatar: "https://game.gtimg.cn/images/lol/act/img/champion/Zyra.png",
    },
    {
      title: "虚空之女",
      name: "卡莎",
      categories: ["marksman"],
      avatar: "https://game.gtimg.cn/images/lol/act/img/champion/Kaisa.png",
    },
    {
      title: "星籁歌姬",
      name: "萨勒芬妮",
      categories: ["mage", "support"],
      avatar:
        "https://game.gtimg.cn/images/lol/act/img/champion/Seraphine.png",
    },
    {
      title: "迷失之牙",
      name: "纳尔",
      categories: ["fighter", "tank"],
      avatar: "https://game.gtimg.cn/images/lol/act/img/champion/Gnar.png",
    },
    {
      title: "生化魔人",
      name: "扎克",
      categories: ["tank", "fighter"],
      avatar: "https://game.gtimg.cn/images/lol/act/img/champion/Zac.png",
    },
    {
      title: "疾风剑豪",
      name: "亚索",
      categories: ["fighter", "assassin"],
      avatar: "https://game.gtimg.cn/images/lol/act/img/champion/Yasuo.png",
    },
    {
      title: "虚空之眼",
      name: "维克兹",
      categories: ["mage"],
      avatar: "https://game.gtimg.cn/images/lol/act/img/champion/Velkoz.png",
    },
    {
      title: "岩雀",
      name: "塔莉垭",
      categories: ["mage", "support"],
      avatar: "https://game.gtimg.cn/images/lol/act/img/champion/Taliyah.png",
    },
    {
      title: "青钢影",
      name: "卡蜜尔",
      categories: ["fighter", "tank"],
      avatar: "https://game.gtimg.cn/images/lol/act/img/champion/Camille.png",
    },
    {
      title: "弗雷尔卓德之心",
      name: "布隆",
      categories: ["support", "tank"],
      avatar: "https://game.gtimg.cn/images/lol/act/img/champion/Braum.png",
    },
    {
      title: "戏命师",
      name: "烬",
      categories: ["marksman", "mage"],
      avatar: "https://game.gtimg.cn/images/lol/act/img/champion/Jhin.png",
    },
    {
      title: "永猎双子",
      name: "千珏",
      categories: ["marksman"],
      avatar: "https://game.gtimg.cn/images/lol/act/img/champion/Kindred.png",
    },
    {
      title: "暴走萝莉",
      name: "金克丝",
      categories: ["marksman"],
      avatar: "https://game.gtimg.cn/images/lol/act/img/champion/Jinx.png",
    },
    {
      title: "河流之王",
      name: "塔姆",
      categories: ["support", "tank"],
      avatar:
        "https://game.gtimg.cn/images/lol/act/img/champion/TahmKench.png",
    },
    {
      title: "涤魂圣枪",
      name: "赛娜",
      categories: ["marksman", "support"],
      avatar: "https://game.gtimg.cn/images/lol/act/img/champion/Senna.png",
    },
    {
      title: "圣枪游侠",
      name: "卢锡安",
      categories: ["marksman"],
      avatar: "https://game.gtimg.cn/images/lol/act/img/champion/Lucian.png",
    },
    {
      title: "影流之主",
      name: "劫",
      categories: ["assassin"],
      avatar: "https://game.gtimg.cn/images/lol/act/img/champion/Zed.png",
    },
    {
      title: "暴怒骑士",
      name: "克烈",
      categories: ["fighter", "tank"],
      avatar: "https://game.gtimg.cn/images/lol/act/img/champion/Kled.png",
    },
    {
      title: "时间刺客",
      name: "艾克",
      categories: ["assassin", "fighter"],
      avatar: "https://game.gtimg.cn/images/lol/act/img/champion/Ekko.png",
    },
    {
      title: "元素女皇",
      name: "奇亚娜",
      categories: ["assassin", "fighter"],
      avatar: "https://game.gtimg.cn/images/lol/act/img/champion/Qiyana.png",
    },
    {
      title: "皮城执法官",
      name: "蔚",
      categories: ["fighter", "assassin"],
      avatar: "https://game.gtimg.cn/images/lol/act/img/champion/Vi.png",
    },
    {
      title: "暗裔剑魔",
      name: "亚托克斯",
      categories: ["fighter", "tank"],
      avatar: "https://game.gtimg.cn/images/lol/act/img/champion/Aatrox.png",
    },
    {
      title: "唤潮鲛姬",
      name: "娜美",
      categories: ["support", "mage"],
      avatar: "https://game.gtimg.cn/images/lol/act/img/champion/Nami.png",
    },
    {
      title: "沙漠皇帝",
      name: "阿兹尔",
      categories: ["mage", "marksman"],
      avatar: "https://game.gtimg.cn/images/lol/act/img/champion/Azir.png",
    },
    {
      title: "魔法猫咪",
      name: "悠米",
      categories: ["support", "mage"],
      avatar: "https://game.gtimg.cn/images/lol/act/img/champion/Yuumi.png",
    },
    {
      title: "沙漠玫瑰",
      name: "莎弥拉",
      categories: ["marksman"],
      avatar: "https://game.gtimg.cn/images/lol/act/img/champion/Samira.png",
    },
    {
      title: "魂锁典狱长",
      name: "锤石",
      categories: ["support", "fighter"],
      avatar: "https://game.gtimg.cn/images/lol/act/img/champion/Thresh.png",
    },
    {
      title: "海兽祭司",
      name: "俄洛伊",
      categories: ["fighter", "tank"],
      avatar: "https://game.gtimg.cn/images/lol/act/img/champion/Illaoi.png",
    },
    {
      title: "虚空遁地兽",
      name: "雷克塞",
      categories: ["fighter"],
      avatar: "https://game.gtimg.cn/images/lol/act/img/champion/RekSai.png",
    },
    {
      title: "翠神",
      name: "艾翁",
      categories: ["support", "mage"],
      avatar: "https://game.gtimg.cn/images/lol/act/img/champion/Ivern.png",
    },
    {
      title: "复仇之矛",
      name: "卡莉丝塔",
      categories: ["marksman"],
      avatar: "https://game.gtimg.cn/images/lol/act/img/champion/Kalista.png",
    },
    {
      title: "星界游神",
      name: "巴德",
      categories: ["support", "mage"],
      avatar: "https://game.gtimg.cn/images/lol/act/img/champion/Bard.png",
    },
    {
      title: "幻翎",
      name: "洛",
      categories: ["support"],
      avatar: "https://game.gtimg.cn/images/lol/act/img/champion/Rakan.png",
    },
    {
      title: "逆羽",
      name: "霞",
      categories: ["marksman"],
      avatar: "https://game.gtimg.cn/images/lol/act/img/champion/Xayah.png",
    },
    {
      title: "山隐之焰",
      name: "奥恩",
      categories: ["tank", "fighter"],
      avatar: "https://game.gtimg.cn/images/lol/act/img/champion/Ornn.png",
    },
    {
      title: "解脱者",
      name: "塞拉斯",
      categories: ["mage", "assassin"],
      avatar: "https://game.gtimg.cn/images/lol/act/img/champion/Sylas.png",
    },
    {
      title: "万花通灵",
      name: "妮蔻",
      categories: ["mage", "support"],
      avatar: "https://game.gtimg.cn/images/lol/act/img/champion/Neeko.png",
    },
    {
      title: "残月之肃",
      name: "厄斐琉斯",
      categories: ["marksman"],
      avatar:
        "https://game.gtimg.cn/images/lol/act/img/champion/Aphelios.png",
    },
    {
      title: "血港鬼影",
      name: "派克",
      categories: ["support", "assassin"],
      avatar: "https://game.gtimg.cn/images/lol/act/img/champion/Pyke.png",
    },
    {
      title: "封魔剑魂",
      name: "永恩",
      categories: ["assassin", "fighter"],
      avatar: "https://game.gtimg.cn/images/lol/act/img/champion/Yone.png",
    },
    {
      title: "腕豪",
      name: "瑟提",
      categories: ["fighter", "tank"],
      avatar: "https://game.gtimg.cn/images/lol/act/img/champion/Sett.png",
    },
    {
      title: "含羞蓓蕾",
      name: "莉莉娅",
      categories: ["fighter", "mage"],
      avatar: "https://game.gtimg.cn/images/lol/act/img/champion/Lillia.png",
    },
  ];
  await Hero.deleteMany({});
  for (let cat of rawData) {
    // res.send(cat)
    const category = await Category.findOne({
      name: cat.categories,
    });

    cat.categories = [category];
    await Hero.insertMany(cat);
  }

  // await Hero.deleteMany({});
  // for (let cat of rawData) {
  //   await Hero.insertMany({
  //     name: cat.title,
  //     title: cat.name,
  //     categories: cat.roles,
  //     avatar: cat.avatar,
  //   });
  // }

  res.send(rawData);
});