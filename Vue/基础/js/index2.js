Vue.component('todo-item', {
	template: '<li>{{ title }}<button @click="$emit(\'remove\')">X</button></li>',
	props: ['title']
})
var vm = new Vue({
	el: '#app',
	data: {
	    newTodoText: '',
	    todos: [
	    	'Do the dishes',
	    	'Take out the trash',
	    	'Mow the lawn'
	    ],
	    numbers: [ 1, 2, 3, 4, 5 ]
	},
	methods: {
	    addNewTodo: function () {
	    	this.todos.push(this.newTodoText)
	    	this.newTodoText = ''
	    },
	    even: function (numbers) {
		    return numbers.filter(function (number) {
		      	return number % 2 === 0
		    })
		}
	},
	computed: {
		evenNumbers: function () {
		    return this.numbers.filter(function (number) {
		    	return number % 2 === 0
		    })
		}
	}
	
})