import axios from '@utils/request.js'
let routeUrl = {
	FastGptRet: "/index/index/getFastGptRet", //获取gpt相关回复内容
	AiTextConfig:"/index/index/getAiTextConfig",
	createOrder:"index/index/createOrder",
	probation:"index/index/probation",
	getGoodsForType:"index/index/getGoodsForType",
	getOrderIsPay:"/index/index/getOrderIsPay",
}

export function AiTextConfigApi(params) {
	return axios({
		url: routeUrl.AiTextConfig,
		method: 'get',
		params,
	})
}
export function GoodsForTypeApi(params) {
	return axios({
		url: routeUrl.getGoodsForType,
		method: 'get',
		params,
	})
}
export function getOrderIsPayApi(data) {
	return axios({
		url: routeUrl.getOrderIsPay,
		method: 'post',
		data,
	})
}
export function probationApi(data) {
	return axios({
		url: routeUrl.probation,
		method: 'post',
		data,
	})
}
export function FastGptRetApi(data) {
	return axios({
		url: routeUrl.FastGptRet,
		method: 'post',
		data,
	})
}
export function createOrderApi(data) {
	return axios({
		url: routeUrl.createOrder,
		method: 'post',
		data,
	})
}