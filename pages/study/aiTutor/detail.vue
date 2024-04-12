<template>
	<view class="detail">
		<view class="main">
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
							<view class="" v-else-if="status==4">
								暂停会话
							</view>
							<view class="" v-else-if="status==5">
								会话结束
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
						<!-- <view class="imgBg">
						<img :src="three" alt="" />
					</view> -->
					</view>
				</view>
				<view class="wrapR">
					<view class="record" id="record">
						<view class="paragraph" v-for="item in sessionList" :key="item.id">{{item.text}}</view>
						<vue-typed-js v-if="isTyping" :strings="strings" @onComplete="typeComplete">
							<span class="typing"></span>
						</vue-typed-js>
					</view>
					<view class="inputWrap">
						<el-input v-model="question" placeholder="请输入问题并点击发送"></el-input>
						<view class="interval"></view>
						<el-button type="primary" @click="sendHandle">发送</el-button>
					</view>
				</view>

			</view>
			<view class="btnWrap">
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
	import {
		XfVoiceDictation
	} from '@muguilin/xf-voice-dictation';
	export default {
		data() {
			return {
				question: '',
				status: 1, // 分为5个状态 1：默认状态 提示点击录音 2：录音状态 提示正在录音，录音时长小于60秒 再次点击结束录音 3：录音结束 提示等待回复 展示录入的文字 4 :暂停绘画 5：结束绘画
				isTyping: false,
				xfVoice: null,
				three,
				next,
				over,
				speak,
				strings: [],
				sessionList: [],
				response: '', // 临时存一下回复
				recordElement: null,
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
					text: '我说：' + question
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
						text
					})
					this.resolveText(text);
				}
			},
			typeComplete() {
				this.sessionList.push({
					id: +new Date(),
					text: this.response,
				})
				this.isTyping = false;
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
				try {
					let res = await FastGptRetApi({
						content
					});
					let response = res.msg.choices.message.content;
					this.response = response;
					this.strings = [response];
					this.status = 1;
					this.isTyping = true;
					this.$nextTick(() => {
						this.recordElement.scrollTop = this.recordElement.scrollHeight;
					})
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