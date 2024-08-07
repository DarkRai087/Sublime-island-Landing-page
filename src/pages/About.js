import Image from 'next/image';
import Head from 'next/head';
import Script from 'next/script';

import PageNavbar from '@/components/PageNavbar/PageNavbar';
import PageFooter from '../components/PageFooter/PageFooter';
import about from '../Images/about.png';
import aboutHero2 from '../Images/digital-nomad-working-near-beach-1.png'
import aboutHero1 from '../Images/aboutHero1.png'

const About = () => {
  const aboutContent = "Sublime Islands is your one-stop destination for an unforgettable trip to Andamans. With our carefully crafted packages, you can explore the best of the islands while enjoying top-notch accommodation, dining experiences, and shopping opportunities. We are committed to transparency in all aspects of our services, from booking your hotel and ferry tickets to providing live tracking for your ferry. Trust us to help you create memories that you'll cherish for a lifetime. Book your trip with us today and embark on a journey of a lifetime!"
  const aboutContent2 = "As a travel company, we Provide 10 Plus services and 100+ active team information about our travel page and the wide range of services we provide. Our travel page serves as a comprehensive platform where travellers can explore and book various travel experiences. Here are some key features and services we offer : Flight Booking , Ferry Tracking, Tour Packages, Ship Booking, Inter-Island Ferry Booking"

  return (
    <>
      <Head>
        <title>About - Sublime Islands</title>
        <meta name="keywords" content={aboutContent} />
      </Head>
      <Script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-5027162336385222"
        crossorigin="anonymous" />
      <PageNavbar />
      <div className='bg-white text-black p-5 pt-10'>
        <div>
          <hr className='md:hidden h-0.5 mb-1 w-[36em] bg-[#484C52]' />
          <h1 className='text-8xl md:text-7xl font-["Montserrat"] font-bold'>ABOUT US.</h1>
          <hr className='md:hidden h-0.5 mb-1 w-[36em] bg-[#484C52] ' />
          <div className='flex justify-center items-center'>
            <div className='mt-10 w-[80rem] bg-[length:100%_100%] bg-no-repeat flex justify-evenly'>
              <Image src={aboutHero1} width={2160} className='w-5/6 h-[450px] md:h-[350px] md:w-full contrast-125 brightness-105 rounded-md md:object-cover object-contain' />
            </div>
          </div>
          <div className='flex p-10 md:p-3 items-center justify-center'>
            <Image src={aboutHero2} className='md:hidden w-96 h-80 ' alt="A man working in his laptop in the beach in a stench chair near a coconut tree with sun in the midway to sunset" />
            <div className='font-["Montserrat"]'>
              <h1 className='p-5 font-bold text-2xl'>WE ARE SUBLIME ANDAMAN</h1>
              <p className='p-5 pt-0 font-medium leading-9 uppercase'>{aboutContent2}</p>
            </div>
          </div>
        </div>
      </div>

      <div className='w-1/4 h-[1px] bg-white flex text-black text-center items-center justify-center mx-auto'>
      </div>

      <div className="bg-white text-black">
        <div className="pt-10">
          <div className="text-center">
            <h1 className="text-4xl font-bold lg:text-3xl aboutTop">
              Feel The Nature With US
            </h1>
            <p className="mx-auto mt-6 w-3/5 md:w-4/5 font-serif text-lg lg:text-base lg:font-normal font-medium">
              " Experience the allure of Andaman Islands in all its grandeur with Sublime Islands - Where luxury, adventure, and nature unite for a truly sublime escape. "
            </p>
          </div>
          <div className="mt-16 lg:mt-5 flex flex-row items-center w-full justify-center lg:flex-col">
            <div className="flex flex-col lg:justify-center lg:items-center">
              <div className="mr-10 lg:mr-0 text-3xl mt-0 lg:mt-9 font-bold">
                <h1 className="lg:text-center text-left text-4xl lg:text-3xl">12 Services</h1>
                <p className='text-4xl lg:text-3xl'>100+ Active Team</p>
              </div>
              <div className="mt-5">
                <h1 className="text-3xl mb-2 font-bold lg:text-center">Our services</h1>
                <ul className="list-disc pl-5 font-mono text-base">
                  <li>Flight Booking</li>
                  <li>Ferry Tracking</li>
                  <li>Tour Packages</li>
                  <li>Ship Booking</li>
                  <li>Inter-Island Ferry Booking</li>
                </ul>
              </div>
            </div>
            <Image
              src={about}
              alt="A Scenic pic of a 22 year old man sitting on the rocks beneath the natural bridge aka howra bridge in Neil Island aka Shaheed Dweep"
              className="block h-80 w-80 lg:h-64 lg:w-64 rounded-full lg:mr-0 mr-16 mt-8"
              priority
            />
            <div className="mt-0 lg:mt-10">
              <h1 className="mb- text-center text-4xl font-bold">Top Destination's</h1>
              <div className="flex gap-3 mt-5">
                {/* <div>
                <Image src={person1} alt="about" className="w-24 rounded-xl" />
                <p className='mt-2'>Dinesh Lal</p>
                <p className="font-bold">Co-Founder</p>
              </div>
              <div>
                <Image src={person2} alt="about" className="w-24 rounded-xl" />
                <p className='mt-2'>M Vinod</p>
                <p className="font-bold">Co-Founder</p>
              </div>
              <div>
                <Image src={person1} alt="about" className="w-24 rounded-xl" />
                <p className='mt-2'>Sourav Paul</p>
                <p className="font-bold">CTO</p>
              </div> */}
                <ul className="list-disc pl-5 font-mono text-base">
                  <li>Havelock - Swaraj Dweep</li>
                  <li>Neil Island - Shaheed Dweep</li>
                  <li>Jolly Buoy Island</li>
                  <li>Ross Island</li>
                  <li>Baratang</li>
                  <li>Diglipur</li>
                  <li>Rangat</li>
                  <li>Hutbay - Little Andaman</li>
                </ul>
              </div>
            </div>
          </div>
          <div className="my-16 text-center">
            <h1 className="text-4xl font-bold lg:text-3xl aboutTop">Stay Connected</h1>
            <p className="mx-auto mt-6 w-3/5 md:w-4/5 font-serif text-lg font-normal">
              " Stay connected with Sublime Islands and discover a world of breathtaking beauty, thrilling adventures, and unforgettable moments in Andaman Islands. "
            </p>
          </div>
        </div>
        <PageFooter />
      </div>
    </>
  );
};

export default About;
