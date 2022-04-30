import React from 'react'
import { formatDate } from '../functions/functions'

const Synopsis = ({overview, date}) => {
  return (
    <div style={{display:'flex',padding: '0% 1% 0% 2%', flexDirection:'column'}}>
        <p className='BlackText'>{overview}</p>
        <h3>Fecha de estreno: {formatDate(date)}</h3>
    </div>
  )
}

export default Synopsis