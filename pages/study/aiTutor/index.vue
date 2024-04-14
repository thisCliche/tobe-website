<template>
	<view class="aiTutor">
		<view class="videoTop">
			<view class="mask"></view>
			<video class="myVideo" :src="videoTopUrl" object-fit="cover" autoplay loop muted :controls="false"></video>
		</view>
		<view class="mainWrap">
			<view class="model1">
				<view class="modelTitle">传统线上特点</view>
				<view class="onlineWrap">
					<view class="onlineWrapItem" v-for="item in zhuboList" :key="item.id">
						<view class="imgWrap">
							<img :src="item.image_text" alt="" />
						</view>
						<view class="discribe">
							<view class="title">{{item.name}}</view>
							<view class="hr"></view>
							<view class="des">{{item.text}}</view>
						</view>
					</view>
				</view>
			</view>
			<view class="model2">
				<view class="modelTitle">
					<view class="">
						{{slogan.ai_desc_title}}
					</view>
					<view class="">
						<text>{{slogan.ai_desc_text}}</text>
					</view>
				</view>
				<view class="modelBanner">
					<img :src="aiImg" alt="" />
				</view>
			</view>
			<view class="model3">
				<view class="model3Wrap">
					<view class="wrapL">
						<view class="btn">
							规划系统内容
						</view>
						<view class="advantage">
							<view class="item" v-for="item in advantageList" :key="item.id"><i
									:class="item.icon"></i><text>{{item.text}}</text></view>
						</view>
					</view>
					<view class="wrapM">
						<view class="sparkle">
							<view class="item" v-for="(item,idx) in sparkleList" :key="idx">
								<view class="row">
									<view class="btn">{{item.code}}</view>
									<view class="title">{{item.title}}</view>
								</view>
								<view class="des">{{item.name}}</view>
							</view>
						</view>
					</view>
					<view class="wrapR">
						<video-profile :introduction="introduction" withValue="350px" heightValue="400px"></video-profile>
					</view>
				</view>
				<view class="myBtn">
					<view class="coolBeans" @click="toDetail">立即体验</view>
				</view>
			</view>
			<view class="model4">
				<view class="modelWrap">
					<view class="item">10万+学科知识</view>
					<view class="item">结合最新的升学动态</view>
					<view class="item">10年工作经验的运用</view>
				</view>
				<view class="myBtn">
					<view class="coolBeans" @click="toDetail">立即体验</view>
				</view>
			</view>
			<view class="model8">
				<view class="modelTitle">学生反馈</view>
				<use-case :usecase="usecase"></use-case>
			</view>
		</view>
		<my-foot></my-foot>
	</view>
</template>

<script>
	import zhubo from '@image/zhubo.jpeg';
	import UseCase from '../UseCase.vue';
	import VideoProfile from '@components/VideoProfile.vue';
	import {
		userSide,
		suanFa1,
		bannerApi,
		videoApi
	} from '@api/study.js'
	import {
		AiTextConfigApi
	} from "@api/aiTutorApi.js"
	export default {
		name: 'aiTutorIndex',
		components: {
			VideoProfile,
			UseCase
		},
		created() {
			this.getData();
		},
		data() {
			return {
				usecase: [],
				aiImg:'',
				slogan: {},
				introduction: {},
				videoTopUrl: '',
				sparkleList: [],
				advantageList: [{
					id: 1,
					icon: 'el-icon-s-help',
					text: '专业方向',
				}, {
					id: 2,
					icon: 'el-icon-s-help',
					text: '规划知识',
				}, {
					id: 3,
					icon: 'el-icon-s-help',
					text: '级别测评',
				}, {
					id: 4,
					icon: 'el-icon-s-help',
					text: '时间规划',
				}, {
					id: 5,
					icon: 'el-icon-s-help',
					text: '规划知识',
				}, {
					id: 6,
					icon: 'el-icon-s-help',
					text: '级别评测',
				}],
				zhuboList: []
			}
		},
		methods: {
			async getData() {
				let usecase = [],
					sparkleList = [],
					zhuboList = [],
					slogan = {},
					videoTopUrl = "",
					introduction = {},
					aiImg="";
				let result = await Promise.all([userSide({
					type: 1,
					limit: 5
				}), suanFa1(), bannerApi({
					type: 28,
					limit: 3
				}), AiTextConfigApi(), videoApi({
					type: 14,
					limit: 1
				}), videoApi({
					type: 14,
					limit: 1
				}), bannerApi({
					type: 29,
					limit: 1
				})]);
				result.map((res, idx) => {
					switch (idx) {
						case 0:
							res.data.map(item => {
								usecase.push({
									engineerUrl: item.image_text,
									desc: item.text,
									id: item.id,
									name: item.name
								})
							})
							break;
						case 1:
							sparkleList = res.data;
							break;
						case 2:
							zhuboList = res.data;
							break;
						case 3:
							slogan = res.data;
							break;
						case 4:
							videoTopUrl = res.data[0].video_text;
							break;
						case 5:
							introduction = {
								imageUrl: res.data[0].image_text,
								videoUrl: res.data[0].video_text,
							};
							break;
						case 6:
						aiImg = res.data[0].image_text;
							break;
						default:
							break;
					}
				})
				this.usecase = usecase;
				this.sparkleList = sparkleList;
				this.zhuboList = zhuboList;
				this.slogan = slogan;
				this.videoTopUrl = videoTopUrl;
				this.introduction = introduction;
				this.aiImg = aiImg;
			},
			toDetail() {
				uni.navigateTo({
					url: "/pages/study/aiTutor/detail"
				})
			},
		}
	}
