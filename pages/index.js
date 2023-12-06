import { Roboto } from 'next/font/google';
import Logo from '/public/images/logo.png';
import Image from 'next/image';
import IconInstagram from '/public/images/instagram.png';
import IconGithub from '/public/images/github.png';
import IconLinkedin from '/public/images/linkedin.png';
import Arrow from '/public/images/computer.png';
import styles from '/styles/Home.module.css'; // Import the CSS file for styling

const roboto = Roboto({
  weight: ['400', '500', '700'],
  subsets: ['latin'],
});

export default function Home() {
  return (
    <div>
      <div className='bg-[#062C26] flex items-center justify-between'>
        <Image className='w-[120px] ml-6' src={Logo} alt='logo' />
        <div className='flex items-center gap-[80px] text-lg font-bold text-[#96a7a4] mr-[80px]'>
          <a className='hover:opacity-50 border-[#96a7a4] border-2 rounded-xl p-2 text-[#96a7a4]' href='#SOBRE'>SOBRE</a>
          <a className='hover:opacity-50 border-[#96a7a4] border-2 rounded-xl p-2 text-[#96a7a4]' href='#PROJETOS'>PROJETOS</a>
          <a className='border-[#6655a1] border-2 rounded-xl p-2 text-[#6655a1] hover:opacity-50' href='mailto:italcordeiro.s@gmail.com'>
            CONTATO
          </a>
        </div>
      </div>
      <div className={`bg-[#1A533F] mx-[250px] my-10 p-5 rounded-2xl ${styles.arrowContainer}`}>
        <Image className={`w-[50px] ${styles.arrow}`} src={Arrow} />
        <h1 className='text-[#96a7a4] text-[100px]'>
          Olá <br />
          Meu nome é <span className='text-[#6655a1]'>Ítalo Cordeiro</span>
          <br /> sou um futuro <span className='text-[#6655a1]'>desenvolvedor</span> morando em Brasilia, Brasil.
        </h1>
        <div className='flex flex-row gap-8'>
          <a href='#nao'>
            <Image className='w-[70px] hover:opacity-50' src={IconInstagram} />
          </a>
          <a href='#nao'>
            <Image className='w-[70px] hover:opacity-50' src={IconGithub} />
          </a>
          <a href='#nao'>
            <Image className='w-[70px] hover:opacity-50' src={IconLinkedin} />
          </a>
        </div>
      </div>
    </div>
  );
}
