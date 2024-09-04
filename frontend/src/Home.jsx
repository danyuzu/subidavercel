import React from 'react'
 import Hero from './Hero'
import Navbar from './Navbar'
import './styles/home.css'
import { FaWhatsapp } from "react-icons/fa";
import { FaFacebookSquare } from "react-icons/fa";
import Footer from './Footer'
import wabtn from './assets/wa.svg'


function Home() {
  return (


    
<div className='home-container'>
<Hero/>
<h1 className='crece'>-LISTA DE DISPONIBLES-</h1>

<div className='contenedorinterno'>

<p className='ask' id='ask'>Preguntas Frecuentes</p>

<div className='infoblock'>

<h1>¿CÓMO SE ELIGE A LOS GANADORES?</h1>

<p>El ganador de Rifas Gonzales sera el participante cuyo numero 
    de boleto coincida con las ultimas cifras del premio 
    ganador (las fechas seran publicadas en nuestra pagina oficial).</p>

<h1>¿QUÉ SUCEDE CUANDO EL NÚMERO GANADOR ES UN BOLETO NO VENDIDO?</h1>

<p>Se elige un nuevo ganador realizando la misma dinamica en otra fecha cercana(se anunciara la nueva fecha). <br></br>

Esto significa que,  ¡Tendrías el doble de oportunidades de ganar con tu mismo boleto!
</p>
<a href="https://api.whatsapp.com/send?phone=3271090066" target='_blanket'><img src={wabtn} className='wabtn'></img></a>
<h1>¿DONDE SE PUBLICA A LOS GANADORES?</h1>

<p>En nuestra pagina oficial de 
    Facebook Rifas Gonzalez  puedes encontrar
     todos y cada uno de nuestros sorteos anteriores, 
     asi como las transmisiones en vivo con loteria Nacional 
     y las entregas de premios a los ganadores!
</p>

<p>Encuentra transmision en vivo de los sorteos en nuestra 
    pagina de Facebook en las fechas indicadas a las 20:00 hrs 
    CDMX. ¡No te lo pierdas!</p>

<h1>Envianos tus preguntas a:</h1>

<FaWhatsapp  className='waicon'/>
<FaFacebookSquare className='fbicon' />


</div>


<p className='acerca' id='contacto'>ACERCA DE NOSOTROS</p>

<div className='transblock'>

<p className='middlesign'>♣SORTEOS GONZALEZ SIEMPRE PRODUCIENDO TU SUERTE!♣</p>

</div>

<p className='acercados'>CONTÁCTANOS</p>

<div className='wablock'>

    <h1> WHATSAPP: (327)1090067</h1>
    <div className='logoblock'>
    <FaWhatsapp  className='waicon'/>
<FaFacebookSquare className='fbicon' />
</div>

{/* <div class="fb-page" data-href="https://www.facebook.com/profile.php?id=61558439104133" data-tabs="timeline" data-width="340px" data-height="500px"  data-small-header="true" data-adapt-container-width="true" data-hide-cover="true" data-show-facepile="true"><blockquote cite="https://www.facebook.com/profile.php?id=61558439104133" class="fb-xfbml-parse-ignore"><a href="https://www.facebook.com/profile.php?id=61558439104133">Facebook</a></blockquote></div> */}
<iframe className= "fbframe" src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2Fprofile.
php%3Fid%3D61558439104133&tabs=timeline&width=350&height=120&small
_header=false&adapt_container_width=false&hide_cover=false&show_facepile=false&appId=790425362965594"
 width="350" height="120"  scrolling="no"
 allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"></iframe>


{/* <p className='wask'>PREGUNTAS AL WHATSAPP</p> */}
</div>


</div>

<Footer/>
</div>

  
  )
}

export default Home