import Image from "next/image";
import { cruisesData } from "@/data/cruisesData";
import Link from "next/link";

const BestCruises = () => {
  return (
    <div className="mx-auto my-10 w-11/12">
      <div>
        <h1 className="text-4xl font-bold">
          Top Cruises in Andaman and Nicobar Islands
        </h1>
        <p className="text-lg text-gray-400">
          Search top Cruises in Andaman and Nicobar islands
        </p>
      </div>
      <div className="mt-8 grid grid-cols-3 gap-4 md:flex md:flex-col xlll:grid-cols-2">
        {cruisesData.map((cruise, index) => (
          <Link href={`/cruises/${cruise.slug}`} key={index} cruise={cruise}>
            <div className="flex rounded-xl bg-white py-4 shadow-xl">
              {/* <figure className="pl-4"> */}
                {/* <div className="h-24 w-28"> */}
                <Image
                  src={cruise.images[0]}
                  alt="cruise"
                  width={720}
                  height={1080}
                  priority
                  className="ml-4 h-28 w-32 rounded-xl"
                />
                {/* </div> */}
              {/* </figure> */}
              <div className="ml-8 mt-4">
                <h2 className="mb-2 text-2xl font-semibold">{cruise.name}</h2>
                <p className="text-lg text-gray-600">Cruise Ferry</p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
    
  )
};

export default BestCruises;
