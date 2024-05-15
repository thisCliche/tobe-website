<template>
	<view class="partnes">
		<view class="banner">
			<img :src="topBanner.image_text" alt="" />
		</view>
		<view class="model1Wrap">
			<view class="model1">
				<view class="button">
					<view class="" style="white-space: pre-line;">
						{{buttonText.partners_text}}
					</view>
				</view>
				<view class="slogan wow animate__animated animate__fadeInUp">
					{{buttonText.partners_subtitle}}
				</view>
			</view>
		</view>
		<view class="model23Wrap">
			<view class="model2 swiperWrap">
				<view class="modelTitle wow animate__animated animate__fadeInUp">
					<view class="title">
						世界顶尖名校招生代表
					</view>
					<view class="titleEn">
						ADMISSIONS REP FOR THE WORLD'S TOP UNIVERSITIES
					</view>
				</view>
				<el-carousel trigger="click" :autoplay="false" height="488px" arrow="always" indicator-position="none">
					<el-carousel-item v-for="(page,idx) in collegeList" :key="idx">
						<el-row :gutter="80">
							<el-col :span="6" v-for="item in page" :key="item.id">
								<view class="collegeItem">
									<view class="imgWrap">
										<img :src="item.image_text" alt="" class="collegeImg" />
									</view>
									<view class="collegeName">
										{{item.name}}
									</view>
								</view>
							</el-col>
						</el-row>
					</el-carousel-item>
				</el-carousel>
				<view class="btn">
					<view class="coolBeans" @click="toDetail">立即加入</view>
				</view>
			</view>
			<view class="model3 swiperWrap">
				<view class="modelTitle wow animate__animated animate__fadeInUp">
					<view class="title">
						国外高中招生代表
					</view>
					<view class="titleEn">
						FOREIGN HIGH SCHOOL ADMISSIONS REPRESENTATIVE
					</view>
				</view>
				<el-carousel trigger="click" :autoplay="false" height="488px" arrow="always" indicator-position="none">
					<el-carousel-item v-for="(page,idx) in hightScoolList" :key="idx">
						<el-row :gutter="80">
							<el-col :span="6" v-for="item in page" :key="item.id">
								<view class="collegeItem">
									<view class="imgWrap">
										<img :src="item.image_text" alt="" class="collegeImg" />
									</view>
									<view class="collegeName">
										{{item.name}}
									</view>
								</view>
							</el-col>
						</el-row>
					</el-carousel-item>
				</el-carousel>
				<view class="btn">
					<view class="coolBeans" @click="toDetail">立即加入</view>
				</view>
			</view>
		</view>
		<view class="model4Wrap">
			<view class="model4 entry3d">
				<view class="modelTitle wow animate__animated animate__fadeInUp">
					<view class="title">
						学术指导老师
					</view>
					<view class="titleEn">
						留学之路，学术领航；专业指导，助力前行。选择我们，让学术梦想照进现实
					</view>
				</view>
				<view class="hr"></view>
				<template v-if="scienceList.length">
					<use-case :usecase="scienceList"></use-case>
				</template>
				<view class="btn">
					<view class="coolBeans" @click="toDetail">立即加入</view>
				</view>
			</view>
		</view>
		<view class="model5Wrap">
			<view class="model5 entry3d">
				<view class="modelTitle wow animate__animated animate__fadeInUp">
					<view class="title">
						升学指导老师
					</view>
					<view class="titleEn">
						留学之路，学术领航；专业指导，助力前行。选择我们，让学术梦想照进现实
					</view>
				</view>
				<view class="hr"></view>
				<template v-if="higherGradeTeacher.length">
					<use-case :usecase="higherGradeTeacher"></use-case>
				</template>
				<view class="btn">
					<view class="coolBeans" @click="toDetail">立即加入</view>
				</view>
			</view>
		</view>
		<view class="model6Wrap">
			<view class="model6">
				<view class="modelTitle wow animate__animated animate__fadeInUp">
					<view class="title">
						升学指导机构
					</view>
					<view class="titleEn">
						留学之路，学术领航；专业指导，助力前行。选择我们，让学术梦想照进现实
					</view>
				</view>
				<template v-if="higherGradeInstitution.length">
					<institution-case :usecase="higherGradeInstitution"></institution-case>
				</template>
				<view class="btn">
					<view class="coolBeans" @click="toDetail">立即加入</view>
				</view>
			</view>
		</view>
		<view class="model7Wrap">
			<view class="model7">
				<view class="modelTitle wow animate__animated animate__fadeInUp">
					<view class="title">
						外教导师
					</view>
					<view class="titleEn">
						留学之路，学术领航；专业指导，助力前行。选择我们，让学术梦想照进现实
					</view>
				</view>
				<template v-if="foreignTeacher.length">
					<view id="example">
						<carousel-3d :perspective="0" :space="300" :display="5" :width="300" :height="500" :border="0">
							<slide v-for="(slide, i) in foreignTeacher" :index="i">
								<view class="teacherItem">
									<img :src="slide.image_text" alt="" />
									<view class="floatTop">
										<view class="info">{{slide.name}}</view>
										<view class="desc">{{slide.text}}</view>
									</view>
								</view>
							</slide>
						</carousel-3d>
					</view>
				</template>
				<view class="btn">
					<view class="coolBeans" @click="toDetail">JOIN NOW</view>
				</view>
			</view>
		</view>

		<my-foot></my-foot>
	</view>
</template>

