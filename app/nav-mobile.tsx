import Image from 'next/image';
import clsx from 'clsx';

import logo from './logo.png';
import arrow from './arrow.svg';

interface NavMobileProps {
  onClose: () => void;
}

export default function NavMobile({onClose}: NavMobileProps) {
  return (
    <div className='fixed inset-0 z-50 flex flex-col bg-primary'>
      <header className='flex items-center justify-between bg-white px-5 py-6'>
        <div className='flex items-center gap-2 font-semibold leading-none text-black'>
          <span className='text-xs sm:text-base'>MOODENG</span>
          <Image src={logo} width={30} alt='' />
        </div>
        <button className='text-black sm:text-xl' onClick={onClose}>
          X
        </button>
      </header>
      <nav
        className={clsx(
          'grow',
          '*:multi-[flex;justify-between;pt-4]',
          'p-5',
          'divide-y divide-white',
          'space-y-4',
          'font-semibold'
        )}
      >
        <a href={process.env.NEXT_PUBLIC_TELE_URL} target='_tele'>
          <span>Telegram</span>
          <Image src={arrow} alt='' />
        </a>
        <a href={process.env.NEXT_PUBLIC_X_URL} target='_x'>
          <span>X</span>
          <Image src={arrow} alt='' />
        </a>
        <a href={process.env.NEXT_PUBLIC_DEX_URL} target='_dex'>
          <span>Dextools</span>
          <Image src={arrow} alt='' />
        </a>
        <a href={process.env.NEXT_PUBLIC_DEXS_URL} target='_dexs'>
          <span>Dexscreener</span>
          <Image src={arrow} alt='' />
        </a>
        <a href={process.env.NEXT_PUBLIC_UNI_URL} target='_uni'>
          <span>Uniswap</span>
          <Image src={arrow} alt='' />
        </a>
      </nav>
      <style jsx global>{`
        body {
          overflow: hidden;
        }
      `}</style>
    </div>
  );
}
