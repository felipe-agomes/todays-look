import { PutOperation, Response } from '../@types/controller';
import { IFetcher } from '../services/Fetcher';

export class FrontController {
	constructor(private fetcher: IFetcher) {}
	async doGet({
		url,
		Authorization,
	}: {
		url: string;
		Authorization?: string;
	}): Promise<Response> {
		let response: Response = {
			status: '',
			message: '',
			data: null,
		};
		try {
			response = await this.fetcher.get({
				url,
				Authorization,
			});
		} catch (error) {
			if (error instanceof Error) {
				response = { status: 'error', message: error.message };
			}
		}

		return response;
	}
	async doPost({
		url,
		body,
		Authorization,
	}: {
		url: string;
		body: { [key: string]: unknown };
		Authorization?: string;
	}): Promise<Response> {
		let response: Response = {
			status: '',
			message: '',
			data: null,
		};

		try {
			response = await this.fetcher.post({
				url,
				body: JSON.stringify(body),
				Authorization,
			});
		} catch (error) {
			if (error instanceof Error) {
				response = { status: 'error', message: error.message };
			}
		}

		return response;
	}
	async doPut({
		url,
		body,
		Authorization,
	}: {
		url: string;
		Authorization?: string;
		body: {
			operation: PutOperation;
			toUpdate?: {
				[key: string]: string;
			};
		};
	}): Promise<Response> {
		let response: Response = {
			status: '',
			message: '',
			data: null,
		};
		try {
			response = await this.fetcher.put({
				url,
				body: JSON.stringify(body),
				Authorization,
			});
		} catch (error) {
			if (error instanceof Error) {
				response = { status: 'error', message: error.message };
			}
		}
		return response;
	}

	async doDelete({
		url,
		Authorization,
	}: {
		url: string;
		Authorization?: string;
	}): Promise<Response> {
		let response: Response = {
			status: '',
			message: '',
			data: null,
		};
		try {
			response = await this.fetcher.delete({ url, Authorization });
		} catch (error) {
			if (error instanceof Error) {
				response = { status: 'error', message: error.message };
			}
		}
		return response;
	}
}
