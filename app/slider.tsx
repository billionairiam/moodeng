'use client';

import {
  useKeenSlider,
  KeenSliderPlugin,
  KeenSliderInstance,
} from 'keen-slider/react';
import 'keen-slider/keen-slider.min.css';

function ThumbnailPlugin(
  mainRef: React.MutableRefObject<KeenSliderInstance | null>
): KeenSliderPlugin {
  return (slider) => {
    function removeActive() {
      slider.slides.forEach((slide) => {
        slide.classList.remove('active');
      });
    }
    function addActive(idx: number) {
      slider.slides[idx].classList.add('active');
    }

    function addClickEvents() {
      slider.slides.forEach((slide, idx) => {
        slide.addEventListener('click', () => {
          if (mainRef.current) mainRef.current.moveToIdx(idx);
        });
      });
    }

    slider.on('created', () => {
      if (!mainRef.current) return;
      addActive(slider.track.details.rel);
      addClickEvents();
      mainRef.current.on('animationStarted', (main) => {
        removeActive();
        const next = main.animator.targetIdx || 0;
        addActive(main.track.absToRel(next));
        slider.moveToIdx(Math.min(slider.track.details.maxIdx, next));
      });
    });
  };
}

export default function Slider({images}: {images: string[]}) {
  const [sliderRef, instanceRef] = useKeenSlider<HTMLDivElement>({
    initial: 0,
  });
  const [thumbnailRef] = useKeenSlider<HTMLDivElement>(
    {
      initial: 0,
      slides: {
        perView: 'auto',
        spacing: 5,
      },
    },
    [ThumbnailPlugin(instanceRef)]
  );

  return (
    <div className='space-y-2'>
      <div ref={sliderRef} className='keen-slider'>
        {images.map((image, index) => (
          <div key={index} className='keen-slider__slide'>
            <img
              src={image}
              alt=''
              className='aspect-[16/12] w-full object-cover object-top'
            />
          </div>
        ))}
      </div>
      <div ref={thumbnailRef} className='keen-slider'>
        {images.map((image, index) => (
          <div
            key={index}
            className='keen-slider__slide aspect-square !w-[95px] shrink-0 cursor-pointer overflow-hidden rounded transition [&.active]:multi-[opacity-50;cursor-default]'
          >
            <img
              src={image}
              alt=''
              className='size-full object-cover object-top'
            />
          </div>
        ))}
      </div>
    </div>
  );
}
