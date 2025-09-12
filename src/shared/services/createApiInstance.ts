import axios, { CreateAxiosDefaults } from "axios";

const API_URL: string = 'http://localhost:5566';

export function createApiInstance({ baseURL, ...rest }: CreateAxiosDefaults) {
	const apiInstance = axios.create({
		baseURL: `${API_URL}/${baseURL}`,
		...rest
	});

	return apiInstance;
}