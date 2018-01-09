<template>
    <div>
        <canvas id="backgroundCanvas"></canvas>
    </div>
</template>
<script>
export default {
  name: "dasda",
  beforeMount() {
    var canvas = document.getElementById("myCanvas");
    var ctx = canvas.getContext("2d");
    ctx.fillStyle = "#FF0000";
    ctx.fillRect(0, 0, 80, 100);
  }
};
</script>
<style lang="less" scoped>

</style>
