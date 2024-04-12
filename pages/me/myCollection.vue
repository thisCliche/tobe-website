<template>
	<view class="containerMe">
		<view class="wap">
			<view class="wap1">
				<view class="wapHeader">
					<view class="header-title">
						我的收藏-Resource
					</view>
					<view class="header-shuaixun">
						
					
						
					</view>
					
				</view>
				
			</view>
	
		</view>

		<my-foot></my-foot>
	</view>
</template>

<script>
	import folder from '@image/my/folder.png';
	export default {
		data() {
			return {
				folder,
				folderList: ['aaa', 'bbbb', 'cccc', 'dddddd'],

			}
		},
		methods: {


		}
	}
</script>

<style lang="scss" scoped>
	.containerMe {

		.wap {
			@include modelPdOther;
			@include ct1200;
			.wapHeader{
				@include fj();
				width: 100%;
				.header-title{
					
					
				}
				.header-shuaixun{
					padding-right: 50px;
					
				}
				
			}
			
			
			

		}






	}
</style>