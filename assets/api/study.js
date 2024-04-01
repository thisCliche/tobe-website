import axios from '@utils/request.js'
let routeUrl = {
	video: "/index/index/getOtherVideoList",
	banner: "/index/index/getOtherBannerList",
	config: "/index/index/getPlanningConfig",
	textConfig: "/index/index/getPlanningClassConfig",
	menu: "/index/index/getMenu",
	userSide: "/index/index/getUserSide",
	suanFa: "/index/index/getPlanningStepTextConfig",
	teatcha:'/index/index/teacherList'
}

export function videoApi(params) {
	return axios({
		url: routeUrl.video,
		method: 'get',
		params,
	})
}
export function bannerApi(params) {
	return axios({
		url: routeUrl.banner,
		method: 'get',
		params,
	})
}
export function menuApi(params) {
	return axios({
		url: routeUrl.menu,
		method: 'get',
		params,
	})
}
export function configApi(params) {
	return axios({
		url: routeUrl.config,
		method: 'get',
		params,
	})
}
export function textConfig(params) {
	return axios({
		url: routeUrl.textConfig,
		method: 'get',
		params,
	})
}

export function userSide(params) {
	return axios({
		url: routeUrl.userSide,
		method: 'get',
		params,
	})
}
export function suanFa1(params) {
	return axios({
		url: routeUrl.suanFa,
		method: 'get',
		params,
	})
}

export function teatcha(params) {
	return axios({
		url: routeUrl.teatcha,
		method: 'get',
		params,
	})
}