import axios from '@utils/request.js'
let routeUrl = {
	createOrder:"/index/index/createOrder",
	probation:"/index/index/probation",
	getGoodsForType:"/index/index/getGoodsForType",
	getOrderIsPay:"/index/index/getOrderIsPay",
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
export function createOrderApi(data) {
	return axios({
		url: routeUrl.createOrder,
		method: 'post',
		data,
	})
}