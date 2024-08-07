import Categories from './Categories';

const Hero = () => {

  return (
    <div className="bgHero h-[700px]">

      {/* <p className='text-slate-50 text-center pt-5'>Check our Services! 👇🏻🧳🌏</p> */}
      <Categories />

      <div div className="mx-auto mt-32 w-4/5 text-center text-white lg:mt-20">
        <h1 className="text-6xl font-bold lg:text-4xl md:text:xl">
          The Whole World Awaits
        </h1>
        <p className="mt-4 text-lg font-mono font-light">
          "Take only memories, leave only footprint's".
        </p>
      </div>

      {/* <Link href={"/ConnectUs"}>
        <div className='mt-20 w-44 font-mono mx-auto px-1 text-base bg-gradient-to-br from-red-600 via-red-700 to-purple-700 text-center rounded-lg p-2 text-white'>Connect with Us</div>
      </Link> */}

      <p className='text-white underline text-center mt-60 text-sm'>There is a Special Offer on this Festive Tourism Season, flat 40% off 🎉🔥!</p>
    </div >
  );
};

export default Hero;
