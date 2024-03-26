<template>
	<view class="myHeader">
		<view class="sitting"></view>
		<view class="header-content">
			<view class="content">
				<view class="menus firstRow">
					<view class="menusInner">
						<view class="ulEle" @mouseover="mouseIn" @mouseleave="mouseOut">
							<view @click="toList(item)" v-for="(item) in homeMenus.slice(0,3)" :key="item.id" :data-idx="1"
								:class="item.id == currentId ? 'active' : ''" class="liEle" :data-id="item.id">
								<span>{{ item.nameEn }}</span>
							</view>
							<view class="logo" @click="$router.push('/')">
								<img :src="logoImg" alt="" />
							</view>
							<view @click="toList(item)" v-for="(item) in homeMenus.slice(3,7)" :key="item.id" :data-idx="2"
								:class="item.id == currentId ? 'active' : ''" class="liEle" :data-id="item.id">
								<span>{{ item.nameEn }}</span>
							</view>
							<el-collapse-transition>
								<view class="priming" v-show="isPriming" :style="{ left: leftLength + 'px' }">
									<view class="subMenus">
										<view class="subItem" v-for="item in subList" :key="item.id"
											@click="$router.push(item.path)">
											{{ item.name }}
										</view>
									</view>
								</view>
							</el-collapse-transition>
						</view>
						<view class="loginBtn" @click="loginBtn">LOGIN</view>
					</view>
				</view>
				<view class="menus secondRow">
					<view class="menusInner">
						<view class="ulEle" >
							<view @click="toList(item)" v-for="(item) in homeMenus.slice(7,10)" :key="item.id" class="liEle">
								<span>{{ item.name }}</span>
							</view>
							<view class="placehold" ></view>
							<view @click="toList(item)" v-for="(item) in homeMenus.slice(10,13)" :key="item.id"  class="liEle">
								<span>{{ item.name }}</span>
							</view>
						</view>
					</view>
					
				</view>
			</view>
			
		</view>
	</view>
</template>

<script>
	import homeMenus from './menuList.js';
	import logoImg from '@image/logo.png'
	export default {
		name: "MyHeader",
		data() {
			return {
				logoImg,
				isPriming: false,
				subList: [],
				leftLength: "",
				currentId: 0,
				homeMenus
			};
		},
		watch: {
			$route(to, from) {
				this.getCurrentId()
			}
		},
		methods: {
			mouseIn(e) {
				if (e.target.dataset.hasOwnProperty('idx')) {
					let {id,idx} = e.target.dataset
					let item = this.homeMenus.find(item=>item.id == id)
					this.currentId = id
					if (item.child.length == 0) {
						this.isPriming = false;
					} else {
						this.isPriming = true;
						this.subList = item.child;
						this.$nextTick(() => {
							let innerBoxLeft = 0;
							uni.createSelectorQuery().in(this).select('.ulEle').boundingClientRect(data=>{
								innerBoxLeft = data.left;
							}).exec() 
							if (idx == 2) {
								this.leftLength = innerBoxLeft+784;
							} else {
								this.leftLength = innerBoxLeft
							}
						})
					}
				}
			},
			mouseOut(e) {
				this.isPriming = false;
				this.subList = [];
				this.currentId = 0
				// this.getCurrentId()
			},
			toList(item) {
				if (item.isOut) {
					window.open(item.path)
				} else {
					this.$router.push(item.path);
				}
			},
			// getCurrentId() {
			// 	if (this.$route.name == 'index') {
			// 		return this.currentId = 1
			// 	}
			// 	let flag = false
			// 	this.homeMenus.find(item => {
			// 		if (!item.isOut && item.path.split('/').splice(1, 1).indexOf(this.$route.matched[0].name) != -
			// 			1) {
			// 			this.currentId = item.id
			// 			flag = true
			// 		}
			// 	})
			// 	if (!flag) {
			// 		this.currentId = 0
			// 	}
			// }
		},
		created() {
			// this.getCurrentId()
		},
		mounted() {
			
			
		}
	};
</script>

<style lang="scss" scoped>
	@import "assets/styles/myComponents.scss";
</style>