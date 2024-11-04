'use client';

import {useEffect, useRef} from 'react';
import Playable from 'playable';

export default function VideoIntro() {
  const video = useRef<HTMLDivElement | null>(null);
  useEffect(() => {
    const player = Playable.create({
      src: '/video.mp4',
      poster: '/poster.png',
    });

    if (video.current && player.attachToElement) {
      player.attachToElement(video.current);
    }
  }, []);

  return (
    <div className='aspect-video w-[840px]'>
      <div ref={video} className='size-full'></div>
    </div>
  );
}
