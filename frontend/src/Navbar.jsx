import React,{useState} from 'react'
import './styles/navbar.css'
import imagen from './assets/PRODUCIENDO_TU_SUERTE__2_-removebg-preview.png'
import {  IconHome, IconMenu,IconX} from "@tabler/icons-react";
import {Link} from 'react-router-dom'

const Navbar =()=> {
const [cambiomenu, setcambiomenu] =useState(false);

const changeicon =() =>{
    setcambiomenu(!cambiomenu)
}

  return (
 
    <div className='navbar-container'>
          <Link to='/'>       
        <img className='mainicon'  src={imagen}/>
                                    </Link>
 {/* <div className='newdrop'> 
    <h1>!Espera nuestro nuevo drop este 14 de mayo con 15% de descuento en toda la tienda!</h1>
      
    </div>  */}
         {/* <div className='homelogo'> 
      < IconHome className='iconhome'/>
         </div> */}
         <input type="checkbox" id='check'/>
<label for='check'  className='checkbtn'>
  
<IconMenu/>

</label>
    
            <ul className={ 'navlinks'}>
                <li > <a className='active' href ='#'>Inicio</a> </li>
                <li > <a className='active' href ='#ask'>Preguntas Frecuentes</a> </li>
                <li > <a className='active' href ='#contacto'>Contacto</a> </li>
                <li> <a className='active' href ='#'> <Link to='/metododepago'>Metodos de Pago</Link></a> </li>
                <li > <a className='active' href ='#'><Link to='/boletos'>COMPRAR BOLETOS</Link></a> </li>
 

            </ul>
{/* 
            <ul className={"navlinksmedios" }>
                <li className='enlace'>METODOS DE PAGO</li>
                <li className='enlace'>COMPRAR BOLETOS</li>
                </ul> */}



            {/* <IconMenu className={cambiomenu ===true? 'menu close' : 'menu'} onClick={changeicon}/> 
       <IconX className={cambiomenu ===false? 'cerrar' : 'cerrar open'}  onClick={changeicon}/> */}
       

      
    
    </div>
    
  )
}

export default Navbar