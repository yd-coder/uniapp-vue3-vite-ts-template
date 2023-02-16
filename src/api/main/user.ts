import request from "@/api/http"

export const getData = () => {
	return request({
		url: 'example/api/test',
		method: 'get',
		params: {
			id: 123,
		}
	})
}
