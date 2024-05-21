<template>
	<view class="competition">
		<common-banner :bannerProfile="bannerProfile"></common-banner>
		<view class="mainWrap">
			<view class="main">
				<el-carousel trigger="click" :autoplay="false" height="252px" indicator-position="none">
					<el-carousel-item v-for="item in 3" :key="item">
						<view class="competitionList">
							<view class="listL">
								<view class="item" v-for="item of 11" :key="item">AIMO澳大利亚数学奥林匹利亚数学奥数学奥林亚数学奥克竞赛</view>
							</view>
							<view class="listR">
								<img :src="competitionUrl" alt="" />
							</view>
						</view>
					</el-carousel-item>
				</el-carousel>
				<view class="filter">
					<view class="filterRow">
						<view class="filterRow">
							<label for="">难&nbsp;&nbsp;&nbsp;度:</label>
							<el-radio-group v-model="radio3" size="medium">
								<el-radio-button :label="item" v-for="(item,idx) in filterList.difficultly"
									:key="idx"></el-radio-button>
							</el-radio-group>
						</view>
						<label for="">含金量:</label>
						<el-radio-group v-model="radio2" size="medium">
							<el-radio-button :label="item" v-for="(item,idx) in filterList.class" :key="idx"></el-radio-button>
						</el-radio-group>
					</view>
					<view class="filterRow">
						<label for="">所属学科:</label>
						<el-radio-group v-model="radio1" size="medium">
							<el-radio-button :label="item" v-for="(item,idx) in filterList.country" :key="idx"></el-radio-button>
						</el-radio-group>
					</view>
				</view>
				<view class="course">
					<view class="courseSlide">
						<view class="title">课程内容</view>
						<view class="menuList" @click="changeMenu">
							<view class="item" :class="currentMenu==item.id?'active':''" v-for="item of menuList" :key="item.id"
								:data-id="item.id">{{item.name}}</view>
						</view>
						<view class="qrcode">
							<img :src="footCode" alt="" />
							<view class="">
								添加微信小助手
							</view>
						</view>
					</view>
					<view class="courseWrap">
						<view class="courseList">
							<view class="courseItem" @click="toDetail" v-for="item of courseList" :key="item.id">
								<view class="imgWrap">
									<img :src="item.imgUrl" alt="" />
								</view>
								<view class="infoWrap">
									<view class="title">{{item.title}}</view>
									<view class="subject">
										<text>所属学科：</text>
										<text>{{item.subject}}</text>
									</view>
									<view class="subject">
										<text>含金量：</text>
										<el-rate :value="item.goldContent" disabled text-color="#ff9900">
										</el-rate>
									</view>
									<view class="subject">
										<text>难度：</text>
										<el-rate :value="item.difficultly" disabled text-color="#ff9900">
										</el-rate>
									</view>
									<view class="hr"></view>
									<view class="desc">
										{{item.des}}
									</view>
								</view>
							</view>
						</view>
						<view class="pageWrap">
							<el-pagination class="nPagination" background @size-change="handleSizeChange"
								@current-change="handleCurrentChange" :current-page.sync="currentPage" :page-sizes="[10, 30, 50, 100]"
								:page-size="100" layout=" prev, pager, next,sizes, jumper" :total="300">
							</el-pagination>
						</view>
					</view>
				</view>
			</view>
		</view>
		<view class="model2Wrap">
			<view class="model2">
				<view class="item">
					<view class="row1">网课辅导课程，以及匹配名师课程</view>
					<view class="row2">清晰的目标，了解留学</view>
					<custom-button>立即查看</custom-button>
				</view>
				<view class="item">
					<view class="row1">找寻辅导材料/辅导老师吗？</view>
					<view class="row2">清晰的目标，了解留学</view>
					<custom-button class="customButton">一键申请</custom-button>
				</view>
			</view>
		</view>
