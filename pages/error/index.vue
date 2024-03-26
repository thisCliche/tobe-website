<template>
	<div class="wrapper">
	    <div class="landing-page">
	      <div class="img">
	        <img :src="errorImg" alt="">
	        </div>
	      <h1> 404 Not Found.</h1>
	      <button @click="$router.replace('/')">返回首页</button>
	    </div>
	  </div>
</template>

<script>
	import errorImg from "@image/404.png"
	export default {
		name:'errorWrap',
		data() {
			return {
				errorImg
			}
		},
		methods: {
			
		}
	}
</script>

<style lang="scss" scoped>
.wrapper{
  width: 960px;
  margin: 0 auto;
  .landing-page {
    height: 475px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    img{
      max-height: 225px;
      height: auto;
      margin: 0 0 15px;
    }
    h1{
      font-size: 30px;
      margin-bottom: 24px;
      color: #5e5e5e;
    }
    button {
      border-radius: 50px;
      padding: 8px 24px;
      font-size: 14px;
      cursor: pointer;
      background: #71bdab;
      border: none;
      box-shadow: 0 4px 8px 0 #ccc;
      color: #fff;
    }
  }
}
</style>
