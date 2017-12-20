<template>
	<div class="message">
		<input id="search" type="text" placeholder="搜索" v-model="search" />
		<ul>
			<li v-for="list in message">
				<img :src="list.img"/>
				<h2>{{list.name}}</h2>
				<p v-html="list.message">{{list.message}}</p>
				<span class="time">{{list.messageTime}}</span>
			</li>
		</ul>
	</div>
</template>

<script>
	export default {
		data () {
			return {
				message: [],
				search:''
			}
		},
		mounted () {
			this.$http.get('./static/json/list.json').then(
				res => {
					
					this.message = res.body
				},
				res => {
					
				}
			)		
		}
	
	}
</script>

<style>
	.message{
		width: 100%;
	}
	#search{
		display: block;
		width: 94%;
		height: 40px;
		outline: none;
		margin: 4px auto;
		border: 0;
		line-height: 40px;
		text-align: center;
		border-radius: 3px;
		background: #f0f0f0;
		font-size: 14px;
	}
	.message ul{
		width: 100%;
		border-top: 1px solid #e0e0e0;
	}
	.message ul li{
		width: 100%;
		height: 80px;
		border-bottom: 1px solid #e0e0e0;
		position: relative;
		text-align: left;
	}
	.message ul li img{
		width: 60px;
		height: 60px;
		border-radius: 50%;
		position: absolute;
		left: 10px;
		top: 10px;
	}
	.message ul li h2{
		position: absolute;
		top: 10px;
		left: 80px;
		font: 18px/36px "微软雅黑";
		font-weight: 600;
	}
	.message ul li p{
		position: absolute;
		top: 46px;
		left: 80px;
		right: 80px;
		font: 14px/24px "微软雅黑";
		font-weight: 400;
		overflow: hidden;
		text-overflow:ellipsis;
		white-space: nowrap;
	}
	.message ul li .time{
		display: block;
		position: absolute;
		top: 20px;
		right: 10px;
		font: 14px/24px "微软雅黑";
		font-weight: 400;
	}
</style>