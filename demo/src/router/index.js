import Vue from 'vue'
import Router from 'vue-router'
import Resource from 'vue-resource'
import Index from '@/views/index'
import Message from '@/views/message'
import Contacts from '@/views/contacts'
import Dynamic from '@/views/dynamic'

Vue.use(Router)
Vue.use(Resource)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: Index,
      children:[
      	{
      		path: 'message',
		      name: 'message',
		      component: Message,
      	},{
      		path: 'contacts',
		      name: 'contacts',
		      component: Contacts,
      	},{
      		path: 'dynamic',
		      name: 'dynamic',
		      component: Dynamic,
      	}
      ]
    }
  ]
})
