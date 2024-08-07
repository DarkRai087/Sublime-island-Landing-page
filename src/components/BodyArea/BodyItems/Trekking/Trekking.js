import Image from "next/image";
import Link from "next/link";

const Trekking = () => {
  const data = [
    {
      name: "Mount Manipur",
      image: "https://res.cloudinary.com/trop101/image/upload/v1589091343/new%20images/mount-harriet-1.jpg",
      link: "https://sublimeislands.in/Activity/Mount-Manipur",
    },
    {
      name: "ChidiyaTapu",
      image: "https://images.thrillophilia.com/image/upload/s--DuyEvZbn--/c_fill,h_600,q_auto,w_975/f_auto,fl_strip_profile/v1/images/photos/000/121/665/original/1510742977_treeek.jpg.jpg?1510742977",
      link: "https://sublimeislands.in/Activity/ChidiyaTapu-",
    },
    {
      name: "Elephanta Beach",
      image: "https://res.cloudinary.com/thrillophilia/image/upload/c_fill,f_auto,fl_progressive.strip_profile,g_auto,h_600,q_auto,w_auto/v1/filestore/cuivelcj8jr9ax2mhdjh2sspsksf_1537009421_Elephant_Island_Andaman.jpg",
      link: "https://sublimeislands.in/Activity/Elephanta-Beach",
    },
    {
      name: "Limestone Caves",
      image: "https://4.imimg.com/data4/KK/KK/GLADMIN-/images-sightlimestonecavesbaratang-500x500.jpg",
      link: "https://sublimeislands.in/Activity/Limestone-Caves",
    },
    {
      name: "Alfred Caves",
      image: "https://cdn.experienceandamans.com/images/alfred-caves-diglipur-north-andaman.jpg",
      link: "https://sublimeislands.in/Activity/Alfred-Caves",
    },
    {
      name: "Saddle Peak",
      image: "https://static2.tripoto.com/media/filter/nl/img/172710/TripDocument/1508315657_sp.jpg",
      link: "https://sublimeislands.in/Activity/Saddle-Peak",
    },
  ]
  return (
    // <div className="mx-auto my-10 w-11/12">
    //   <div>
    //     <h1 className="text-3xl font-bold">Best and Safest Places for Trekking in Andaman and Nicobar Islands</h1>
    //     <p className="text-gray-400">
    //       Search trekking places in Andaman and Nicobar Islands
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
    //             <p className="italic">Trekking</p>
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
        <p className="text-gray-400 text-lg">
          Search trekking places in Andaman and Nicobar Islands
        </p>
      </div>
      <div className="mt-8 grid grid-cols-3 gap-4 md:flex md:flex-col xlll:grid-cols-2 ">
        {data.map((activity,index) => (
          <Link href={activity.link} key={index} target="_blank">
            <div className="flex bg-white rounded-xl py-4 shadow-xl">
              <Image src={activity.image} width={720} height={1080} priority alt="activity" className="h-28 w-32 rounded-xl ml-4" />

              <div className="ml-8 mt-4">
                <h2 className="text-2xl font-semibold mb-2">{activity.name}</h2>
                <p className="text-gray-600 text-lg">Trekking</p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Trekking;