</script>

<style lang="scss" scoped>
	.aiTutor {
		.mainWrap {
			@include ct1200;

			.modelTitle {
				font-size: 26px;
				font-weight: 700;
				text-align: center;
				line-height: 40px;
				@include mb(60px);

				.grayColor {
					color: $partnerTitle;
					margin: 0 4px;
				}
			}

			.myBtn {
				@include fj(center);
				@include mt(40px);

				.coolBeans {
					cursor: pointer;
					border-radius: 50px;
					color: #fff;
					background-color: #000;
					font-size: 20px;
					font-weight: 700;
					overflow: hidden;
					padding: 14px 70px;
					transition: 0.3s all ease-in;

					&:hover {
						@include defaultShadow;
					}
				}
			}

			.model8 {
				@include ct1200;
				@include modelPd;


			}

			.model4 {
				@include modelPd;

				.modelWrap {
					@include fj(space-around);
					@include mb(60px);

					.item {
						width: 100px;
						font-size: 28px;
						font-weight: 700;
					}
				}
			}

			.model3 {
				@include modelPd;

				.model3Wrap {
					@include fj();

					.wrapM {
						width: 360px;

						.sparkle {
							@include pt(20px);

							.item {
								@include mb(10px);

								.des {
									color: $partnerTitle;
									@include mt(10px);
									font-size: 18px;
								}

								.row {
									@include fj(flex-left);

									align-items: center;

									.title {
										font-size: 24px;
										font-weight: 700;
										@include ml(10px);
									}

									.btn {
										border-radius: 50px;
										border: 1px solid $linkColor;
										@include wh(80px, 30px);
										@include sc(14px, $linkColor);
										line-height: 30px;
										text-align: center;
									}
								}
							}
						}
					}

					.wrapL {
						width: 360px;
						background: $linkColor;
						padding: 24px 26px;
						border-radius: 10px;
						box-sizing: border-box;

						.btn {
							margin: 0 auto;
							width: 200px;
							height: 60px;
							background: #fff;
							border-radius: 50px;
							line-height: 60px;
							text-align: center;
							font-size: 22px;
							font-weight: 700;
						}

						.advantage {
							@include sc(26px, #fff);

							.item {
								margin: 16px 0 0;

								i {
									@include mr(30px);
								}
							}
						}
					}
				}
			}

			.model2 {
				@include modelPd;

				.modelBanner {
					@include wh(100%, 420px);
					@include mt(30px);
					border-radius: 6px;
					overflow: hidden;

					img {
						@include imgLayout;
					}
				}


			}

			.model1 {
				.onlineWrap {
					@include fj();

					.onlineWrapItem {
						@include wh(320px, 380px);
						border-radius: 10px;
						overflow: hidden;
						position: relative;
						@include mt(30px);
						transition: 0.3s all ease;

						&:hover {
							transform: translateY(-10px);

							.discribe {
								.hr {
									width: 250px;
								}
							}
						}

						.discribe {
							position: absolute;
							bottom: 0;
							left: 0;
							right: 0;
							top: 150px;
							background-color: rgba(113, 96, 102, 0.7);
							color: #fff;
							padding: 30px 14px 0;

							.title {
								font-size: 24px;
								font-weight: 700;
							}

							.hr {
								@include wh(100px, 4px);
								background: #fff;
								margin: 20px 0;
								transition: 0.3s all ease;

							}

							.des {
								font-size: 16px;
							}
						}

						.imgWrap {
							position: absolute;
							left: 0;
							right: 0;
							top: 0;
							bottom: 0;

							img {
								@include imgLayout;
								filter: brightness(0.5);
							}
						}
					}
				}

				@include modelPd;


			}
		}

		.videoTop {
			@include wh(100%, 680px);
			position: relative;

			.mask {
				position: absolute;
				left: 0;
				right: 0;
				top: 0;
				bottom: 0;
				background-color: rgba(0, 0, 0, 0.6);
				z-index: 99;
			}

			.myVideo {
				@include wh(100%, 100%);

			}
		}
	}
</style>