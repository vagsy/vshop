import Vue from 'vue'
import Router from 'vue-router'
import IndexPage from '@/pages/index'
import DetailPage from '@/pages/detail'
import OrderListPage from '@/pages/orderList'
import DetailAnaPage from '@/pages/detail/analysis'
import DetailCouPage from '@/pages/detail/count'
import DetailForPage from '@/pages/detail/forecast'
import DetailPubPage from '@/pages/detail/publish'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'IndexPage',
      component: IndexPage
    },
    {
      path: '/orderList',
      name: 'OrderListPage',
      component: OrderListPage
		},
    {
      path: '/detail',
      name: 'DetailPage',
      component: DetailPage,
      redirect: '/detail/count',
      children: [
        {
					path: 'analysis',
          name: 'DetailAnaPage',
					component: DetailAnaPage
				},
				{
					path: 'count',
          name: 'DetailCouPage',
					component: DetailCouPage
				},
        {
          path: 'forecast',
          name: 'DetailForPage',
          component: DetailForPage,
        },
        {
					path: 'publish',
          name: 'DetailPubPage',
					component: DetailPubPage
				}
      ]
    }
  ]
})
