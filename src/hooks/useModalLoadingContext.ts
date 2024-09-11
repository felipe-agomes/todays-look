import { useContext } from 'react';
import { ModalLoadingContext } from '../contexts/ModalLoading';

export default function useModalLoadingContext() {
	const context = useContext(ModalLoadingContext);
	return context;
}
