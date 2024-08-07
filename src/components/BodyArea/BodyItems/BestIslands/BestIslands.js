import Image from "next/image";
import { islandsData } from "@/data/islandsData/islandsData";
import Link from "next/link";

const BestIslands = () => {
  return (
    <div className="mx-auto w-11/12">
      <div>
        <h1 className="text-4xl font-bold">Best Islands to Visit</h1>
        <p className="text-lg text-gray-400">
          Search Transport & places here to our most popular destination
        </p>
      </div>
      <div className="mt-8 grid grid-cols-3 gap-4 md:flex md:flex-col xlll:grid-cols-2">
        {islandsData.map((island, index) => (
          <Link href={`/islands/${island.slug}`} key={index} island={island}>
            <div className="flex rounded-xl bg-white py-4 shadow-xl">
              {/* <figure className="pl-4">
                <div className="h-24 w-28"> */}
              <Image
                src={island.image}
                alt="Island"
                className="ml-4 h-28 w-32 rounded-xl"
              />
              {/* </div>
              </figure> */}
              <div className="ml-8 mt-4">
                <h2 className="mb-2 text-2xl font-semibold">{island.name}</h2>
                <p className="text-lg text-gray-600">{island.title}</p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
    
  )
};

export default BestIslands;
