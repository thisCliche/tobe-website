<template>
	<div class="spoken">
		<common-banner :bannerProfile="bannerProfile"></common-banner>
		<div class="content">
			<div class="modelItem" v-for="item of modelList" :key="item.id"
				:style="{background: 'url('+item.bgUrl+') 100% 100% no-repeat'}">
				<div class="modelMain" :class="item.reverse?'reverseClass':''">
					<div class="imgWrap">
						<img :src="item.imgUrl" alt="" srcset="" />
					</div>
					<div class="mainR">
						<div class="title">{{item.title}}</div>
						<div class="desList">
							<div class="desItem" v-for="child of item.des">
								{{child}}
							</div>
						</div>
					</div>
				</div>
			</div>
			<view class="model7Wrap">
				<view class="model7">
					<view class="modelTitle wow animate__animated animate__fadeInUp">
						<view class="title">
							真人导师辅导
						</view>
						<view class="titleEn">
							留学之路，学术领航；专业指导，助力前行。选择我们，让学术梦想照进现实
						</view>
					</view>
					<carousel-3d @slide-change="handleSlideChange" :perspective="0" :space="300" :display="5" :width="300"
						:height="500" :border="0">
						<slide v-for="(slide, i) in 7" :index="i" :key="i">
							<view class="teacherItem">
								<img :src="tmpTearchImg" alt="" />
								<view class="floatTop">
									<view class="info">Anjaly</view>
									<view class="desc">[列出相关专业认证或头衔]，如全球CIO大会副秘书长工信部数字化转型专家等。精通大数据相关领域，包括数据中台、数据应用、用户画像等，并熟悉数字孪生</view>
								</view>
							</view>
						</slide>
					</carousel-3d>
					<view class="btn">
						<view class="coolBeans" @click="toDetail">JOIN NOW</view>
					</view>
				</view>
			</view>
		</div>
		<my-foot></my-foot>
	</div>
</template>

<script>
	import CommonBanner from '@components/CommonBanner.vue';
	import resourceImg from './spoken.js'
	import {
		Carousel3d,
		Slide
	} from "vue-carousel-3d";
	import {
		videoApi
	} from '@api/commonApi.js'
	export default {
		name: 'spoken',
		components: {
			CommonBanner,
			Carousel3d,
			Slide
		},
		data() {
			return {
				bannerProfile: {},
				tmpTearchImg: resourceImg.model3,
				modelList: [{
						id: 1,
						reverse: false,
						imgUrl: resourceImg.model1,
						bgUrl: resourceImg.modelBg,
						title: '托福/口语',
						des: ['无限制地使用内置实时翻译和个性化反馈', '针对托福和雅思口语题库进行设计和强化训练']
					},
					{
						id: 2,
						reverse: true,
						bgUrl: resourceImg.modelBg2,
						imgUrl: resourceImg.model2,
						title: '自由对话口语练习',
						des: ['无限制地使用内置实时翻译和个性化反馈。', '针对托福和雅思口语题库进行设计和强化训练']
					},
				],
			}
		},
		methods: {
			handleSlideChange(index) {
				console.log(index);
			},
			toDetail() {
				uni.navigateTo({
					url: "/pages/partners/joinUs/joinUs"
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
								maskImg: resourceImg.InfotroMask,
								description: "口语听力同步提升。自适应听力练习提高理解能力沉浸式对话：深入研究旨在优化语言保留和提高流畅性的引人入胜的对话训练，实时反馈，不限时练习AI口语天天练 ，沉浸式交流互动"
							}
							break;
						default:
							break;
					}
				})
			},

		},
		created() {
			this.getData();
		}
	}
</script>

<style lang="scss" scoped>
	.modelItem {
		padding: 76px 0;

		.modelMain {
			@include ct1200;
			@include fj(space-between);

			.mainR {
				width: 484px;
				text-align: right;
				@include mt(40px);

				.title {
					font-size: 46px;
					font-weight: 500;
					@include mb(16px);
				}

				.desItem {
					line-height: 46px;
				}

				.customBtnWrap {
					@include fj(flex-end);
					width: 484px;
					flex-wrap: wrap;

					.customBtn {
						text-align: center;
						width: 74px;
						font-size: 14px;
						padding: 4px 0;
						border: 2px solid transparent;
						border-radius: 40px;
						background-clip: padding-box, border-box;
						background-origin: padding-box, border-box;
						background-image: linear-gradient(to right, #fff, #fff), linear-gradient(90deg, $gradientS, $gradientE);
						margin: 0 0 12px 14px;
					}
				}

				.btn {
					float: right;
					@include wh(236px, 60px);
					background-image: linear-gradient(to right, $gradientS, $gradientE);
					border-radius: 40px;
					color: #fff;
					line-height: 60px;
					text-align: center;
					cursor: pointer;
					@include mt(28px);
					transition: all 0.2s ease;

					&:hover {
						@include defaultShadow;
					}
				}
			}
		}

		.reverseClass {
			flex-direction: row-reverse;

			.mainR {
				text-align: left;

				.btn {
					float: left;
				}
			}
		}
	}

	.model7Wrap {
		background-color: #F4F6FE;
		@include modelPd;

		.carousel-3d-container {
			.carousel-3d-slide {
				border-radius: 20px;

				.teacherItem {
					@include wh(300px, 500px);
					position: relative;

					img {
						@include imgLayout;
					}

					.floatTop {
						background-color: rgba(0, 0, 0, 0.4);
						backdrop-filter: blur(10px);
						box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
						line-height: 28px;
						position: absolute;
						left: 0;
						right: 0;
						bottom: 0;
						@include wh(300px, 220px);
						border-radius: 0px 0px 22px 22px;
						text-align: center;
						padding: 20px 10px;
						box-sizing: border-box;

						.info {
							@include sc(26px, #fff);
							@include mb(20px);
						}

						.desc {
							@include sc(16px, #fff);
							@include multi-ellipsis--l(6);
						}
					}
				}
			}
		}
	}

	.modelTitle {
		text-align: center;
		@include mb(80px);

		.title {
			color: #333;
			font-size: 30px;
			font-weight: 700;
			@include mb(12px);
		}

		.titleEn {
			color: $partnerTitle;
			font-size: 20px;
		}
	}

	.btn {
		@include fj(center);
		@include mt(40px);

		.coolBeans {
			cursor: pointer;
			border-radius: 50px;
			color: #fff;
			background-image: linear-gradient(to right, $gradientS, $gradientE);
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
</style>