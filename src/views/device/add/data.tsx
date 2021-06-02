import { FormSchema } from '/@/components/Form';

export const step1Schemas: FormSchema[] = [
  {
    field: 'name',
    component: 'Input',
    label: '设备名称',
    required: true,
  },
  {
    field: 'no',
    component: 'Input',
    label: '设备编码',
    required: true,
  },
  {
    field: 'address',
    component: 'Input',
    label: '地址',
    required: true,
  },
];

export const step2Schemas: FormSchema[] = [
  {
    field: 'name',
    component: 'Input',
    label: '设备名称',
    required: false,
  },
  {
    field: 'no',
    component: 'Input',
    label: '设备名称',
    required: false,
  },
  {
    field: 'address',
    component: 'Input',
    label: '地址',
    required: false,
  },
];
