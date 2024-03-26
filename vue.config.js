const path = require('path')
const resolve = dir => path.join(__dirname, dir);
module.exports={
	productionSourceMap: false,
	chainWebpack:(config)=>{
		config.resolve.alias
			.set('@pages', resolve('pages'))  
			.set('@assets', resolve('assets'))  
			.set('@api', resolve('assets/api'))  
			.set('@image', resolve('assets/image'))  
			.set('@styles', resolve('assets/styles'))  
			.set('@components', resolve('assets/components'))  
			.set('@utils', resolve('assets/utils'));  
	}
}