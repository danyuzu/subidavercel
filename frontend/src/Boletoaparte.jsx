import React from 'react'

const  Boletoaparte=(props) => {
  return (
    <div className='cellvendido' onClick={props.delete(props.id)} key={props.id}>{props.value}</div>

  )
}

export default boletoaparte
