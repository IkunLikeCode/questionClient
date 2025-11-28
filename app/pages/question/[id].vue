<script setup lang="ts">
import { getComponentConfig } from "~/components";
const route = useRoute();
const { data } = await useFetch<{
  data: {
    componentsList: any[];
  };
}>("/api/question/" + route.params.id);
const componentList = data.value?.data?.componentsList || [];
const componentRefs = ref<any[]>([]);
// 提交表单
const submit = async () => {
  const isValidate = valieData();
  if (isValidate) {
    try {
      const statisticsDto = {
        questionId: route.params.id,
        componentsList: componentList,
      };
      const { data } = await useFetch("/api/question/question", {
        method: "POST",
        body: statisticsDto,
      });
      const result: {
        errno: number;
        msg: string;
        success: boolean;
      } = data.value as any;
      if (result.errno === 0 && result.success) {
        await navigateTo("/succeed", {
          replace: true,
        });
      } else {
        await navigateTo("/error", {
          replace: true,
        });
      }
    } catch (error) {
      console.log(error);
    }
  }
};

// 验证表单
const valieData = () => {
  for (let i = 0; i < componentRefs.value.length; i++) {
    if (componentRefs.value[i].getValue) {
      const { position, value } = componentRefs.value[i].getValue();
      if (Array.isArray(value) && !value.length) {
        window.scrollTo({
          top: position.top - 50,
        });
        return false;
      }
      if (!value) {
        window.scrollTo({
          top: position.top - 50,
        });
        return false;
      }
    }
  }
  return true;
};

const setComponentRef = (el: any, index: number) => {
  componentRefs.value[index] = el;
};
const changeValueHandle = (data: any) => {
  const { fe_id, value } = data;
  componentList.forEach((item) => {
    if (item.fe_id === fe_id) {
      item.props = value;
    }
  });
};
</script>

<template>
  <ClientOnly>
    <div class="question">
      <div class="questionList">
        <template v-for="(component, index) in componentList">
          <component
            :ref="
              (el) => {
                setComponentRef(el, index);
              }
            "
            @changeValue="changeValueHandle"
            :fe_id="component.fe_id"
            :is="getComponentConfig(component.type)?.component"
            v-bind="component.props" />
        </template>
      </div>
      <button class="submitBtn" @click="submit">提交</button>
    </div>
  </ClientOnly>
</template>

<style scoped lang="less">
.question {
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 3vw;
  .questionList {
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 10vw;
  }
  .submitBtn {
    height: 10vw;
    width: 100%;
    font-size: 4vw;
    font-weight: bold;
    color: #fff;
    background-color: #007bff;
    border: none;
    border-radius: 5px;
    cursor: pointer;
  }
}
</style>
