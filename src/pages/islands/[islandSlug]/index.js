import Image from "next/image";
import Link from "next/link";
import Head from "next/head";
import Script from "next/script";
import "react-photo-view/dist/react-photo-view.css";

import { PhotoProvider, PhotoView } from "react-photo-view";
import { MdKeyboardArrowRight } from "react-icons/md";

import { islandsData } from "@/data/islandsData/islandsData";

import IslandStepper from "@/components/BodyArea/BodyItems/BestIslands/IslandStepper";

import PageNavbar from "@/components/PageNavbar/PageNavbar";
import PageFooter from "@/components/PageFooter/PageFooter";

const index = ({ island }) => {
  return (
    <>
      <Head>
        <title>{island.name}</title>
        <meta name="keywords" content={island.description} />
      </Head>
      <PageNavbar />
      <Script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-5027162336385222" crossorigin="anonymous" />
      <section className="sxl:px-5 ms:h-96 sxs:h-[340px] ms:bg-[#FF8682] font-Montserrat bg-white px-[104px] py-[60px] text-[#112211] sm:px-5 sm:py-5 xs:h-[360px]">
        {/* -------------------Navigation---------------- */}
        <div className=" ms:mb-3 mb-[30px] flex items-center gap-2">
          <Link href={"/"} className="ms:text-slate-100 text-[#FF8682]">
            Islands
          </Link>
          <span>
            <MdKeyboardArrowRight />
          </span>
          <span className="text-[#112211]">{island.name}</span>
        </div>
        <>
          {" "}
          <div className="flex items-center justify-between">
            <div className="flex items-center md:flex-col md:items-start">
              <h1 className="text-4xl font-bold sm:text-xl lexs:text-sm">
                {island.name}{" "}
              </h1>
            </div>
          </div>
        </>
        {/*------------------ Island Images---------------- */}
        <div>
          {" "}
          <PhotoProvider>
            <div className="ms:mt-5 mt-8 grid grid-cols-2 gap-2 overflow-hidden rounded-xl">
              <PhotoView src={island.image}>
                <Image
                  src={island.image}
                  alt={island.name}
                  className="col-span-1 h-full w-full cursor-pointer object-cover"
                  loading="lazy"
                />
              </PhotoView>
              <div className="col-span-1">
                <div className="grid grid-cols-2 gap-2 ">
                  {island.places.slice(0, 4).map((place, i) => (
                    <PhotoView key={i} src={place.image}>
                      <Image
                        key={i}
                        tabIndex={i}
                        src={place.image}
                        alt={place.name}
                        className="h-[100vh] max-h-[16.67vw] w-full cursor-pointer object-cover"
                        loading="lazy"
                      />
                    </PhotoView>
                  ))}
                </div>
              </div>
            </div>{" "}
          </PhotoProvider>
        </div>
        {/* ----------steps ------------*/}
        <div className="font-Montserrat my-10 flex h-auto w-full flex-col">
          <div className="mx-auto">
            <span className="text-4xl font-semibold text-slate-900">
              Places to visit
            </span>
          </div>
          <div className="mx-4 flex flex-row justify-between py-3">
            <span className="text- text-2xl font-semibold text-black">
              {island.name}
            </span>
          </div>
          {/* --------Stepper--------- */}
          <IslandStepper places={island.places} />
        </div>
        <div className="font-Montserrat py-4 px-2 sm:px-1 sm:py-2 my-10 flex h-auto w-full flex-col">
          <div className="mx-auto">
            <span className="text-4xl sm:text-3xl font-semibold text-slate-900">About</span>
          </div>
          <div className="mx-4 flex flex-col justify-between py-3">
            <p className="text-lg sm:text-base font-medium text-slate-700">
              {island.description[0]}
            </p>
            <p className="text-lg sm:text-base font-medium text-slate-700">
              {island.description[1]}
            </p>
          </div>
        </div>
        <div className="mt-10 h-full w-full flex flex-col items-center">
          <h3 className="text-4xl sm:text-3xl font-semibold text-slate-900">Location</h3>
          <iframe
            src={island.location}
            className="mt-2 h-96 w-full bg-slate-600"
            title="Map"
            style={{ border: 0 }}
          ></iframe>
        </div>
      </section>
      <PageFooter />
    </>
  );
};

export default index;

export async function getStaticPaths() {
  const data = islandsData;
  const paths = data.map((island) => {
    return {
      params: {
        islandSlug: `${island.slug}`,
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
  const data = islandsData;
  const island = data.find((island) => island.slug === params.islandSlug);

  return {
    props: {
      island: island,
    },
  };
}
