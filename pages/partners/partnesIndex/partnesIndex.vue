<template>
	<view class="partnes">
		<view class="banner">
			<img :src="topBanner.image_text" alt="" />
		</view>
		<view class="model1">
			<view class="button">
				<view class="" style="white-space: pre-line;">
					{{buttonText.partners_text}}
				</view>
			</view>
			<view class="slogan animate__animated animate__fadeInUp">
				{{buttonText.partners_subtitle}}
			</view>
		</view>
		<view class="model2 swiperWrap">
			<view class="modelTitle">
				<view class="">
					College Ambassador
				</view>
				<view class="">
					世界顶尖名校招生代表
				</view>
			</view>
			<el-carousel trigger="click" :interval="5000" height="488px" arrow="always" indicator-position="none">
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
			<view class="modelTitle">
				<view class="">
					国外高中招生代表
				</view>
			</view>
			<el-carousel trigger="click" :interval="5000" height="488px" arrow="always" indicator-position="none">
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
		<view class="model4 entry3d">
			<view class="modelTitle">
				<view class="">
					学术辅导老师
				</view>
			</view>
			<roll-entry></roll-entry>
			<view class="hr"></view>
			<template v-if="scienceList.length">
				<use-case :usecase="scienceList"></use-case>
			</template>
			<view class="btn">
				<view class="coolBeans" @click="toDetail">立即加入</view>
			</view>
		</view>
		<view class="model5 entry3d">
			<view class="modelTitle">
				<view class="">
					升学指导老师
				</view>
			</view>
			<roll-entry></roll-entry>
			<view class="hr"></view>
			<template v-if="higherGradeTeacher.length">
				<use-case :usecase="higherGradeTeacher"></use-case>
			</template>
			<view class="btn">
				<view class="coolBeans" @click="toDetail">立即加入</view>
			</view>
		</view>
		<view class="model6">
			<view class="modelTitle">
				<view class="">
					升学指导机构
				</view>
			</view>
			<template v-if="higherGradeInstitution.length">
				<institution-case :usecase="higherGradeInstitution"></institution-case>
			</template>
			<view class="btn">
				<view class="coolBeans" @click="toDetail">立即加入</view>
			</view>
		</view>
		<view class="model7">
			<view class="modelTitle">
				<view class="">
					外教导师
				</view>
			</view>
			<template v-if="foreignTeacher.length">
				<foreign-case :usecase="foreignTeacher"></foreign-case>
			</template>
			<view class="btn">
				<view class="coolBeans" @click="toDetail">JOIN NOW</view>
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
			ForeignCase
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
		color: $partnerTitle;
		font-size: 26px;
		font-weight: 700;
		@include mb(20px);
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
			width: 200px;

			img {
				@include imgLayout;
			}
		}
	}

	.btn {
		@include fj(flex-end);

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
			&:hover{
				@include defaultShadow;
			}
		}
	}

	.model1 {
		@include modelPd;
		@include ct1200;
		@include fj(space-around);

		.slogan {
			font-size: 22px;
			width: 600px;
			font-weight: 700;
		}

		.button {
			background: #F54696;
			width: 500px;
			height: 100px;
			border-radius: 16px;
			color: #fff;
			font-weight: 700;
			text-align: center;
			line-height: 40px;
			font-size: 22px;
			cursor: pointer;
			padding-top: 10px;
			box-sizing: border-box;
			transition: 0.3s all ease-in;

			&:hover {
				@include defaultShadow;
			}
		}
	}
</style>