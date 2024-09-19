import './GridClothes.css';
import { ClotheData } from '../../@types/models';
import { filterClotheOrSetByCategory } from '../../functions/filterClotheOrSetByCategory';
import useAppContext from '../../hooks/useAppContext';
import useModaisContext from '../../hooks/useModaisContext';
import { ClotheModal } from '../Modal/Clothe';

export default function GridClothes() {
	const { clothes, currentCategoryClothes } = useAppContext();
	const { clotheModal, setClotheModal } = useModaisContext();
	const filteredClotheByCategory: ClotheData[] =
		filterClotheOrSetByCategory<ClotheData>(currentCategoryClothes, clothes);
	const currentClothe = clothes.find((clothe) => clothe.id === clotheModal);
	console.log(filteredClotheByCategory);

	return (
		<>
			{clotheModal && (
				<ClotheModal.Root
					category={currentClothe?.category}
					title='Roupa categoria'
					clothe={currentClothe}
				>
					<ClotheModal.Content.Root>
						<ClotheModal.Content.Image
							image={currentClothe?.image}
							category={currentClothe?.category}
						/>
						<ClotheModal.Content.Row.Root>
							<ClotheModal.Content.Row.Favorite clothe={currentClothe} />
							<ClotheModal.Content.Row.Delete clothe={currentClothe} />
							<ClotheModal.Content.Row.ChangeCategory clothe={currentClothe} />
							<ClotheModal.Content.Row.AddToWorkbench clothe={currentClothe} />
						</ClotheModal.Content.Row.Root>
					</ClotheModal.Content.Root>
				</ClotheModal.Root>
			)}
			<ul className={'boxList'}>
				{filteredClotheByCategory.map((clothe) => {
					return (
						<li
							className={'list'}
							key={clothe.id}
						>
							<img
								src={clothe.image}
								alt='Roupa'
								onClick={() => {
									setClotheModal(clothe.id);
								}}
							/>
						</li>
					);
				})}
			</ul>
		</>
	);
}
