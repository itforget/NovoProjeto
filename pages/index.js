import { Roboto } from 'next/font/google';
import Logo from '/public/images/logo.png';
import Image from 'next/image';
import IconInstagram from '/public/images/instagram.png';
import IconGithub from '/public/images/github.png';
import IconLinkedin from '/public/images/linkedin.png';
import Arrow from '/public/images/computer.png';
import styles from '/styles/Home.module.css'; 
import React, { useState } from 'react';

const roboto = Roboto({
  weight: ['400', '500', '700'],
  subsets: ['latin'],
});


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

  const texto3 = "SOBRE"
  const texto4 = "ABOUT"
  const texto5 = "PROJETOS"
  const texto6 = "PROJECTS"
  const texto7 = "CONTATO"
  const texto8 = "CONTACT"
  
  const alternarTexto = () => {
    setMostrarPrimeiroTexto(!mostrarPrimeiroTexto);
  };
  return (
    <div>
      <div className='bg-[#062C26] flex items-center justify-between'>
        <Image className='w-[120px] ml-6' src={Logo} alt='logo' />
        <div className='flex items-center gap-[80px] text-lg font-bold text-[#96a7a4] mr-[80px]'>
          <div className='border-[#96a7a4] border-2 rounded-xl p-2 text-[#96a7a4] flex gap-2 '>
          <span>PT-BR</span>
          <label className="switch">
            <input type="checkbox" value="Alternar Texto" onClick={alternarTexto} />
            <span className="slider round"></span>
          </label>
          <span>ENG</span>
          </div>
          <a className='hover:opacity-50 border-[#96a7a4] border-2 rounded-xl p-2 text-[#96a7a4]' href='#SOBRE'>{mostrarPrimeiroTexto ? texto3 : texto4}</a>
          <a className='hover:opacity-50 border-[#96a7a4] border-2 rounded-xl p-2 text-[#96a7a4]' href='#PROJETOS'>{mostrarPrimeiroTexto ? texto5 : texto6}</a>
          <a className='border-[#6655a1] border-2 rounded-xl p-2 text-[#6655a1] hover:opacity-50' href='mailto:italcordeiro.s@gmail.com'>
          {mostrarPrimeiroTexto ? texto7 : texto8}
          </a>
        </div>
      </div>
      <div className={`bg-[#1A533F] mx-[250px] my-10 p-5 rounded-2xl ${styles.arrowContainer}`}>
        <Image className={`w-[50px] ${styles.arrow}`} src={Arrow} />
        <h1 className='text-[#96a7a4] text-[100px]'>
        {mostrarPrimeiroTexto ? texto1 : texto2}
        </h1>
        <div className='flex flex-row gap-8'>
          <a href='#'>
            <Image className='w-[70px] hover:opacity-50' src={IconInstagram} />
          </a>
          <a href='https://github.com/itforget'target='_blank'>
            <Image className='w-[70px] hover:opacity-50' src={IconGithub} />
          </a>
          <a href='https://www.linkedin.com/in/%C3%ADtalo-cordeiro-238a4a21a/' target='_blank'>
            <Image className='w-[70px] hover:opacity-50' src={IconLinkedin} />
          </a>
        </div>
      </div>
    </div>
  );
}
