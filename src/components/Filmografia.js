import React, { useState,useEffect } from 'react'
import { helpHttp } from '../helpers/helpHttp';
import { getActorInfo } from '../services/getApi';
import { Avatar } from 'antd';
import { UserOutlined } from '@ant-design/icons';

const Filmografia = () => {
  const [nameActor, setNameActor] = useState('Steve Buscemi');
  const [infoActor, setInfoActor] = useState([]);

  const api = helpHttp();
  const url = getActorInfo(nameActor);
  useEffect(() => {
    api.get(url)
    .then((res) => {
      if (!res.err) {
        console.log(res.results);
        setInfoActor(res.results);
      } else {
        console.log(res);
      }
    });
  }, [nameActor])
  
  return (
    <div>
      {
        infoActor.map((ele,index) =>(
          <div key={index}>
          <h1>Filmografia de {ele.name}</h1>
          <Avatar shape="square" size="large" src={`https://image.tmdb.org/t/p/w500/${ele.profile_path}`}/>
          </div>
        ))

      }


    </div>
  )
}

export default Filmografia