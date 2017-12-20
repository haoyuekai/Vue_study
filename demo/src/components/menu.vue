<template>
	<div class="menu_list" :class="{'show':showMenu}">
		<div class="portrait">
			<img :src="portrait"/>
			<h2 class="person_name">{{personName}}</h2>
			<p>{{personIntroduce}}</p>
		</div>
	</div>
</template>

<script>
	export default {
		
		props:["showMenu","portrait","personName","personIntroduce"]
	}
</script>

<style>
	.menu_list{
		width: 80%;
		position: absolute;
		top: 0;
		bottom: 0;
		left: -80%;
		transition: all .5s ease;
		background: #fff;
		z-index: 100;
		display: flex;
		flex-direction: column;
	}
	.menu_list.show{
		transform: translateX(100%);
	}
	.menu_list .portrait{
		width: 100%;
		background: url(../../static/img/person_bg.jpg) no-repeat;
		background-size: 100%;
		padding-top: 62.46%;
		position: relative;
	}
	.menu_list .portrait img{
		width: 60px;
		border-radius: 50%;
		position: absolute;
		top: 30px;
		left: 20px;
		border: 3px solid #fff;
	}
	.menu_list .portrait h2{
		position: absolute;
		top: 30px;
		font: 30px/60px "微软雅黑";
		font-weight: 600;
		left: 110px;
	}
	.menu_list .portrait p{
		position: absolute;
		left: 26px;
		top: 120px;
		font: 16px/28px "微软雅黑";
		color: #000;
	}
</style>