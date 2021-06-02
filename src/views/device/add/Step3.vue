<template>
  <div class="step3">
    <a-result status="success" title="添加成功" sub-title="请到设备列表查看">
      <template #extra>
        <a-button type="primary" @click="redo"> 继续添加 </a-button>
        <a-button> 设备列表 </a-button>
      </template>
    </a-result>
  </div>
</template>
<script lang="ts">
  import { defineComponent } from 'vue';
  import { Result, Descriptions } from 'ant-design-vue';
  export default defineComponent({
    components: {
      [Result.name]: Result,
      [Descriptions.name]: Descriptions,
      [Descriptions.Item.name]: Descriptions.Item,
    },
    emits: ['redo'],
    setup(_, { emit }) {
      return {
        redo: () => {
          emit('redo');
        },
      };
    },
  });
</script>
<style lang="less" scoped>
  .step3 {
    width: 600px;
    margin: 0 auto;
  }

  .desc-wrap {
    padding: 24px 40px;
    margin-top: 24px;
    background-color: @background-color-light;
  }
</style>
