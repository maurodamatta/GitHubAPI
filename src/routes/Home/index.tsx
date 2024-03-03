import { Outlet } from 'react-router-dom';
import Header from '../../components/Header';
import './styles.css';

export default function Home() {
  return (
    <>
      <Header />
      <Outlet />
    </>
  );
}