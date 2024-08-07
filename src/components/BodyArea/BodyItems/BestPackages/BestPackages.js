import Image from "next/image";
import Link from "next/link";

import { BsAirplane } from "react-icons/bs";
import { LiaCarSideSolid, LiaHikingSolid } from "react-icons/lia";
import { RiHotelLine } from "react-icons/ri";
import Package4 from "../../../../Images/Package4.jpeg";
import Package5 from "../../../../Images/Package5.jpeg";
import Package6 from "../../../../Images/Package6.jpeg";
import Package1 from "../../../../Images/package1.jpg";
import Package2 from "../../../../Images/package2.jpg";
import Package3 from "../../../../Images/package3.jpg";

const BestPackages = () => {


  const dummyArr = [
    {
      img: Package1,
      title: "Quick Havelock",
      days: "3 Nights 4 days",
      price: 21963,
      prevPrice: 12124,
      url: 'https://sublimeislands.in/Package/Quick_Havelock',
    },
    {
      img: Package2,
      title: "Splendid Andaman",
      days: "4 Nights 5 Days",
      price: 25825,
      prevPrice: 16658,
      url: 'https://sublimeislands.in/Package/Splendid_Andaman',
    },
    {
      img: Package3,
      title: "Splendid Havelock",
      days: "4 Nights 5 Days",
      price: 28198,
      prevPrice: 18744,
      url: 'https://sublimeislands.in/Package/Splendid_Havelock',
    },
    {
      img: Package4,
      title: "Magical Havelock",
      days: "5 Nights 6 Days",
      price: 33584,
      prevPrice: 25496,
      url: 'https://sublimeislands.in/Package/Magical_Havelock_',
    },
    {
      img: Package5,
      title: "Amazing Andaman with Neil",
      days: "6 Nights 7 Days",
      price: 41079,
      prevPrice: 35907,
      url: 'https://sublimeislands.in/Package/Amazing_Andaman_with_Neil',
    },
    {
      img: Package6,
      title: "Mesmerizing Andaman",
      days: "7 Nights 8 Days",
      price: 48744,
      prevPrice: 40198,
      url: 'https://sublimeislands.in/Package/Mesmerizing_Andaman_',
    },
  ]

  return (
    <div className="mx-auto py-10 w-full">
      <div className="flex mx-16 md:mx-10 justify-between items-center">
        <h1 className="text-4xl font-bold">Best Packages</h1>
        <Link href={"https://sublimeislands.in/Package"} className="sm:hidden hover:text-slate-950 hover:underline text-xl">Show All</Link>
      </div>
      {/* <div className="mt-3 grid grid-cols-3 place-items-center gap-3 lg:grid-cols-1"> */}
      <div class="flex flex-wrap justify-center items-center m-auto gap-y-[68px] gap-x-[70px] p-auto font-normal text-lg font-montserrat py-10">
        {dummyArr?.map((ele, id) => (
          <Link
            href={ele.url}
            key={id}
            className="flex w-[430px] flex-col rounded-lg bg-white p-5 shadow-lg"
          >

            <figure class="flex rounded-md w-auto h-64 transition:origin-center hover:ease-in-out hover:scale-110 transition:duration-1000 transition-transform">
              <Image src={ele.img} className="rounded-md" alt="none" />
            </figure>

            <div className="flex flex-col pt-5">
              <p className={`text-3xl text-start text-slate-950  ${ele.title.length > 20 && "text-[25px]"
                }`}>
                {ele.title}
              </p>

              <div class="flex justify-between text-2xl">
                <p>{ele.days}</p>
              </div>

              <div class="mt-7 flex justify-between items-end">
                <div class="grid justify-items-center gap-y-3">
                  <BsAirplane />
                  <p class="text-base whitespace-nowrap">2 Flights</p>
                </div>
                <div class="grid justify-items-center gap-y-3">
                  <RiHotelLine />
                  <p class="text-base whitespace-nowrap">2 Flights</p>
                </div>
                <div class="grid justify-items-center gap-y-3">
                  <LiaCarSideSolid />
                  <p class="text-base whitespace-nowrap">2 Flights</p>
                </div>
                <div class="grid justify-items-center gap-y-3">
                  <LiaHikingSolid />
                  <p class="text-base whitespace-nowrap">2 Flights</p>
                </div>
              </div>

              <ul class="list-disc list-inside mt-6 text-base text-slate-950">
                <li>Tour combo with return airport transfer</li>
                <li>City Tour</li>
                <li>Curious Corner</li>
              </ul>


              {/* This is package price area */}

              <div class="mt-7 flex gap-4">
                <p class="line-through text-xl"> ₹ {ele.price?.toLocaleString()}</p>
                <h1 class="font-bold text-3xl">
                  ₹{ele.prevPrice?.toLocaleString()}
                  <sub class="font-normal text-sm ml-2 whitespace-nowrap">
                    per person
                  </sub>
                </h1>
              </div>
            </div>
          </Link>
        ))
        }


      </div>
      <div className="flex items-center justify-center">
        <Link href={"https://sublimeislands.in/Package"} className="shadow-lg py-4 px-6 mx-16 sm:block hidden rounded-md bg-base-100 hover:text-slate-100 hover:bg-slate-950">Show All</Link>
      </div>
    </div>
  );
};

export default BestPackages;
