<script setup lang="ts">
import { computed } from "vue";

const props = defineProps<{
  title?: string;
  description?: string;
  level?: 1 | 2 | 3;
}>();
const levelClass = computed(() => {
  return {
    "level-1": props.level === 1,
    "level-2": props.level === 2,
    "level-3": props.level === 3,
  };
});
defineOptions({
  name: "QuestionInfo",
});
</script>

<template>
  <div class="QuestionInfo">
    <div class="title" :class="levelClass">{{ props.title }}</div>
    <div class="description">{{ props.description }}</div>
  </div>
</template>

<style lang="less" scoped>
.QuestionInfo {
  display: flex;
  flex-direction: column;
  gap: 10px;
  height: auto;
  .title {
    font-size: 11vw;
    font-weight: bold;
    text-align: center;
  }
  .description {
    font-size: 4vw;
    text-align: center;
    // 自动换行
    word-break: break-word;
  }
}
.level-1 {
  font-size: 11vw !important;
}
.level-2 {
  font-size: 8vw !important;
}
.level-3 {
  font-size: 6vw !important;
}
</style>
