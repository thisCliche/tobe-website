import axios from '@utils/request.js'
let routeUrl = {
	resetPwd: "/index/user/resetPwd",
	register: "/index/user/register",
	login: "/index/user/login",
	smsSend: "/index/user/smsSend",
}

export function smsSendRequset(data) {
	return axios({
		url: routeUrl.smsSend,
		method: 'post',
		data,
	})
}
export function loginRequset(data) {
	return axios({
		url: routeUrl.login,
		method: 'post',
		data,
	})
}
export function registerRequset(data) {
	return axios({
		url: routeUrl.register,
		method: 'post',
		data,
	})
}
export function resetPwdRequset(data) {
	return axios({
		url: routeUrl.resetPwd,
		method: 'post',
		data,
	})
}