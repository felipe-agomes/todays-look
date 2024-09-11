import { ClotheData, SetData } from '../../../@types/models';
import useModaisContext from '../../../hooks/useModaisContext';
import S from './Row.module.css';

export default function RowChangeCategory({
	clothe,
	set,
}: {
	clothe?: ClotheData;
	set?: SetData;
}) {
	const { setChangeCategoryModal } = useModaisContext();
	const isClothe = !!clothe ? true : false;

	return (
		<div className={S.row}>
			<p>Alterar categoria</p>
			<span>
				<EditIcon
					onClick={() => {
						setChangeCategoryModal(isClothe ? clothe.id : set.id);
					}}
					cursor={'pointer'}
					boxSize={5}
				/>
			</span>
		</div>
	);
}
