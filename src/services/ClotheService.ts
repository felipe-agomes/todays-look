import { ClotheData, ClotheInput } from '../@types/models';

export interface IClotheService {
	getAllByUserId(userId: number): ClotheData[];

	deleteById(clotheId: number): boolean;

	changeCategoryById(clotheId: number, newCategory: string): ClotheData;

	toggleFavoriteById(clotheId: number): ClotheData;

	create(clothe: ClotheInput): ClotheData;
}

export class ClotheService implements IClotheService {
	getAllByUserId(userId: number): ClotheData[] {
		return [
			{
				category: '',
				createdAt: new Date(),
				favorite: true,
				id: 1,
				image: '/Khaki-Cargo-Pant-Transparent-Background.png',
				key: 1,
				updatedAt: new Date(),
				userId: 1,
			},
			{
				category: '',
				createdAt: new Date(),
				favorite: true,
				id: 2,
				image: '/pngwing.com.png',
				key: 2,
				updatedAt: new Date(),
				userId: 1,
			},
			{
				category: '',
				createdAt: new Date(),
				favorite: true,
				id: 3,
				image: '/Jacket-Free-PNG.png',
				key: 3,
				updatedAt: new Date(),
				userId: 1,
			},
			{
				category: '',
				createdAt: new Date(),
				favorite: true,
				id: 4,
				image: '/Halloween-Shirts-Free-Picture-PNG.png',
				key: 4,
				updatedAt: new Date(),
				userId: 1,
			},
		];
	}

	deleteById(clotheId: number): boolean {
		return true;
	}

	changeCategoryById(clotheId: number, newCategory: string): ClotheData {
		return {
			category: '',
			createdAt: new Date(),
			favorite: true,
			id: 1,
			image: '',
			key: 1,
			updatedAt: new Date(),
			userId: 1,
		};
	}

	toggleFavoriteById(clotheId: number): ClotheData {
		return {
			category: '',
			createdAt: new Date(),
			favorite: true,
			id: 1,
			image: '',
			key: 1,
			updatedAt: new Date(),
			userId: 1,
		};
	}

	create(clothe: ClotheInput): ClotheData {
		return {
			category: '',
			createdAt: new Date(),
			favorite: true,
			id: 1,
			image: '',
			key: 1,
			updatedAt: new Date(),
			userId: 1,
		};
	}
}

export const clotheService = new ClotheService();
