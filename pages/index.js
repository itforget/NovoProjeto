import Image from 'next/image';
import IconInstagram from '/public/images/instagram.png';
import IconGithub from '/public/images/github.png';
import IconLinkedin from '/public/images/linkedin.png';
import Arrow from '/public/images/computer.png';
import React, { useState } from 'react';
import Nav from './components/Nav'

export default function Sobre() {
  const [mostrarPrimeiroTexto, setMostrarPrimeiroTexto] = useState(true);

  const texto1 = [
    "Olá,",<br/>, "Meu nome é ", <span className='text-[#6655a1] underline'>Ítalo Cordeiro</span>,
   <br/>, "Sou um ", <span className='text-[#6655a1] underline'>Futuro</span>, " Desenvolvedor", <br/>,
    "Morando em ",<span className='text-[#6655a1] underline'>Brasilia, Brasil.</span> ]

  const texto2 = [
    "Hello,", <br/>, "My name is ",  <span className='text-[#6655a1] underline'>Ítalo Cordeiro</span>,
     <br/>, "I`m a " , <span className='text-[#6655a1] underline'>Future</span>, " Developer", <br/>,
      "Based in ",<span className='text-[#6655a1] underline'>Brasilia, Brazil.</span>]

  
  const alternarTexto = () => {
    setMostrarPrimeiroTexto(!mostrarPrimeiroTexto);
  };
  return (
    <div className='box-border'>
      <Nav toggleTexto={alternarTexto}/>
      <div className="flex flex-col flex-wrap justify-center place-content-center bg-[#1A533F]  my-2 p-5 rounded-[120px] md:rounded-none">
        <Image className='w-[50px] animate-bounce' src={Arrow} />
        <h1 className=' text-[#96a7a4] text-[100px] md:text-5xl md:tracking-wide md:leading-[80px] md:text-center'>
        {mostrarPrimeiroTexto ? texto1 : texto2}
        </h1>
        <div className='flex flex-row gap-8 md:justify-center'>
          <a href='#'>
            <Image className='w-[70px]  md:w-10 mt-4 hover:animate-ping' src={IconInstagram} />
          </a>
          <a href='https://github.com/itforget'target='_blank'>
            <Image className='w-[70px]  md:w-10 mt-4 hover:animate-ping' src={IconGithub} />
          </a>
          <a href='https://www.linkedin.com/in/%C3%ADtalo-cordeiro-238a4a21a/' target='_blank'>
            <Image className='w-[70px] md:w-10 mt-4 hover:animate-ping' src={IconLinkedin} />
          </a>
        </div>
      </div>
    </div>
  );
}
