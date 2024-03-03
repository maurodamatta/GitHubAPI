import './styles.css'; 

type Props = {
  titleBtn: string;
}

export default function ButtonCard({ titleBtn }: Props) {
  return (
    <button className='btn' type='submit'>
      {titleBtn}
    </button>
  ); 
}