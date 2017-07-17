
// 全局组件
Vue.component('my-component', {
	props:['message'], // 当使用 驼峰命名是转化为“-”，例：detaMessage==>deta-message
	template: '<div>{{message}}</div>'
	
})

var Child = {
	template: '<button v-on:click="counter += 1">{{ counter }}</button>',
	data: function () {
    	return {counter:0}
	}
}
var OtherChild = {
	template: '<div>{{counters}}</div>',
	props: ['initialCounter'],
	data: function () {
	  return { counters: this.initialCounter }
	}
}


/*同Child*/
/*Vue.component('simple-counter', {
	template: '<button v-on:click="counter += 1">{{ counter }}</button>',
	// 技术上 data 的确是一个函数了，否则 Vue 不会警告，
	data: function () {
    	return {counter:0}
	}
})*/


var vm = new Vue({
	el: "#app",
	data:{
		parentMsg:'hello'
	},
	components:{
		'simple-counter':Child,
		'my-row':OtherChild
	}
})




// 组件prop验证
Vue.component('example', {
  	props: {
    // 基础类型检测 (`null` 意思是任何类型都可以)
    propA: Number,
    // 多种类型
    propB: [String, Number],
    // 必传且是字符串
    propC: {
      type: String,
      required: true
    },
    // 数字，有默认值
    propD: {
      type: Number,
      default: 100
    },
    // 数组/对象的默认值应当由一个工厂函数返回
    propE: {
      type: Object,
      default: function () {
        return { message: 'hello' }
      }
    },
    // 自定义验证函数
    propF: {
      validator: function (value) {
        return value > 10
      }
    }
  }
})
