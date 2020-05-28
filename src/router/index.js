import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: resolve => require(['../components/common/Home.vue'], resolve),
      meta: { title: 'home' },
      redirect: '/main',
      children:[
        {
          path: '/main',
          component: resolve => require(['../components/page/main.vue'], resolve),
          meta: { title: '菜单页面' },
          name:"main"
        },
        {
          path: '/dianzi',
          component: resolve => require(['../components/page/dianzi.vue'], resolve),
          meta: { title: '菜单页面' },
          name:"dianzi"
        },
        {
          path: '/login',
          component: resolve => require(['../components/common/Login.vue'], resolve),
          meta: { title: 'login' },
          name:"login"
        }, 
        {
          path: '/newChooseRoom',
          component: resolve => require(['../components/page/newChooseRoom.vue'], resolve),
          meta: { title: '新生选房' },
          name:"newChooseRoom"
          },
          {
            path: '/chooseRoom',
            component: resolve => require(['../components/page/chooseRoom.vue'], resolve),
            meta: { title: '选房' },
            name:"chooseRoom"
            },
            {
              path: '/chooseRoomLayer',
              component: resolve => require(['../components/page/chooseRoomLayer.vue'], resolve),
              meta: { title: '选房' },
              name:"chooseRoomLayer"
              },
              {
                path: '/chooseRoomDetail',
                component: resolve => require(['../components/page/chooseRoomDetail.vue'], resolve),
                meta: { title: '选房' },
                name:"chooseRoomDetail"
                },
        {
            path: '/apartmentWindows',
            component: resolve => require(['../components/page/apartmentWindows.vue'], resolve),
            meta: { title: '公寓视窗' },
            name:"apartmentWindows"
        },
        {
          path: '/knowing',
          component: resolve => require(['../components/page/knowing.vue'], resolve),
          meta: { title: '查寝' },
          name:"knowing"
        },
        {
          path: '/nightKnowing',
          component: resolve => require(['../components/page/nightKnowing.vue'], resolve),
          meta: { title: '夜宿查寝' },
          name:"nightKnowing"
        },
        {
          path: '/nightKnowingDetail',
          component: resolve => require(['../components/page/nightKnowingDetail.vue'], resolve),
          meta: { title: '夜宿查寝详情' },
          name:"nightKnowingDetail"
        },
        {
          path: '/healthCheck',
          component: resolve => require(['../components/page/healthCheck.vue'], resolve),
          meta: { title: '卫生查寝' },
          name:"healthCheck"
        },
        {
          path: '/healthCheckDetail',
          component: resolve => require(['../components/page/healthCheckDetail.vue'], resolve),
          meta: { title: '卫生查寝详情' },
          name:"healthCheckDetail"
        },
        {
          path: '/violationKnowing',
          component: resolve => require(['../components/page/violationKnowing.vue'], resolve),
          meta: { title: '违规查寝' },
          name:"violationKnowing"
        },
        {
          path: '/violationKnowingDetail',
          component: resolve => require(['../components/page/violationKnowingDetail.vue'], resolve),
          meta: { title: '违规查寝详情' },
          name:"violationKnowingDetail"
        },
        {
          path: '/apartmentDetail',
          component: resolve => require(['../components/page/apartmentDetail.vue'], resolve),
          meta: { title: '公寓详情' },
          name:"apartmentDetail"
        },
        {
          path: '/historyKnowing',
          component: resolve => require(['../components/page/historyKnowing.vue'], resolve),
          meta: { title: '查寝记录' },
          name:"historyKnowing"
        },
        {
        path: '/studentDetail',
        component: resolve => require(['../components/page/studentDetail.vue'], resolve),
        meta: { title: '学生详情' },
        name:"studentDetail"
        },
        {
          path: '/apartmentAdjustment',
          component: resolve => require(['../components/page/apartmentAdjustment.vue'], resolve),
          meta: { title: '调宿' },
          name:"apartmentAdjustment"
          },
          {
            path: '/apartmentFace',
            component: resolve => require(['../components/page/apartmentFace.vue'], resolve),
            meta: { title: '对调' },
            name:"apartmentFace"
            },
        {
          path: '/apartmentCheckout',
          component: resolve => require(['../components/page/apartmentCheckout.vue'], resolve),
          meta: { title: '退宿' },
          name:"apartmentCheckout"
          },
         
         
        
        
      ]
    }
  ]
})
