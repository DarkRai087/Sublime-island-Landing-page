import Image from "next/image";
import Link from "next/link";
const TrendingActivities = () => {
  const data = [
    {
      name: "Seakart Adventure",
      image: "https://www.seawatersports.com/img/newimage/activies/slide/seakart-adventure-in-andaman-price.jpg",
      link: "https://sublimeislands.in/Activity/Seakart-Adventure",
    },
    {
      name: "Banana Boat Rides",
      image: "https://www.andamansguide.com/wp-content/uploads/2016/09/Banana-Boat-Rides-300x171.jpg",
      link: "https://sublimeislands.in/Activity/Banana-Boat%20Rides",
    },
    {
      name: "Snorkeling",
      image: "https://andamantourtravel.com/assets/img/snorkeling211.jpg",
      link: "https://sublimeislands.in/Activity/Snorkeling",
    },
    {
      name: "Scuba Diving",
      image: "https://upload.wikimedia.org/wikipedia/commons/9/94/Buzo.jpg",
      link: "https://sublimeislands.in/Activity/Scuba-Diving",
    },
    {
      name: "Parasailing",
      image: "https://islewalk.com/wp-content/uploads/2019/11/andaman-tour-package-from-delhi-9.jpg",
      link: "https://sublimeislands.in/Activity/Parasailing",
    },
    {
      name: "Kayaking",
      image: "https://global-uploads.webflow.com/5b56319971ac8c56a6a9d887/5ed748995c2d8d47161c3f69_Kayak%204-.jpg",
      link: "https://sublimeislands.in/Activity/Kayaking",
    },
    {
      name: "Jet Skiing",
      image: "https://www.picnicwale.com/assets/adventure/andaman-jet-ski.webp",
      link: "https://sublimeislands.in/Activity/Jet-Skiing",
    },
  ]
  return (
    // <div className="mx-auto my-10 w-11/12">
    //   <div>
    //     <h1 className="text-3xl font-bold">Trending Activities in Andaman and Nicobar Islands</h1>
    //     <p className="text-gray-400">
    //       Search trending activities in Andaman and Nicobar Islands
    //     </p>
    //   </div>
    //   <div className="mt-8 grid grid-cols-3 gap-3 lg:grid-cols-1">
    //     {data.map((activity, index) => (
    //       <Link href={activity.link} key={index} target="_blank">
    //         <div className="card card-side h-full bg-base-100 shadow-xl">
    //           <figure className="pl-4">
    //             <div className="h-24 w-28">
    //               <Image
    //                 src={activity.image}
    //                 width={720}
    //                 height={1080}
    //                 priority
    //                 alt="activity"
    //                 className="w-full h-full sm:h-[80%] rounded-lg"
    //               />
    //             </div>
    //           </figure>
    //           <div className="card-body">
    //             <h2 className="card-title">{activity.name}</h2>
    //             <p className="italic">Water Sports</p>
    //           </div>
    //         </div>
    //       </Link>
    //     ))}
    //   </div>
    // </div>
    <div className="mx-auto my-10 w-11/12">
      <div>
        <h1 className="text-4xl font-bold">
          Best and Safest Places for Trekking in Andaman and Nicobar Islands
        </h1>
        <p className="text-lg text-gray-400">
          Search trekking places in Andaman and Nicobar Islands
        </p>
      </div>
      <div className="mt-8 grid grid-cols-3 gap-4 md:flex md:flex-col xlll:grid-cols-2 ">
        {data.map((activity, index) => (
          <Link href={activity.link} key={index} target="_blank">
            <div className="flex rounded-xl bg-white py-4 shadow-xl">
              <Image
                src={activity.image}
                width={720}
                height={1080}
                priority
                alt="activity"
                className="ml-4 h-28 w-32 rounded-xl"
              />

              <div className="ml-8 mt-4">
                <h2 className="mb-2 text-2xl font-semibold">{activity.name}</h2>
                <p className="text-lg text-gray-600">Water Sports</p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
};

export default TrendingActivities;
