

var vm = new Vue({
	el: "#app",
	data:{
		counter:0,
		name: 'Vue.js'
	},
	// 在 `methods` 对象中定义方法
	methods: {
	    greet: function (event) {
	    	// `this` 在方法里指当前 Vue 实例
	    	console.log('Hello ' + this.name + '!')
	    	// `event` 是原生 DOM 事件
	    	if (event) {
	    		console.log(event.target);
	    	}
	    },
	    warn: function (event) {
		    console.log(event.target);
		},
		enter: function(event){
			console.log(event.target.value);
		},
		keyup: function(event){
			console.log(event.key);
		},
		doSomething: function(){
			alert("1");
		}
	}
})