import { ClotheData } from '../@types/models';
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
	const updateClothes = async (userId: string | null) => {
		if (userId === null) {
			return;
		}

		const clothesResponse: Response = await clotheService.getAllByUserId({
			userId: userId,
		});
		setClothes(clothesResponse.data);
	};
	return { replaceClothes, deleteClothe, updateClothes };
}
