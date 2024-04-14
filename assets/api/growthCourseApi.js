import axios from '@utils/request.js'
let routeUrl = {
	courseConfig: "/index/index/courseConfig",
	getCourse:"/index/index/getCourse"
}

export function courseConfigApi(params) {
	return axios({
		url: routeUrl.courseConfig,
		method: 'get',
		params,
	})
}
export function getCourseApi(params) {
	return axios({
		url: routeUrl.getCourse,
		method: 'get',
		params,
	})
}