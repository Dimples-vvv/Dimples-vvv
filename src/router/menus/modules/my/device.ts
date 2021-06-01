import type { MenuModule } from '/@/router/types';
import { t } from '/@/hooks/web/useI18n';

const menu: MenuModule = {
  orderNo: 10,
  menu: {
    name: t('routes.my.device'),
    path: '/device',

    children: [
      {
        path: 'deviceList',
        name: t('routes.my.deviceList'),
      },
      {
        path: 'deviceAdd',
        name: t('routes.my.deviceAdd'),
      },
    ],
  },
};
export default menu;
