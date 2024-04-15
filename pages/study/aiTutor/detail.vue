<template>
	<view class="detail">
		<view class="main">
			<view class="detailWrap">
				<view class="wrapL">
					<view class="interview">
						<view class="tips">
							<view class="">{{status|statusTextEsc}}</view>
						</view>
						<view class="btnList">
							<view class="btnItem" :class="status==2?'active':''" @click="start">
								<img :src="bgImg.speak" alt="" />
							</view>
							<view class="btnItem" @click="overHandle">
								<img :src="bgImg.over" alt="" />
							</view>
							<view class="btnItem" @click="pause">
								<img :src="bgImg.next" alt="" />
							</view>
						</view>
						<view class="imgBg">
							<img :src="bgImg.three" alt="" />
						</view>
					</view>
				</view>
				<view class="wrapR">
					<view class="record" id="record">
						<view class="paragraph" v-for="item in sessionList" :key="item.id">
							<view class="avatarWrap" :class="item.type==1?'rightDisplay':''">
								<view class="paragraphL">
									<img :src="item.avtar" alt="" srcset="" />
								</view>
							</view>
							<view class="limitWith" v-if="item.text!=''">
								<view class="paragraphR">
									{{item.text}}
								</view>
							</view>
						</view>
						<view class="limitWith" v-if="isTyping">
							<view class="paragraphR">
								<vue-typed-js :strings="strings" @onComplete="typeComplete" :showCursor="false">
									<span class="typing"></span>
								</vue-typed-js>
							</view>
						</view>

					</view>
					<view class="inputWrap">
						<el-input v-model="question" placeholder="请输入问题并点击发送" @keyup.enter.native="sendHandle"></el-input>
						<view class="interval"></view>
						<el-button type="primary" @click="sendHandle">发送</el-button>
					</view>
				</view>

			</view>
			<view class="btnWrap" v-if="status==5">
				<el-button type="info">生成报告</el-button>
			</view>
		</view>

		<my-foot></my-foot>
	</view>
</template>

