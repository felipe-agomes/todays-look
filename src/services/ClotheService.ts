import { Response } from '../@types/controller';
import { ClotheInput } from '../@types/models';
import { FrontController } from '../controllers/FrontController';
import { FetcherAxios } from './Fetcher';

export interface IClotheService {
	getAllByUserId(data: { userId: string }): Promise<Response>;
	deleteById(data: { userId: string; clothe: string }): Promise<Response>;
	changeCategoryById(data: {
		userId: string;
		clothe: string;
		toUpdate: { category: string };
	}): Promise<Response>;
	toggleFavoriteById(data: {
		userId: string;
		clothe: string;
	}): Promise<Response>;
	create(data: ClotheInput): Promise<Response>;
}

export class ClotheService implements IClotheService {
	constructor(private frontController: FrontController) {}
	async getAllByUserId({ userId }: { userId: string }): Promise<Response> {
		let response: Response = {
			message: '',
			status: '',
			data: null,
		};
		try {
			response = await this.frontController.doGet({
				url: `/api/protected/user/${userId}/clothe`,
				Authorization: `Bearer ${localStorage.getItem('token')}`,
			});
		} catch (error) {
			if (error instanceof Error) {
				response = { status: 'error', message: error.message };
			}
		}
		return response;
	}
	async deleteById({
		clothe,
		userId,
	}: {
		userId: string;
		clothe: string;
	}): Promise<Response> {
		let response: Response = {
			message: '',
			status: '',
			data: null,
		};
		try {
			response = await this.frontController.doDelete({
				url: `/api/protected/user/${userId}/clothe/${clothe}`,
				Authorization: `Bearer ${localStorage.getItem('token')}`,
			});
		} catch (error) {
			if (error instanceof Error) {
				response = { status: 'error', message: error.message };
			}
		}
		return response;
	}
	async changeCategoryById({
		userId,
		clothe,
		toUpdate,
	}: {
		userId: string;
		clothe: string;
		toUpdate: { category: string };
	}): Promise<Response> {
		let response: Response = {
			message: '',
			status: '',
			data: null,
		};
		try {
			response = await this.frontController.doPut({
				url: `/api/protected/user/${userId}/clothe/${clothe}`,
				body: { toUpdate, operation: 'changeCategory' },
				Authorization: `Bearer ${localStorage.getItem('token')}`,
			});
		} catch (error) {
			if (error instanceof Error) {
				response = { status: 'error', message: error.message };
			}
		}
		return response;
	}
	async toggleFavoriteById({
		userId,
		clothe,
	}: {
		userId: string | undefined;
		clothe: string | undefined;
	}): Promise<Response> {
		let response: Response = {
			message: '',
			status: '',
			data: null,
		};
		try {
			response = await this.frontController.doPut({
				url: `/api/protected/user/${userId}/clothe/${clothe}`,
				body: { operation: 'toggleFavorite' },
				Authorization: `Bearer ${localStorage.getItem('token')}`,
			});
		} catch (error) {
			if (error instanceof Error) {
				response = { status: 'error', message: error.message };
			}
		}
		return response;
	}
	async create(clothe: ClotheInput): Promise<Response> {
		let response: Response = {
			message: '',
			status: '',
			data: null,
		};
		try {
			response = await this.frontController.doPost({
				url: `/api/protected/user/${clothe.userId}/clothe`,
				body: { clothe },
				Authorization: `Bearer ${localStorage.getItem('token')}`,
			});
		} catch (error) {
			if (error instanceof Error) {
				response = { status: 'error', message: error.message };
			}
		}
		return response;
	}
}
const makeClotheService = () => {
	const fetcher = new FetcherAxios();
	const frontController = new FrontController(fetcher);
	return new ClotheService(frontController);
};
export const clotheService = makeClotheService();
