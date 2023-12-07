import Image from "next/image"
import Logo from '/public/images/logo.png';
import { useState } from "react";


export default function Sobre(){
    const [mostrarPrimeiroTexto, setMostrarPrimeiroTexto] = useState(true);
    const textos = ["SOBRE", "ABOUT", "PROJETOS", "PROJECTS", "CONTATO", "CONTACT"]
  
    const alternarTexto = () => {
      setMostrarPrimeiroTexto(!mostrarPrimeiroTexto);
    };

    return(
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
          <div className='flex gap-5 ml-[50px] '>
          <a className='hover:opacity-50 border-[#96a7a4] border-2 rounded-xl p-2 text-[#96a7a4]' href='#SOBRE'>{mostrarPrimeiroTexto ? textos[0] : textos[1]}</a>
          <a className='hover:opacity-50 border-[#96a7a4] border-2 rounded-xl p-2 text-[#96a7a4]' href='#PROJETOS'>{mostrarPrimeiroTexto ? textos[2] : textos[3]}</a>
          <a className='border-[#6655a1] border-2 rounded-xl p-2 text-[#6655a1] hover:opacity-50' href='mailto:italcordeiro.s@gmail.com'>{mostrarPrimeiroTexto ? textos[4] : textos[5]}
          </a>
          </div>
        </div>
      </div>
    )
}