const StarShield = () => {
  const asset = (fileName) => `${import.meta.env.BASE_URL}Assets/${fileName}`

  return (
    <section className='shield-page overflow-hidden'>
      <div className='shield-header relative h-[90vh] w-screen overflow-hidden'>
        <img src={asset('hero_Sheild.webp')} alt='' className='h-full w-full object-cover brightness-75' />
        <div className='absolute inset-0 bg-gradient-to-l from-black/80 via-black/40 to-black/40'></div>

        <div className='shield-header-copy absolute left-20 top-1/2 -translate-y-1/2 text-white z-10'>
          <h1 className='uppercase text-7xl font-extrabold'>Starshield</h1>
          <p className='mt-6 max-w-xl text-lg text-gray-200'>Trusted satellite infrastructure for national security missions, resilient communications, and resilient data delivery.</p>
        </div>
      </div>

      <article className='shield-intro relative bg-black px-10 py-20 text-white'>
        <div className='max-w-6xl mx-auto'>
          <ul className='space-y-5'>
            <li className='text-3xl uppercase font-extrabold'>Building the foundation for secure space access</li>
            <li className='text-gray-300'>Starshield leverages SpaceX's Starlink technology and launch capability to support national security efforts. <br /> While Starlink is designed for consumer and commercial use, Starshield is designed for government use, with an <br /> initial focus on three areas:</li>
          </ul>

          <div className='shield-capabilities flex gap-4 ml-5 mr-5 relative mt-12'>
            <ul>
              <hr />

              <div className='mt-6'>
                <img src={asset('icons/icon-security.webp')} alt='' className='absolute' />
                <li className='uppercase text-2xl pb-10 ml-20 pt-3 font-extrabold'>earth observation</li>
              </div>

              <li>Starshield launches satellites with sensing payloads and delivers processed data directly to the user.</li>
            </ul>

            <ul>
              <hr />
              <div className='mt-6'>
                <img src={asset('icons/icon-connected.webp')} alt='' className='absolute' />
                <li className='uppercase text-2xl pb-10 ml-20 pt-3 font-extrabold'>communications</li>
              </div>
              <li>Starshield provides assured global communications to government users with Starshield user equipment.</li>
            </ul>

            <ul>
              <hr />
              <div className='mt-6'>
                <img src={asset('icons/icon-payloads.webp')} alt='' className='absolute' />
                <li className='uppercase text-2xl pb-10 ml-20 pt-3 font-extrabold'>hosted payloads</li>
              </div>
              <li>Starshield builds satellite buses to support the most demanding customer payload missions.</li>
            </ul>
          </div>
        </div>
      </article>

      <article className='shield-feature h-full w-screen relative'>
        <div className='absolute top-0 right-0 h-full w-250 bg-gradient-to-l from-black/90 via-black/70 to-transparent'></div>
        <img src={asset('capacity.webp')} alt='' />

        <ul className='shield-feature-copy absolute right-30 top-100 text-white flex flex-col items-end w-120'>
          <li className='section-title text-start w-120 uppercase text-5xl font-extrabold pb-5 text-gray-300'>security</li>
          <li>Starlink already offers unparalleled end-to-end user data encryption. Starshield uses additional high-assurance cryptographic capability to host classified payloads and process data securely, meeting the most demanding government requirements.</li>
        </ul>
      </article>

      <article className='shield-feature w-screen h-screen relative'>
        <div className='absolute top-0 right-0 h-full w-250 bg-gradient-to-l from-black/90 via-black/70 to-transparent'></div>
        <img src={asset('modular-design.webp')} alt='' />
        <ul className='shield-feature-copy absolute right-30 top-80 text-white flex flex-col items-end w-120'>
          <li className='section-title text-start w-120 uppercase text-5xl font-extrabold pb-5 text-gray-300'>Modular design</li>
          <li>Designed to meet diverse mission requirements, Starshield satellites are capable of integrating a wide variety of payloads, offering unique versatility to users.</li>
        </ul>
      </article>

      <article className='shield-feature w-screen h-screen relative'>
        <div className='absolute top-0 left-0 h-full w-250 bg-gradient-to-r from-black/90 via-black/70 to-transparent'></div>
        <img src={asset('interoperability.webp')} alt='' />
        <ul className='shield-feature-copy absolute left-30 top-80 text-white flex flex-col items-end w-120'>
          <li className='section-title text-start w-120 uppercase text-5xl font-extrabold pb-5 text-gray-300'>Interoperability</li>
          <li>Starshield is built to interoperate with existing government systems and mission architectures for seamless data sharing and rapid deployment.</li>
        </ul>
      </article>
    </section>
  )
}

export default StarShield
