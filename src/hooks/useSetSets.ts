import { Response } from '../@types/controller';
import { SetData } from '../@types/models';
import { setService } from '../services/SetService';
import useAppContext from './useAppContext';

export default function useSetSets() {
	const { setSets, sets } = useAppContext();
	const replaceSets = (newSet: SetData) => {
		const copySets = [...sets].map((set) =>
			set.id === newSet.id ? newSet : set,
		);
		setSets(copySets);
	};
	const deleteSet = (clotheId: string | undefined) => {
		const newSet = [...sets].filter((clothe) => clothe.id !== clotheId);
		setSets(newSet);
	};
	const updateSet = async (userId: string | undefined) => {
		const setsResponse: Response = await setService.getAllByUserId({
			userId: userId,
		});
		setSets(setsResponse.data);
	};
	return { replaceSets, deleteSet, updateSet };
}
