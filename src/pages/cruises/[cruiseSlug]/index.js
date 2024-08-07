import Image from "next/image";
import Link from "next/link";
import Head from "next/head";
import Script from "next/script";
import { PhotoProvider, PhotoView } from "react-photo-view";
import { MdKeyboardArrowRight } from "react-icons/md";
import { cruisesData } from "@/data/cruisesData";
import PageNavbar from "@/components/PageNavbar/PageNavbar";
import PageFooter from "@/components/PageFooter/PageFooter";
import Routes from "@/components/BodyArea/BodyItems/BestCruises/Routes";
import InquiryBox from "@/components/BodyArea/BodyItems/BestCruises/InquiryBox";
import "react-photo-view/dist/react-photo-view.css";

import { useState } from "react";

const index = ({ cruise }) => {
  const [routeData, setRouteData] = useState(null);
  const handleRouteData = (selectedRoute) => {
    setRouteData(selectedRoute);
  };
  return (
    <>
      <Head>
        <title>{cruise.name}</title>
        <meta name="keywords" content={cruise.description} />
      </Head>
      <PageNavbar />
      <Script
        async
        src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-5027162336385222"
        crossOrigin="anonymous"
      />
      <section className="sxl:px-5 ms:h-96 sxs:h-[340px] ms:bg-[#FF8682] bg-white px-[104px] py-[60px] font-Montserrat text-[#112211] sm:px-5 sm:py-5 xs:h-[360px]">
        {/* -------------------Navigation---------------- */}
        <div className=" ms:mb-3 mb-[30px] flex items-center gap-2">
          <Link href={"/"} className="ms:text-slate-100 text-[#FF8682]">
            Cruises
          </Link>
          <span>
            <MdKeyboardArrowRight />
          </span>
          <span className="text-[#112211]">{cruise.name}</span>
        </div>
        <>
          {" "}
          <div className="flex items-center justify-between">
            <div className="flex items-center md:flex-col md:items-start">
              <h1 className="text-4xl font-bold sm:text-xl lexs:text-sm">
                {cruise.name}{" "}
              </h1>
            </div>
          </div>
        </>
        {/*------------------ cruise Images---------------- */}
        <div>
          {" "}
          <PhotoProvider>
            <div
              className={`ms:mt-5 mt-8 grid gap-2 overflow-hidden rounded-xl ${cruise.images.length === 1 ? "grid-cols-1" : "grid-cols-2"
                }`}
            >
              <PhotoView src={cruise.images[0]}>
                <Image
                  src={cruise.images[0]}
                  alt={cruise.name}
                  width={720}
                  height={1080}
                  priority
                  className={`col-span-1 cursor-pointer object-cover ${cruise.images.length === 1
                      ? "mx-auto w-[65%] rounded-xl"
                      : "h-full w-full"
                    }`}
                />
              </PhotoView>
              <div className="col-span-1">
                <div className="grid grid-cols-2 gap-2 ">
                  {cruise.images.slice(1).map((image, i) => (
                    <PhotoView key={i} src={image}>
                      <Image
                        key={i}
                        tabIndex={i}
                        height={1080}
                        width={720}
                        priority
                        src={image}
                        alt={cruise.name}
                        className="h-[100vh] max-h-[16.67vw] w-full cursor-pointer object-cover"
                      />
                    </PhotoView>
                  ))}
                </div>
              </div>
            </div>{" "}
          </PhotoProvider>
        </div>
        <div className="my-10 flex h-auto w-full flex-col px-8 py-8 font-Montserrat xll:px-0">
          <div className="mx-auto">
            <span className="text-4xl font-semibold text-slate-900">
              Routes
            </span>
          </div>
          <div className="flex justify-between gap-x-4 lg:flex-col">
            {cruise.routes.length !== 0 ? (
              <>
                <div className="mt-4 flex w-3/5 flex-col items-center rounded-xl bg-gray-100 p-2 pl-4 lg:w-full">
                  <Routes
                    routes={cruise.routes}
                    onRouteData={handleRouteData}
                  />
                </div>
                <div className="flex w-2/5 items-start justify-center pt-4 lg:w-full">
                  <div className="sticky top-4">
                    <InquiryBox routeData={routeData} />
                  </div>
                </div>
              </>
            ) : (
              <div className="mt-4 flex h-[58vh] flex-col items-center justify-center rounded-xl bg-gray-100 p-2 pl-4 w-full">
                <p className="mt-4 flex h-24 bg-gray-100 text-2xl font-semibold">
                  Nothing to show here
                </p>
              </div>
            )}
          </div>
        </div>
        <div className="my-10 flex h-auto w-full flex-col px-2 py-4 font-Montserrat sm:px-1 sm:py-2">
          <div className="mx-auto">
            <span className="text-4xl font-semibold text-slate-900 sm:text-3xl">
              About
            </span>
          </div>
          <div className="mx-4 flex flex-col justify-between py-3 text-sm">
            {cruise.about.map((desc) => (
              <>
                <p className="text-lg font-normal text-slate-700">
                  {desc}
                  <br />
                </p>
                <br />
              </>
            ))}
            <br />
            {cruise.termsAndConditions.length === 0 ? null : (
              <>
                <h2 className="text-xl font-semibold">Terms & Conditions</h2>
                {cruise.termsAndConditions.map((desc) => (
                  <li className="text-lg font-normal text-slate-700">{desc}</li>
                ))}
                <br />
              </>
            )}
            {cruise.childPolicy.length === 0 ? null : (
              <>
                <h2 className="text-xl font-semibold">Child Policy</h2>
                {cruise.childPolicy.map((desc) => (
                  <li className="text-lg font-normal text-slate-700">{desc}</li>
                ))}
                <br />
              </>
            )}
            {cruise.peakSeasonSurcharge === null ? null : (
              <>
                <h2 className="text-xl font-semibold">Peak Season Surcharge</h2>
                <p className="text-lg font-normal text-slate-700">
                  {cruise.peakSeasonSurcharge}
                </p>
              </>
            )}
          </div>
        </div>
      </section>
      {/* <PageFooter /> */}
    </>
  );
};

export default index;

export async function getStaticPaths() {
  const data = cruisesData;
  const paths = data.map((cruise) => {
    return {
      params: {
        cruiseSlug: `${cruise.slug}`,
      },
    };
  });

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps(context) {
  const { params } = context;
  const data = cruisesData;
  const cruise = data.find((cruise) => cruise.slug === params.cruiseSlug);

  return {
    props: {
      cruise: cruise,
    },
  };
}
