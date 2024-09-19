import { CategorizedItem } from '../@types/models';

export function categoriesClotheOrSet<T extends CategorizedItem>(
	element: T[],
): string[] {
	return [
		...new Set(
			element.map((element: T) => {
				return element.category;
			}),
		),
	];
}
