<script setup lang="ts">
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
  value: any[];
}>();
const newProps: any = reactive(deepClone(props));
const changeValueHandle = (value: any) => {
  if (newProps.value.includes(value)) {
    newProps.value = newProps.value.filter((item: any) => item !== value);
  } else {
    newProps.value.push(value);
  }
  if (newProps.value.length) {
    isEmpyt.value = false;
  } else {
    isEmpyt.value = true;
  }
  emit("changeValue", { fe_id: newProps.fe_id, value: newProps });
};
const getValue = () => {
  let position: any = null;
  if (inputRef.value) {
    if (!newProps.value.length) {
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
  name: "QuestionCheckBox",
});
defineExpose({
  getValue,
});
</script>

<template>
  <div class="QuestionCheckbox">
    <h3 v-if="props.title" class="title">{{ props.title }}</h3>
    <div
      ref="inputRef"
      class="checkbox-group"
      :class="{
        'checkbox-group-column': props.isVertical,
        'checkbox-group-row': !props.isVertical,
        error: isEmpyt,
      }">
      <div
        v-for="item in props.options"
        :key="item.value"
        class="checkbox-item">
        <label class="checkbox-item-content">
          <input
            @change="changeValueHandle(item.value)"
            type="checkbox"
            class="checkbox-input"
            :checked="props.value.includes(item.value)" />
          {{ item.label }}
        </label>
      </div>
    </div>
    <div class="errorText" v-if="isEmpyt">请选择</div>
  </div>
</template>

<style lang="less" scoped>
.QuestionCheckbox {
  position: relative;
  .displayCommon() {
    display: flex;
    width: 100%;
    align-items: flex-start;
    flex-wrap: wrap;
  }
  .title {
    font-size: 5vw;
    font-weight: bold;
    margin-bottom: 4vw;
  }
  .checkbox-item {
    font-size: 4.5vw;
    margin-bottom: 2vw;
  }
  .checkbox-group-column {
    .displayCommon();
    flex-direction: column;
  }
  .checkbox-group-row {
    .displayCommon();
    flex-direction: row;
  }
  .checkbox-item-content {
    // 换行
    word-break: break-word;
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
