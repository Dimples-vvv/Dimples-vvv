import type { MenuModule } from '/@/router/types';
import { t } from '/@/hooks/web/useI18n';

const menu: MenuModule = {
  orderNo: 12,
  menu: {
    name: t('routes.my.dataTable'),
    path: '/dataTable',

    children: [
      {
        path: 'history',
        name: t('routes.my.history'),
      },
      {
        path: 'onOff',
        name: t('routes.my.onOff'),
      },
      {
        path: 'alarmRecord',
        name: t('routes.my.alarmRecord'),
      },
    ],
  },
};
export default menu;
