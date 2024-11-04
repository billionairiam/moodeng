import clsx from 'clsx';
import Image from 'next/image';

import circle from './circle.svg';

export default function Roadmap() {
  return (
    <div
      className={clsx(
        'w-full max-w-[1056px] rounded-md border-white',
        'sm:border',
        'sm:p-5 lg:p-10'
      )}
    >
      <div
        className={clsx(
          'bg-[rgba(68,_58,_46,_1)]',
          'pt-10 lg:pt-16',
          'pb-5 lg:pb-10',
          'px-10 lg:px-14'
        )}
      >
        <h2
          className={clsx(
            'font-bold leading-none',
            'text-4xl sm:text-5xl lg:text-6xl xl:text-[64px]'
          )}
        >
          Moodeng ETH journey
        </h2>
        <div
          className={clsx(
            'font-bold',
            '*:multi-[flex;items-baseline;gap-5]',
            '[&>section>img]:translate-y-1',
            '[&>section>img]:w-[35px] lg:[&>section>img]:w-[40px]',
            '[&>section>img]:hidden sm:[&>section>img]:block',
            '[&>section>div]:multi-[flex;gap-10]',
            'lg:[&>section>div]:gap-10',
            '[&>section>div]:flex-col lg:[&>section>div]:flex-row',
            '[&_h4]:multi-[shrink-0;leading-none]',
            '[&_h4]:text-3xl lg:[&_h4]:text-[40px]',
            'sm:[&_h4]:w-[250px] lg:[&_h4]:w-[300px]',
            '[&_article]:space-y-5',
            '[&_article>h5]:multi-[text-2xl;font-extrabold]',
            '[&_article_a]:multi-[text-[rgba(255,_147,_0,_1)];underline]',
            'text-[18px]',
            'space-y-10',
            'mt-5',
            'py-20'
          )}
        >
          <section>
            <Image src={circle} alt='' />
            <div>
              <h4>Sep 16th, 2024</h4>
              <div>
                <article>
                  Ethereum MOODENG was born at 4:12 am on September 16,
                  2024Total amount: 420.69 billion
                </article>
              </div>
            </div>
          </section>

          <section>
            <Image src={circle} alt='' />
            <div>
              <h4>Oct, 2024</h4>
              <div>
                <article>
                  <h5>Activity</h5>
                  <p>
                    $PEPE’s Dev endorsed $MOODENG, boosting interest with{' '}
                    <a href={process.env.NEXT_PUBLIC_X_URL} target='_blank'>
                      tweets
                    </a>{' '}
                    about his holdings.
                  </p>
                  <p>
                    Oct 5: Vitalik Buterin{' '}
                    <a href={process.env.NEXT_PUBLIC_X_URL} target='_blank'>
                      sold
                    </a>{' '}
                    10.6B $MOODENG tokens, drawing attention and comparisons to
                    his $SHIB sales.
                  </p>
                  <p>
                    Oct 28: Proceeds from Vitalik’s $MOODENG sales (400 ETH)
                    were{' '}
                    <a href={process.env.NEXT_PUBLIC_X_URL} target='_blank'>
                      donated
                    </a>{' '}
                    to Ukrainian humanitarian organizations.
                  </p>
                  <p>Even & Donation</p>
                  <p>
                    Oct 6: $MOODENG airdropped 1.1B tokens (valued at $40K) to
                    Neiro whale holders to strengthen community bonds.
                  </p>
                  <p>
                    Oct 14: $MOODENG community donated 20,000 RMB in Beijing to
                    support children of parents affected by pneumoconiosis.
                  </p>
                  <p>
                    Oct 16: $MOODENG Foundation donated 49,500 Baht to the Thai
                    Red Cross for emerging disease research. ......
                  </p>
                </article>
              </div>
            </div>
          </section>

          <section>
            <Image src={circle} alt='' />
            <div>
              <h4>Oct, 2024</h4>
              <div>
                <article>
                  <h5>The Future and Beyond</h5>
                  <p>Exchange Listings:</p>
                  <p>
                    In progress, with Bitget onboard; aiming for Binance, OKX,
                    Huobi, Coinbase, and Bybit.
                  </p>
                  <p>Market Cap Targets:</p>
                  <p>$500M → $3B → $50B</p>
                  <p>Wallet Milestones:</p>
                  <p>Surpassed 10K addresses (achieved); aiming for 500K.</p>
                  <h5>Vision</h5>
                  <p>Our goal is to:</p>
                  <p>
                    Become the top hippo-themed meme coin. Be listed on all
                    major exchanges.
                  </p>
                  <p>
                    Bridge Web2 and Web3, positioning $MOODENG to rival $DOGE,
                    $SHIB, and $PEPE, with a DAO-driven charity model enhancing
                    Web3 philanthropy.
                  </p>
                </article>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
