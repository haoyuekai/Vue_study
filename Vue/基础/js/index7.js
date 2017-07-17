
// 定义子组件
var Child = {
	template: '<div><label v-if="label">{{ label }}</label>$<input ref="input" :value="value" @input="updateValue($event.target.value)" @focus="selectAll" @blur="formatValue"></div>',
  	props: {
	    value: {
	      	type: Number,
	      	default: 0
	    },
	    label: {
	      	type: String,
	      	default: ''
	    }
  	},
  	mounted: function () {
    	this.formatValue()
  	},
  	methods: {
    	updateValue: function (value) {
	    	var result = currencyValidator.parse(value, this.value)
	    	if (result.warning) {
	        	this.$refs.input.value = result.value
	      	}
	      	this.$emit('input', result.value)
    	},
	    formatValue: function () {
	      	this.$refs.input.value = currencyValidator.format(this.value)
	    },
	    selectAll: function (event) {
	      	setTimeout(function () {
		    	event.target.select()
			}, 0)
	    }
  	}
}
var vm = new Vue({
	el: '#app',
  	data: {
	    price: 0,
	    shipping: 0,
	    handling: 0,
	    discount: 0
  	},
  	computed: {
	    total: function () {
	      	return ((this.price * 100 + this.shipping * 100 + this.handling * 100 - this.discount * 100) / 100).toFixed(2)
	    }
  	},
  	components: {
  		"currency-input":Child
  	}
})

