import axios from '@utils/request.js'
let routeUrl = {
	TestDescConfig: "/index/index/getTestDescConfig",  // ai测评二级界面测试文案说明
	getAllQuestion:"/index/index/getAllQuestion",
	submitQuestion:"/index/index/submitQuestion",
}

export function submitQuestionApi(data) {
	return axios({
		url: routeUrl.submitQuestion,
		method: 'post',
		data,
	})
}
export function TestDescConfigApi(params) {
	return axios({
		url: routeUrl.TestDescConfig,
		method: 'get',
		params,
	})
}

export function AllQuestionApi(params) {
	return axios({
		url: routeUrl.getAllQuestion,
		method: 'get',
		params,
	})
}
