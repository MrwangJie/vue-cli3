import Home from '@/views/Home.vue'
export default [
  // 命名路由
  // 非命名路由
  // 命名视图
  // 重定向
  // 别名  alias: '/home_page',
  // 编程式导航s
  {
    path: '/',
    name: 'home',
    alias: '/home_page', // 别名
    component: Home
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '@/views/About.vue')
  },
  {
    path: '/argu/:name',
    name: 'argu',
    component: () => import('@/views/argu.vue')
  },
  {
    path: '/parent',
    name: 'parent',
    component: () => import('@/views/parent.vue'),
    children: [
      {
        path: 'child',
        name: 'child',
        component: () => import('@/views/child.vue')
      }
    ]
  },
  // 命名视图 components  注意 s
  // <router-view name="email"/>
  // <router-view name="tel"/>
  {
    path: '/named_view',
    components: {
      default: () => import('@/views/child.vue'),
      email: () => import('@/views/email.vue'),
      tel: () => import('@/views/tel.vue')
    }
  },
  // 重定向
  {
    path: '/main',
    // 对象写法
    // redirect: {
    //   name: 'home'
    // }
    // 方法写法
    redirect: (to) => {
      // console.log(to)
      // 第一种
      // return {
      //   name: 'home'
      // }
      // 第二种
      return '/'
    }

  }
]
