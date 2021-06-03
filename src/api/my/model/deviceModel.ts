import { BasicPageParams, BasicFetchResult } from '/@/api/model/baseModel';
/**
 * @description: Request list interface parameters
 */
interface deviceListParams extends BasicPageParams {
  userId: string;
}
export type DeviceListParams = deviceListParams;

export interface DeviceListItem {
  id: string;
  electricmotorAddress: string;
  electricmotorName: string;
  electricmotorMark: string;
  status: number;
  company: string;
  dep: string;
  createUser: string;
  createTime: string;
}

/**
 * @description: Request list return value
 */
export type DeviceListGetResultModel = BasicFetchResult<DeviceListItem>;
