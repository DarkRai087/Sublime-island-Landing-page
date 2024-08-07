import Image from 'next/image'
import { reviewData } from './Reviews'

const ReviewsSection = () => {
  return (
    <div className="mx-auto my-10 w-11/12 font-mono">
      <div className="mb-10">
        <h1 className="font-Montserrat text-4xl font-bold">Experiences</h1>
        <h2 className="text-lg text-gray-400">
          Reviews of Experiences people had with Sublime Islands
        </h2>
        {/* <div className="mb-16">
          <a href="">
            <button className="float-right mr-10 rounded bg-[#2A303C] p-2 font-Montserrat text-white">
              Add a review
            </button>
          </a>
        </div> */}
      </div>

      <div className="all-card">
        {reviewData.map((item, index) => (
          <div
            key={index} // Make sure to provide a unique key for each item when using map
            className="review-card mx-5 my-4 w-auto rounded-md bg-base-100 shadow-lg hover:shadow-xl bg-white"
          >
            <div className="review-content flex px-3 py-3">
              <Image
                src={item.avatar}
                alt=""
                className="h-12 w-12 rounded-full"
              />
              <div className="ml-5">
                <div className="flex">
                  <h1 className="text-xl font-bold">{item.reviewShort} | </h1>
                  <h1 className="text-xl ml-1 font-semibold">
                    {item.authorName}
                  </h1>
                </div>
                <h3 className="text-lg font-medium">Verified Guest</h3>
                <p className="text-lg italic text-gray-900 font-medium">{item.review}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
export default ReviewsSection
