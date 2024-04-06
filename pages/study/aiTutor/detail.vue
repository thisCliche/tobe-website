<template>
	<view class="detail">
		<view class="detailWrap">
			<view class="wrapL">
				<view class="interview">
					<view class="btnList">
						<view class="btnItem active" @click="start">
							<img :src="speak" alt="" />
						</view>
						<view class="btnItem" @click="pause">
							<img :src="over" alt="" />
						</view>
						<view class="btnItem">
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
					<view class="paragraph" v-for="item in sessionList" :key="item.id">{{item.content}}</view>
					 <span id="typed" style="white-space: pre-wrap;line-height: 30px;"></span>

				</view>

			</view>
		</view>
	</view>
</template>

<script>
	import Typed from 'typed.js';
	import three from '@image/three.png'
	import next from '@image/interview-next.png'
	import over from '@image/interview-over.png'
	import speak from '@image/interview-speak.png'
	import guangbiao from '@image/guangbiao.png'
	export default {
		data() {
			return {
				three,
				next,
				over,
				speak,
				cursorImg: guangbiao, // 光标图片的 URL
				speed: 150, // 打字速度，单位：毫秒
				textStyle: {
					color: 'black',
					fontWeight: 'bold',
					fontSize: '16px',
				}, // 文字样式对象
				typed: null,
				strings: ['我说：给我说个笑话如何？'],
				sessionList: [{
					id: 1,
					content: '我说：今天天气怎么样？'
				}, {
					id: 2,
					content: 'AI导师：今天合肥的天气多云转阴，温度9℃-19℃，气候凉爽。'
				}],
			}
		},
		methods: {
			pause() {
				console.log(1);
				this.typed.stop();
			},
			start() {
				// 点一下更新更新文本，

			},
		},
		mounted() {
			// 明天研究vue-typed-js
			this.typed = new Typed("#typed", {
				strings: this.strings,
				typeSpeed: 100, //打字的速度
				smartBackspace: true, // 开启智能退格 默认false
				backSpeed: 50, //后退速度
				backDelay: 500, //后退延迟
				loop: false, //是否循环.,,
				startDelay: 1000, //起始时间
				fadeOut: true, //淡出效果
				fadeOutClass: 'typed-fade-out', //fadeOutClass 用于淡入淡出动画的css类
				fadeOutDelay: 500, //以毫秒为单位淡出延迟
				smartBackspace: true, //智能后间距,
				onComplete: function(self) {
					self.destroy();
					this.sessionList.push({
						id: 3,
						content: 'AI导师：今天合肥的天气多云转阴，温度9℃-19℃，气候凉爽。'
					})
				},

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