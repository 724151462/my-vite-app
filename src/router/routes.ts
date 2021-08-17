import Test from '@/components/index.vue'
const routes = [{
    name: 'home',
    path: '/',
    component: { template: '<div>Home</div>' },
    meta: {
      text: 'home',
      i18n: 1
    }
  },{
    name: 'test',
    path: '/test',
    component: Test,
    meta: {
      text: () => import('@/components/index.vue'),
      i18n: 1
    }
  }]
export default routes