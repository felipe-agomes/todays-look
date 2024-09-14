import { useNavigate } from 'react-router-dom';
import S from './ProfilePage.module.css';

type Props = {
  userName: string;
};

export default function ProfilePage({ userName }: Props) {
  const navigate = useNavigate();

  const handleLogout = () => {
    navigate('/login');
  };

  return (
    <div className={S.container}>
      <button onClick={handleLogout}>Sair</button>
      <h2>{userName}</h2>
    </div>
  );
}
