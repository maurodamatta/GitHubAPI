import { useEffect, useState } from 'react';
import ButtonCard from '../../../components/ButtonCard';
import './styles.css';
import * as githubService from '../../../services/github-service';
import { GitHubDTO } from '../../../moldes/github';
import { useNavigate } from 'react-router-dom';
import CardResult from '../../../components/CardResult';
import NotFound from '../../../components/NotFound';

type FormData = {
  user: string;
}

export default function HomeResult() {
  const navigate = useNavigate();
  const [userData, setUserData] = useState<GitHubDTO>();
  const [formData, setFormData] = useState<FormData>({
    user: '',
  });
  const [error, setError] = useState();

  function handleInputChange(event: any) {
    const value = event.target.value;
    const name = event.target.name;
    setFormData({ ...formData, [name]: value });
  }

  function handleFormSubmit(event: any) {
    event.preventDefault();
    githubService.buscarUsuario(formData.user)
      .then(response => {
        setUserData(response.data);
        console.log(userData);
      })
      .catch((error) => {
        setError(error.response.data);
        setUserData(undefined);
      }), [formData];
  }
  return (
    <>
      <section className='container-section'>
        <div className='container-card card-form mr-top-card'>
          <h2 className='title-home-result mr-bottom'>Encontre um perfil Github</h2>
          <form onSubmit={handleFormSubmit}>
            <div>
              <input id='inpt'
                name="user"
                value={formData.user}
                type="text"
                placeholder='Digite um usuário'
                onChange={handleInputChange}
              />
            </div>
            <div className='btn-container mr-top'>
              <ButtonCard titleBtn='Encontrar' />
            </div>
          </form>
        </div>
      </section>
      <section className='container-section'>
        {
          (userData && <CardResult userDTO={userData} />)
          || (error && <div className='container-card'>
            <NotFound title='Erro ao buscar usuário' />
          </div>)
        }

      </section>
    </>
  );
}