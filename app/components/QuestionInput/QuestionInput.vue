<script setup lang="ts">
const props = defineProps<{
  fe_id: string;
  title: string;
  placeholder: string;
}>();
const inputRef = useTemplateRef<HTMLInputElement>("inputRef");
const isEmpyt = shallowRef(false);
const emit = defineEmits(["changeValue"]);
const newProps: any = reactive(deepClone(props));
const changeValueHandle = (e: InputEvent) => {
  const value = (e.target as HTMLInputElement).value;
  if (value) {
    isEmpyt.value = false;
  } else {
    isEmpyt.value = true;
  }
  newProps.placeholder = value;
  emit("changeValue", { fe_id: newProps.fe_id, value: newProps });
};
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
defineOptions({
  name: "QuestionInput",
});
</script>

<template>
  <div class="QustionInput">
    <div class="title">{{ newProps.title }}</div>
    <input
      :class="{ error: isEmpyt }"
      ref="inputRef"
      @input="changeValueHandle"
      name="input"
      class="input"
      :placeholder="newProps.placeholder" />
    <div class="errorText" v-if="isEmpyt">请填写内容</div>
  </div>
</template>

<style lang="less" scoped>
.QustionInput {
  position: relative;
  .title {
    font-size: 5vw;
    font-weight: bold;
    margin-bottom: 3vw;
  }
  .input {
    height: 10vw;
    width: 100%;
    font-size: 4vw;
    border: 1px solid #ccc;
    border-radius: 5px;
    padding: 0 1vw;
    box-sizing: border-box;
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
