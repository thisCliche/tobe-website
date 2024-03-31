import axios from '@utils/request.js'
let routeUrl = {
	teacherList: "/index/index/teacherList",
	getOtherBannerList: "/index/index/getOtherBannerList",
	getButtonConfig: "/index/index/getButtonConfig",
}

export function teacherApi(params) {
	return axios({
		url: routeUrl.teacherList,
		method: 'get',
		params,
	})
}
export function otherBannerApi(params) {
	return axios({
		url: routeUrl.getOtherBannerList,
		method: 'get',
		params,
	})
}
export function buttonConfigApi(params) {
	return axios({
		url: routeUrl.getButtonConfig,
		method: 'get',
		params,
	})
}