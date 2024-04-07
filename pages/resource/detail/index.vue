<template>
	<view class="IndexPage">
		<view class="banner">

			<VideoProfile :introduction='introduction' />
			<view class="logo">
				
			</view>

		</view>
		<view class="container1">
			<view class="title">
				人工智能与chatgpt
				
			</view>
			<view class="content">
			<rich-text :nodes="content"></rich-text>	
				
			</view>
			
		</view>
		<view class="foot">
			<view class="foot-img">
				<img src="" alt="" srcset="" />
				
			</view>
			<view class="foot-text">
				入学申请咨询
				
			</view>
			
		</view>

		<my-foot></my-foot>
	</view>
</template>

<script>
	import {
		tagIcon,
	} from '../export.js'

	import UseCase from '../UseCase.vue';
	import VideoProfile from '../VideoProfile.vue';
	import HomeCase from '../HomeCase.vue';
	import {
		videoApi,
		bannerApi,
		configApi,
		userSide,
		textConfig,
		suanFa1,
		teatcha1
	} from '@api/study.js'
	export default {
		name: 'PagesIndex',
		components: {
			UseCase,
			VideoProfile,
			HomeCase,
		},
		data() {
			return {
				introduction: {},
				content:'<p style="text-indent: 2em;">新华社北京4月7日电&ensp;国务院总理李强4月7日上午在北京人民大会堂会见美国财政部长耶伦。</p><p style="text-indent: 2em;">李强表示，在两国元首战略指引下，当前中美关系出现企稳态势。习近平主席不久前同拜登总统通电话，双方一致同意要加强对话、管控分歧、推进合作，推动中美关系稳定发展。中方希望中美做伙伴而不是对手，相互尊重、和平共处、合作共赢。希望美方同中方更多相向而行，继续落实好两国元首重要共识，让“旧金山愿景”成为“实景”。</p><p style="text-align: center"><img src="./W020240407754781682465_ORIGIN.jpg" data-uploadpic="U020240407754591701123_ORIGIN.jpg" needdownload="true" data-needdownload="true" title="" alt="" style="" picname="1.jpg" oldsrc="W020240407754781682465_ORIGIN.jpg" data-width="800" data-height="602"></p><p label="居中对齐" style="text-align: center; text-indent: 0em;"><span style="color: rgb(0, 0, 255);">4月7日上午，国务院总理李强在北京人民大会堂会见美国财政部长耶伦。新华社记者 燕雁 摄</span></p><p style="text-indent: 2em;">李强指出，中美作为世界前两大经济体，经济利益深度交融，加强经贸合作对双方各自发展和全球经济增长都具有重要意义。双方要加强沟通，共同找到管控分歧、解决分歧的办法，让中美经贸合作稳定、顺畅、高效，为两国企业和人民创造更多实惠，也为世界经济发展和民生改善作出贡献。希望美方与中方一道，坚持公平竞争、开放合作的市场经济基本准则，不把经贸问题泛政治化、泛安全化。要以市场眼光和全球视野，从经济规律出发，客观、辩证看待产能问题。中国的新能源产业发展，将对全球绿色低碳转型作出重要贡献。中方愿同美方在应对气候变化等问题上加强政策协调，共同应对全球性挑战。</p><p style="text-indent: 2em;">耶伦表示，在双方共同努力下，美中关系变得更加稳定。作为全球前两大经济体，美中双方应当负责任地管理双边经济关系。美方赞赏美中经济对话合作取得的进展，不寻求同中方“脱钩”，愿同中方一道落实两国元首旧金山会晤达成的重要共识，坦诚沟通，避免误解，深化交流合作，妥善管控分歧，共同应对紧迫的全球性挑战，推动美中关系稳定发展。</p>'
				
				

			

			}
		},
		onLoad() {
			this.getData();
		},
		methods: {
			async getData() {
				let resDataList = await Promise.all([videoApi({
						type: 4,
						limit: 1
					}),
					videoApi({
						type: 5,
						limit: 2
					}),

					videoApi({
						type: 6,
						limit: 2
					}),
					videoApi({
						type: 7,
						limit: 4
					}),
					videoApi({
						type: 8,
						limit: 1
					}),
					configApi({}), textConfig({}),
					userSide({
						type: 1,
						limit: 5
					}),
					bannerApi({
						type: 15,
						limit: 1
					}),
					bannerApi({
						type: 14,
						limit: 1
					}),
					suanFa1({

					}),
					bannerApi({
						type: 13,
					}),
					teatcha1({
						type: 6,
						limit: 3

					})

				]);
				let topVideo = [],
					cePinginfo = [],
					howVideoInfo = [],
					kaiqiVideo = [],
					guiHuavideo = [],
					PlanningConfigInfo = {},
					tPlanningClassConfigInfo = {},
					suanFaList = [],
					teatcha = [],
					banner13 = [],
					model1ComImg = [],

					usecase = [];
				resDataList.map((res, idx) => {
					console.log(res, idx)
					if (idx == 0) {
						res.data.map(item => {
							topVideo.push({
								imageUrl: item.image_text,
								videoUrl: item.video_text,
								id: item.id
							})
						})
					} else if (idx == 1) {
						res.data.map(item => {
							cePinginfo.push({
								imageUrl: item.image_text,
								id: item.id,
								videoUrl: item.video_text,
								name: item.name,
								text: item.text
							})
						})
					} else if (idx == 2) {
						res.data.map(item => {
							howVideoInfo.push({
								id: item.id,
								name: item.name,
								introduction: {
									imageUrl: item.image_text,
									videoUrl: item.video_text
								}


							})
						})



					} else if (idx == 3) {
						res.data.map(item => {
							kaiqiVideo.push({
								id: item.id,
								name: item.name,
								introduction: {
									imageUrl: item.image_text,
									videoUrl: item.video_text
								}


							})

						})

					} else if (idx == 4) {
						res.data.map(item => {
							guiHuavideo.push({
								id: item.id,
								name: item.name,
								text: item.text,
								introduction: {
									imageUrl: item.image_text,
									videoUrl: item.video_text
								}
							})
						})
					} else if (idx == 5) {
						PlanningConfigInfo = res.data
					} else if (idx == 6) {
						tPlanningClassConfigInfo = res.data
					} else if (idx == 7) {
						res.data.map(item => {
							usecase.push({
								engineerUrl: item.image_text,
								desc: item.text,
								id: item.id,
								name: item.name
							})
						})
					} else if (idx == 8) {
						let data = res.data

						this.liuChenegBanner = data[0].image_text
					} else if (idx == 9) {
						let data = res.data

						this.daoshiBanImg = data[0].image_text
					} else if (idx == 10) {
						res.data.map(item => {
							suanFaList.push({
								code: item.code,
								title: item.title,
								name: item.name
							})

						})

					} else if (idx == 11) {

						res.data.map(item => {
							banner13.push({
								imageUrl: item.image_text,
								desc: item.text,
								id: item.id,
								name: item.name
							})

						})

					} else if (idx == 12) {

						res.data.map(item => {
							teatcha.push({

								text: item.text,
								name: item.name,
								subname: item.subname
							})
						})

					}

				})

				this.introduction = topVideo[0]

				this.cePinginfo = {
					one: {
						textcontent: {
							title: cePinginfo[0].name,
							text: cePinginfo[0].text,
						},
						introduction: {
							imageUrl: cePinginfo[0].imageUrl,
							videoUrl: cePinginfo[0].imageUrl,
							id: cePinginfo[0].id

						}

					}
				}


				this.howVideoInfo = howVideoInfo;
				this.kaiqiVideo = kaiqiVideo;
				this.guiHuavideo = guiHuavideo[0];
				this.PlanningConfigInfo = PlanningConfigInfo;
				this.tPlanningClassConfigInfo = tPlanningClassConfigInfo;
				this.usecase = usecase;
				// this.homecase = homecase;
				this.suanFaList = suanFaList;
				this.model1ComImg = teatcha;
				this.banner13 = banner13;



			},

		}
	}
