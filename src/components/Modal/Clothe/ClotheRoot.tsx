import './Clothe.css';
import { Spinner } from '@chakra-ui/react';
import { ClotheData } from '../../../@types/models';
import ProviderModalLoading from '../../../contexts/ModalLoading';
import useModaisContext from '../../../hooks/useModaisContext';
import useModaisController from '../../../hooks/useModaisController';
import useModalLoadingContext from '../../../hooks/useModalLoadingContext';
import DeleteModal from '../Delete';
import ChangeCategory from '../ChangeCategory';
import { CloseIcon } from '@chakra-ui/icons';

export default function ClotheRoot({
	title,
	category,
	clothe,
	children,
}: {
	title: string | undefined;
	category: string | undefined;
	clothe: ClotheData | undefined;
	children: React.ReactNode;
}) {
	const { closeAllModais } = useModaisController();
	const { deleteModal, changeCategoryModal } = useModaisContext();
	const { loading } = useModalLoadingContext();

	return (
		<ProviderModalLoading>
			<div className={'modalRoot'}>
				<div className={'title'}>
					<p>
						{title}: {category}
					</p>
				</div>
				<CloseIcon
					onClick={() => {
						closeAllModais();
					}}
					cursor={'pointer'}
					position={'absolute'}
					right={'20px'}
					top={'20px'}
				/>
				{loading && (
					<Spinner
						color={'cyan'}
						className={'spinner'}
					/>
				)}
				{changeCategoryModal && <ChangeCategory clothe={clothe} />}
				{deleteModal && <DeleteModal clothe={clothe} />}
				{children}
			</div>
		</ProviderModalLoading>
	);
}
