type FetchMethod = 'GET' | 'POST' | 'CREATE' | 'DELETE'

const API_BASE_URL = "http://localhost:3000";

/**
 * @name fetchData
 * @param url
 * @param method
 * @param payload
 * @description for body
 */
async function fetchData<T> (url: string, method: FetchMethod, payload?: any): Promise<T> {
	let request;
	let response;
	
	try {
		request = await fetch(url, {
			method,
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify(payload)
		});
		response = await request.json() as T;
	} catch (e) {
		console.error(e);
		throw e;
	}
	
	return response;
}

export { fetchData, API_BASE_URL }
