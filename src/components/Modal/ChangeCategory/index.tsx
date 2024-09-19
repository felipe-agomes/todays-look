import { Button, Spinner } from '@chakra-ui/react';
import { CategorizedItem, ClotheData, SetData } from '../../../@types/models';
import { categoriesClotheOrSet } from '../../../functions/categoriesClotheOrSet';
import useAppContext from '../../../hooks/useAppContext';
import useModaisController from '../../../hooks/useModaisController';
import useModalLoadingContext from '../../../hooks/useModalLoadingContext';
import useSetCltohes from '../../../hooks/useSetClothes';
import useSetSets from '../../../hooks/useSetSets';
import { useFormik } from 'formik';
import { clotheService } from '../../../services/ClotheService';
import { setService } from '../../../services/SetService';
import { CloseIcon } from '@chakra-ui/icons';

export default function ChangeCategory({
	clothe,
	set,
}: {
	clothe?: ClotheData;
	set?: SetData;
}) {
	const { clothes } = useAppContext();
	const { closeChangeCategoryModal } = useModaisController();
	const { setLoading, loading } = useModalLoadingContext();
	const { replaceClothes } = useSetCltohes();
	const { replaceSets } = useSetSets();
	const formikExistingCategory = useFormik({
		initialValues: {
			existingCategory: '',
		},
		onSubmit: handleSubmit,
	});
	const formikNewCategory = useFormik({
		initialValues: {
			category: '',
		},
		onSubmit: handleSubmit,
	});
	const isClothe = !!clothe;
	const categories = categoriesClotheOrSet<CategorizedItem>(clothes);
	async function handleSubmit({
		existingCategory,
		category,
	}: {
		existingCategory?: string;
		category?: string;
	}) {
		setLoading(true);
		try {
			if (isClothe) {
				const response = await clotheService.changeCategoryById({
					userId: clothe.userId,
					clothe: clothe.id,
					toUpdate: { category: existingCategory ? existingCategory : category! },
				});
				if (response.status === 'error')
					throw new Error('Erro ao mudar a categoria');
				replaceClothes(response.data);
			}
			if (!isClothe) {
				const response = await setService.changeCategoryById({
					userId: set?.userId,
					set: set?.id,
					toUpdate: { category: existingCategory ? existingCategory : category! },
				});
				if (response.status === 'error')
					throw new Error('Erro ao mudar a categoria');
				replaceSets(response.data);
			}
		} catch (error) {
			throw new Error('Erro ao alterar a categoria' + error);
		}
		closeChangeCategoryModal();
		setLoading(false);
	}

	return (
		<div className={''}>
			{loading && (
				<Spinner
					color={'cyan'}
					className={''}
				/>
			)}
			<CloseIcon
				onClick={() => {
					closeChangeCategoryModal();
				}}
				cursor={'pointer'}
				position={'absolute'}
				right={'20px'}
				top={'20px'}
			/>
			<form onSubmit={formikExistingCategory.handleSubmit}>
				<h2>Categoria existente</h2>
				<div className={''}>
					<select
						onChange={formikExistingCategory.handleChange}
						value={formikExistingCategory.values.existingCategory!}
						name='existingCategory'
						id='existingCategory'
					>
						<option value=''></option>
						{categories.map((category) => {
							return (
								<option
									key={category}
									value={category}
								>
									{category}
								</option>
							);
						})}
					</select>
					<Button
						type='submit'
						colorScheme='teal'
						variant='outline'
						marginLeft={10}
					>
						Salvar
					</Button>
				</div>
			</form>
			<form onSubmit={formikNewCategory.handleSubmit}>
				<h2>Nova categoria</h2>
				<div className={''}>
					<input
						type='text'
						id='category'
						name='category'
						onChange={formikNewCategory.handleChange}
						value={formikNewCategory.values.category}
					/>
					<Button
						type='submit'
						colorScheme='teal'
						variant='outline'
						marginLeft={10}
					>
						Salvar
					</Button>
				</div>
			</form>
		</div>
	);
}
