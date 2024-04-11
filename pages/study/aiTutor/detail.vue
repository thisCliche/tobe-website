<template>
	<view class="detail">
		<view class="detailWrap">
			<view class="wrapL">
				<view class="interview">
					<view class="tips">
						<view class="" v-if="status==1">
							点击左侧按钮开始说话
						</view>
						<view class="" v-else-if="status==2">
							再次点击左侧按钮结束说话
						</view>
						<view class="" v-else-if="status==3">
							正在思考...
						</view>
					
					</view>
					<view class="btnList">
						<view class="btnItem" :class="status==2?'active':''" @click="start">
							<img :src="speak" alt="" />
						</view>
						<view class="btnItem" @click="overHandle">
							<img :src="over" alt="" />
						</view>
						<view class="btnItem" @click="pause">
							<img :src="next" alt="" />
						</view>
					</view>
					<view class="imgBg">
						<img :src="three" alt="" />
					</view>
				</view>
			</view>
			<view class="wrapR">
				<view class="record">
					<view class="paragraph" v-for="item in sessionList" :key="item.id">{{item.text}}</view>
					<vue-typed-js v-if="isTyping" :strings="strings" @onComplete="typeComplete">
						<span class="typing"></span>
					</vue-typed-js>
				</view>

			</view>
		</view>
		<my-foot></my-foot>
	</view>
</template>

<script>
	import {FastGptRetApi} from '@api/aiTutorApi.js'
	import three from '@image/three.png'
	import next from '@image/interview-next.png'
	import over from '@image/interview-over.png'
	import speak from '@image/interview-speak.png';
	import {
		XfVoiceDictation
	} from '@muguilin/xf-voice-dictation';
	export default {
		data() {
			return {
				status: 1, // 分为3个状态 1：默认状态 提示点击录音 2：录音状态 提示正在录音，录音时长小于60秒 再次点击结束录音 3：录音结束 提示等待回复 展示录入的文字 
				isTyping: false,
				xfVoice: null,
				three,
				next,
				over,
				speak,
				strings: [],
				sessionList: [],
			}
		},
		methods: {
			//添加我的录音
			pushMyRecord(text){
				let id = +new Date();
				this.sessionList.push({
					id,
					text
				})
				this.resolveText(text);
			},
			typeComplete() {
				this.sessionList.push({
					id: +new Date(),
					text: '我不明白你在说什么，我给你说个笑话如何？'
				})
				this.isTyping = false;
			},
			overHandle() {},
			pause() {
				console.log('暂停')
			},
			async resolveText(content){
				let reponse = await FastGptRetApi({content});
				console.log(reponse.msg.choices.message.content)
				// setTimeout(()=>{
				// 	this.status = 1;
				// 	this.isTyping = true;
				// },1000)
			},
			start() {
				// 需要一些机制来防止意外情况发生
				if (this.status == 1) {
					this.xfVoice.start();
					this.status = 2;
				} else if (this.status == 2) {
					let timer = null;
					clearTimeout(timer);
					// 清除计时器
					timer = setTimeout(()=>{
						this.xfVoice.stop();
						this.status = 3;
					},1000)
				}
			},
		},
		mounted() {
			let that = this;
			this.xfVoice = new XfVoiceDictation({
				APPID: '3e168f84',
				APISecret: 'ODRmMWEyZThiMjI2YTEyMGM3YTRkZjM0',
				APIKey: '3efd1ae8550d1aecd182a06e0316543e',
				onWillStatusChange: function(oldStatus, newStatus) {
					console.log(oldStatus, newStatus);
				},
				onTextChange: function(text) {
					if(this.status=='end'){
						that.pushMyRecord(text);
					}
				},
				onError: function(error) {
					console.log('错误信息：', error)
					alert('请开启麦克风权限后刷新页面再试')
				}
			});
		}
	}
</script>

<style lang="scss" scoped>
	.detailWrap {
		@include ct1200;
		@include fj();
		@include modelPd;

		.wrapR {
			@include wh(780px, 677px);
			overflow-y: auto;
			line-height: 32px;
		}

		.wrapL {
			width: 390px;

			.interview {
				position: relative;
				@include wh(390px, 677px);

				.tips {
					position: absolute;
					z-index: 9;
					top: 0;
				}

				.btnList {
					position: absolute;
					z-index: 9;
					bottom: 50px;
					left: 41px;
					@include fj();
					width: 308px;

					.btnItem {
						cursor: pointer;

						img {
							@include wh(66px, 66px);
						}

					}

					.active {
						position: relative;

						&::before,
						&::after {
							position: absolute;
							top: 0;
							left: 0;
							width: 66%;
							height: 66%;
							content: '';
							border: 10px solid #ba58ee;
							border-radius: 50%;
							animation: scaleA 2s infinite;
						}

						&::before {
							animation-delay: 1s;
						}

					}
				}

				.imgBg {
					position: absolute;
					left: 0;
					right: 0;
					top: 0;
					bottom: 0;

					img {
						@include wh(100%, 100%);
						@include imgLayout;
					}
				}
			}
		}
	}

	@keyframes scaleA {
		to {
			opacity: 0;
			transform: scale(1.6);
		}
	}
</style>