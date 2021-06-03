import { defHttp } from '/@/utils/http/axios';
import { DeviceListParams, DeviceListGetResultModel } from './model/deviceModel';

enum Api {
  DEVICE_LIST = '/device/getDeviceList',
}

/**
 * @description: Get device list value
 */
export const deviceListApi = (params: DeviceListParams) =>
  defHttp.get<DeviceListGetResultModel>({
    url: Api.DEVICE_LIST,
    params,
    headers: {
      ignoreCancelToken: true,
    },
  });
