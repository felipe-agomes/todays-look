import { Response } from '../@types/controller';
import { ClotheData } from '../@types/models';
import { clotheService } from '../services/ClotheService';
import useAppContext from './useAppContext';

export default function useSetCltohes() {
	const { clothes, setClothes } = useAppContext();

	const replaceClothes = (newClothe: ClotheData) => {
		const newClothes = [...clothes].map((clothe) =>
			clothe.id === newClothe.id ? newClothe : clothe,
		);

		setClothes(newClothes);
	};

	const deleteClothe = (clotheId: string) => {
		const newClothes = [...clothes].filter((clothe) => clothe.id !== clotheId);

		setClothes(newClothes);
	};

	const updateClothes = async (clothes: ClotheData[]) => {
		setClothes(clothes);
	};

	return { replaceClothes, deleteClothe, updateClothes };
}
