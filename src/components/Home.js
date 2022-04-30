import { getNomadaURl } from '../services/getApi';
import DragAndDrop from './DragAndDrop';

const Home = () => {
  const API_KEY_NOMADA = process.env.REACT_APP_API_KEY_NOMADA;
  const headers = {
    Nomada: API_KEY_NOMADA
  };
  const url = getNomadaURl;

  return (
    <div>
      <h1>¿Quién es este actor?</h1>
      <DragAndDrop
      action={url}
      headers={headers}
      />
    </div>
  )
}

export default Home