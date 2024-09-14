import S from './AddClothe.module.css';
import { Button, Input } from '@chakra-ui/react';
import { useState } from 'react';
import useSetCltohes from '../../hooks/useSetClothes';
import { clotheService } from '../../services/ClotheService';
import { useForm } from 'react-hook-form';

type FormInput = {
	category: string;
	url: string;
};

type Props = {
	userId: string | null;
};

export default function AddClothe({ userId }: Props) {
	const [loading, setLoading] = useState<boolean>(false);
	const { updateClothes } = useSetCltohes();
	const { register, handleSubmit } = useForm<FormInput>();

	async function onSubmit({ category, url }: FormInput) {
		setLoading(true);
		await clotheService.create({ category, image: url, key: url, userId });
		setLoading(false);
		updateClothes(userId);
	}

	return (
		<form
			onSubmit={handleSubmit(onSubmit)}
			className={S.boxForm}
		>
			<div className={S.inputFile}></div>
			<label
				style={{ alignSelf: 'start' }}
				htmlFor='category'
			>
				URL
			</label>
			<input
				className={S.textInput}
				{...register('url')}
			/>
			<label
				style={{ alignSelf: 'start' }}
				htmlFor='category'
			>
				Categoria
			</label>
			<Input
				className={S.textInput}
				type='text'
				id='category'
				{...register('category')}
			/>
			<Button
				type='submit'
				isLoading={loading}
				loadingText='Salvando'
				colorScheme='teal'
				variant='outline'
				marginTop={10}
			>
				Salvar
			</Button>
		</form>
	);
}
