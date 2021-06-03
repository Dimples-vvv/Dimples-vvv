<template>
  <div>
    <div :class="`${prefixCls}__top`">
      <a-row :gutter="12">
        <a-col :span="8" :class="`${prefixCls}__top-col`">
          <div>我的设备</div>
          <p>8个</p>
        </a-col>
        <a-col :span="8" :class="`${prefixCls}__top-col`">
          <div>在线设备</div>
          <p>6个</p>
        </a-col>
        <a-col :span="8" :class="`${prefixCls}__top-col`">
          <div>待处理问题</div>
          <p>32个</p>
        </a-col>
      </a-row>
    </div>

    <BasicTable @register="registerTable">
      <template #form-custom> </template>

      <template #toolbar>
        <!-- <a-button type="primary" @click="getFormValues">获取表单数据</a-button> -->
        <a-button type="danger" @click="getFormValues">批量删除</a-button>
      </template>

      <template #action="{ record }">
        <TableAction
          :actions="[
            {
              icon: 'clarity:note-edit-line',
              onClick: handleEdit.bind(null, record),
            },
            {
              icon: 'ant-design:delete-outlined',
              color: 'error',
              popConfirm: {
                title: '是否确认删除',
                confirm: handleDelete.bind(null, record),
              },
            },
          ]"
        />
      </template>
    </BasicTable>
  </div>
</template>
<script lang="ts">
  import { Row, Col } from 'ant-design-vue';
  import { defineComponent } from 'vue';

  import { List } from 'ant-design-vue';

  import { BasicTable, useTable, TableAction } from '/@/components/Table';
  import { getBasicColumns, searchDevice } from './tableData';

  import { deviceListApi } from '/@/api/my/device';

  export default defineComponent({
    components: {
      [List.name]: List,
      [List.Item.name]: List.Item,
      [Row.name]: Row,
      [Col.name]: Col,

      BasicTable,
      TableAction,
    },
    setup() {
      const [registerTable, { getForm }] = useTable({
        title: '设备列表',
        api: deviceListApi,
        columns: getBasicColumns(),
        useSearchForm: true,
        formConfig: {
          labelWidth: 120,
          schemas: searchDevice,
        },
        showTableSetting: true,
        rowSelection: { type: 'checkbox' },
        actionColumn: {
          width: 80,
          title: '操作',
          dataIndex: 'action',
          slots: { customRender: 'action' },
          fixed: undefined,
        },
      });

      function getFormValues() {
        console.log(getForm().getFieldsValue());
      }

      function handleEdit(record: Recordable) {
        console.log(record);
      }

      function handleDelete(record: Recordable) {
        console.log(record);
      }
      return {
        prefixCls: 'list-basic',

        pagination: {
          show: true,
          pageSize: 3,
        },

        registerTable,
        getFormValues,

        handleEdit,
        handleDelete,
      };
    },
  });
</script>
<style lang="less" scoped>
  .list-basic {
    &__top {
      padding: 24px;
      text-align: center;
      background-color: @component-background;

      &-col {
        &:not(:last-child) {
          border-right: 1px dashed @border-color-base;
        }

        div {
          margin-bottom: 12px;
          font-size: 14px;
          line-height: 22px;
          color: @text-color;
        }

        p {
          margin: 0;
          font-size: 24px;
          line-height: 32px;
          color: @text-color;
        }
      }
    }

    &__content {
      padding: 24px;
      margin-top: 12px;
      background-color: @component-background;

      .list {
        position: relative;
      }

      .icon {
        font-size: 40px !important;
      }

      .extra {
        position: absolute;
        top: 20px;
        right: 15px;
        font-weight: normal;
        color: @primary-color;
        cursor: pointer;
      }

      .description {
        display: inline-block;
        width: 40%;
      }

      .info {
        display: inline-block;
        width: 30%;
        text-align: center;

        div {
          display: inline-block;
          padding: 0 20px;

          span {
            display: block;
          }
        }
      }

      .progress {
        display: inline-block;
        width: 15%;
        vertical-align: top;
      }
    }
  }
</style>
