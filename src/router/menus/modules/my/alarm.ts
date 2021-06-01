import type { MenuModule } from '/@/router/types';
import { t } from '/@/hooks/web/useI18n';

const menu: MenuModule = {
  orderNo: 11,
  menu: {
    name: t('routes.my.alarm'),
    path: '/alarm',

    children: [
      {
        path: 'settings',
        name: t('routes.my.alarmAdd'),
      },
      {
        path: 'contacts',
        name: t('routes.my.alarmContacts'),
      },
    ],
  },
};
export default menu;
