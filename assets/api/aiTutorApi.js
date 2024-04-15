import axios from '@utils/request.js'
let routeUrl = {
	FastGptRet: "/index/index/getFastGptRet", //获取gpt相关回复内容
	AiTextConfig:"/index/index/getAiTextConfig",
}

export function AiTextConfigApi(params) {
	return axios({
		url: routeUrl.AiTextConfig,
		method: 'get',
		params,
	})
}
export function FastGptRetApi(data) {
	return axios({
		url: routeUrl.FastGptRet,
		method: 'post',
		data,
	})
}