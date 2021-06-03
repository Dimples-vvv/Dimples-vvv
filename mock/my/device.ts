import { MockMethod } from 'vite-plugin-mock';
import { resultPageSuccess } from '../_util';

const deviceList = (() => {
  const result: any[] = [];
  for (let index = 0; index < 60; index++) {
    result.push({
      id: `${index}`,
      beginTime: '@datetime',
      endTime: '@datetime',
      electricmotorAddress: '@city()',
      electricmotorName: '设备' + `${index}`,
      electricmotorMark: '设备备注。。。。。。。。。。',
      company: 'XXX有限公司',
      date: `@date('yyyy-MM-dd')`,
      time: `@time('HH:mm')`,
      'no|100000-10000000': 100000,
      'status|1': ['0', '1'],
    });
  }
  return result;
})();

export default [
  {
    url: '/basic-api/device/getDeviceList',
    timeout: 100,
    method: 'get',
    response: ({ query }) => {
      const { page = 1, pageSize = 20 } = query;
      return resultPageSuccess(page, pageSize, deviceList);
    },
  },
] as MockMethod[];
