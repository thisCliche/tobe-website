import axios from '@utils/request.js'
let routeUrl = {
	login: "/v1/sys/login",
}

export function login(data) {
	return axios({
		url: routeUrl.login,
		method: 'post',
		headers: {
			"Content-Type": "application/x-www-form-urlencoded"
		},
		data: data
	})
}