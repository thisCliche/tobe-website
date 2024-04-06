<template>
	<view class="aiTutor">
		<view class="videoTop">
			<view class="mask"></view>
			<video class="myVideo" :src="videoUrl" object-fit="cover" autoplay loop muted :controls="false"></video>
		</view>
		<view class="mainWrap">
			<view class="model1">
				<view class="modelTitle">传统线上特点</view>
				<view class="onlineWrap">
					<view class="onlineWrapItem" v-for="item in zhuboList" :key="item.id">
						<view class="imgWrap">
							<img :src="item.bgImg" alt="" />
						</view>
						<view class="discribe">
							<view class="title">{{item.title}}</view>
							<view class="hr"></view>
							<view class="des">{{item.des}}</view>
						</view>
					</view>
				</view>
			</view>
			<view class="model2">
				<view class="modelTitle">
					<view class="">
						更懂你的留学AI系统
					</view>
					<view class="">
						<text>机构规划师</text><text class="grayColor">VS</text><text>AI规划师</text><text
							class="grayColor">VS</text><text>学校升学老师</text>
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
							<view class="item" v-for="item in sparkleList" :key="item.id">
								<view class="row">
									<view class="btn">{{item.label}}</view>
									<view class="title">{{item.title}}</view>
								</view>
								<view class="des">{{item.des}}</view>
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
	import aiImg from '@image/ai.jpeg';
	import UseCase from '../UseCase.vue';
	import VideoProfile from '@components/VideoProfile.vue';
	import {
		userSide,
	} from '@api/study.js'
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
				aiImg,
				introduction: {
					imageUrl: zhubo,
					videoUrl: 'https://www.runoob.com/try/demo_source/movie.mp4'
				},
				videoUrl: 'https://www.runoob.com/try/demo_source/movie.mp4',
				sparkleList: [{
					id: 1,
					label: '亮点一',
					title: '底层算法智能支持',
					des: '基于职业规划，性格测评，AI测评，人才测评，用心呵护个人用户的留学生涯，倾力协助DIY效能',
				}, {
					id: 2,
					label: '亮点二',
					title: '底层算法智能支持',
					des: '基于职业规划，性格测评，AI测评，人才测评，用心呵护个人用户的留学生涯，倾力协助DIY效能',
				}, {
					id: 3,
					label: '亮点三',
					title: '底层算法智能支持',
					des: '基于职业规划，性格测评，AI测评，人才测评，用心呵护个人用户的留学生涯，倾力协助DIY效能',
				}],
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
					text: '界别评测',
				}],
				zhuboList: [{
					bgImg: zhubo,
					id: 1,
					title: '搭建成本高',
					des: '真人直播成本高包括但不限于人力成本、销售提成、培训成本、设备成本、场地成本、拍摄成本、搭建成本等'
				}, {
					bgImg: zhubo,
					id: 2,
					title: '真人直播效率低',
					des: '真人主播长时间直播容易精力不足，状态不佳无法做到全天候、全时段、日不落式直播'
				}, {
					bgImg: zhubo,
					id: 3,
					title: '真人主播不可控因素多',
					des: '真人主播存在专业度不足、身体状态不稳定、离职、话术违规导致账号限流、封禁等'
				}]
			}
		},
		methods: {
			async getData() {
				let usecase = [];
				let res = await userSide({
					type: 1,
					limit: 5
				})
				res.data.map(item => {
					usecase.push({
						engineerUrl: item.image_text,
						desc: item.text,
						id: item.id,
						name: item.name
					})
				})
				this.usecase = usecase;
			},
			toDetail() {
				uni.navigateTo({
					url:"/pages/study/aiTutor/detail"
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