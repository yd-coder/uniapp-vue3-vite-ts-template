import axios from "axios";
import { UniAdapter } from "uniapp-axios-adapter";

/* 域名管理 */
const request = axios.create({
	adapter: UniAdapter,
	baseURL: "https://example.com",
	timeout: 10000
});


/* 请求拦截 */
request.interceptors.request.use((config: any) => {
	//带上token
	config.headers["Authorization"] = `Bearer token`;
	return config;
});

/* 响应拦截*/
request.interceptors.response.use((response) => {
	// 统一处理响应,返回Promise以便链式调用
	if (response.status === 200) {
		const { data } = response;
		if (data && data.code === 200) {
			return Promise.resolve(data);
		} else {
			return Promise.reject(data);
		}
	} else {
		return Promise.reject(response);
	}
});

export default request;