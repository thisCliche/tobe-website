import axios from '@utils/request.js'
let routeUrl = {
	TestDescConfig: "/index/index/getTestDescConfig",  // ai测评二级界面测试文案说明

}

export function TestDescConfigApi(params) {
	return axios({
		url: routeUrl.TestDescConfig,
		method: 'get',
		params,
	})
}