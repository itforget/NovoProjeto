import React, { useState } from 'react';
import Nav from './components/Nav';
import Image from 'next/image';
import Portifolio from '@/public/images/TELA PROJETO.PNG'
import Calculadora from '@/public/images/TELA.PNG'
import Place from '@/public/images/place.png'
import SlidingPage from './components/SlidingPage';

export default function Sobre() {
  const [mostrarPrimeiroTexto, setMostrarPrimeiroTexto] = useState(true);
  const alternarTexto = () => {
    setMostrarPrimeiroTexto(!mostrarPrimeiroTexto);
  };
  return (
    <SlidingPage transition='scale'>

    <div>
        <Nav toggleTexto={alternarTexto}/>
        <div className="flex flex-wrap justify-center place-content-center bg-[#1A533F]  my-2 mx-16 rounded-[120px] animate-fade-up animate-once ">
        <div className='bg-[#062C26] flex flex-wrap flex-col m-5 p-11 rounded-3xl text-[#96a7a4] font-bold text-xl gap-10 max-w-4xl place-content-center justify-evenly animate-fade-up animate-once animate-duration-[3000ms] animate-delay-300'>
          <div className='text-5xl my-5 flex justify-center animate-fade-up animate-once animate-duration-[3000ms] animate-delay-300'>
            <h1>PROJETOS</h1>
          </div>
          <div className='flex flex-row gap-6 flex-wrap justify-evenly '>
            <a href='https://github.com/itforget/PortifolioFinal' target='_blank'>
            <div className='bg-slate-900 flex flex-col justify-center place-content-center px-5 py-5 rounded-3xl hover:opacity-50 '>
              <h2 className='flex justify-center mb-2'>PORTIFOLIO</h2>
              <Image className='w-60 flex justify-center' loading='lazy' src={Portifolio}/>
            </div>
            </a>
            <a href='https://github.com/itforget/CalculadoraDeImposto' target='_blank'>
            <div className='bg-slate-900 flex flex-col justify-center place-content-center px-5 py-5 rounded-3xl hover:opacity-50'>
              <h2 className='flex justify-center mb-2'>CALCULADORA IR</h2>
              <Image className='w-60 flex justify-center' loading='lazy' src={Calculadora} />
            </div>
            </a>
            <div className='bg-slate-900 flex flex-col justify-center place-content-center px-5 py-5 rounded-3xl hover:opacity-50'>
              <h2 className='flex justify-center mb-2'>EM CONSTRUÇÃO</h2>
              <Image className='w-60 flex justify-center' loading='lazy' src={Place}/>
            </div>
            <div className='bg-slate-900 flex flex-col justify-center place-content-center px-5 py-5 rounded-3xl'>
              <h2 className='flex justify-center mb-2'>EM CONSTRUÇÃO</h2>
              <Image className='w-60 flex justify-center' loading='lazy' src={Place}/>
            </div>
            <div className='bg-slate-900 flex flex-col justify-center place-content-center px-5 py-5 rounded-3xl'>
              <h2 className='flex justify-center mb-2'>EM CONSTRUÇÃO</h2>
              <Image className='w-60 flex justify-center' loading='lazy' src={Place}/>
            </div>
            <div className='bg-slate-900 flex flex-col justify-center place-content-center px-5 py-5 rounded-3xl'>
              <h2 className='flex justify-center mb-2'>EM CONSTRUÇÃO</h2>
              <Image className='w-60 flex justify-center' loading='lazy' src={Place}/>
            </div>
          </div>
        </div>
      </div>
    </div>
    </SlidingPage>
  );
}
