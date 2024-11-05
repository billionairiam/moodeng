import Image from 'next/image';
import clsx from 'clsx';

import Hero from './hero';
import VideoIntro from './video-intro';
import Roadmap from './roadmap';

import t1 from './t1.png';
import t2 from './t2.png';
import mainImg from './main.png';

export default function Home() {
  return (
    <div className='mx-auto min-h-screen max-w-screen-3xl'>
      <Hero />
      <div className='bg-gra-1 py-10'>
        <div
          className={clsx(
            'flex items-center justify-center',
            '*:multi-[max-w-[min(550px,40%)]]',
            'gap-10 lg:gap-20 xl:gap-32',
            'max-md:multi-[`flex-col;[&>*]:max-w-[90%]`]'
          )}
        >
          <Image src={t1} alt='' />
          <Image src={t2} alt='' />
        </div>
        <div className='relative z-10 mx-5 mt-10 flex justify-center sm:mx-10 lg:mt-20'>
          <VideoIntro />
        </div>
        <div className='relative contain-layout'>
          <Image
            src={mainImg}
            alt=''
            className='absolute top-[-10%] max-h-[75%] w-full object-contain'
          />
          <div className='mx-5 mt-10 flex justify-center sm:mx-10 lg:mt-20'>
            <Roadmap />
          </div>
        </div>
      </div>
    </div>
  );
}
