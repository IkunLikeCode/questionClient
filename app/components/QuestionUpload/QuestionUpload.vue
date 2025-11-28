<script setup lang="ts">
const props = defineProps<{
  fe_id: string;
  title: string;
  fileList: {
    url: string;
    name: string;
  }[];
}>();
const choseIndex = ref<number>(-1);
const clickHandle = (item: { url: string; name: string }, index: number) => {
  choseIndex.value = index;
};
defineOptions({
  name: "QuestionUpload",
});
</script>

<template>
  <div class="QuestionUpload">
    <div class="title">{{ props.title }}</div>
    <div class="file-list">
      <div
        v-for="(item, index) in props.fileList"
        :key="item.url"
        class="file-item"
        :class="{ active: index === choseIndex }"
        @click="clickHandle(item, index)">
        <div v-if="item.url" class="file">
          <img :src="item.url" alt="人物图片" />
          <div class="file-name">{{ item.name }}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="less" scoped>
.QuestionUpload {
  box-sizing: border-box;
  padding-bottom: 3vw;
  .title {
    font-size: 4vw;
    font-weight: bold;
    margin-bottom: 3vw;
  }
  .file-list {
    display: grid;
    width: 100%;
    gap: 10px;
    flex-wrap: wrap;
    grid-template-columns: repeat(auto-fit, minmax(100px, 1fr));
  }
  .file-item {
    display: flex;
    flex-direction: column;
    align-items: center;
    font-size: 4vw;
    border: 1px solid #ccc;
    border-radius: 2vw;
    overflow: hidden;
    width: 26vw;
    height: 26vw;
    .file {
      position: relative;
      width: 100%;
      height: 100%;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      box-sizing: border-box;
    }
    .file-name {
      position: absolute;
      bottom: 0;
      left: 0;
      width: 100%;
      padding: 1vw;
      box-sizing: border-box;
      text-align: center;
      background-color: rgba(0, 0, 0, 0.5);
      color: #fff;
      font-size: 4vw;
    }
    .file-warning {
      padding: 1vw;
      box-sizing: border-box;
      text-align: center;
      background-color: rgba(0, 0, 0, 0.5);
      color: #fff;
      font-size: 4vw;
    }
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }
  .active {
    border-color: #44a3fc;
    outline: 2px solid #44a3fc;
  }
}
</style>
