import axios, { AxiosRequestConfig, AxiosResponse } from 'axios';

interface FetchLikeResponse {
	ok: boolean;
	status: number;
	statusText: string;
	json: () => Promise<any>;
	text: () => Promise<string>;
	url: string;
	arrayBuffer: () => Promise<ArrayBuffer>;
}

async function axiosFetch(url: string, options: AxiosRequestConfig = {}): Promise<FetchLikeResponse> {
	const { method = 'GET', headers, data, ...axiosConfig } = options;

	try {
		const response: AxiosResponse = await axios({
			url,
			method,
			headers,
			data,
			...axiosConfig,
		});

		const fetchLikeResponse: FetchLikeResponse = {
			ok: response.status >= 200 && response.status < 300,
			status: response.status,
			statusText: response.statusText,
			json: () => Promise.resolve(response.data),
			text: () => Promise.resolve(JSON.stringify(response.data)),
			arrayBuffer: () => Promise.resolve(response.data instanceof ArrayBuffer ? response.data : new ArrayBuffer(0)),
			url
		};

		return fetchLikeResponse;
	} catch (error: any) {
		const fetchLikeError: FetchLikeResponse = {
			ok: false,
			status: error.response?.status || 500,
			statusText: error.response?.statusText || 'Internal Server Error',
			json: () => Promise.resolve(error.response?.data || {}),
			text: () => Promise.resolve(JSON.stringify(error.response?.data || {})),
			arrayBuffer: () => Promise.resolve(new ArrayBuffer(0)),
			url
		};

		return fetchLikeError;
	}
}

export default axiosFetch;
