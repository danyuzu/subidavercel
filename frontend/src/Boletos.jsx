import React from 'react'
import  minoimg from './assets/trocaimg1.jpeg';
import './styles/Boletos.css'
import { FaArrowAltCircleDown } from "react-icons/fa";
import { FaLongArrowAltRight } from "react-icons/fa";
import { FaLongArrowAltLeft } from "react-icons/fa";
import { FaArrowLeft } from "react-icons/fa";
import  Footer from './Footer'
import {useState,useRef} from 'react';
import Boletin from './Boletin';


export default function Boletos() { 



    const [aparte, setaparte] = useState(45);
    const [boletosaparte, setboletosaparte] = useState([]);

    const cambio = () => {
        setaparte((e) => e = 46)
        console.log(e)
    }
    const nextid= useRef(1);

    const handleOnClick =(e) => {
        e.preventDefault();
        // Get the text content of the label
        const labelText = e.target.textContent;
        setaparte((e) => e = 46)

        setboletosaparte( boleto => [
            ...boleto,
            {
                 value:labelText,
                 id:nextid.current++
            }
        ])
        console.log(labelText);
        console.log(boletosaparte)

    }

    const ultimobol =(id) =>{

        // setboletosaparte(prev => prev.filter(p =>p.id !==id ))
        // console.log(boletosaparte)

        if(boletosaparte.length === 1)
        {
            setaparte((e) => e = 45)
            setboletosaparte(prev => prev.filter(p =>p.id !==id ))
        }
        else{
            setboletosaparte(prev => prev.filter(p =>p.id !==id ))
        //    console.log(boletosaparte)
        }
    }


  return (
    <div className='boletoscontainer'>

        <div className='innercontainer'>
            <div className='header'>
        <h1>MUSTANG GT 2024</h1>
        <h1>+ SUPER BONOS</h1>
        <h1>6 DE AGOSTO 2024</h1>
        </div>
        <h1>  <FaArrowAltCircleDown  className='arrowdown'/>LISTA DE BOLETOS ABAJO   <FaArrowAltCircleDown  className='arrowdown'/></h1>
      
<div className='imgcontainer'>
        <img  src={minoimg}  className='mainimg'/>

</div>


<div className='prices'>
<ul>
    <li>1 BOLETO POR $189 (3 oportunidades)</li>
    <li>2 BOLETOS POR $189 (3 oportunidades)</li>
    <li>1 BOLETO POR $189 (3 oportunidades)</li>
    <li>1 BOLETO POR $189 (3 oportunidades)</li>
    <li>1 BOLETO POR $189 (3 oportunidades)</li>
    <li>1 BOLETO POR $189 (3 oportunidades)</li>
    <li>2 BOLETOS POR $189 (3 oportunidades)</li>
    <li>1 BOLETO POR $189 (3 oportunidades)</li>
    <li>1 BOLETO POR $189 (3 oportunidades)</li>
    <li>1 BOLETO POR $189 (3 oportunidades)</li>
    <li>1 BOLETO POR $189 (3 oportunidades)</li>
    <li>2 BOLETOS POR $189 (3 oportunidades)</li>
    <li>1 BOLETO POR $189 (3 oportunidades)</li>
    <li>1 BOLETO POR $189 (3 oportunidades)</li>
    <li>1 BOLETO POR $189 (3 oportunidades)</li>

</ul>
</div>

<h1>con tu boleto liquidado participas!</h1>

<div className='infopremio'>


<h1>HAZ CLICK ABAJO EN TU NUMERO DE LA SUERTE</h1>

                        <h2>Blancos-Disponibles</h2>

                        <div className={aparte === 45 ? 'apartadozone': 'apartadozone open'}>

                        <button className='apartarbtn'><FaLongArrowAltRight className='flecha'/>APARTAR<FaLongArrowAltLeft  className='flecha' /></button>
                        <div className='row'> {boletosaparte.map( ( item )=> (

                       <Boletin
                       value={item.value}
                       id={item.id}
                       delete={ultimobol}
                       />) )}</div>
                        <h1>BOLETO(S) SELECCIONADOS</h1>
                        <h2>Para eliminar haz click en el boleto</h2>

                        </div>
</div>


        </div>

        <div className='overmodal'>
               
                        </div>
                                 <div className='modal'>

                        </div>

<div className='boletostable'>
    <div className='table'>


    <div className='row'>
        <div className='cell' onClick={handleOnClick}>00123weaewqas</div>
        <div className='cell'>00123</div>
        <div className='cell'>00123</div>
        <div className='cell'>00123</div>
        <div className='cell'>00123</div>
        <div className='cell'>00123</div>
        <div className='cell'>00123</div>
        <div className='cell'>00123</div>
        <div className='cell'>00123</div>
        <div className='cell'>00123</div>
        <div className='cell'>00123</div>
        <div className='cell'>00123</div>
        <div className='cell'>00123</div>
        <div className='cell'>00123</div>
        <div className='cell'>00123</div>
        <div className='cell'>00123</div>
        <div className='cell'>00123</div>
        <div className='cell'>00123</div>
        <div className='cell'>00123</div>
        <div className='cell'>00123</div>
        <div className='cell'>00123</div>
        <div className='cell'>00123</div>
        <div className='cell'>00123</div>
        <div className='cell'>00123</div>
        <div className='cell'>00123</div>
        <div className='cell'>00123</div>
        <div className='cell'>00123</div>
        <div className='cell'>00123</div>
        <div className='cell'>00123</div>
        <div className='cell'>00123</div>
        <div className='cell'>00123</div>
        <div className='cell'>00123</div>
            </div>

            <div className='row'>
      
          <div className='cell'>00123</div>
        <div className='cell'>00123</div>
        <div className='cell'>00123</div>
        <div className='cell'>00123</div>
        <div className='cell'>00123</div>
        <div className='cell'>00123</div>
        <div className='cell'>00123</div>
        <div className='cell'>00123</div>
        <div className='cell'>00123</div>
        <div className='cell'>00123</div>
        <div className='cell'>00123</div>
        <div className='cell'>00123</div>
        <div className='cell'>00123</div>
        <div className='cell'>00123</div>
        <div className='cell'>00123</div>
        <div className='cell'>00123</div>
        <div className='cell'>00123</div>
        <div className='cell'>00123</div>
        <div className='cell'>00123</div>
        <div className='cell'>00123</div>
        <div className='cell'>00123</div>
        <div className='cell'>00123</div>
        <div className='cell'>00123</div>
        <div className='cell'>00123</div>
        <div className='cell'>00123</div>
        <div className='cell'>00123</div>
        <div className='cell'>00123</div>
        <div className='cell'>00123</div>
        <div className='cell'>00123</div>
        <div className='cell'>00123</div>
        <div className='cell'>00123</div>
        <div className='cell'>00123</div>
            </div>
            <div className='row'>
            <div className='cell'>00123</div>
        <div className='cell'>00123</div>
        <div className='cell'>00123</div>
        <div className='cell'>00123</div>
        <div className='cell'>00123</div>
        <div className='cell'>00123</div>
        <div className='cell'>00123</div>
        <div className='cell'>00123</div>
        <div className='cell'>00123</div>
        <div className='cell'>00123</div>
        <div className='cell'>00123</div>
        <div className='cell'>00123</div>
        <div className='cell'>00123</div>
        <div className='cell'>00123</div>
        <div className='cell'>00123</div>
        <div className='cell'>00123</div>
        <div className='cell'>00123</div>
        <div className='cell'>00123</div>
        <div className='cell'>00123</div>
        <div className='cell'>00123</div>
        <div className='cell'>00123</div>
        <div className='cell'>00123</div>
        <div className='cell'>00123</div>
        <div className='cell'>00123</div>
        <div className='cell'>00123</div>
        <div className='cell'>00123</div>
        <div className='cell'>00123</div>
        <div className='cell'>00123</div>
        <div className='cell'>00123</div>
        <div className='cell'>00123</div>
        <div className='cell'>00123</div>
        <div className='cell'>00123</div>
            </div>
            <div className='row'>
            <div className='cell'>00123</div>
        <div className='cell'>00123</div>
        <div className='cell'>00123</div>
        <div className='cell'>00123</div>
        <div className='cell'>00123</div>
        <div className='cell'>00123</div>
        <div className='cell'>00123</div>
        <div className='cell'>00123</div>
        <div className='cell'>00123</div>
        <div className='cell'>00123</div>
        <div className='cell'>00123</div>
        <div className='cell'>00123</div>
        <div className='cell'>00123</div>
        <div className='cell'>00123</div>
        <div className='cell'>00123</div>
        <div className='cell'>00123</div>
        <div className='cell'>00123</div>
        <div className='cell'>00123</div>
        <div className='cell'>00123</div>
        <div className='cell'>00123</div>
        <div className='cell'>00123</div>
        <div className='cell'>00123</div>
        <div className='cell'>00123</div>
        <div className='cell'>00123</div>
        <div className='cell'>00123</div>
        <div className='cell'>00123</div>
        <div className='cell'>00123</div>
        <div className='cell'>00123</div>
        <div className='cell'>00123</div>
        <div className='cell'>00123</div>
        <div className='cell'>00123</div>
        <div className='cell'>00123</div>
      
            </div>
           

    
    </div>

</div>

      <Footer/>
    </div>
  )
}
