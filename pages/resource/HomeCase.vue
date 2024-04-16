<template>
	<div>
		<div class="box">
			
			<carousel-3d :autoplay="true" :width="500" :height="416" :controlsHeight="60">
				<slide v-for="(item, i) in slides" :index="i" :key="i">
					<template slot-scope="obj">
						<img :src="item.imageUrl" @click="imgClick(item, obj)" />
					</template>
				</slide>
			</carousel-3d>
		</div>
	</div>
</template>

<script>
	import {
		Carousel3d,
		Slide
	} from "vue-carousel-3d";
	/* eslint-disable */
	export default {
		name: "HomeCase",
		props: {
			slides: {
				 type: Array,
				      default: function () {
				        return [];
				      }
			}
		},
		components: {
			Carousel3d,
			Slide,
		},
		data() {
			return {
				
			};
		},
		methods: {
			imgClick(data, obj) {
				console.log(data, obj);
			},
		},
	};
</script>

<style>
	.el-carousel__item h3 {
		color: #475669;
		font-size: 14px;
		opacity: 0.75;
		line-height: 200px;
		margin: 0;
	}

	.el-carousel__item:nth-child(2n) {
		background-color: #99a9bf;
	}

	.el-carousel__item:nth-child(2n + 1) {
		background-color: #d3dce6;
	}
</style>