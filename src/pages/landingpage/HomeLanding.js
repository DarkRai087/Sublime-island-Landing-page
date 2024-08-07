import dynamic from 'next/dynamic';

const DynamicBodyArea = dynamic(() => import('../../components/BodyArea/BodyArea'), {
  loading: () => <div className='w-full h-screen flex items-center justify-center mx-auto text-center'><p className='flex'>Loading...</p></div>,
})

const DynamicHeroSection = dynamic(() => import('../../components/HeroSection/Hero'), {
  loading: () => <div className='w-full h-screen flex items-center justify-center mx-auto text-center'><p className='flex'>Loading...</p></div>,
})

const DynamicNewNav = dynamic(() => import('@/components/NewNav/NewNav'), {
  loading: () => <div className='w-full h-screen flex items-center justify-center mx-auto text-center'><p className='flex'>Loading...</p></div>
})

const DynamicFooterSection = dynamic(() => import('@/components/FooterSection/FooterSection'), {
  loading: () => <div className='w-full h-screen flex items-center justify-center mx-auto text-center'><p className='flex'>Loading...</p></div>
})

const HomeLanding = () => {
  return (
    <>
      <DynamicNewNav />
      <DynamicHeroSection />
      <DynamicBodyArea />
      <DynamicFooterSection />
    </>
  );
};

export default HomeLanding;
