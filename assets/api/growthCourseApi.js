import axios from '@utils/request.js'
let routeUrl = {
	courseConfig: "/index/index/courseConfig",
	getCourse:"/index/index/getCourse",
	getCourseDetail:"/index/index/getCourseDetail"
}

export function courseConfigApi(params) {
	return axios({
		url: routeUrl.courseConfig,
		method: 'get',
		params,
	})
}
export function CourseDetailApi(params) {
	return axios({
		url: routeUrl.getCourseDetail,
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