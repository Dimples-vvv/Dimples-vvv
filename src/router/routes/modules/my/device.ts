import type { AppRouteModule } from '/@/router/types';

import { LAYOUT } from '/@/router/constant';
import { t } from '/@/hooks/web/useI18n';

const device: AppRouteModule = {
  path: '/device',
  name: 'Device',
  component: LAYOUT,
  redirect: '/device/deviceList',
  meta: {
    icon: 'mdi:devices',
    title: t('routes.my.device'),
  },
  children: [
    {
      path: 'deviceList',
      name: 'deviceList',
      component: () => import('/@/views/device/detail/index.vue'),
      meta: {
        title: t('routes.my.deviceList'),
      },
    },
    {
      path: 'deviceAdd',
      name: 'deviceAdd',
      component: () => import('/@/views/device/add/index.vue'),
      meta: {
        title: t('routes.my.deviceAdd'),
      },
    },
  ],
};

export default device;
