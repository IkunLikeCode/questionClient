<script setup lang="ts">
const emit = defineEmits(["changeValue"]);
const props = defineProps<{
  fe_id: string;
  title: string;
  content: string;
  contentMaxLength: 200;
}>();
const isEmpyt = shallowRef(false);
const inputRef = useTemplateRef<HTMLTextAreaElement>("inputRef");
const newProps: any = reactive(deepClone(props));
const changeValueHandle = (value: any) => {
  if (value) {
    isEmpyt.value = false;
  } else {
    isEmpyt.value = true;
  }
  newProps.content = value.target.value;
  emit("changeValue", { fe_id: newProps.fe_id, value: newProps });
};
defineOptions({
  name: "questionTextarea",
});
const getValue = () => {
  let position: any = null;
  if (inputRef.value) {
    if (!inputRef.value.value) {
      position = inputRef.value.getBoundingClientRect();
      isEmpyt.value = true;
    }
  }
  return {
    value: inputRef.value?.value,
    fe_id: props.fe_id,
    position,
  };
};
defineExpose({
  getValue,
});
</script>

<template>
  <div class="QuestionTextarea">
    <div class="title">{{ newProps.title }}</div>
    <textarea
      ref="inputRef"
      :class="{ error: isEmpyt }"
      :maxlength="newProps.contentMaxLength"
      :name="newProps.fe_id"
      class="content"
      @input="changeValueHandle"
      :placeholder="content" />
    <div class="errorText" v-if="isEmpyt">请填写内容</div>
  </div>
</template>

<style lang="less" scoped>
.QuestionTextarea {
  .title {
    font-size: 5vw;
    font-weight: bold;
    margin-bottom: 3vw;
  }
  .content {
    border: 1px solid #c0c4cc;
    border-radius: 1vw;
    padding: 2vw;
    width: 100%;
    font-size: 4vw;
    resize: none;
    box-sizing: border-box;
    // 自动换行
    word-wrap: break-word;
    background-color: #ffffff;
  }
}
.error {
  border: 1px solid red !important;
}
.errorText {
  font-size: 4vw;
  color: red;
  position: absolute;
  bottom: 1px solid red;
}
</style>