</script>

<style lang="scss" scoped>
	@import "../../../assets/styles/minix.scss";

	.IndexPage {
		width: 100%;

		.banner {
			@include fj(center);
			width: 100%;
			height: 700px;
			background: rgb(196, 196, 196);
			position: relative;
			.logo{
				width: 200px;
				height: 200px;
				position: absolute;
				border-radius: 20px;
				background: rgb(230, 125, 125);
				left: 348px;
				top:580px;
				z-index: 100;
				
			}
		}

		.container1 {
			@include ct1200;
			@include modelPd;
			display: flex;
			flex-direction: column;
			.title{
				
				color: rgb(0, 0, 0);
				font-size: 36px;
				font-weight: 700;
				line-height: 60px;
				
			}
			.content{
				
				
				
			}
			
			
			

		}
		.foot{
				@include ct1200;
				padding: 40px 0;
			display: flex;
			justify-content: center;
			align-items: center;
			flex-direction: column;
			
			margin-top: 40px;
			.foot-img{
				width: 200px;
				height: 200px;
				img {
					width: 100%;
					height: 100%;
					object-fit: cover;
				}
			}
			.foot-text{
				@include mt(20px);
				
				color: rgb(0, 0, 0);
				font-size: 26px;
				font-weight: 700;
				line-height: 30px;
				
			}
			
			
		}



	}
</style>