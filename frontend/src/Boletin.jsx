import React from 'react'

 const Boletin = (props) => {
  return (
    <div className='cellvendido' onClick={() => props.delete(props.id)} key={props.id}>{props.value}</div>
  )
}

export default Boletin
