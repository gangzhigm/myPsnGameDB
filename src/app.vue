<template>
  <div id="vue">
    <div class="container-fluid">
      <div class="row">
        <div class="col-xs-12 col-sm-8">
          <H1 class="h1">在线游戏索引库
            <small>
              <strong>从下载列表里一个一个找,真的很烦</strong>
            </small>
          </H1>
        </div>
        <div class="col-xs-12 col-sm-4">
          <label for="input">
            <svg class="icon" aria-hidden="true">
              <use xlink:href="#icon-icon-test"></use>
            </svg>
            <input id="input" type="" name="">
          </label>
        </div>
      </div>
      <div class="row">
        <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12" id='content'>
          <div id="PS3">
            <h2>PS3</h2>
            <div v-for="(item,index) in ps3">{{item}}</div>
          </div>
          <div id="PS4">
            <h2>PS4</h2>
            <div v-for="(item,index) in ps4">{{item}}</div>
          </div>
          <div id="PSV">
            <h2>PSV</h2>
            <div v-for="(item,index) in psv">{{item}}</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import psnGame from "./data/psnGame";

export default {
  data() {
    return {
      psv: [],
      ps3: [],
      ps4: []
    };
  },
  beforeMount() {
    const psndata = psnGame;
    for (var value of psndata.game) {
      if (value.playstation.indexOf("ps3") >= 0) {
        this.ps3.push(value.name);
      }
      if (value.playstation.indexOf("ps4") >= 0) {
        this.ps4.push(value.name);
      }
      if (value.playstation.indexOf("psv") >= 0) {
        this.psv.push(value.name);
      }
    }
  }
};
</script>

<style lang="less" scoped>
* {
  padding: 0;
  margin: 0;
  outline: 0;
  border: 0;
}
body {
  background: #f2eee3;
  margin-top: 20px;
  cursor: default;
}
.h1 {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
label {
  text-align: right;
  position: relative;
  #input {
    transition: all 0.4s;
    height: 3em;
    position: absolute;
    top: 0;
    left: 3.5em;
    width: 0;
    &:focus {
      width: 30em;
    }
  }
  .icon {
    width: 3em;
    height: 3em;
    fill: currentColor;
    overflow: hidden;
  }
}
#content {
  margin-top: 10px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  #PSV {
    background-color: #fc1a86;
  }
  #PS3 {
    background-color: #f8cd28;
  }
  #PS4 {
    background-color: #43bef7;
  }
  #PSV,
  #PS3,
  #PS4 {
    border-radius: 6px;
    margin: 0 5px;
    padding: 5px;
    width: 33%;
    height: auto;
    transition: all 0.4s;
    h2 {
      color: #fff;
    }
    div {
      width: 100%;
      user-select: none;
      color: #fff;
      text-indent: 10px;
      margin: 10px 0;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
      transition: all 0.4s;
      position: relative;
      &:hover {
        padding-left: 10px;
        text-shadow: 0 0 10px #000000;
      }
    }
  }
}
</style>

