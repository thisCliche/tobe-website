import {
	Local
} from "@utils/storage";
import {
	ACCOUNT_INFO
} from '@assets/constant/cacheKey'
import config from "./config.js"

export default function initApp() {
	let list = ["navigateTo", "redirectTo", "reLaunch", "switchTab"];
	list.forEach(item => { 
		uni.addInterceptor(item, {
			invoke(e) { 
				let user = Local.get(ACCOUNT_INFO),tokenExpired=true;
				if(user) tokenExpired = false;
				let url = e.url.split('?')[0];
				let notNeed = config.needList.includes(url)
				if (!notNeed) {
					return e
				} else {
					if (tokenExpired) {
						// uni.showToast({
						// 	title: '请先登录',
						// 	icon: 'none'
						// })
						uni.navigateTo({
							url: config.loginPage
						})
						return false
					}else{
						return e
					}
				}
			},
			fail(err) { 
				console.log(err);
				// if (Debug) {
				// 	console.log(err);
				// 	uni.showModal({
				// 		content: JSON.stringify(err),
				// 		showCancel: false
				// 	});
				// }
			}
		})
	})
}

