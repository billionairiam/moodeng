import Image from 'next/image';
import clsx from 'clsx';

import Hero from './hero';
import t1 from './t1.png';
import t2 from './t2.png';

export default function Home() {
  return (
    <div className='mx-auto min-h-screen max-w-screen-2xl'>
      <Hero />
      <div className='bg-gra-1 py-10'>
        <div
          className={clsx(
            'flex items-center justify-center',
            '*:multi-[max-w-[min(550px,40%)]]',
            'gap-10 lg:gap-20 xl:gap-32',
            'max-md:multi-[`flex-col;[&>*]:max-w-[80%]`]'
          )}
        >
          <Image src={t1} alt='' />
          <Image src={t2} alt='' />
        </div>
      </div>
    </div>
  );
}
