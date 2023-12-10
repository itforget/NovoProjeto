import React, { useState } from 'react';
import Nav from './components/Nav'
import { Code, CodeBrackets, CodeBracketsSquare, Css3, Html5 } from 'iconoir-react';
import Image from 'next/image';



export default function Sobre() {
  const [mostrarPrimeiroTexto, setMostrarPrimeiroTexto] = useState(true);
  const text = ['SOBRE MIM', 'ABOUT ME',
   'HABILIDADES', 'SKILLS', 'APRENDIZAGEM RAPIDA', 'FAST LEARNING', 'HABILIDADES INTERPESSOAIS', 'SOFT SKILLS',
    'LINGUAGENS', ''];

  const alternarTexto = () => {
    setMostrarPrimeiroTexto(!mostrarPrimeiroTexto);
  };
  return (
    <div>
      <Nav toggleTexto={alternarTexto}/>
      <div className="flex flex-wrap justify-center place-content-center bg-[#1A533F]  my-2 p-5 rounded-[120px] md:rounded-none">
        <div className='bg-[#062C26] flex flex-wrap flex-col p-8 rounded-3xl text-[#96a7a4] font-bold text-xl gap-10'>
          <div className='text-5xl my-5 flex justify-center'>
            <h1>{mostrarPrimeiroTexto ? text[0] : text[1]}</h1>
          </div>
          <div className='flex flex-row gap-44'>  
            <div className='bg-slate-900 flex flex-col px-16 py-3 rounded-3xl'>
            <h2 className='text-3xl'>{mostrarPrimeiroTexto ? text[2] : text[3]}</h2>
              <span>{mostrarPrimeiroTexto ? text[4] : text[5]}</span>
              <span>{mostrarPrimeiroTexto ? text[6] : text[7]}</span>
            </div>
            <div className='bg-slate-900 flex flex-col px-16 py-3 rounded-3xl gap-3'>
            <h2 className='text-3xl'>LINGUAGENS</h2>
              <span className='flex flex-row gap-3'><Html5 /> HTML</span>
              <span className='flex flex-row gap-3'><Css3 /> CSS</span>
              <span className='flex flex-row gap-3'><CodeBracketsSquare/> JavaScript</span>
            </div>
            <div className='bg-slate-900 flex flex-col px-16 py-3 rounded-3xl'>
            <h2 className='text-3xl'>HOBBIES</h2>
              <span>Skate</span>
              <span>Pescar</span>
            </div>
          </div>
        </div>
      </div>
    </div>
      
  );
}
