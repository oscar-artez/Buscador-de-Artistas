import React, { useState } from 'react'
import { helpHttp } from '../helpers/helpHttp';
import { getNomadaURl } from '../services/getApi';
import DragAndDrop from './DragAndDrop';

const Home = () => {
  const API_KEY_NOMADA = process.env.REACT_APP_API_KEY_NOMADA;
  const headers = {
    Nomada: API_KEY_NOMADA
  };
  const url = getNomadaURl;
  // const api = helpHttp();

  const [respuesta, setRespuesta] = useState('');
  
  // const handleSubmit=(data)=>{
  //     let options = {
  //       body: data,
  //       headers: { Nomada:API_KEY_NOMADA },
  //     };
  
  //     api.post(url, options).then((res) => {
  //       console.log(res);
  //       if (!res.err) {
  //       setRespuesta(res);
  //       } else {
  //         console.log(res);
  //       }
  //     });
  //   };


  return (
    <div>
      <DragAndDrop
      action={url}
      headers={headers}

      />
    </div>
  )
}

export default Home