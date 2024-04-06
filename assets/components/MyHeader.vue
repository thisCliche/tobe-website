<template>
	<view class="myHeader">
		<view class="sitting"></view>
		<view class="header-content">
			<view class="content">
				<view class="menus firstRow">
					<view class="menusInner">
						<view class="ulEle" @mouseover="mouseIn" @mouseleave="mouseOut">
							<view class="ulWrap ulWrapL">
								<view @click="toDetail(item)" v-for="(item) in homeMenus.slice(0,3)" :key="item.id" :data-idx="1"
									:class="item.id == currentId ? 'active' : ''" class="liEle" :data-id="item.id">
									<span>{{ item.nickname }}</span>
								</view>
							</view>
							<view class="logo" @click="$router.push('/')">
								<img :src="logoImg" alt="" />
							</view>
							<view class="ulWrap ulWrapR">
								<view @click="toDetail(item)" v-for="(item) in homeMenus.slice(3,7)" :key="item.id" :data-idx="2"
									:class="item.id == currentId ? 'active' : ''" class="liEle" :data-id="item.id">
									<span>{{ item.nickname }}</span>
								</view>
							</view>
							<el-collapse-transition>
								<view class="priming" v-show="isPriming" :style="{ left: leftLength + 'px' }">
									<view class="subMenus">
										<view class="subItem" v-for="item in subList" :key="item.id" @click="$router.push(item.url)">
											{{ item.name }}
										</view>
									</view>
								</view>
							</el-collapse-transition>
						</view>
						<view class="suspend">
							<view class="userInfo" v-if="isLogin">
								<el-dropdown @command="handleCommand">
									<el-avatar :src="userInfo.avatar" size="medium"></el-avatar>
									<el-dropdown-menu slot="dropdown">
										<el-dropdown-item icon="el-icon-setting">个人设置</el-dropdown-item>
										<el-dropdown-item icon="el-icon-message">站内信</el-dropdown-item>
										<el-dropdown-item icon="el-icon-chat-dot-square">联系助手</el-dropdown-item>
										<el-dropdown-item command="logout" icon="el-icon-switch-button" divided>登出</el-dropdown-item>
									</el-dropdown-menu>
								</el-dropdown>
							</view>
							<view class="loginBtn" @click="loginBtn" v-else>login</view>
						</view>
					</view>
				</view>
				<view class="menus secondRow">
					<view class="menusInner">
						<view class="ulEle">
							<view @click="toDetail(item)" v-for="(item) in homeMenus.slice(7,10)" :key="item.id" class="liEle">
								<span>{{ item.name }}</span>
							</view>
							<view class="placehold"></view>
							<view @click="toDetail(item)" v-for="(item) in homeMenus.slice(10,13)" :key="item.id" class="liEle">
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
	import eventBus from '@utils/eventBus.js'
	import {
		menuApi
	} from '@api/homeApi.js'
	import {
		Session,
		Local
	} from '@utils/storage.js'
	import {
		ACCOUNT_INFO,
		MENU_LIST
	} from '@assets/constant/cacheKey.js';
	import logoImg from '@image/logo.png'
	export default {
		name: "MyHeader",
		data() {
			return {
				isLogin: false,
				userInfo: {},
				logoImg,
				isPriming: false,
				subList: [],
				leftLength: "",
				currentId: 0,
				homeMenus: [],
			};
		},
		// watch: {
		// 	$route(to, from) {
		// 		this.getCurrentId()
		// 	}
		// },
		methods: {
			handleCommand(command) {
				Local.remove(ACCOUNT_INFO);
				this.isLogin = false;
				uni.navigateTo({
					url: "/"
				})
				this.$notify.success({
					title: '成功',
					message: '退出登录'
				})
			},
			loginBtn() {
				uni.navigateTo({
					url: "/pages/login/login?type=register"
				})
			},
			mouseIn(e) {
				if (e.target.dataset.hasOwnProperty('idx')) {
					let {
						id,
						idx
					} = e.target.dataset
					let item = this.homeMenus.find(item => item.id == id)
					this.currentId = id
					if (item.hasChild != 1) {
						this.isPriming = false;
					} else {
						this.isPriming = true;
						this.subList = item.childlist;
						this.$nextTick(() => {
							let innerBoxLeft = 0;
							uni.createSelectorQuery().in(this).select('.ulEle').boundingClientRect(data => {
								innerBoxLeft = data.left;
							}).exec()
							if (idx == 2) {
								this.leftLength = innerBoxLeft + 874;
							} else {
								this.leftLength = innerBoxLeft + 80;
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
			toDetail(item) {
				if (item.isOut) {
					window.open(item.url)
				} else {
					uni.navigateTo({
						url: item.url
					})
				}
			},
			checkLog() {
				let accountInfo = Local.get(ACCOUNT_INFO);
				if (accountInfo) {
					this.isLogin = true;
					this.userInfo = accountInfo.user;
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
			eventBus.on('loginEvent', this.checkLog);
			let menuList = Session.get(MENU_LIST);
			if (menuList) {
				this.homeMenus = menuList;
			} else {
				menuApi({}).then(res => {
					let menuListRes = res.data;
					Session.set('menuList', menuListRes);
					this.homeMenus = menuListRes;
				})
			}
			this.checkLog();
		},
	};
</script>

<style lang="scss" scoped>
	@import "assets/styles/myComponents.scss";
</style>