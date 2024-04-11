import axios from '@utils/request.js'
let routeUrl = {
	planningClassConfig: "/index/index/getPlanningClassConfig",
}

export function planningClassConfigApi(params) {
	return axios({
		url: routeUrl.planningClassConfig,
		method: 'get',
		params,
	})
}