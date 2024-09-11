import { useContext } from 'react';
import { ModaisContext } from '../contexts/Modais';

export default function useModaisContext() {
	const context = useContext(ModaisContext);
	return context;
}
