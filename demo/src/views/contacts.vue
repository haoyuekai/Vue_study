<template>
	<div class="contacts">
		<input id="search" type="text" placeholder="搜索" v-model="search" />
		<ul class="tabTitle">
			<li v-for="(item,index) in items" @click="tab(index)" :class="{'cur':showItem == index}">{{item.name}}</li>
		</ul>
		<section class="tabShow">
			<div v-show="showItem == 0">
				<div class="list" v-for="friend in friends">
					<h2 @click="friend.open = !friend.open" >
						<span class="icon" :class="{'on':friend.open}"></span>
						{{friend.group}}
						<span class="number">{{friend.number}}</span>
					</h2>
					<ul v-show="friend.open">
						<li v-for="list in friend.children">
							<img :src="list.img"/>
							<h2>{{list.name}}</h2>
							<p>{{list.isOnline}}</p>
						</li>
					</ul>
				</div>
			</div>
			<div v-show="showItem == 1">
				<div class="list" v-for="group in groups">
					<h2 @click="group.open = !group.open" >
						<span class="icon" :class="{'on':group.open}"></span>
						{{group.group}}
						<span class="number">{{group.number}}</span>
					</h2>
					<ul v-show="group.open">
						<li v-for="list in group.children">
							<img :src="list.img"/>
							<h2 class="groupName">{{list.name}}</h2>
						</li>
					</ul>
				</div>
			</div>
			<div v-show="showItem == 2">
				<div class="list" v-for="subscribe in subscribes">
					<h2 class="subscribeInitials">
						{{subscribe.Initials}}
					</h2>
					<ul>
						<li v-for="list in subscribe.children">
							<img :src="list.img"/>
							<h2 class="groupName">
								{{list.name}}
								<img src="../assets/subscribe.png" v-show="list.isSubscribe"/>
							</h2>
							
						</li>
					</ul>
				</div>
			</div>
		</section>
	</div>
</template>

<script>
	export default {
		data () {
			return {
				friends : [],
				groups : [],
				subscribes : [],
				items : [
					{
						"name":"好友",
						"data":"friends"
					},{
						"name":"群组",
						"data":"groups"
					},{
						"name":"公众号",
						"data":"subscribes"
					},
				],
				showItem : 0,
				search : ""
			}
		},
		mounted () {
			this.$http.get('./static/json/friends.json').then(
				res => {
					
					this.friends = res.body
				},
				res => {
					
				}
			)		
		},
		methods : {
			tab (int) {
				this.showItem = int
				
				switch (int) {
					case 0 :
						this.$http.get('./static/json/friends.json').then(
							res => {
								
								this.friends = res.body
							},
							res => {
								
							}
						)
						break;
					case 1 :
						this.$http.get('./static/json/groups.json').then(
							res => {
								
								this.groups = res.body
							},
							res => {
								
							}
						)
						break;
					case 2 :
						this.$http.get('./static/json/subscribes.json').then(
							res => {
								
								this.subscribes = res.body
							},
							res => {
								
							}
						)
						break;
				}
				
			}
		}
	}
</script>

<style>
	.contacts{
		width: 100%;
		height: 100%;
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
	.tabTitle{
		width: 100%;
		height: 44px;
		margin: 5px 0;
		border-top: 1px solid #e0e0e0;
		border-bottom: 1px solid #e0e0e0;
		position: sticky;
		top: 0px;
		z-index: 9;
		background: #fff;
	}
	.tabTitle li{
		width: 33.33333%;
		height: 44px;
		font: 16px/40px "微软雅黑";
		box-sizing: border-box;
		border-bottom: 4px solid #fff;
		float: left;
	}
	.tabTitle li.cur{
		border-color: #197fee;
	}
	.list{
		width: 100%;
		position: relative;
		text-align: left;
	}
	.list h2{
		height: 50px;
		line-height: 50px;
		font: 20px/50px "微软雅黑";
		font-weight: 500;
		box-sizing: border-box;
		padding-left: 50px;
	}
	.list h2.subscribeInitials{
		background: #f0f0f0;
		padding-left: 20px;
		height: 34px;
		font: 16px/34px "微软雅黑";
	}
	.list h2 .icon{
		display: block;
		width: 50px;
		height: 50px;
		position: absolute;
		left: 0;
		top: 0;
		background-size: 40%;
		background-repeat: no-repeat;
		background-position: center center;
		background-image: url(../assets/jiao.png);
	}
	.list h2 .icon.on{
		transform: rotateZ(90deg);
	}
	.list h2 .number{
		display: block;
		position: absolute;
		right: 20px;
		top: 0;
		width: 60px;
		height: 50px;
		text-align: right;
		font: 16px/50px "微软雅黑";
		font-weight: 400;
	}
	.list ul{
		width: 100%;
	}
	.list ul li{
		width: 100%;
		height: 60px;
		position: relative;
		box-sizing: border-box;
		padding: 0 80px;
		border-bottom: 1px solid #e0e0e0;
	}
	.list ul li img{
		width: 46px;
		height: 46px;
		border-radius: 50%;
		position: absolute;
		left: 20px;
		top: 7px;
	}
	.list ul li h2{
		position: absolute;
		left: 76px;
		top: 7px;
		right: 80px;
		height: 24px;
		font: 16px/24px "微软雅黑";
		text-align: left;
		padding: 0;
		color: #f00;
	}
	.list ul li h2.groupName{
		color: #333;
		line-height: 46px;
		height: 46px;
	}
	
	.list ul li h2.groupName img{
		width: 24px;
		height: 24px;
		position: initial;
		display: inline;
		transform: translateY(5px);
	}
	.list ul li p{
		position: absolute;
		left: 76px;
		top: 32px;
	}
</style>