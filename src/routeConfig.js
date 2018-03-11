import Nav from './components/Nav.vue'
import SideBar from './components/Nav.vue'



import TOP250 from './components/TOP250.vue'
import Hot from './components/Hot.vue'
import Soon from './components/Soon.vue'



export default[
  {
    path:'/TOP250/:pageNum',
    component:TOP250
  },
  {
    path:'/Hot/:pageNum',
    name:'Hot',
    component:Hot
  },
  {
    path:'/Soon/:pageNum',

    component:Soon
  },
  {
    path:'*',
    component:Hot
  },
  {
    path: '/',
    redirect: '/Hot/1'
  }
]
