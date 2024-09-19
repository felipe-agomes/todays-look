import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import './index.css';
import { ChakraProvider } from '@chakra-ui/react';
import { BrowserRouter } from 'react-router-dom';
import ProviderAppContext from './contexts/App.tsx';

createRoot(document.getElementById('root')!).render(
	<StrictMode>
		<ChakraProvider>
			<BrowserRouter>
				<ProviderAppContext>
					<App />
				</ProviderAppContext>
			</BrowserRouter>
		</ChakraProvider>
	</StrictMode>,
);
