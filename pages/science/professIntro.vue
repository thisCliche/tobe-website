<template>
	<div class="professIntro">
		<common-banner :bannerProfile="bannerProfile"></common-banner>
		<div class="mainWrap">
			<div class="main">
				<div class="discipline">
					<div class="disciplineItem" v-for="item of discipline" :key="item.id">
						<div class="titleWrap">
							<div class="titleL">
								<div class="title">{{item.title}}</div>
								<div class="titleEn">/&nbsp;&nbsp;{{item.titleEn}}</div>
							</div>
							<div class="titleR" @click="changePanel(item)"><i :class="item.show?'el-icon-arrow-up':'el-icon-arrow-down'"></i></div>
						</div>
						<el-collapse-transition>
							<div class="content" v-show="item.show">
								<div class="btnItem" @click="toDetail" v-for="child of item.itemList" :key="child.id">
									<div class="text">{{child.name}}</div>
								</div>
							</div>
						</el-collapse-transition>
					</div>
				</div>
			</div>

		</div>
		<my-foot></my-foot>
	</div>
</template>

<script>
	import CommonBanner from '@components/CommonBanner.vue';
	import InfotroMask from '@image/professInfotroMask.png'
	import {
		videoApi
	} from '@api/commonApi.js'
	export default {
		name: 'professIntro',
		components: {
			CommonBanner
		},
		data() {
			return {
				bannerProfile: {},
				discipline: [{
					id: 1,
					show: true,
					title: '商业学科',
					titleEn: 'Business disclipline',
					itemList: [{
						id: 1,
						name: '金融'
					}, {
						id: 2,
						name: '会计'
					}, {
						id: 3,
						name: '人力资源管理'
					}, {
						id: 4,
						name: '市场营销'
					}, {
						id: 5,
						name: '商业分析'
					}, {
						id: 6,
						name: '运营与供应链管理'
					}, {
						id: 7,
						name: '运营与信息管理'
					}, {
						id: 8,
						name: '旅游管理'
					}]
				}, {
					id: 2,
					show: false,
					title: '工程科学',
					titleEn: 'Engineering science',
					itemList: [{
						id: 1,
						name: '金融'
					}, {
						id: 2,
						name: '会计'
					}, {
						id: 3,
						name: '人力资源管理'
					}, {
						id: 4,
						name: '市场营销'
					}, {
						id: 5,
						name: '商业分析'
					}, {
						id: 7,
						name: '运营与信息管理'
					}, {
						id: 8,
						name: '旅游管理'
					}]
				}],
			}
		},
		methods: {
			toDetail(){
				uni.navigateTo({
					url:'/pages/science/scienceDetail'
				})
			},
			async getData() {
				let apiRequestArr = [videoApi({
					type: 4,
					limit: 1
				})];
				let result = await Promise.all(apiRequestArr);
				result.map((item, idx) => {
					switch (idx) {
						case 0:
							this.bannerProfile = item.data[0];
							this.bannerProfile.maskInfo = {
								maskImg: InfotroMask,
								description: "AI学习助教 —— AP、A-LEVEL全学科知识点在线答疑边学边问，还有海量题库等你来练！"
							}
							break;
						default:
							break;
					}
				})
			},
			changePanel(row){
				this.discipline.forEach((item)=>{
					if(item.id==row.id) item.show = !row.show;
				})
			},
		},
		created() {
			this.getData();
		}
	}
</script>

<style lang="scss" scoped>
	.professIntro {
		background: $bcNew;

		.mainWrap {

			@include modelPd;

			.main {

				@include ct1200;

				.discipline {
					.disciplineItem {
						border-radius: 20px;
						overflow: hidden;
						width: 100%;
						@include mb(30px);
						background: #fff;

						.content {
							@include fj(flex-start);
							flex-wrap: wrap;
							padding: 24px 30px;
							.btnItem {
								@include wh(150px, 32px);
								border: 2px solid transparent;
								border-radius: 40px;
								background-clip: padding-box, border-box;
								background-origin: padding-box, border-box;
								background-image: linear-gradient(to right, #fff, #fff), linear-gradient(90deg, $gradientS, $gradientE);
								margin: 0 36px 24px 0;
								cursor: pointer;
								transition: all 0.2s ease-in;
								&:hover{
									@include defaultShadow;
								}
								.text {
									width: 148px;
									text-align: center;
									line-height: 32px;
									overflow: hidden;
									text-overflow: ellipsis;
									white-space: nowrap;
									font-size: 14px;
								}
							}
						}

						.titleWrap {
							background: #FFFCF6;
							height: 68px;
							padding: 0 30px;
							@include fj();
							align-items: center;

							.titleR {
								cursor: pointer;
							}

							.titleL {
								display: flex;
								align-items: flex-end;

								.title {
									font-size: 22px;
									@include mr(4px);
								}

								.titleEn {
									font-size: 16px;
								}
							}
						}
					}
				}

			}
		}
	}
</style>