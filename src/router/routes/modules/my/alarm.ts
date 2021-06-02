import type { AppRouteModule } from '/@/router/types';

import { LAYOUT } from '/@/router/constant';
import { t } from '/@/hooks/web/useI18n';
import { ExceptionEnum } from '/@/enums/exceptionEnum';
const ExceptionPage = () => import('/@/views/sys/exception/Exception.vue');

const device: AppRouteModule = {
  path: '/alarm',
  name: 'Alarm',
  component: LAYOUT,
  redirect: '/alarm/settings',
  meta: {
    icon: 'ion:alarm',
    title: t('routes.my.alarm'),
  },
  children: [
    {
      path: 'settings',
      name: 'settings',
      component: ExceptionPage,
      props: {
        status: ExceptionEnum.PAGE_NOT_DATA,
      },
      meta: {
        title: t('routes.my.alarmAdd'),
      },
    },
    {
      path: 'contacts',
      name: 'contacts',
      component: () => import('/@/views/alarm/contacts/index.vue'),
      meta: {
        title: t('routes.my.alarmContacts'),
      },
    },
  ],
};

export default device;