<script>
	import RollEntry from './RollEntry.vue'
	import UseCase from './UseCase.vue'
	import InstitutionCase from './InstitutionCase.vue'
	import ForeignCase from './ForeignCase.vue'
	import {
		Carousel3d,
		Slide
	} from "vue-carousel-3d";
	import {
		teacherApi,
		otherBannerApi,
		buttonConfigApi
	} from '@api/partnerApi.js'
	export default {
		name: 'partnes',
		data() {
			return {
				topBanner: {}, // 顶部banner
				buttonText: {}, // 按钮文案
				collegeList: [], // 大学列表
				hightScoolList: [], // 高中列表
				scienceList: [], //学术老师
				higherGradeTeacher: [], //升学老师
				higherGradeInstitution: [], // 升学机构
				foreignTeacher: [], //外教
			}
		},
		components: {
			RollEntry,
			UseCase,
			InstitutionCase,
			ForeignCase,
			Carousel3d,
			Slide
		},
		methods: {
			async getData() {
				let topBanner = {}, // 顶部banner
					buttonText = {}, // 按钮文案
					collegeList = [], // 大学列表
					hightScoolList = [], // 高中列表
					scienceList = [], //学术老师
					higherGradeTeacher = [], //升学老师
					higherGradeInstitution = [], // 升学机构
					foreignTeacher = []; //外教
				let Result = await Promise.all([
					otherBannerApi({
						type: 8,
						limit: 1
					}),
					otherBannerApi({
						type: 9,
						limit: 50
					}),
					otherBannerApi({
						type: 10,
						limit: 50
					}),
					buttonConfigApi(),
					teacherApi({
						type: 1,
						limit: 10
					}),
					teacherApi({
						type: 2,
						limit: 10
					}),
					teacherApi({
						type: 3,
						limit: 10
					}),
					teacherApi({
						type: 4,
						limit: 10
					}),
				])
				Result.map((item, idx) => {
					if (idx == 0) {
						topBanner = item.data[0]
					} else if (idx == 1) {
						collegeList = this.resoveList(item.data)
					} else if (idx == 2) {
						hightScoolList = this.resoveList(item.data)
					} else if (idx == 3) {
						buttonText = item.data
					} else if (idx == 4) {
						scienceList = item.data
					} else if (idx == 5) {
						higherGradeTeacher = item.data
					} else if (idx == 6) {
						foreignTeacher = item.data
					} else if (idx == 7) {
						higherGradeInstitution = item.data
					}
				})
				this.topBanner = topBanner;
				this.collegeList = collegeList;
				this.hightScoolList = hightScoolList;
				this.buttonText = buttonText;
				this.scienceList = scienceList;
				this.higherGradeTeacher = higherGradeTeacher;
				this.foreignTeacher = foreignTeacher;
				this.higherGradeInstitution = higherGradeInstitution;
			},
			resoveList(list) {
				let chunkSize = 8;
				let result = [];
				for (let i = 0; i < list.length; i += chunkSize) {
					let chunk = list.slice(i, i + chunkSize);
					result.push(chunk);
				}
				return result;
			},
			toDetail() {
				uni.navigateTo({
					url: "/pages/partners/joinUs/joinUs"
				})
			},
		},
		created() {
			this.getData();
		}
	}
</script>

<style lang="scss" scoped>
	.banner {
		height: 700px;

		img {
			@include imgLayout;
		}

	}

	.model7 {
		@include modelPdOther;
		@include ct1200;
	}

	.model6 {
		@include modelPdOther;
		@include ct1200;
	}

	.entry3d {
		@include modelPdOther;
		@include ct1200;

		.hr {
			height: 40px;
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

	.swiperWrap {
		@include modelPdOther;
		@include ct1200;



		.collegeItem {
			@include mb(20px);
			@include fj(center);
			flex-direction: column;
			align-items: center;

			.collegeName {
				@include mt(16px);
				width: 162px;
				@include ellipsis;
				text-align: center;
			}
		}

		.imgWrap {
			@include wh(200px, 160px);

			img {
				@include wh(100%, 100%);
				object-fit: contain;
				// @include imgLayout;
			}
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

	.model7Wrap {
		background-color: #F4F6FE;

		.carousel-3d-container {
			.carousel-3d-slide {
				border-radius: 20px;
				.teacherItem{
					@include wh(300px,500px);
					position: relative;
					img{
						@include imgLayout;
					}
					.floatTop{
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
						.info{
							@include sc(26px,#fff);
							@include mb(20px);
						}
						.desc{
							@include sc(16px,#fff);
							@include multi-ellipsis--l(6);
						}
					}
				}
			}
		}
	}

	.model6Wrap {
		@include bis("../../../assets/image/science/modelBg3.jpg");
	}

	.model5Wrap {
		@include bis("../../../assets/image/science/modelBg2.jpg");
	}

	.model4Wrap {
		background-color: #F4F6FE;
	}

	.model23Wrap {
		@include bis("../../../assets/image/science/modelBg.jpg");
	}

	.model1Wrap {
		@include bis("../../../assets/image/science/modelBg3.jpg");
	}

	.model1 {
		@include modelPd;
		@include ct1200;
		@include fj(space-around);
		align-items: center;

		.slogan {
			font-size: 26px;
			width: 600px;
			font-weight: 700;
			text-align: center;
			line-height: 70px;
		}

		.button {
			background-image: linear-gradient(to right, $gradientS, $gradientE);
			width: 500px;
			height: 160px;
			border-radius: 166px;
			color: #fff;
			text-align: center;
			line-height: 46px;
			font-size: 22px;
			cursor: pointer;
			padding-top: 30px;
			box-sizing: border-box;
			transition: 0.3s all ease-in;

			&:hover {
				@include defaultShadow;
			}
		}
	}
</style>