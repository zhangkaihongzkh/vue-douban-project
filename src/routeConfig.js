import Nav from './components/Nav.vue'
import Home from './components/Home.vue'
import Footer from './components/Footer.vue'
import Content from './components/Content.vue'


import TOP250 from './components/TOP250.vue'
import Hot from './components/Hot.vue'
import Soon from './components/Soon.vue'



export default[
  {
    path:'/TOP250',
    component:TOP250
  },
  {
    path:'/Hot',
    component:Hot
  },
  {
    path:'/Soon',
    component:Soon
  },
  {
    path:'*',
    component:Hot
  },
  {
    path: '/',
    redirect: '/home'
  }
]
