<template>
  <div class="index">
    <div class="title">问卷调查管理平台</div>
    <a href="http://localhost:5173/login" class="startBtn">开始问卷调查</a>
  </div>
</template>

<style lang="less" scoped>
.index {
  height: 100vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 10vw;
  .title {
    text-align: center;
    font-size: 5vw;
  }
  .startBtn {
    padding: 1vw 2vw;
    border-radius: 1vw;
    height: 10vw;
    border: none;
    background-color: #007bff;
    color: #fff;
    text-decoration: none;
    text-align: center;
    line-height: 10vw;
    font-size: 5vw;
  }
}
</style>
