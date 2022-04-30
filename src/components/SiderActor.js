import { Avatar } from 'antd'
import Sider from 'antd/lib/layout/Sider'
import React from 'react'

const SiderActor = ({infoActor}) => {
  return (
    <Sider>
        {
        infoActor.map((ele,index) =>(
          <div key={index}>
          <Avatar shape="square" size="large" src={`https://image.tmdb.org/t/p/w500/${ele.profile_path}`}/>
          <h1>{ele.name}</h1>
          <label>{ele.gender == 2 ? 'Hombre' : 'Mujer'}</label>
          <p>Popularidad: {ele.popularity}</p>
          </div>
        ))   
      }
    </Sider>   
  )
}

export default SiderActor