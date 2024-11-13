import clsx from 'clsx';
import Image from 'next/image';

import img2 from './image-2.png';

export default function Partner() {
  return (
    <div className='mx-auto w-full max-w-[1056px]'>
      <div
        className={clsx(
          'flex items-end justify-between',
          '[&_img]:hidden [&_img]:w-[120] sm:[&_img]:block sm:[&_img]:w-[150] lg:[&_img]:w-[200] xl:[&_img]:w-[241]',
          'px-5 lg:px-12 xl:px-24'
        )}
      >
        <Image src={img2} width={241} alt='' className='-scale-x-100' />
        <h2 className='shrink-0 grow pb-2 text-center text-3xl font-extrabold sm:pb-5 sm:text-4xl lg:text-[40px]'>
          PARTNER WITH
        </h2>
        <Image src={img2} width={241} alt='' />
      </div>
      <div className={clsx('rounded-md border-white', 'border', 'p-5 lg:p-10')}>
        <div
          className={clsx(
            'flex flex-wrap justify-center rounded-lg bg-white',
            'p-10',
            'gap-x-20',
            'gap-y-10',
            '[&_img]:multi-[max-h-[45px];object-contain]',
            '*:transition-all',
            '[&>*:hover]:!mix-blend-normal [&>*]:hover:mix-blend-luminosity'
          )}
        >
          <a href='https://www.bitget.com/spot/MOODENGETHUSDT' target='_bitget'>
            <img src='/socials/bitget.png' alt='' />
          </a>
          <a href='https://www.gate.io/trade/MOODENGETH_USDT' target='_gate'>
            <img src='/socials/gate.png' alt='' />
          </a>
          <a
            href='https://www.mexc.com/exchange/MOODENGETH_USDT'
            target='_mexc'
          >
            <img src='/socials/mexc.png' alt='' />
          </a>
          <a href='https://www.lbank.com/trade/moodengeth_usdt' target='_lbank'>
            <img src='/socials/lbank.png' alt='' />
          </a>
          <a
            href='https://www.superex.com/trade/MOODENGETH_USDT?utm_source=twitter&utm_medium=superexet'
            target='_superex'
          >
            <img src='/socials/superex.png' alt='' />
          </a>
          <a href='https://www.xt.com/en/trade/moodengeth_usdt' target='_xt'>
            <img src='/socials/xt.png' alt='' />
          </a>
          <a href='https://poloniex.com/trade/MOODENGETH_USDT' target='_polon'>
            <img src='/socials/polon.png' alt='' />
          </a>
          <a href='https://www.coinex.com/en/info/MOODENGETH' target='_coinex'>
            <img src='/socials/coinex.png' alt='' />
          </a>
          <a href='https://bingx.com/spot/MOODENGETHUSDT' target='_bingx'>
            <img src='/socials/bingx.png' alt='' />
          </a>
          <a
            href='https://www.bitmart.com/trade/en-US?symbol=MOODENGETH_USDT'
            target='_bitmap'
          >
            <img src='/socials/bitmap.png' alt='' />
          </a>
          <a href='https://kcex.com/exchange/MOODENGETH_USDT' target='_kcex'>
            <img src='/socials/kcex.png' alt='' />
          </a>
        </div>
      </div>
    </div>
  );
}
