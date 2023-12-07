import Logo from '/public/images/logo.png';
import Image from 'next/image';
import IconInstagram from '/public/images/instagram.png';
import IconGithub from '/public/images/github.png';
import IconLinkedin from '/public/images/linkedin.png';
import Arrow from '/public/images/computer.png';
import styles from '/styles/Home.module.css'; 
import React, { useState } from 'react';



export default function Home() {
  const [mostrarPrimeiroTexto, setMostrarPrimeiroTexto] = useState(true);

  const texto1 = [
    "Olá,",<br/>, "Meu nome é ", <span className='text-[#6655a1] underline'>Ítalo Cordeiro</span>,
   <br/>, "Sou um ", <span className='text-[#6655a1] underline'>futuro</span>, " Desenvolvedor", <br/>,
    "Morando em ",<span className='text-[#6655a1] underline'>Brasilia, Brasil.</span> ]

  const texto2 = [
    "Hello,", <br/>, "My name is ",  <span className='text-[#6655a1] underline'>Ítalo Cordeiro</span>,
     <br/>, "I`m a " , <span className='text-[#6655a1] underline'>future</span>, " developer", <br/>,
      "Based in ",<span className='text-[#6655a1] underline'>Brasilia, Brazil.</span>]

  const textos = ["SOBRE", "ABOUT", "PROJETOS", "PROJECTS", "CONTATO", "CONTACT"]
  
  const alternarTexto = () => {
    setMostrarPrimeiroTexto(!mostrarPrimeiroTexto);
  };
  return (
    <div>
      <div className='bg-[#062C26] flex flex-wrap items-center justify-between md:justify-center' >
      <div className='animate-pulse'>
      <Image className='w-[120px] ml-6' src={Logo} alt='logo' />
      </div>
        <div className='flex flex-wrap items-center gap-[80px] text-lg font-bold text-[#96a7a4] mr-[80px]'>
          <div className='border-[#96a7a4] border-2 rounded-xl p-2 text-[#96a7a4] flex gap-2 ml-[50px]  '>
            <span>PT-BR</span>
              <label className="switch">
                <input type="checkbox" value="Alternar Texto" onClick={alternarTexto} />
                <span className="slider round"></span>
              </label>
            <span>ENG</span>
          </div>
          <div className='flex gap-5 ml-[50px]'>
          <a className='hover:opacity-50 border-[#96a7a4] border-2 rounded-xl p-2 text-[#96a7a4]' href='#SOBRE'>{mostrarPrimeiroTexto ? textos[0] : textos[1]}</a>
          <a className='hover:opacity-50 border-[#96a7a4] border-2 rounded-xl p-2 text-[#96a7a4]' href='#PROJETOS'>{mostrarPrimeiroTexto ? textos[2] : textos[3]}</a>
          <a className='border-[#6655a1] border-2 rounded-xl p-2 text-[#6655a1] hover:opacity-50' href='mailto:italcordeiro.s@gmail.com'>{mostrarPrimeiroTexto ? textos[4] : textos[5]}
          </a>
          </div>
        </div>
      </div>
      <div className={`flex flex-col flex-wrap justify-center place-content-center bg-[#1A533F]  my-2 p-5 rounded-[120px] md:rounded-none ${styles.arrowContainer}`}>
        <Image className={`w-[50px] ${styles.arrow}`} src={Arrow} />
        <h1 className=' text-[#96a7a4] text-[100px] md:text-5xl md:tracking-wide md:leading-[80px] md:text-center'>
        {mostrarPrimeiroTexto ? texto1 : texto2}
        </h1>
        <div className='flex flex-row gap-8 md:justify-center'>
          <a href='#'>
            <Image className='w-[70px] hover:opacity-50 md:w-10 mt-4' src={IconInstagram} />
          </a>
          <a href='https://github.com/itforget'target='_blank'>
            <Image className='w-[70px] hover:opacity-50 md:w-10 mt-4' src={IconGithub} />
          </a>
          <a href='https://www.linkedin.com/in/%C3%ADtalo-cordeiro-238a4a21a/' target='_blank'>
            <Image className='w-[70px] hover:opacity-50 md:w-10 mt-4' src={IconLinkedin} />
          </a>
        </div>
      </div>
    </div>
  );
}
