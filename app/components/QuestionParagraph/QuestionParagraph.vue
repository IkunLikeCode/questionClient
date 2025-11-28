<script setup lang="ts">
const props = defineProps({
  title: {
    type: String,
    default: "",
  },
  isCenter: {
    type: Boolean,
    default: false,
  },
});
defineOptions({
  name: "QuesitonParagraph",
});
</script>

<template>
  <div class="QuestionParagraph">
    <div
      v-for="item in props.title.split('\n')"
      :key="item"
      class="title"
      :style="{ textAlign: props.isCenter ? 'center' : 'left' }">
      {{ item }}
    </div>
  </div>
</template>

<style lang="less" scoped>
.QuestionParagraph {
  .title {
    font-size: 5vw;
    font-weight: bold;
    // 换行
    word-break: break-word;
  }
}
</style>
