import React, { useState } from 'react';
import Nav from './components/Nav'

export default function Sobre() {
  const [mostrarPrimeiroTexto, setMostrarPrimeiroTexto] = useState(true);

  const textos = ["SOBRE", "ABOUT", "PROJETOS", "PROJECTS", "CONTATO", "CONTACT"]
  
  const alternarTexto = () => {
    setMostrarPrimeiroTexto(!mostrarPrimeiroTexto);
  };
  return (
    <div>
        <Nav />
      <div className="flex flex-col flex-wrap justify-center place-content-center bg-[#1A533F]  my-2 p-5 rounded-[120px] md:rounded-none">
        <h1>PROJETOS</h1>
      </div>
    </div>
  );
}
