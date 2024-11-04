import Image from 'next/image';
import clsx from 'clsx';

import hero from './hero.png';
import logo from './logo.png';
import logo2 from './logo-2.png';
import tele from './socials/tele.png';
import x from './socials/x.png';
import dex from './socials/dex.png';
import dexs from './socials/dexs.png';
import uni from './socials/uni.png';
import copy from './copy.svg';
import hamburger from './hamburger.svg';

export default function Hero() {
  return (
    <div className='relative'>
      <Image src={hero} fill priority alt='' className='object-cover' />
      <div className={clsx('relative', 'px-5 lg:px-10', 'py-4')}>
        <header className='flex items-center justify-between'>
          <div className='flex items-center gap-2'>
            <span className='text-xl font-bold lg:text-2xl xl:text-[27px]'>
              MOODENG
            </span>
            <Image
              src={logo}
              quality={100}
              width={70}
              alt=''
              className='w-[50px] lg:w-[70px]'
            />
          </div>
          <div
            className={clsx(
              'font-bold',
              '*:multi-[flex;items-center;gap-2]',
              '[&_img]:multi-[aspect-square;size-[24px];object-contain;rounded-md]',
              'gap-5 lg:gap-7',
              'hidden min-[790px]:multi-[`flex;[&+*]:hidden`]'
            )}
          >
            <a href={process.env.NEXT_PUBLIC_TELE_URL} target='_tele'>
              <Image src={tele} alt='' />
              <span>Telegram</span>
            </a>
            <a href={process.env.NEXT_PUBLIC_X_URL} target='_x'>
              <Image src={x} alt='' />
              <span>X</span>
            </a>
            <a href={process.env.NEXT_PUBLIC_DEX_URL} target='_dex'>
              <Image src={dex} alt='' />
              <span>Dextools</span>
            </a>
            <a href={process.env.NEXT_PUBLIC_DEXS_URL} target='_dexs'>
              <Image src={dexs} alt='' />
              <span>Dexscreener</span>
            </a>
            <a href={process.env.NEXT_PUBLIC_UNI_URL} target='_uni'>
              <Image src={uni} alt='' />
              <span>Uniswap</span>
            </a>
          </div>
          <button>
            <Image src={hamburger} height={30} alt='' />
          </button>
        </header>
        <Image
          src={logo2}
          priority
          quality={100}
          alt=''
          className='mx-auto mt-10'
        />
        <h1
          className={clsx(
            'text-gra-1 text-sha-1 text-center font-bold leading-none',
            'text-6xl lg:text-7xl xl:text-[82px]',
            'mt-5'
          )}
        >
          MOODENG
        </h1>
        <div
          className={clsx(
            'flex justify-center text-center text-[11px] font-bold',
            '*:multi-[bg-black;rounded-lg;basis-[148px];py-6;px-2]',
            'gap-5',
            'mt-5'
          )}
        >
          <section>MARKETCAP</section>
          <section>LIQUIDITY</section>
          <section>VOLUME (24h)</section>
        </div>
        <div
          className={clsx(
            'flex flex-col items-center justify-center sm:flex-row',
            'gap-2 sm:gap-5',
            'mt-5'
          )}
        >
          <div
            className={clsx(
              'text-center font-bold',
              'text-lg sm:text-xl lg:text-2xl'
            )}
          >
            CA:{' '}
            <span className='break-all'>
              {process.env.NEXT_PUBLIC_COIN_ADDRESS}
            </span>
          </div>
          <div className='shrink-0 overflow-hidden rounded-full border-2 border-primary/30'>
            <button
              className={clsx(
                'btn-1 flex items-center text-[20px] font-medium leading-none',
                'gap-1',
                'px-4',
                'py-2'
              )}
            >
              <Image src={copy} alt='' />
              <span>Copy</span>
            </button>
          </div>
        </div>
        <div className={clsx('text-center', 'mt-6')}>
          <h2 className='text-4xl font-extrabold lg:text-[40px]'>
            What is MOODENG?
          </h2>
          <article className='text-sm font-semibold italic leading-relaxed sm:text-[15px]'>
            <p className='font-bold'>
              Meet MooDeng, the Iconic Pygmy Hippo Inspiring $MOODENG!
            </p>
            <p className='lg:px-10'>
              {`MooDeng,the bouncy pygmy hippopotamus, was born on July 10, 2024, at the
            Khao Kheow Open Zoo in Thailand. Named by popular vote, "MooDeng"
            means "bouncy pig" or "pork patty," a nod to this lovable hippo's
            playful spirit and lively charm. Thanks to its adorable face,
            infectious energy combined with meme culture, MooDeng has taken the
            internet by storm, becoming a viral sensation across social media.`}
            </p>
          </article>
        </div>
      </div>
    </div>
  );
}