<script>
	import {
		FastGptRetApi
	} from '@api/aiTutorApi.js'
	import three from '@image/three.png'
	import next from '@image/interview-next.png'
	import over from '@image/interview-over.png'
	import speak from '@image/interview-speak.png';
	import aiAvatar from '@image/aiAvatar.png';
	import Speech from 'speak-tts';
	import {
		Local
	} from "@utils/storage";
	import {
		XfVoiceDictation
	} from '@muguilin/xf-voice-dictation';
	export default {
		data() {
			return {
				question: '',
				scrollTimer: null,
				speech: null,
				status: 1, // 分为5个状态 1：默认状态 提示点击录音 2：录音状态 提示正在录音，录音时长小于60秒 再次点击结束录音 3：录音结束 提示等待回复 展示录入的文字 4 :暂停绘画 5：结束绘画
				isTyping: false,
				BrowserSupportSpeech: false,
				xfVoice: null,
				userInfo: {
					aiAvatar,
					userAvatar: '',
				},
				bgImg: {
					three,
					next,
					over,
					speak,
				},
				strings: [],
				sessionList: [],
				response: '', // 临时存一下回复
				recordElement: null,
			}
		},
		filters: {
			statusTextEsc(val) {
				let res = '';
				switch (val) {
					case 1:
						res = '点击左侧按钮开始说话'
						break;
					case 2:
						res = '再次点击左侧按钮结束说话'
						break;
					case 3:
						res = '正在思考...'
						break;
					case 4:
						res = '暂停会话'
						break;
					case 5:
						res = '会话结束'
						break;
					default:
						break;
				}
				return res;
			}
		},
		methods: {
			//手动添加问题
			sendHandle() {
				// 问题为空或为重置为默认状态 禁止发送
				if (this.question == '' || this.status != 1) return;
				let question = this.question;
				this.sessionList.push({
					id: +new Date(),
					text: question,
					type: 1,
					avtar: this.userInfo.userAvatar
				});
				this.status = 3;
				this.resolveText(question);
				this.question = '';
			},
			//添加我的录音
			pushMyRecord(text) {
				if (text == '') {
					this.status = 1;
					this.$notify.info({
						title: '提示',
						message: '未检测到录音'
					})
				} else {
					this.sessionList.push({
						id: +new Date(),
						text,
						type: 1,
						avtar: this.userInfo.userAvatar
					})
					this.resolveText(text);
				}
			},
			stringTypeScroll() {
				this.scrollTimer = setInterval(() => {
					if (this.isTyping) {
						this.recordElement.scrollTop = this.recordElement.scrollHeight;
					} else {
						clearInterval(this.scrollTimer);
					}
				}, 1000)
			},
			typeComplete() {
				this.isTyping = false;
				let lastIdx = this.sessionList.length - 1;
				let item = this.sessionList[lastIdx];
				item.text = this.response;
				this.$set(this.sessionList, lastIdx, item);
				this.status = 1;
			},
			overHandle() {
				this.status = 5;
			},
			pause() {
				if (this.status == 4) {
					this.status = 1;
				} else {
					this.status = 4;
				}
			},
			async resolveText(content) {
				// 预先更新一次滚动条位置；
				this.$nextTick(() => {
					this.recordElement.scrollTop = this.recordElement.scrollHeight;
				})
				try {
					let res = await FastGptRetApi({
						content
					});
					let response = res.msg.choices[0].message.content;
					this.response = response;
					this.strings = [response];
					this.isTyping = true;
					this.stringTypeScroll();
					this.sessionList.push({
						id: +new Date(),
						text: '',
						type: 2,
						avtar: this.userInfo.aiAvatar
					})
					this.playVioce(response);
				} catch (e) {
					this.status = 1;
				}
			},
			start() {
				if (this.status == 1) {
					this.xfVoice.start();
					this.status = 2;
				} else if (this.status == 2) {
					let timer = null;
					clearTimeout(timer);
					timer = setTimeout(() => {
						this.xfVoice.stop();
						this.status = 3;
					}, 1000)
				}
			},
			playVioce(text) {
				if (!this.BrowserSupportSpeech) return;
				this.speech.cancel();
				this.speech.speak({
					text,
					listeners: {
						onstart: () => {
							console.log("Start utterance")
						},
						onend: () => {
							console.log("End utterance")
						},
						onresume: () => {
							console.log("Resume utterance")
						}
					}
				})
			},
		},
		created() {
			let userInfo = Local.get('accountInfo');
			if (userInfo) {
				this.userInfo.userAvatar = userInfo.user.avatar;
			}
			this.speech = new Speech();
			// 先检查是否支持语音
			if (this.speech.hasBrowserSupport()) {
				this.BrowserSupportSpeech = true;
				this.speech.init({
					'volume': 1,
					'lang': 'zh-CN',
					'rate': 1,
					'pitch': 1,
					'voice': "Microsoft Huihui - Chinese (Simplified, PRC)",
					'splitSentences': true,
					'listeners': {
						'onvoiceschanged': (voices) => {
							// console.log("Event voiceschanged", voices)
						}
					}
				})
			} else {
				this.BrowserSupportSpeech = false;
			}
		},
		mounted() {
			let that = this;
			this.recordElement = document.getElementById("record");
			this.xfVoice = new XfVoiceDictation({
				APPID: '3e168f84',
				APISecret: 'ODRmMWEyZThiMjI2YTEyMGM3YTRkZjM0',
				APIKey: '3efd1ae8550d1aecd182a06e0316543e',
				onWillStatusChange: function(oldStatus, newStatus) {
					console.log(oldStatus, newStatus);
				},
				onTextChange: function(text) {
					if (this.status == 'end') {
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
	.btnWrap {
		text-align: center;
		padding-bottom: 40px;
	}

	.detailWrap {
		@include ct1200;
		@include fj();
		@include modelPd;

		.wrapR {
			@include wh(780px, 677px);
			overflow-y: auto;
			line-height: 32px;

			.record {
				height: 580px;
				overflow-y: auto;

				.limitWith {
					width: 730px;
				}

				.paragraphR {
					@include ml(50px);
					padding: 14px 16px;
					border-radius: 10px;
					background: $bc;
				}

				.paragraph {

					.paragraphL {
						margin: 6px 0;
						@include wh(40px, 40px);
						overflow: hidden;
						border-radius: 10px;
						flex-shrink: 0;

						img {
							@include imgLayout;
						}
					}

					.rightDisplay {
						@include fj(flex-end);
					}
				}
			}

			.inputWrap {
				padding: 20px 0;
				@include fj();

				.interval {
					width: 30px;
				}
			}
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