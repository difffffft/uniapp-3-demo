import { BASE_URL } from "@/hooks/useConfig"

//全局配置
uni.$u.http.setConfig((config) => {
	config.baseURL = BASE_URL
	return config
})

//请求拦截
uni.$u.http.interceptors.request.use((config) => {
	config.header = {
		...config.header,
		// Token: uni.getStorageSync("token") || 'TokenNull',
		// Sign: 'sign',
	}
	return config
}, config => {
	return Promise.reject(config)
})

//响应拦截
uni.$u.http.interceptors.response.use((response) => {
	if (response.data.code !== 200)
		return Promise.reject(response)
	if (response.data.code !== '00000')
		return Promise.reject(response)
	return response.data
}, (response) => {
	return Promise.reject(response)
})

export default uni.$u.http
