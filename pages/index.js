import Head from 'next/head'

export default function Home() {
  return (
    <div className="font-fe bg-dark-cyan min-h-screen relative flex overflow-hidden">
      <img src="images/bg-pattern-top.svg" alt="bg pattern top" className="absolute -top-1/2 -left-1/3" />
      <img src="images/bg-pattern-bottom.svg" alt="bg pattern bottom" className="absolute -bottom-3/4  -right-1/4" />
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="flex-1 flex flex-col items-center justify-center z-10">

        <div className="w-2xl bg-white shadow-xl rounded-2xl overflow-hidden">
          <img src="images/bg-pattern-card.svg" alt="card background pattern" className="w-full" />

          <div className="flex flex-col items-center pb-7 border-b border-gray-300">
            <img src="images/image-victor.jpg" alt="Vector's image" className="rounded-full -mt-14 border-8 border-white" />
            <p className="mt-6 font-bold text-lg text-very-dark-blue">Victor Crest <span className="font-normal text-dark-gray ml-1">26</span></p>
            <p className="mt-1 text-dark-gray">London</p>
          </div>

          <div className="flex w-full py-6">

            <div className="flex-1 flex flex-col items-center justify-center">
              <p className="font-bold text-lg text-very-dark-blue">
                80K
              </p>
              <p className="tracking-widest text-xs text-dark-gray">
                Followers
              </p>
            </div>

            <div className="flex-1 flex flex-col items-center justify-center">
              <p className="font-bold text-lg text-very-dark-blue">
                803K
              </p>
              <p className="tracking-widest text-xs text-dark-gray">
                Likes
              </p>
            </div>

            <div className="flex-1 flex flex-col items-center justify-center">
              <p className="font-bold text-lg text-very-dark-blue">
                1.4K
              </p>
              <p className="tracking-widest text-xs text-dark-gray">
                Photos
              </p>
            </div>
          </div>
        </div>

        <footer className="attribution mt-4">
          Challenge by <a className="text-white underline" href="https://www.frontendmentor.io?ref=challenge" target="_blank">Frontend Mentor</a>.
          Coded by <a className="text-white underline" href="https://twitter.com/alqa7tani">Ahmed AlQahtani</a>.
        </footer>
      </div>
    </div>
  )
}
