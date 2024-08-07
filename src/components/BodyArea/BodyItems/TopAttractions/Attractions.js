
import Link from 'next/link'
import { topAttractionsData } from './data/TopAttractionsData'
import Image from 'next/image'

const Attractions = () => {
  return (
    <div className="mx-auto my-10 w-11/12">
      <div>
        <h1 className="text-4xl font-bold">
          Top Attractions in Andaman and Nicobar Islands
        </h1>
        <p className="text-lg text-gray-400">
          Search Transport to top attractions in Andaman and Nicobar Islands
        </p>
      </div>
      <div className="mt-8 grid grid-cols-3 gap-4 md:flex md:flex-col xlll:grid-cols-2 ">
        {topAttractionsData.map((attraction,index) => (
          <Link href={attraction.link} target="_blank" key={index}>
            <div className="flex rounded-xl bg-white py-4 shadow-xl">
              <Image
                src={attraction.img}
                alt="Movie"
                className="ml-4 h-28 w-32 rounded-xl"
              />

              <div className="ml-8 mt-4">
                <h2 className="mb-2 text-2xl font-semibold">
                  {attraction.title}
                </h2>
                <p className="text-lg text-gray-600">{attraction.category}</p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
}
export default Attractions
