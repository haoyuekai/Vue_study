
Vue.component('todo-item', {
	props: ['todo'],
	template: '<li v-bind:title="todo.id">{{ todo.name }}</li>'
})

var vm = new Vue({
	el:'#app',
	data:{
		message:"my first Vue demo",
		title:"页面加载于"+new Date(),
		isShow:true,
		list:[
			{	
				id:1,
				name:"Liming",
				age:23,
				sex:"man",
				isChecked:false
			},{	
				id:2,
				name:"xiaohong",
				age:24,
				sex:"woman",
				isChecked:true
			},{	
				id:3,
				name:"wanger",
				age:20,
				sex:"man",
				isChecked:false
			}
		],
		styles:{
			color:"#f00",
			fontSize:"14px"
		},
		rawHtml:'<div class="test">test</div>'
	},
	watch:{
		list:function(newVal,oldVal){
			console.log(newVal,oldVal);
		}
	},
	methods:{
		addUser:function(ev){
			this.list.push({
				name:"",
				age:"",
				sex:"男"
			})
		},
		messageToUpperCaseFun:function(){
			return this.message.toUpperCase()+new Date();
		},
		choose:function(){
			
		}
	},
	filters:{
		capitalize:function(val){
			return val=="" ? "" : val.charAt(0).toUpperCase() + val.slice(1);
		}
	},
	created:function(){
		// 创建实例后回调
	},
	computed:{ // 声明计算属性
		messageToUpperCase:function(){
			return this.message.toUpperCase()+new Date();
		}
	}
})

