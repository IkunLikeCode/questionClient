<script setup lang="ts">
import { deepClone } from "@/utils/deepClone";
const emit = defineEmits(["changeValue"]);
const isEmpyt = ref(false);
const inputRef = useTemplateRef<HTMLInputElement>("inputRef");
const props = defineProps<{
  fe_id: string;
  title: string;
  options: {
    label: string;
    value: any;
  }[];
  isVertical: boolean;
  value: any;
}>();
const newProps: any = reactive(
  deepClone({
    ...props,
    value: "",
  })
);
const changeValueHandle = (value: any) => {
  newProps.value = value;
  if (newProps.value) {
    isEmpyt.value = false;
  } else {
    isEmpyt.value = true;
  }
  emit("changeValue", { fe_id: newProps.fe_id, value: newProps });
};
const getValue = () => {
  let position: any = null;
  if (inputRef.value) {
    if (!newProps.value) {
      position = inputRef.value.getBoundingClientRect();
      isEmpyt.value = true;
    }
  }
  return {
    value: newProps.value,
    fe_id: newProps.fe_id,
    position,
  };
};
defineOptions({
  name: "QuestionRadio",
});
defineExpose({
  getValue,
});
</script>

<template>
  <div class="QuestionRadio">
    <h3 v-if="newProps.title" class="title">{{ newProps.title }}</h3>
    <div
      ref="inputRef"
      class="radio-group"
      :class="{
        'radio-group-column': newProps.isVertical,
        'radio-group-row': !newProps.isVertical,
        error: isEmpyt,
      }">
      <div
        v-for="(item, index) in newProps.options"
        :key="item.value"
        class="radio-item">
        <label class="radio-item-content">
          <input
            @change="changeValueHandle(item.value)"
            type="radio"
            :name="newProps.fe_id"
            class="radio-input"
            :checked="newProps.value === item.value" />
          {{ item.label }}
        </label>
      </div>
    </div>
    <div class="errorText" v-if="isEmpyt">请选择</div>
  </div>
</template>

<style lang="less" scoped>
.QuestionRadio {
  position: relative;
  .title {
    font-size: 5vw;
    font-weight: bold;
    margin-bottom: 4vw;
  }
  .radio-group-column {
    display: flex;
    flex-direction: column;
    width: 100%;
    align-items: flex-start;
    gap: 2vw;
  }
  .radio-group-row {
    display: flex;
    flex-direction: row;
    width: 100%;
    align-items: flex-start;
    gap: 3vw;
  }
}
.error {
  outline: 1px solid red !important;
}
.errorText {
  font-size: 4vw;
  color: red;
  position: absolute;
  bottom: 1px solid red;
}
</style>
