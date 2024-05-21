<template>
	<div :class="isPlain?'customBtn1':'customBtn2'" @click="customClick" :style="{fontSize:wh.size+'px',width:wh.width+'px',height:wh.height+'px',lineHeight:wh.height+'px'}">
		<slot></slot>
	</div>
</template>

<script>
	export default {
		name: 'customButton',
		props: {
			isPlain:{
				type:Boolean,
				default:false,
			},
			wh:{type:Object,
			default:{
				width:284,
				size:16,
				height:50
			}
			},
		},
		methods: {
			customClick(){
				this.$emit('click')
			},
		},
	}
</script>

<style lang="scss" scoped>
	.customBtn2 {
		background-image: linear-gradient(to right, $gradientS, $gradientE);
		border-radius: 40px;
		color: #fff;
		text-align: center;
		cursor: pointer;
		// @include mt(28px);
		transition: all 0.2s ease;
		&:hover {
			@include defaultShadow;
		}
	}
	.customBtn1{
		text-align: center;
		border: 2px solid transparent;
		border-radius: 40px;
		color:#333;
		cursor: pointer;
		background-clip: padding-box, border-box;
		background-origin: padding-box, border-box;
		background-image: linear-gradient(to right, #fff, #fff), linear-gradient(90deg, $gradientS, $gradientE);
		transition: all 0.2s ease;
		&:hover {
			@include defaultShadow;
		}
	}
</style>