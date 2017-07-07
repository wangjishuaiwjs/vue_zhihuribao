import Vue from 'vue'
import VueRouter from 'vue-router'

// 引入组件
import Home from '../component/Home.vue'
import Store from '../component/Store.vue'
import Search from '../component/Search.vue'
import Default from '../component/Default.vue'

Vue.use(VueRouter)

export default new VueRouter({
	routes : [
		{
			path : '/home',
			name : 'home',
			component : Home
		},
		{
			path : '/store/:id',
			name : 'store',
			component : Store

		},
		{
			path : '/search',
			name : 'search',
			component : Search

		},
		{
			path : '/default/:id',
			name : 'default',
			component : Default

		},
		{
			path : '/*',
			redirect : '/home'
		}
	]
})