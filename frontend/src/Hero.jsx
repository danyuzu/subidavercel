import React from 'react'
import './styles/hero.css'
import  minoimg from './assets/trocaimg1.jpeg'

function Hero() {
  return (
    <div className='hero-container'>

  <div className='innerhero ' >
     <img src={minoimg} className='mino'/>

        </div>
  
    </div>
  )
}

export default Hero
