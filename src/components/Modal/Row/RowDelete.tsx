import { DeleteIcon } from '@chakra-ui/icons';
import { ClotheData, SetData } from '../../../@types/models';
import useModaisContext from '../../../hooks/useModaisContext';
import S from './Row.module.css';

export default function RowDelete({
	clothe,
	set,
}: {
	clothe?: ClotheData;
	set?: SetData;
}) {
	const { setDeleteModal } = useModaisContext();
	const isClothe = !!clothe;

	return (
		<div className={S.row}>
			<p>Deletar Roupa</p>
			<span>
				<DeleteIcon
					onClick={() => {
						setDeleteModal(isClothe ? clothe.id : set?.id ?? null);
					}}
					cursor={'pointer'}
					color={'red'}
					boxSize={5}
				/>
			</span>
		</div>
	);
}
