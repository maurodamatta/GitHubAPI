import './styles.css';

type Props = {
  title: string;
  subtitle: string;
}

export default function CardHome({ title, subtitle }: Props) {
  return (
    <>
      <div className='card-home-content'>
        <h2>{title}</h2>
        <p>{subtitle}</p>
      </div>
    </>
  );

}