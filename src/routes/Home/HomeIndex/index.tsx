import { Link } from 'react-router-dom';
import ButtonCard from '../../../components/ButtonCard';
import CardHome from '../../../components/CardHome';
import './styles.css';

export default function HomeIndex() {
  return (
    <main>
      <section className='card-home-index-content mr-top '>
        <div className='container mr-bottom'>
          <CardHome title="Desafio GitHub" subtitle="DevSuperior - Escola de Programação" />
        </div>
        <div className='container btn-container'>
          <Link to='/buscar'>
            <ButtonCard titleBtn='Começar' />
          </Link>
        </div>
      </section>
    </main>
  );
}