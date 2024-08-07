import dynamic from 'next/dynamic';
import Head from 'next/head';
import Script from 'next/script';

const DynamicLandingPage = dynamic(() => import('./landingpage/HomeLanding'), {
  loading: () => <div className='w-full h-screen flex items-center justify-center mx-auto text-center'><p className='flex'>Loading...</p></div>
})

export default function Home() {
  const homeContent = "Sublime Islands is your one-stop destination for an unforgettable trip to Andamans. With our carefully crafted packages, you can explore the best of the islands while enjoying top-notch accommodation, dining experiences, and shopping opportunities. We are committed to transparency in all aspects of our services, from booking your hotel and ferry tickets to providing live tracking for your ferry. Trust us to help you create memories that you'll cherish for a lifetime. Book your trip with us today and embark on a journey of a lifetime!"
  return (
    <>
      <Head>
        <title>Sublime Island - The Whole World Awaits - "Take only memories, leave only footprint's"</title>
        <meta name="description" content={homeContent} />
        <meta name="keywords" content={homeContent} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="font-Montserrat">
        <Script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-5027162336385222"
          crossorigin="anonymous" />
        <DynamicLandingPage />
      </main>
    </>
  );
}
