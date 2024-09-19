import './home.css';
import {
	Tabs,
	TabPanels,
	TabPanel,
	TabList,
	Tab,
	Avatar,
} from '@chakra-ui/react';
import ContainerPage from '../../components/ContainerPage';
import GridSets from '../../components/GridSets';
import GridClothes from '../../components/GridClothes';
import AddClothe from '../../components/AddClothe';
import WorkbenchSet from '../../components/WorkbenchSet';
import ProfilePage from '../../components/ProfilePage';
import { categoriesClotheOrSet } from '../../functions/categoriesClotheOrSet';
import useSetSets from '../../hooks/useSetSets';
import useSetClothes from '../../hooks/useSetClothes';
import useAppContext from '../../hooks/useAppContext';
import { ClotheData, SetData, UserData } from '../../@types/models';
import { Header } from '../../components/Header';
// import { userService } from '../../services/UserService';
import { AddIcon } from '@chakra-ui/icons';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import { clotheService } from '../../services/ClotheService';

export default function Home() {
	const { clothes, sets } = useAppContext();
	const { updateClothes } = useSetClothes();
	const navigate = useNavigate();
	const setsCategories = categoriesClotheOrSet<SetData>(sets);
	const clothesCategories = categoriesClotheOrSet<ClotheData>(clothes);
	const user: UserData = {
		createdAt: new Date(),
		email: 'a',
		id: 1,
		image: '',
		name: 'felipe',
		updatedAt: new Date(),
	};

	if (user === null) {
		navigate('/login');
	}

	useEffect(() => {
		const clothes: ClotheData[] = clotheService.getAllByUserId(user.id); // TODO: Mokado
		updateClothes(clothes);
		// updateSet(user.id);
	}, []);

	return (
		<>
			{user && (
				<>
					<div>
						<title>{"Today's Look"}</title>
						<link
							rel='icon'
							href='/favIcon.ico'
						/>
					</div>
					<div className={'homePage'}>
						<Tabs align='center'>
							<main>
								<TabPanels>
									<TabPanel className={'page'}>
										<Header.Root title='Conjuntos'>
											<Header.Category categories={setsCategories} />
										</Header.Root>
										<ContainerPage>
											<GridSets />
										</ContainerPage>
									</TabPanel>
									<TabPanel className={'page'}>
										<Header.Root title='Roupas'>
											<Header.Category
												categories={clothesCategories}
												isClothe
											/>
										</Header.Root>
										<ContainerPage>
											<GridClothes />
										</ContainerPage>
									</TabPanel>
									<TabPanel className={'page'}>
										<Header.Root title='Adicionar Roupa' />
										<ContainerPage>
											<AddClothe userId={user && user.id} />
										</ContainerPage>
									</TabPanel>
									<TabPanel className={'page'}>
										<Header.Root title='Criar Conjunto' />
										<ContainerPage>
											<WorkbenchSet />
										</ContainerPage>
									</TabPanel>
									<TabPanel className={'page'}>
										<Header.Root title='Perfil' />
										<ContainerPage>
											<ProfilePage userName={user && user.name} />
										</ContainerPage>
									</TabPanel>
								</TabPanels>
							</main>

							<TabList className={'footerPage'}>
								<Tab height={10}>
									<img
										src='/wedding.png'
										alt='Conjunto'
									/>
								</Tab>
								<Tab height={10}>
									<img
										src='/tshirt.png'
										alt='Roupas'
									/>
								</Tab>
								<Tab height={10}>
									<div className={'boxAddIcon'}>
										<div className={'addIcon'}>
											<AddIcon
												borderRadius={'full'}
												width={5}
												height={5}
												color={'white'}
											></AddIcon>
										</div>
										<p>Adicionar</p>
									</div>
								</Tab>
								<Tab height={10}>
									<img
										src='/fashion.png'
										alt='Novo conjunto'
									/>
								</Tab>
								<Tab height={10}>
									<Avatar
										size={'sm'}
										name={user && user.name}
										src={user && user.image}
									/>
								</Tab>
							</TabList>
						</Tabs>
					</div>
				</>
			)}
		</>
	);
}
