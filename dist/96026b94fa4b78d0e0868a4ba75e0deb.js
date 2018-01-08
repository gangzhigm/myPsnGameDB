// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

// eslint-disable-next-line no-global-assign
require = (function (modules, cache, entry) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof require === "function" && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof require === "function" && require;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }
      
      localRequire.resolve = resolve;

      var module = cache[name] = new newRequire.Module;

      modules[name][0].call(module.exports, localRequire, module, module.exports);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module() {
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  // Override the current require with this new one
  return newRequire;
})({3:[function(require,module,exports) {
"use strict";

var psndata = {
  "game": [{ "name": "跳水VR", "playstation": ["psv"], "language": "", "leixing": "", "truename": "" }, { "name": "烟花VR", "playstation": ["psv"], "language": "", "leixing": "", "truename": "" }, { "name": "雷曼：传奇", "playstation": ["psv"], "language": "", "leixing": "", "truename": "" }, { "name": "战争框架", "playstation": ["ps4"], "language": "", "leixing": "", "truename": "" }, { "name": "索尼全明星大乱斗", "playstation": ["psv"], "language": "", "leixing": "", "truename": "" }, { "name": "街头霸王X铁拳", "playstation": ["psv", "ps3"], "language": "", "leixing": "", "truename": "" }, { "name": "灵魂献祭Delta", "playstation": ["psv"], "language": "", "leixing": "", "truename": "" }, { "name": "三国战记", "playstation": ["ps4"], "language": "", "leixing": "", "truename": "" }, { "name": "逃跑计划", "playstation": ["psv", "ps4"], "language": "", "leixing": "", "truename": "" }, { "name": "飞上云端", "playstation": ["psv"], "language": "", "leixing": "", "truename": "" }, { "name": "机动战士高达战斗堡垒", "playstation": ["psv"], "language": "", "leixing": "", "truename": "" }, { "name": "胖公主：蛋糕块", "playstation": ["psv"], "language": "", "leixing": "", "truename": "" }, { "name": "战神：斯巴达幽灵", "playstation": ["psv"], "language": "", "leixing": "", "truename": "" }, { "name": "战神：奥林匹斯之链", "playstation": ["psv"], "language": "", "leixing": "", "truename": "" }, { "name": "乐克乐克：午夜嘉年华", "playstation": ["psv"], "language": "", "leixing": "", "truename": "" }, { "name": "地狱潜者", "playstation": ["ps3"], "language": "", "leixing": "", "truename": "" }, { "name": "超凡双生", "playstation": ["ps3"], "language": "", "leixing": "", "truename": "" }, { "name": "战神：升天", "playstation": ["ps3"], "language": "", "leixing": "", "truename": "" }, { "name": "木偶历险记", "playstation": ["ps3"], "language": "", "leixing": "", "truename": "" }, { "name": "维京人进攻之时", "playstation": ["psv", "ps3"], "language": "", "leixing": "", "truename": "" }, { "name": "创意族赛车：公路旅行", "playstation": ["psv"], "language": "", "leixing": "", "truename": "" }, { "name": "捣蛋小精灵", "playstation": ["psv"], "language": "", "leixing": "", "truename": "" }, { "name": "RC机车", "playstation": ["psv"], "language": "", "leixing": "", "truename": "" }, { "name": "台球王", "playstation": ["psv"], "language": "", "leixing": "", "truename": "" }, { "name": "声与形", "playstation": ["psv"], "language": "", "leixing": "", "truename": "" }, { "name": "重力异想世界", "playstation": ["psv"], "language": "", "leixing": "", "truename": "" }, { "name": "pulzar", "playstation": ["psv"], "language": "", "leixing": "", "truename": "" }, { "name": "冰球VR", "playstation": ["psv"], "language": "", "leixing": "", "truename": "" }, { "name": "杀戮地带：佣兵", "playstation": ["psv"], "language": "", "leixing": "", "truename": "" }, { "name": "flower", "playstation": ["psv"], "language": "", "leixing": "", "truename": "" }, { "name": "地狱潜者", "playstation": ["psv"], "language": "", "leixing": "", "truename": "" }, { "name": "跨越俺的尸体前进吧", "playstation": ["psv"], "language": "", "leixing": "", "truename": "" }, { "name": "自由战争", "playstation": ["psv"], "language": "", "leixing": "", "truename": "" }, { "name": "啪嗒砰3", "playstation": ["psv"], "language": "", "leixing": "", "truename": "" }, { "name": "成长家园", "playstation": ["ps4"], "language": "", "leixing": "", "truename": "" }, { "name": "大马士革齿轮：东京始战", "playstation": ["psv"], "language": "", "leixing": "", "truename": "" }, { "name": "灵魂原点", "playstation": ["psv"], "language": "", "leixing": "", "truename": "" }, { "name": "劳拉与光之守护者", "playstation": ["ps3"], "language": "", "leixing": "", "truename": "" }, { "name": "合金装备5：原爆点", "playstation": ["ps4"], "language": "", "leixing": "", "truename": "" }, { "name": "灰烬", "playstation": ["ps3"], "language": "", "leixing": "", "truename": "" }, { "name": "超越善恶：撕裂的天堂HD", "playstation": ["ps3"], "language": "", "leixing": "", "truename": "" }, { "name": "魔神少女", "playstation": ["psv"], "language": "", "leixing": "", "truename": "" }, { "name": "噬神者2", "playstation": ["psv"], "language": "", "leixing": "", "truename": "" }, { "name": "块魂", "playstation": ["psv"], "language": "", "leixing": "", "truename": "" }, { "name": "铁拳TT2", "playstation": ["ps3"], "language": "", "leixing": "", "truename": "" }, { "name": "闪乱神乐：少女们的证明", "playstation": ["psv"], "language": "", "leixing": "", "truename": "" }, { "name": "Net——High", "playstation": ["psv"], "language": "", "leixing": "", "truename": "" }, { "name": "胧村正", "playstation": ["psv"], "language": "", "leixing": "", "truename": "" }, { "name": "梦幻俱乐部ZERO", "playstation": ["psv"], "language": "", "leixing": "", "truename": "" }, { "name": "地球防卫军", "playstation": ["ps3"], "language": "", "leixing": "", "truename": "" }, { "name": "再见了海腹川背", "playstation": ["psv"], "language": "", "leixing": "", "truename": "" }, { "name": "Torquel", "playstation": ["psv"], "language": "", "leixing": "", "truename": "" }, { "name": "战国无双4", "playstation": ["psv"], "language": "", "leixing": "", "truename": "" }, { "name": "讨鬼传", "playstation": ["psv"], "language": "", "leixing": "", "truename": "" }, { "name": "忍者龙剑传SIGMA2", "playstation": ["psv"], "language": "", "leixing": "", "truename": "" }, { "name": "爱夏的炼金工房plue~黄昏大地之炼金术士", "playstation": ["psv"], "language": "", "leixing": "", "truename": "" }, { "name": "波斯王子：遗忘之沙", "playstation": ["ps3"], "language": "", "leixing": "", "truename": "" }, { "name": "疯狂骑手", "playstation": ["ps3"], "language": "", "leixing": "", "truename": "" }, { "name": "汤姆克兰西：世界战局", "playstation": ["ps3"], "language": "", "leixing": "", "truename": "" }, { "name": "音乐方块：电子交响乐", "playstation": ["psv"], "language": "", "leixing": "", "truename": "" }, { "name": "虐杀原型2", "playstation": ["ps3"], "language": "", "leixing": "", "truename": "" }, { "name": "奇异人生", "playstation": ["ps4"], "language": "", "leixing": "", "truename": "" }, { "name": "正当防卫3", "playstation": ["ps4"], "language": "", "leixing": "", "truename": "" }, { "name": "合金装备5：原爆点", "playstation": ["ps4"], "language": "", "leixing": "", "truename": "" }, { "name": "出击飞龙", "playstation": ["ps4"], "language": "", "leixing": "", "truename": "" }, { "name": "生化危机重制版", "playstation": ["ps4"], "language": "", "leixing": "", "truename": "" }, { "name": "龙与地下城", "playstation": ["ps3"], "language": "", "leixing": "", "truename": "" }, { "name": "索尼克全明星赛车：变形", "playstation": ["ps3", "psv"], "language": "", "leixing": "", "truename": "" }, { "name": "超级猴子球", "playstation": ["psv"], "language": "", "leixing": "", "truename": "" }, { "name": "勇闯银河系", "playstation": ["ps4"], "language": "", "leixing": "", "truename": "" }, { "name": "Galak-Z：维度", "playstation": ["ps4"], "language": "", "leixing": "", "truename": "" }, { "name": "墨西哥英雄大混战：超级漩涡冠军版", "playstation": ["ps4"], "language": "", "leixing": "", "truename": "" }, { "name": "冬宫", "playstation": ["psv"], "language": "", "leixing": "", "truename": "" }, { "name": "行尸走肉：第一章", "playstation": ["ps4"], "language": "", "leixing": "", "truename": "" }, { "name": "无主之地：传说", "playstation": ["ps4"], "language": "", "leixing": "", "truename": "" }, { "name": "飞跃印刷史", "playstation": ["psv", "ps4"], "language": "", "leixing": "", "truename": "" }, { "name": "xeodrifter", "playstation": ["psv", "ps4"], "language": "", "leixing": "", "truename": "" }, { "name": "胧村正", "playstation": ["psv"], "language": "", "leixing": "", "truename": "" }, { "name": "不义联盟：人间之神", "playstation": ["ps4"], "language": "", "leixing": "", "truename": "" }, { "name": "归家", "playstation": ["ps4"], "language": "", "leixing": "", "truename": "" }, { "name": "NBA2K16", "playstation": ["ps4"], "language": "", "leixing": "", "truename": "" }, { "name": "二者抉一", "playstation": ["ps4"], "language": "", "leixing": "", "truename": "" }, { "name": "激光迪斯科卫士", "playstation": ["psv", "ps4"], "language": "", "leixing": "", "truename": "" }, { "name": "furi", "playstation": ["ps4"], "language": "", "leixing": "", "truename": "" }, { "name": "真实的阳光", "playstation": ["psv"], "language": "", "leixing": "", "truename": "" }, { "name": "传说：命运之路", "playstation": ["ps4"], "language": "", "leixing": "", "truename": "" }, { "name": "幕府将军的头骨", "playstation": ["ps4"], "language": "", "leixing": "", "truename": "" }, { "name": "墨西哥英雄大混战", "playstation": ["psv"], "language": "", "leixing": "", "truename": "" }, { "name": "severed", "playstation": ["psv"], "language": "", "leixing": "", "truename": "" }, { "name": "hoard", "playstation": ["ps3"], "language": "", "leixing": "", "truename": "" }, { "name": "limbo", "playstation": ["psv"], "language": "", "leixing": "", "truename": "" }, { "name": "安娜：加长版", "playstation": ["ps3"], "language": "", "leixing": "", "truename": "" }, { "name": "尼特的故事", "playstation": ["ps3", "psv"], "language": "", "leixing": "", "truename": "" }, { "name": "super motherload", "playstation": ["ps4", "ps3"], "language": "", "leixing": "", "truename": "" }, { "name": "以撒的结合：重生", "playstation": ["ps4", "psv"], "language": "", "leixing": "", "truename": "" }, { "name": "Invisible,inc.巨人版", "playstation": ["ps4"], "language": "", "leixing": "", "truename": "" }, { "name": "Curses N Chaos", "playstation": ["ps4", "psv"], "language": "", "leixing": "", "truename": "" }, { "name": "metrico", "playstation": ["psv"], "language": "", "leixing": "", "truename": "" }, { "name": "神秘披风", "playstation": ["ps4"], "language": "", "leixing": "", "truename": "" }, { "name": "塔倒：升天", "playstation": ["ps4"], "language": "", "leixing": "", "truename": "" }, { "name": "晶体管", "playstation": ["ps4"], "language": "", "leixing": "", "truename": "" }, { "name": "逐日", "playstation": ["ps3", "ps4", "psv"], "language": "", "leixing": "", "truename": "" }, { "name": "毁灭公爵3D", "playstation": ["psv", "ps3"], "language": "", "leixing": "", "truename": "" }, { "name": "not a hero", "playstation": ["ps4"], "language": "", "leixing": "", "truename": "" }, { "name": "泰坦之魂", "playstation": ["psv", "ps4"], "language": "", "leixing": "", "truename": "" }, { "name": "broforce", "playstation": ["ps4"], "language": "", "leixing": "", "truename": "" }, { "name": "桌面赛车：世界巡回赛", "playstation": ["ps4"], "language": "", "leixing": "", "truename": "" }, { "name": "色彩守护者", "playstation": ["psv", "ps4"], "language": "", "leixing": "", "truename": "" }, { "name": "星际鲸鱼：尖尖角", "playstation": ["ps3", "ps4"], "language": "", "leixing": "", "truename": "" }, { "name": "穿越虫洞", "playstation": ["ps3"], "language": "", "leixing": "", "truename": "" }, { "name": "永不孤单", "playstation": ["ps4"], "language": "", "leixing": "", "truename": "" }, { "name": "肌肉金鱼", "playstation": ["psv"], "language": "", "leixing": "", "truename": "" }, { "name": "哇哦 戴夫！", "playstation": ["psv"], "language": "", "leixing": "", "truename": "" }, { "name": "肌肉金鱼", "playstation": ["ps4"], "language": "", "leixing": "", "truename": "" }, { "name": "阿鲁的觉醒", "playstation": ["ps3", "ps4"], "language": "", "leixing": "", "truename": "" }, { "name": "病毒汤姆", "playstation": ["psv"], "language": "", "leixing": "", "truename": "" }, { "name": "回到床上", "playstation": ["ps3", "psv", "ps4"], "language": "", "leixing": "", "truename": "" }, { "name": "致命预感：导演剪辑版", "playstation": ["ps3"], "language": "", "leixing": "", "truename": "" }, { "name": "超级爆破动物园", "playstation": ["ps3", "ps4"], "language": "", "leixing": "", "truename": "" }, { "name": "火中英雄", "playstation": ["psv"], "language": "", "leixing": "", "truename": "" }, { "name": "奇异世界：新鲜可口", "playstation": ["ps4"], "language": "", "leixing": "", "truename": "" }, { "name": "velocity2X", "playstation": ["ps4", "psv"], "language": "", "leixing": "", "truename": "" }, { "name": "枪之塔", "playstation": ["ps3", "ps4"], "language": "", "leixing": "", "truename": "" }, { "name": "最后的地平线", "playstation": ["ps4", "psv"], "language": "", "leixing": "", "truename": "" }, { "name": "堕落之王", "playstation": ["ps4"], "language": "", "leixing": "", "truename": "" }, { "name": "小小部队", "playstation": ["ps3", "psv"], "language": "", "leixing": "", "truename": "" }, { "name": "交易者", "playstation": ["ps4", "psv", "ps3"], "language": "", "leixing": "", "truename": "" }, { "name": "泰坦进攻", "playstation": ["psv", "ps3", "ps4"], "language": "", "leixing": "", "truename": "" }, { "name": "电子射手", "playstation": ["ps4", "psv", "ps3"], "language": "", "leixing": "", "truename": "" }, { "name": "鼠的世界", "playstation": ["psv", "ps3", "ps4"], "language": "", "leixing": "", "truename": "" }, { "name": "潜行公司2：克隆游戏", "playstation": ["ps4", "psv", "ps3"], "language": "", "leixing": "", "truename": "" }, { "name": "骗局", "playstation": ["ps4", "psv", "ps3"], "language": "", "leixing": "", "truename": "" }, { "name": "nova-111", "playstation": ["ps4", "psv"], "language": "", "leixing": "", "truename": "" }, { "name": "小轮车冒险", "playstation": ["ps3", "psv", "ps4"], "language": "", "leixing": "", "truename": "" }, { "name": "洞穴探险", "playstation": ["ps4", "psv"], "language": "", "leixing": "", "truename": "" }, { "name": "10秒忍者X", "playstation": ["ps4", "psv"], "language": "", "leixing": "", "truename": "" }, { "name": "孤独幸存者", "playstation": ["psv", "ps3"], "language": "", "leixing": "", "truename": "" }, { "name": "velocity ultra", "playstation": ["ps3"], "language": "", "leixing": "", "truename": "" }, { "name": "像素滑板2：欢迎来到奥莱坞", "playstation": ["psv", "ps4", "ps3"], "language": "", "leixing": "", "truename": "" }, { "name": "像素垃圾：射手 终极版", "playstation": ["psv", "ps4"], "language": "", "leixing": "", "truename": "" }, { "name": "美味银河", "playstation": ["ps4"], "language": "", "leixing": "", "truename": "" }, { "name": "模拟山羊", "playstation": ["ps4", "ps3"], "language": "", "leixing": "", "truename": "" }, { "name": "冰封触点", "playstation": ["ps3"], "language": "", "leixing": "", "truename": "" }, { "name": "像素垃圾：妖怪 终极版", "playstation": ["psv"], "language": "", "leixing": "", "truename": "" }, { "name": "菲斯", "playstation": ["psv", "ps3", "ps4"], "language": "", "leixing": "", "truename": "" }, { "name": "超星际赛车", "playstation": ["ps4", "psv"], "language": "", "leixing": "", "truename": "" }, { "name": "盗贼遗产", "playstation": ["ps4", "psv", "ps3"], "language": "", "leixing": "", "truename": "" }, { "name": "缇克与芬尼克", "playstation": ["psv", "ps3"], "language": "", "leixing": "", "truename": "" }, { "name": "亚普罗辛", "playstation": ["ps4"], "language": "", "leixing": "", "truename": "" }, { "name": "破碎大陆：年度版", "playstation": ["psv", "ps3", "ps4"], "language": "", "leixing": "", "truename": "" }, { "name": "杀戮空间2", "playstation": ["ps4"], "language": "", "leixing": "", "truename": "" }, { "name": "劳拉和奥西里斯神庙", "playstation": ["ps4"], "language": "", "leixing": "", "truename": "" }, { "name": "波斯王子：启示", "playstation": ["psv", "psp", "ps3"], "language": "", "leixing": "", "truename": "" }, { "name": "刺客信条：编年史三部曲", "playstation": ["psv"], "language": "", "leixing": "", "truename": "" }, { "name": "云端莓王国", "playstation": ["ps3"], "language": "", "leixing": "", "truename": "" }, { "name": "荒野双蛟龙：枪神", "playstation": ["ps3"], "language": "", "leixing": "", "truename": "" }, { "name": "僵尸", "playstation": ["ps4"], "language": "", "leixing": "", "truename": "" }, { "name": "勇敢的心：世界大战", "playstation": ["ps4"], "language": "", "leixing": "", "truename": "" }, { "name": "黑白世界", "playstation": ["ps4", "psv"], "language": "", "leixing": "", "truename": "" }, { "name": "怪物背包", "playstation": ["psv"], "language": "", "leixing": "", "truename": "" }, { "name": "战神1+2重制版", "playstation": ["psv"], "language": "", "leixing": "", "truename": "" }, { "name": "花花卡姆", "playstation": ["ps3", "psv", "ps4"], "language": "", "leixing": "", "truename": "" }, { "name": "反击间谍", "playstation": ["ps4", "psv"], "language": "", "leixing": "", "truename": "" }, { "name": "狡狐：时间窃贼", "playstation": ["ps3", "psv"], "language": "", "leixing": "", "truename": "" }, { "name": "声与形", "playstation": ["ps4"], "language": "", "leixing": "", "truename": "" }, { "name": "flower", "playstation": ["ps4"], "language": "", "leixing": "", "truename": "" }, { "name": "地狱潜者", "playstation": ["ps4"], "language": "", "leixing": "", "truename": "" }, { "name": "小小大星球3", "playstation": ["ps4"], "language": "", "leixing": "", "truename": "" }, { "name": "重力异想世界重制版", "playstation": ["ps4"], "language": "", "leixing": "", "truename": "" }, { "name": "直到黎明", "playstation": ["ps4"], "language": "", "leixing": "", "truename": "" }, { "name": "战神3重制版", "playstation": ["ps4"], "language": "", "leixing": "", "truename": "" }, { "name": "journey", "playstation": ["ps3", "ps4"], "language": "", "leixing": "", "truename": "" }, { "name": "撕纸小邮差：拆封", "playstation": ["ps4"], "language": "", "leixing": "", "truename": "" }, { "name": "万众狂欢", "playstation": ["ps4"], "language": "", "leixing": "", "truename": "" }, { "name": "异化国度", "playstation": ["ps4"], "language": "", "leixing": "", "truename": "" }, { "name": "笔下之死", "playstation": ["ps4"], "language": "", "leixing": "", "truename": "" }, { "name": "最后一人", "playstation": ["ps3"], "language": "", "leixing": "", "truename": "" }, { "name": "台球王", "playstation": ["ps3"], "language": "", "leixing": "", "truename": "" }, { "name": "flower", "playstation": ["ps3"], "language": "", "leixing": "", "truename": "" }, { "name": "曼陀罗", "playstation": ["ps3"], "language": "", "leixing": "", "truename": "" }, { "name": "机车风暴", "playstation": ["ps3"], "language": "", "leixing": "", "truename": "" }, { "name": "声与形", "playstation": ["ps3"], "language": "", "leixing": "", "truename": "" }, { "name": "索尼全明星大乱斗", "playstation": ["ps3"], "language": "", "leixing": "", "truename": "" }, { "name": "艾斯卡和罗吉的炼金工房~黄昏天空之炼金术士", "playstation": ["ps3"], "language": "", "leixing": "", "truename": "" }, { "name": "真三国无双NEXT", "playstation": ["psv"], "language": "", "leixing": "", "truename": "" }, { "name": "讨鬼传", "playstation": ["psv"], "language": "", "leixing": "", "truename": "" }, { "name": "信长之野望：创造", "playstation": ["psv"], "language": "", "leixing": "", "truename": "" }, { "name": "方根书简", "playstation": ["psv", "ps4"], "language": "", "leixing": "", "truename": "" }, { "name": "索尼克大冒险2", "playstation": ["ps3"], "language": "", "leixing": "", "truename": "" }, { "name": "托杰与厄尔", "playstation": ["ps3"], "language": "", "leixing": "", "truename": "" }, { "name": "深夜入梦", "playstation": ["ps3"], "language": "", "leixing": "", "truename": "" }, { "name": "格斗之蛇", "playstation": ["ps3"], "language": "", "leixing": "", "truename": "" }, { "name": "魔界战记5", "playstation": ["ps4"], "language": "", "leixing": "", "truename": "" }, { "name": "拳皇13", "playstation": ["ps3"], "language": "", "leixing": "", "truename": "" }, { "name": "情热传说", "playstation": ["ps4"], "language": "", "leixing": "", "truename": "" }, { "name": "吃豆人冠军版DX+", "playstation": ["ps3"], "language": "", "leixing": "", "truename": "" }, { "name": "城堡毁灭者", "playstation": ["ps3"], "language": "", "leixing": "", "truename": "" }, { "name": "phase shift:联网的危机", "playstation": ["psv"], "language": "", "leixing": "", "truename": "" }, { "name": "苍翼默示录：刻之幻影 扩展版", "playstation": ["ps3", "ps4", "psv"], "language": "", "leixing": "", "truename": "" }, { "name": "超级街头霸王4：街机版", "playstation": ["ps3"], "language": "", "leixing": "", "truename": "" }, { "name": "生化危机：安布雷拉军团", "playstation": ["ps4"], "language": "", "leixing": "", "truename": "" }, { "name": "夜下降生", "playstation": ["ps3"], "language": "", "leixing": "", "truename": "" }, { "name": "恶意：重生", "playstation": ["psv"], "language": "", "leixing": "", "truename": "" }, { "name": "饥饿部落", "playstation": ["psv"], "language": "", "leixing": "", "truename": "" }, { "name": "紫氏宝贝", "playstation": ["psv"], "language": "", "leixing": "", "truename": "" }, { "name": "lemmings touch", "playstation": ["psv"], "language": "", "leixing": "", "truename": "" }, { "name": "雅各伯琼斯和大脚怪之谜", "playstation": ["psv"], "language": "", "leixing": "", "truename": "" }, { "name": "smart as", "playstation": ["psv"], "language": "", "leixing": "", "truename": "" }, { "name": "未选之路", "playstation": ["ps4"], "language": "", "leixing": "", "truename": "" }, { "name": "蒸汽世界：挖掘", "playstation": ["psv", "ps4"], "language": "", "leixing": "", "truename": "" }, { "name": "真实格斗", "playstation": ["psv"], "language": "", "leixing": "", "truename": "" }, { "name": "孤独的托马斯", "playstation": ["psv", "ps3"], "language": "", "leixing": "", "truename": "" }, { "name": "海岛大亨5", "playstation": ["ps4"], "language": "", "leixing": "", "truename": "" }, { "name": "神秘海域：伊班的足迹：第一章", "playstation": ["ps3"], "language": "", "leixing": "", "truename": "" }, { "name": "surge deluxe", "playstation": ["psv"], "language": "", "leixing": "", "truename": "" }, { "name": "velocity ultra", "playstation": ["psv"], "language": "", "leixing": "", "truename": "" }, { "name": "魔能2", "playstation": ["ps4"], "language": "", "leixing": "", "truename": "" }, { "name": "VR大师 sword", "playstation": ["ps4"], "language": "", "leixing": "", "truename": "" }, { "name": "VR大师 staff", "playstation": ["ps4"], "language": "", "leixing": "", "truename": "" }, { "name": "VR大师 robe", "playstation": ["ps4"], "language": "", "leixing": "", "truename": "" }, { "name": "声名狼藉：次子", "playstation": ["ps4"], "language": "", "leixing": "", "truename": "" }, { "name": "RIGS:机械化战斗联盟", "playstation": ["ps4"], "language": "", "leixing": "", "truename": "" }, { "name": "东京丛林", "playstation": ["ps3"], "language": "", "leixing": "", "truename": "" }, { "name": "deemo最终演奏", "playstation": ["psv"], "language": "", "leixing": "", "truename": "" }, { "name": "边界：王国碎片", "playstation": ["ps4"], "language": "", "leixing": "", "truename": "" }, { "name": "失忆症合集", "playstation": ["ps4"], "language": "", "leixing": "", "truename": "" }, { "name": "光之子", "playstation": ["ps4"], "language": "", "leixing": "", "truename": "" }, { "name": "刺客信条4 黑旗：自由呐喊", "playstation": ["ps4"], "language": "", "leixing": "", "truename": "" }, { "name": "光明之子", "playstation": ["ps3"], "language": "", "leixing": "", "truename": "" }, { "name": "downwell", "playstation": ["psv", "ps4"], "language": "", "leixing": "", "truename": "" }, { "name": "难死塔", "playstation": ["ps4"], "language": "", "leixing": "", "truename": "" }, { "name": "三位一体2", "playstation": ["ps4"], "language": "", "leixing": "", "truename": "" }, { "name": "lumo", "playstation": ["psv"], "language": "", "leixing": "", "truename": "" }, { "name": "穆拉纳秘宝", "playstation": ["psv"], "language": "", "leixing": "", "truename": "" }, { "name": "abzu", "playstation": ["ps4"], "language": "", "leixing": "", "truename": "" }, { "name": "黑道圣徒：冲出地狱", "playstation": ["ps4"], "language": "", "leixing": "", "truename": "" }, { "name": "黑道圣徒4", "playstation": ["ps4"], "language": "", "leixing": "", "truename": "" }, { "name": "这是我们的战争：孩子们", "playstation": ["ps4"], "language": "", "leixing": "" }]
};
},{}],0:[function(require,module,exports) {
var global = (1, eval)('this');
var OldModule = module.bundle.Module;
function Module() {
  OldModule.call(this);
  this.hot = {
    accept: function (fn) {
      this._acceptCallback = fn || function () {};
    },
    dispose: function (fn) {
      this._disposeCallback = fn;
    }
  };
}

module.bundle.Module = Module;

if (!module.bundle.parent && typeof WebSocket !== 'undefined') {
  var ws = new WebSocket('ws://' + window.location.hostname + ':58532/');
  ws.onmessage = function(event) {
    var data = JSON.parse(event.data);

    if (data.type === 'update') {
      data.assets.forEach(function (asset) {
        hmrApply(global.require, asset);
      });

      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          hmrAccept(global.require, asset.id);
        }
      });
    }

    if (data.type === 'reload') {
      ws.close();
      ws.onclose = function () {
        window.location.reload();
      }
    }

    if (data.type === 'error-resolved') {
      console.log('[parcel] ✨ Error resolved');
    }

    if (data.type === 'error') {
      console.error('[parcel] 🚨  ' + data.error.message + '\n' + 'data.error.stack');
    }
  };
}

function getParents(bundle, id) {
  var modules = bundle.modules;
  if (!modules) {
    return [];
  }

  var parents = [];
  var k, d, dep;

  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];
      if (dep === id || (Array.isArray(dep) && dep[dep.length - 1] === id)) {
        parents.push(+k);
      }
    }
  }

  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }

  return parents;
}

function hmrApply(bundle, asset) {
  var modules = bundle.modules;
  if (!modules) {
    return;
  }

  if (modules[asset.id] || !bundle.parent) {
    var fn = new Function('require', 'module', 'exports', asset.generated.js);
    asset.isNew = !modules[asset.id];
    modules[asset.id] = [fn, asset.deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}

function hmrAccept(bundle, id) {
  var modules = bundle.modules;
  if (!modules) {
    return;
  }

  if (!modules[id] && bundle.parent) {
    return hmrAccept(bundle.parent, id);
  }

  var cached = bundle.cache[id];
  if (cached && cached.hot._disposeCallback) {
    cached.hot._disposeCallback();
  }

  delete bundle.cache[id];
  bundle(id);

  cached = bundle.cache[id];
  if (cached && cached.hot && cached.hot._acceptCallback) {
    cached.hot._acceptCallback();
    return true;
  }

  return getParents(global.require, id).some(function (id) {
    return hmrAccept(global.require, id)
  });
}
},{}]},{},[0,3])