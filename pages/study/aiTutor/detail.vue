<template>
	<view class="detail">
		<view class="detailWrap">
			<view class="wrapL">
				<view class="interview">
					<view class="btnList">
						<view class="btnItem active" @click="start">
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
					<view class="paragraph" v-for="item in sessionList" :key="item.id">{{item.content}}</view>
					<vue-typed-js v-if="isTyping" ref="typedjs" :strings="strings" @onComplete="typeComplete">
						<span class="typing"></span>
					</vue-typed-js>
				</view>

			</view>
		</view>
		<my-foot></my-foot>
	</view>
</template>

<script>
	import three from '@image/three.png'
	import next from '@image/interview-next.png'
	import over from '@image/interview-over.png'
	import speak from '@image/interview-speak.png'
	export default {
		data() {
			return {
				isTyping:false,
				three,
				next,
				over,
				speak,
				
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
			typeComplete() {
				this.sessionList.push({
					id: 3,
					content: '我说：给我说个笑话如何？'
				})
				this.isTyping = false;
			},
			overHandle(){},
			pause() {
				console.log('暂停')
			},
			start() {
				// 点一下更新更新文本，
				this.isTyping = true;
			},
		},
		mounted() {
			
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