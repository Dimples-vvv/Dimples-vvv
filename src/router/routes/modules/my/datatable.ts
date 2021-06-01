import type { AppRouteModule } from '/@/router/types';

import { LAYOUT } from '/@/router/constant';
import { t } from '/@/hooks/web/useI18n';
import { ExceptionEnum } from '/@/enums/exceptionEnum';
const ExceptionPage = () => import('/@/views/sys/exception/Exception.vue');

const device: AppRouteModule = {
  path: '/dataTable',
  name: 'dataTable',
  component: LAYOUT,
  redirect: '/dataTable/history',
  meta: {
    icon: 'carbon:table-split',
    title: t('routes.my.dataTable'),
  },
  children: [
    {
      path: 'history',
      name: 'history',
      component: ExceptionPage,
      props: {
        status: ExceptionEnum.PAGE_NOT_DATA,
      },
      meta: {
        title: t('routes.my.history'),
      },
    },
    {
      path: 'onOff',
      name: 'onOff',
      component: ExceptionPage,
      props: {
        status: ExceptionEnum.PAGE_NOT_DATA,
      },
      meta: {
        title: t('routes.my.onOff'),
      },
    },
    {
      path: 'alarmRecord',
      name: 'alarmRecord',
      component: ExceptionPage,
      props: {
        status: ExceptionEnum.PAGE_NOT_DATA,
      },
      meta: {
        // icon:'mdi:calendar-clock',
        title: t('routes.my.alarmRecord'),
      },
    },
  ],
};

export default device;
