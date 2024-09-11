import { useContext } from 'react';
import { AppContext } from '../contexts/App';

export default function useAppContext() {
	const context = useContext(AppContext);
	return context;
}
