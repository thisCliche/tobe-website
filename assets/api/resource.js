import axios from '@utils/request.js'
let routeUrl = {
	video: "/index/index/getOtherVideoList",
	banner: "/index/index/getOtherBannerList",
	config: "/index/index/getPlanningConfig",
	textConfig: "/index/index/getPlanningClassConfig",
	schoolResourceSearch: "/index/resource/getSummerSchoolSearchList",
	schoolList:'/index/resource/getSummerSchoolList',
	schoolDetail:'/index/resource/getSummerSchoolDetail',
	resourceList: "/index/resource/getResourceList",
	resourceDetail:'/index/resource/getDetail',
	scientificSearch:"index/resource/getScientificSearchList",
	resourceCollect: "/index/resource/collect",
	
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
//科研帅选

export function scientificSearch(params) {
	return axios({
		url: routeUrl.scientificSearch,
		method: 'get',
		params,
	})
}



//夏校筛选
export function schoolResourceSearch(params) {
	return axios({
		url: routeUrl.schoolResourceSearch,
		method: 'get',
		params,
	})
}

//夏校列表
export function getSchoolList(params) {
	return axios({
		url: routeUrl.schoolList,
		method: 'get',
		params,
	})
}
//夏校详情
export function schoolDetail(params) {
	return axios({
		url: routeUrl.schoolDetail,
		method: 'get',
		params,
	})
}



//资源列表

export function resourceList(params) {
	return axios({
		url: routeUrl.resourceList,
		method: 'get',
		params,
	})
}
//学校列表
export function schoolList(params) {
	return axios({
		url: routeUrl.schoolList,
		method: 'get',
		params,
	})
}
//资源详情
export function resourceDetail(params) {
	return axios({
		url: routeUrl.resourceDetail,
		method: 'get',
		params,
	})
}
export function setResourceCollect(data) {
	return axios({
		url: routeUrl.resourceCollect,
		method: 'post',
		data,
	})
}







