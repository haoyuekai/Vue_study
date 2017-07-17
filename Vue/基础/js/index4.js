

var vm = new Vue({
	el: "#app",
	data:{
		message:"",
		checkedNames:["Jack"],
		picked:'One',
		selected:"A",
		multipleSelected:["A","C"],
		selected3: 'A',
	    options: [
	    	{ text: 'One', value: 'A' },
	    	{ text: 'Two', value: 'B' },
	     	{ text: 'Three', value: 'C' }
	    ]
	}
})