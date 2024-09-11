import { Button, ButtonGroup, Spinner } from "@chakra-ui/react";
import { ClotheData, SetData } from "../../../@types/models";
import useModaisController from "../../../hooks/useModaisController";
import useModalLoadingContext from "../../../hooks/useModalLoadingContext";
import useSetCltohes from "../../../hooks/useSetClothes";
import useSetSets from "../../../hooks/useSetSets";
import { clotheService } from "../../../services/ClotheService";
import { setService } from "../../../services/SetService";

export default function DeleteModal({
	clothe,
	set,
}: {
	clothe?: ClotheData;
	set?: SetData;
}) {
	const { closeAllModais, closeDeleteModal } = useModaisController();
	const { setLoading, loading } = useModalLoadingContext();
	const { deleteClothe } = useSetCltohes();
	const { deleteSet } = useSetSets();
	if (!!clothe && !!set)
		throw new Error('Não pode ser passado clothe e set juntos');
	const isClothe = !!clothe;

	return (
		<div className={S.modalContainer}>
			{loading && (
				<Spinner
					color={'cyan'}
					className={S.spinner}
				/>
			)}
			<h1>{`Deseja realmente remover ${isClothe ? 'a roupa' : 'o conjunto'}?`}</h1>
			<ButtonGroup gap={4}>
				<Button
					onClick={() => closeDeleteModal()}
					colorScheme={'gray'}
				>
					Não
				</Button>
				<Button
					color={'white'}
					colorScheme={'red'}
					onClick={async () => {
						setLoading(true);
						if (isClothe) {
							const response = await clotheService.deleteById({
								clothe: clothe.id,
								userId: clothe.userId,
							});
							if (response.status === 'error')
								throw new Error('Erro ao deletar roupa');
							deleteClothe(clothe.id);
						}
						if (!isClothe) {
							const response = await setService.deleteById({
								set: set?.id,
								userId: set?.userId,
							});
							if (response.status === 'error')
								throw new Error('Erro ao deletar roupa');
							deleteSet(set?.id);
						}
						closeAllModais();
						setLoading(false);
					}}
				>
					Sim
				</Button>
			</ButtonGroup>
		</div>
	);
}
