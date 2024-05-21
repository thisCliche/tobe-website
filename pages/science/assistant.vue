<template>
	<view class="assistant">
		<common-banner :bannerProfile="bannerProfile"></common-banner>
		<view class="mainWrap">
			<view class="main">
				<view class="modelTitle wow animate__animated animate__fadeInUp">
					<view class="title">
						科目/题库
					</view>
					<view class="titleEn">
						ADMISSIONS REP FOR THE WORLD'S TOP UNIVERSITIES
					</view>
				</view>
				<view class="collegeListWrap">
					<view class="collegeItem" v-for="item of collegeList" :key="item.id">
						<view class="title">{{item.title}}</view>
						<view class="collegeList">
							<view class="item" v-for="child of item.list" :key="child.id">
								<img :src="child.url" alt="" />
								<view class="name">{{child.name}}</view>
							</view>
						</view>
					</view>
				</view>
				
			</view>
			
		</view>
		<view class="model5Wrap">
			<view class="model5 entry3d">
				<view class="modelTitle wow animate__animated animate__fadeInUp">
					<view class="title">
						真人导师辅导
					</view>
					<view class="titleEn">
						留学之路，学术领航；专业指导，助力前行。选择我们，让学术梦想照进现实
					</view>
				</view>
				<view class="hr"></view>
				<template v-if="higherGradeTeacher.length">
					<use-case :usecase="higherGradeTeacher"></use-case>
				</template>
			</view>
		</view>
		<my-foot></my-foot>
	</view>
</template>

<script>
	import CommonBanner from '@components/CommonBanner.vue';
	import TUTOR from '@image/science/TUTOR.png';
	import modelBg from '@image/science/modelBg.jpg';
	import UseCase from './UseCase.vue'
	import {
		teacherApi,
	} from '@api/partnerApi.js'
	import {
		videoApi
	} from '@api/commonApi.js';
	export default {
		name:"assistant",
		data() {
			return {
				modelBg,
				higherGradeTeacher: [], //升学老师
				collegeList:[
					{
						id:1,
						title:'语言 / Language',
						list:[
							{
								id:1,
								name:'西安大学',
								url:'https://website.tobeapp.cn/uploads/20240412/00d550e548824df7165553fce308ca65.jpeg',
							},
							{
								id:2,
								name:'西安大学',
								url:'https://website.tobeapp.cn/uploads/20240412/00d550e548824df7165553fce308ca65.jpeg',
							}
						]
					},
					{
						id:2,
						title:'AP / Language',
						list:[
							{
								id:1,
								name:'西安大学',
								url:'https://website.tobeapp.cn/uploads/20240412/00d550e548824df7165553fce308ca65.jpeg',
							},
							{
								id:2,
								name:'西安大学',
								url:'https://website.tobeapp.cn/uploads/20240412/00d550e548824df7165553fce308ca65.jpeg',
							}
						]
					},
				],
				bannerProfile: {},
			}
		},
		components:{CommonBanner,UseCase},
		methods: {
			async getData() {
				let apiRequestArr = [videoApi({
					type: 4,
					limit: 1
				}),teacherApi({
						type: 2,
						limit: 10
					})];
				let result = await Promise.all(apiRequestArr);
				result.map((item, idx) => {
					switch (idx) {
						case 0:
							this.bannerProfile = item.data[0];
							this.bannerProfile.maskInfo = {
								maskImg: TUTOR,
								description: "AI学习助教 —— AP、A-LEVEL全学科知识点在线答疑 边学边问，还有海量题库等你来练！"
							}
							break;
						case 1:
							this.higherGradeTeacher = item.data;
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
.assistant{
	.model5Wrap {
		@include bis("../../assets/image/science/modelBg2.jpg");
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
	.entry3d {
		@include modelPdOther;
		@include ct1200;
	
		.hr {
			height: 40px;
		}
	}
	.mainWrap{
		background: #e5f1fd url('../../assets/image/science/maxBg.jpg') 100% 100% no-repeat;
		.main{
			@include modelPd;
			@include ct1200;
			
		}
		.collegeListWrap{
			.collegeItem{
				.collegeList{
					@include fj(flex-start);
					margin: 40px 0 80px;
					.item{
						text-align: center;
						margin: 0 50px 40px 0;
						img{
							@include wh(120px,120px);
							border-radius: 50%;
							overflow: hidden;
						}
						.name{
							@include mt(10px);
						}
					}
				}
				.title{
					font-size: 28px;
					font-weight: 700;
					position: relative;
					&::after{
						content: '';
						position: absolute;
						right: 0;
						top:24px;
						width:900px;
						border-top: 1px dashed #979797;
					}
				}
			}
		}
		
	}
}
</style>
