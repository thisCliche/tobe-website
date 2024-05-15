import axios from '@utils/request.js'
let routeUrl = {
	createOrder:"/index/index/createOrder",
	probation:"/index/index/probation",
	getGoodsForType:"/index/index/getGoodsForType",
	getOrderIsPay:"/index/index/getOrderIsPay",
	userIsHadBuy:"/index/index/userIsHadBuy",
	video: "/index/index/getOtherVideoList",
}

export function videoApi(params) {
	return axios({
		url: routeUrl.video,
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
export function userIsHadBuyApi(data) {
	return axios({
		url: routeUrl.userIsHadBuy,
		method: 'post',
		data,
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
export function createOrderApi(data) {
	return axios({
		url: routeUrl.createOrder,
		method: 'post',
		data,
	})
}