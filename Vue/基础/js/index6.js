
// 定义子组件
var Child = {
	template: '<button v-on:click="increment">{{ counter }}</button>',
  	data: function () {
	    return {
	      	counter: 0
	    }
  	},
  	methods: {
	    increment: function () {
	      	this.counter += 1
	      	this.$emit('increments')  // 自定义事件	
	    }
  	},
}

var OtherChild = {
	template: '<span>$<input ref="input" :value="value" @input="updateValue($event.target.value)" ></span>',
  	props: ['value'],
  	methods: {
	    // 不是直接更新值，而是使用此方法来对输入值进行格式化和位数限制
	    updateValue: function (value) {
	    	// 删除两侧空格,保留两位小数
	      	var formattedValue = value.trim().slice( 0, value.indexOf('.') === -1 ? value.length : value.indexOf('.') + 3 )
	      	// 如果值不统一，手动覆盖以保持一致
	      	if (formattedValue !== value) {
	        	this.$refs.input.value = formattedValue
	      	}
	      	// 通过 input 事件发出数值
	      	this.$emit('input', Number(formattedValue))
	    }
  	}
}

var vm = new Vue({
	el: "#app",
	data: {
    	total: 0,
    	price: 0
  	},
  	methods: {
	    incrementTotal: function () {
	    	this.total += 1
	    }
  	},
  	components:{
  		"my-row":Child,
  		"currency-input":OtherChild
  	}
})

