import React from 'react'

const InfoActor = ({name, gender, popularity}) => {
  return (
    <div  className='ContainerFlex' style={{alignItems:'center', flexDirection:'column'}}>
    <h1>{name}</h1>
    <label className='labelGender'>{gender == 2 ? 'Hombre' : 'Mujer'}</label>
    <p className='PopularityText'>Popularidad: {popularity}</p>
    </div>
  )
}

export default InfoActor