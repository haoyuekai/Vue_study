<template>
  <div class="index">
    <div class="main" :class="{'show':show}">
    	<header>
	    	<span class="back">
	    		<img @click="showMenu()" :src="portrait"/>
	    	</span>
	    	<h2>{{title}}</h2>
	    	<span class="set">
	    		<img src="../assets/add.png"/>
	    	</span>
	    </header>
	    
	    <!--组件-->
	    <div class="compontent">
	    	<router-view></router-view>
	    </div>
	    
	    <footer>
	    	<ul>
					<li :class="{cur : current == 0}" @click="change(0)">
						<router-link to="message">消息</router-link>
					</li>
	    		<li :class="{cur : current == 1}" @click="change(1)">
	    			<router-link to="contacts">联系人</router-link>
	    		</li>
	    		<li :class="{cur : current == 2}" @click="change(2)">
	    			<router-link to="dynamic">动态</router-link>
	    		</li>
	    	</ul>
	    </footer>
	    <div class="mask" :class="{animation : !show}" v-if="showMask" @click="hideMenu()"></div>
    </div>
    
    <Menu :show-menu="show" 
		    	:portrait="portrait" 
		    	:personName="personName" 
		    	:personIntroduce="personIntroduce"
    ></Menu>
  </div>
</template>

<script>
var titles = ["消息","联系人","动态"];
import Menu from '../components/menu';
export default {
  name: 'Index',
  data () {
    return {
      title: '消息',
      current:0,
      show:false,
      showMask:false,
      portrait:"./static/img/photo.jpg",
      personName:"坏小孩",
      personIntroduce:"当明月拉开夜的帷幕，一路凯歌满载而归"
    }
  },
  methods:{
  	change : function (int) {
  		this.title = titles[int];
  		this.current = int;
  	},
  	showMenu : function () {
  		this.show = true
  		this.showMask = true
  	},
  	hideMenu : function () {
  		this.show = false
  		
  		var that = this
  		setTimeout(function(){
  			that.showMask = false
  		},500)
  	}
  },
	components: {
		Menu
	}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
	.index{
		width: 100%;
		height: 100%;
		overflow: hidden;
	}
	.index .main{
		display: flex;
		width: 100%;
		height: 100%;
		transition: all .5s ease;
		flex-direction: column;
	}
	.index .mask{
		position: absolute;
		left: 0;
		right: 0;
		top: 0;
		bottom: 0;
		z-index: 99;
		transition: all .5s ease;
		background: rgba(0,0,0,0.4);
	}
	.index .mask.animation{
		background: rgba(0,0,0,0);
	}
	.index header{
		width: 100%;
		height: 44px;
		line-height: 44px;
		background: #197fee;
		position: relative;
	}
	.index header span{
		display: block;
		width: 44px;
		height: 44px;
		position: absolute;
		top: 0;
	}
	.index header span.back{
		left: 5px;
	}
	.index header span.set{
		right: 5px;
	}
	.index header span img{
		width: 80%;
		height: 80%;
		margin: 10% auto;
		border-radius: 50%;
	}
	.index header h2{
		font: 22px/44px "微软雅黑";
		color: #fff;
		font-weight: 400;
		letter-spacing: 2px;
	}
	.index footer{
		width: 100%;
		height: 60px;
		border-top: 1px solid #e0e0e0;
	}
	.index footer ul{
		width: 100%;
		height: 60px;
	}
	.index footer ul li{
		width: 33.33333%;
		float: left;
		height: 60px;
		color: #707070;
	}
	.index footer ul li.cur{
		color: #1296db;
	}
	.index footer ul li a{
		display: block;
		height: 60px;
		color: inherit;
		box-sizing: border-box;
		padding-top: 40px;
		line-height: 20px;
		font-size: 12px;
		background-repeat: no-repeat;
		background-size: 30px;
		background-position: center 5px;
	}
	.index footer ul li:nth-child(1) a{
		background-image: url(../assets/message.png);
	}
	.index footer ul li:nth-child(1).cur a{
		background-image: url(../assets/message_on.png);
	}
	.index footer ul li:nth-child(2) a{
		background-image: url(../assets/contacts.png);
	}
	.index footer ul li:nth-child(2).cur a{
		background-image: url(../assets/contacts_on.png);
	}
	.index footer ul li:nth-child(3) a{
		background-image: url(../assets/dynamic.png);
	}
	.index footer ul li:nth-child(3).cur a{
		background-image: url(../assets/dynamic_on.png);
	}
	.index .compontent{
		flex: 1;
		width: 100%;
		overflow-y: scroll;
	}
	.show{
		transform: translateX(80%);
	}
</style>
