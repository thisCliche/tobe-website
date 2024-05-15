<template>
	<div class="science">
		<common-banner :bannerProfile="bannerProfile"></common-banner>
		<div class="content">
			<div class="modelItem" v-for="item of modelList" :key="item.id" :style="{background: 'url('+item.bgUrl+') 100% 100% no-repeat'}">
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
						<div class="customBtnWrap" v-if="item.hasOwnProperty('customBtn')">
							<div class="customBtn" v-for="child of item.customBtn">{{child}}</div>
						</div>
						<div class="btn">立即了解</div>
					</div>
				</div>
			</div>
		</div>
		<my-foot></my-foot>
	</div>
</template>

<script>
	import CommonBanner from '@components/CommonBanner.vue';
	import resourceImg from './indexImport'
	import {
		videoApi
	} from '@api/commonApi.js'
	export default {
		name: 'science',
		components: {
			CommonBanner
		},
		data() {
			return {
				bannerProfile: {},
				modelList:[
					{
						id:1,
						reverse:false,
						imgUrl:resourceImg.model1,
						bgUrl:resourceImg.modelBg,
						title:'TOBE题库',
						customBtn:['TOEFL','KET','PET','IELTS','FCE','OSSD','SAT','GRE','LSAT','GMAT','IB','ALevel','AP'],
						des:['收录海量题库在线刷题；囊括主流国际课程,全体系','英文能力标准测试，国际竞赛题库等']
					},
					{
						id:2,
						reverse:true,
						bgUrl:resourceImg.modelBg2,
						imgUrl:resourceImg.model2,
						title:'学科助教tutor',
						des:['收录100万余条留学申请数据库，精准分析留学申','请优劣势，TOBE独家留学申请数据模型，为','学生智能匹配选校名单和申请专业']
					},
					{
						id:3,
						reverse:false,
						imgUrl:resourceImg.model3,
						bgUrl:resourceImg.modelBg,
						title:'英语语言培训',
						des:['囊括全国国际高中学校信息','包含海外英美澳加等国家高中学校信息','帮助学生和家长提前规划国际学校入学备考']
					},
					{
						id:4,
						reverse:true,
						imgUrl:resourceImg.model4,
						bgUrl:resourceImg.modelBg2,
						title:'世界名校介绍',
						des:['全面世界名校介绍，锚定申请目标','专业介绍帮助你提前做好规划']
					},
					{
						id:5,
						reverse:false,
						imgUrl:resourceImg.model5,
						bgUrl:resourceImg.modelBg,
						title:'大学专业介绍',
						des:['AI自由口语练习','系统针对性开发，不限时托福、雅思口语练习']
					},
					{
						id:6,
						reverse:true,
						imgUrl:resourceImg.model6,
						bgUrl:resourceImg.modelBg2,
						title:'国际高中介绍',
						des:['AI学科助教TUTOR','国际课程学科辅导培训；','AI导师辅导答疑；','匹配资深国际课程老师课外辅导培训']
					},
					{
						id:7,
						reverse:false,
						imgUrl:resourceImg.model7,
						bgUrl:resourceImg.modelBg,
						title:'中国国际本科介绍',
						des:['收集全国最全国际本科（2+2/3+1/4+0）信息','直接对接国际本科资源','帮助高考体系学生寻找后备方案']
					},
				],
			}
		},
		methods: {
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
								description: "找到你的学术资料，开启你的学习之旅开启你的学习之旅"
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
.modelItem{
	padding:76px 0;
	.modelMain{
		@include ct1200;
		@include fj(space-between);
		.mainR{
			width: 484px;
			text-align: right;
			@include mt(40px);
			.title{
				font-size: 46px;
				font-weight: 500;
				@include mb(16px);
			}
			.desItem{
				line-height: 46px;
			}
			.customBtnWrap{
				@include fj(flex-end);
				width: 484px;
				flex-wrap: wrap;
				.customBtn{
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
			.btn{
				float: right;
				@include wh(236px,60px);
				background-image: linear-gradient(to right,$gradientS,$gradientE);
				border-radius: 40px;
				color: #fff;
				line-height: 60px;
				text-align: center;
				cursor: pointer;
				@include mt(28px);
				transition: all 0.2s ease;
				&:hover{
					@include defaultShadow;
				}
			}
		}
	}
	.reverseClass{
		flex-direction: row-reverse;
		.mainR{
			text-align: left;
			.btn{
				float:left;
			}
		}
	}
}
</style>