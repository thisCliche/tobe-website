import axios from '@utils/request.js'
let routeUrl = {
	FastGptRet: "/index/index/getFastGptRet", //获取gpt相关回复内容
}

export function FastGptRetApi(params) {
	return axios({
		url: routeUrl.FastGptRet,
		method: 'get',
		params,
	})
}