<view class="model7Wrap">
				<view class="model7">
					<view class="modelTitle wow animate__animated animate__fadeInUp">
						<view class="title">
							竞赛辅导老师
						</view>
						<view class="titleEn">
							留学之路，学术领航；专业指导，助力前行。选择我们，让学术梦想照进现实
						</view>
					</view>
					<carousel-3d :perspective="0" :space="300" :display="5" :width="300"
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
				</view>
			</view>
		<my-foot></my-foot>
	</view>
</template>

<script>
	import competitionBtnBg from '@image/science/competitionBtnBg.jpg';
	import schoolImgHolder from '@image/science/schoolImgHolder.png';
	import footCode from '@image/footCode.png';
	import competitionUrl from '@image/science/competition.jpg';
	import CommonBanner from '@components/CommonBanner.vue';
	import InfotroMask from '@image/science/competitionMask.png';
	import tmpTearchImg from '@image/science/spoken4.png';
	import {
		Carousel3d,
		Slide
	} from "vue-carousel-3d";
	import {
		videoApi
	} from '@api/commonApi.js';
	export default {
		name: "competition",
		data() {
			return {
				tmpTearchImg,
				footCode,
				schoolImgHolder,
				competitionUrl,
				bannerProfile: {},
				filterList: {
					difficultly: ['一星', '二星', '三星', '四星', '五星'],
					country: ['工科类', '商科类', '理工类', '社科类', '艺术类'],
					class: ['一星', '二星', '三星', '四星', '五星']
				},
				radio1: '二星',
				radio2: '商科类',
				radio3: '一星',
				currentMenu: 1,
				menuList: [{
						id: 1,
						name: '商科类',
					},
					{
						id: 2,
						name: '理工类',
					},
					{
						id: 3,
						name: '工科类',
					},
					{
						id: 4,
						name: '社科类',
					},
					{
						id: 5,
						name: '艺术类',
					},
				],
				courseList: [{
						id: 1,
						imgUrl: schoolImgHolder,
						title: '中国大智汇创新研究挑战赛',
						subject: '理工科',
						goldContent: 3,
						difficultly: 2,
						des: '智能创新大赛是一场旨在推动科技创新、展示前沿技术应用的年度盛事。我们致力于发掘和培养优秀的创新型人才，为全球智能科技领域的发展注入新的活力。本次大赛聚焦人工智能、机器学习、大数据、物联网等前沿领域，邀请来自全球各地的优秀科研团队、企业机构及创新个人共同参与'
					},
					{
						id: 2,
						imgUrl: schoolImgHolder,
						title: '中国大智汇创新研究挑战赛',
						subject: '理工科',
						goldContent: 4,
						difficultly: 2,
						des: '智能创新大赛是一场旨在推动科技创新、展示前沿技术应用的年度盛事。我们致力于发掘和培养优秀的创新型人才，为全球智能科技领域的发展注入新的活力。本次大赛聚焦人工智能、机器学习、大数据、物联网等前沿领域，邀请来自全球各地的优秀科研团队、企业机构及创新个人共同参与'
					},
					{
						id: 3,
						imgUrl: schoolImgHolder,
						title: '中国大智汇创新研究挑战赛',
						subject: '理工科',
						goldContent: 4,
						difficultly: 2,
						des: '智能创新大赛是一场旨在推动科技创新、展示前沿技术应用的年度盛事。我们致力于发掘和培养优秀的创新型人才，为全球智能科技领域的发展注入新的活力。本次大赛聚焦人工智能、机器学习、大数据、物联网等前沿领域，邀请来自全球各地的优秀科研团队、企业机构及创新个人共同参与'
					},
					{
						id: 4,
						imgUrl: schoolImgHolder,
						title: '中国大智汇创新研究挑战赛',
						subject: '理工科',
						goldContent: 4,
						difficultly: 2,
						des: '智能创新大赛是一场旨在推动科技创新、展示前沿技术应用的年度盛事。我们致力于发掘和培养优秀的创新型人才，为全球智能科技领域的发展注入新的活力。本次大赛聚焦人工智能、机器学习、大数据、物联网等前沿领域，邀请来自全球各地的优秀科研团队、企业机构及创新个人共同参与'
					},
					{
						id: 5,
						imgUrl: schoolImgHolder,
						title: '中国大智汇创新研究挑战赛',
						subject: '理工科',
						goldContent: 4,
						difficultly: 2,
						des: '智能创新大赛是一场旨在推动科技创新、展示前沿技术应用的年度盛事。我们致力于发掘和培养优秀的创新型人才，为全球智能科技领域的发展注入新的活力。本次大赛聚焦人工智能、机器学习、大数据、物联网等前沿领域，邀请来自全球各地的优秀科研团队、企业机构及创新个人共同参与'
					},
					{
						id: 6,
						imgUrl: schoolImgHolder,
						title: '中国大智汇创新研究挑战赛',
						subject: '理工科',
						goldContent: 4,
						difficultly: 2,
						des: '智能创新大赛是一场旨在推动科技创新、展示前沿技术应用的年度盛事。我们致力于发掘和培养优秀的创新型人才，为全球智能科技领域的发展注入新的活力。本次大赛聚焦人工智能、机器学习、大数据、物联网等前沿领域，邀请来自全球各地的优秀科研团队、企业机构及创新个人共同参与'
					},
					{
						id: 7,
						imgUrl: schoolImgHolder,
						title: '中国大智汇创新研究挑战赛',
						subject: '理工科',
						goldContent: 4,
						difficultly: 2,
						des: '智能创新大赛是一场旨在推动科技创新、展示前沿技术应用的年度盛事。我们致力于发掘和培养优秀的创新型人才，为全球智能科技领域的发展注入新的活力。本次大赛聚焦人工智能、机器学习、大数据、物联网等前沿领域，邀请来自全球各地的优秀科研团队、企业机构及创新个人共同参与'
					},
					{
						id: 8,
						imgUrl: schoolImgHolder,
						title: '中国大智汇创新研究挑战赛',
						subject: '理工科',
						goldContent: 4,
						difficultly: 2,
						des: '智能创新大赛是一场旨在推动科技创新、展示前沿技术应用的年度盛事。我们致力于发掘和培养优秀的创新型人才，为全球智能科技领域的发展注入新的活力。本次大赛聚焦人工智能、机器学习、大数据、物联网等前沿领域，邀请来自全球各地的优秀科研团队、企业机构及创新个人共同参与'
					},
					{
						id: 9,
						imgUrl: schoolImgHolder,
						title: '中国大智汇创新研究挑战赛',
						subject: '理工科',
						goldContent: 4,
						difficultly: 2,
						des: '智能创新大赛是一场旨在推动科技创新、展示前沿技术应用的年度盛事。我们致力于发掘和培养优秀的创新型人才，为全球智能科技领域的发展注入新的活力。本次大赛聚焦人工智能、机器学习、大数据、物联网等前沿领域，邀请来自全球各地的优秀科研团队、企业机构及创新个人共同参与'
					},
				],
				currentPage: 1,
			}
		},
		components: {
			CommonBanner,
			Carousel3d,
			Slide
		},
		methods: {
			toDetail(){
				uni.navigateTo({
					url:'/pages/science/scienceDetail'
				})
			},
			handleSizeChange() {},
			handleCurrentChange() {},
			changeMenu(e) {
				this.currentMenu = e.target.dataset.id;
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
								description: "最全最新一手竞赛资讯,囊括海量国际竞赛题库和牛剑笔试加试真题！,还有小组学习模式可共享题库，老师和学生都可以创建自己的学习小组，邀请小伙伴一起来学习。"
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

<style scoped lang="scss">
	.competition {
		box-sizing: border-box;

		.model2Wrap {
			@include wh(100%, 350px);
			background: url('../../assets/image/science/competitionBtnBg.jpg');

			.model2 {
				@include ct1200;
				@include modelPd;
				@include fj(space-around);
				.item{
					flex-direction: column;
					align-items: center;
					@include fj(center);
					.row1{
						font-size: 30px;
						font-weight: 700;
					}
					.row2{
						font-size: 16px;
						margin: 14px 0 28px;
					}
					.customButton{
					}
				}
			}
		}

		.mainWrap {
			background: #F4F6FE;

			.main {
				@include modelPd;
				@include ct1200;

				.course {
					@include wh(1200px, 1540px);
					@include mt(20px);
					@include fj();
					background: #fff;
					border-radius: 20px;

					.pageWrap {
						@include mt(20px);
						text-align: center;
					}

					.courseSlide {
						@include wh(244px, 100%);
						box-sizing: border-box;
						border-radius: 20px;
						overflow: hidden;
						background: url('../../assets/image/science/slideBg.jpg') bottom no-repeat;

						.title {
							margin: 30px 20px;
							@include sc(20px, #333);
							font-weight: 700;
							padding-bottom: 20px;
							border-bottom: 1px solid #999;
							width: 120px;
							position: relative;

							&::after {
								position: absolute;
								content: '';
								@include wh(60px, 2px);
								background: #000;
								bottom: -1px;
								left: 0;
							}
						}

						.menuList {
							.item {
								box-sizing: border-box;
								padding-left: 20px;
								line-height: 60px;
								@include wh(100%, 60px);
								border-radius: 0px 50px 50px 0;
								cursor: pointer;
							}

							.active {
								background-image: linear-gradient(to right, $gradientS, $gradientE);
								color: #fff;
							}
						}

						.qrcode {
							@include wh(190px, 230px);
							@include defaultShadow;
							margin: 30px 0 0 30px;
							background-color: #fff;
							padding: 14px;
							box-sizing: border-box;
							text-align: center;
							border-radius: 10px;
							color: #666;

							img {
								@include wh(162px, 162px);
								@include mb(10px);
							}
						}
					}

					.courseWrap {
						@include wh(956px, 100%);

						// align-items: flex-start;
						padding: 30px 0;


						.courseList {
							@include fj(flex-start);
							flex-wrap: wrap;
						}

						.courseItem {
							cursor: pointer;
							@include wh(300px, 454px);
							border-radius: 20px;
							border: 1px solid #d5d5d5;
							margin: 0 8px 10px;

							.imgWrap {
								@include wh(300x, auto);

								img {
									@include imgLayout;
								}
							}

							.infoWrap {
								padding: 10px;

								.title {
									@include sc(14px, #333);
									font-weight: 700;
								}

								.subject {
									margin: 6px 0;
									@include fj(flex-start);
									@include sc(14px, #666);
								}

								.hr {
									border-top: 1px dashed #eaeaea;
									@include mb(10px);
								}

								.desc {
									font-size: 14px;
									@include multi-ellipsis--l(7);
								}
							}

						}
					}
				}

				.filter {
					@include mt(20px);
					padding: 20px;
					background: #fff;
					border-radius: 20px;

					.filterRow {
						margin: 10px 0;

						label {
							@include mr(10px);
						}
					}
				}

				.competitionList {
					@include fj();

					.listL {
						width: 780px;
						@include fj();
						flex-wrap: wrap;

						.item {
							cursor: pointer;
							@include ellipsis;
							width: 360px;
							@include sc(16px, #666);
							position: relative;
							padding-left: 20px;

							&:hover {
								color: $gradientE;
							}

							&::before {
								left: 0;
								top: 9px;
								position: absolute;
								content: '';
								width: 4px;
								height: 4px;
								border-radius: 50%;
								background: #666;
							}
						}
					}

					.listR {
						@include wh(400px, auto);

						img {
							@include imgLayout;
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
	}
</style>