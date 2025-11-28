<script setup lang="ts">
const props = defineProps<{
  isCenter?: boolean;
  title?: string;
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
  name: "QuestionTitle",
});
</script>

<template>
  <div class="QuestionTitle">
    <div
      class="title"
      :class="levelClass"
      :style="{ textAlign: props.isCenter ? 'center' : 'left' }">
      {{ props.title }}
    </div>
  </div>
</template>

<style lang="less" scoped>
.QuestionTitle {
  .title {
    font-size: 5vw;
    font-weight: bold;
    // 换行
    word-break: break-word;
  }
  .level-1 {
    font-size: 8vw;
  }
  .level-2 {
    font-size: 6vw;
  }
  .level-3 {
    font-size: 4vw;
  }
}
</style>
