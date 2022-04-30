import { StarFilled } from '@ant-design/icons'
import React from 'react'

const Rate = ({rate}) => {
  return (
    <div className='ContainerFlex'>
        <p className='BlackText'>{rate}/10</p>
        <StarFilled style={{color:'#f2eb2b'}}/>
    </div>
  )
}

export default Rate