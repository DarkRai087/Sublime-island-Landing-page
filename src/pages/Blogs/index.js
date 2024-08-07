import Image from "next/image";
import Link from "next/link";
import Head from "next/head";
import Script from "next/script";

import React, { useEffect, useState } from "react";
import PageNavbar from "@/components/PageNavbar/PageNavbar";
import PageFooter from "@/components/PageFooter/PageFooter";

const Blogs = ({ blogs }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [pageNumbers, setPageNumbers] = useState([]);
  const blogsPerPage = 10;
  const allBlogs = blogs;
  const [currentBlogs, setCurrentBlogs] = useState([]);
  useEffect(() => {
    const indexOfLastBlog = currentPage * blogsPerPage - 1;
    const indexOfFirstBlog = indexOfLastBlog - blogsPerPage + 1;
    const currentBlogs = allBlogs.slice(indexOfFirstBlog, indexOfLastBlog + 1);

    setPageNumbers(
      Array.from(
        { length: Math.ceil(allBlogs.length / blogsPerPage) },
        (_, i) => i + 1
      )
    );
    setCurrentBlogs(currentBlogs);
  }, [currentPage]);

  const paginate = (event, number) => {
    event.preventDefault();
    setCurrentPage(number);
  };

  const blogsContent = "All the Essential's and Info you need for your journey with Sublime Islands is right here, Cherishable and Infotainable content of Travelling, Tips & Tricks, etc."

  return (
    <>
      <Head>
        <title>Blogs - Sublime Islands</title>
        <meta name="keywords" content={blogsContent} />
      </Head>
      <PageNavbar />
      <Script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-5027162336385222"
        crossorigin="anonymous" />
      <div className="flex font-Montserrat min-h-screen items-center justify-center bg-white text-black">
        <div className="mt-10">
          <div className="px-10 mt-5">
            <hr className="h-0.5 mb-1 w-1/2 bg-[#484C52]" />
            <h1 className="font-bold ml-5 text-6xl md:text-4xl mt-3 md:mt-4 w-full">The Sublime Island Blogs.</h1>
            <hr className="mt-5 h-0.5 w-1/2 bg-[#484C52]" />
          </div>
          <div className="flex lg:flex-col gap-7 justify-evenly py-5 px-10 sm:px-4">
            <div className="mt-5 w-full">
              {currentBlogs.length > 0 && (
                <>
                  <Image
                    src={currentBlogs[0]?.imageSrc}
                    alt={currentBlogs[0]?.name}
                    className="mb-5 w-full rounded-lg"
                    width={720}
                    height={1080}
                    priority
                  />
                  <h1 className="wrap mb-7 text-3xl sm:text-xl font-bold">
                    {currentBlogs[0]?.name}
                  </h1>
                  <Link
                    href={`/Blogs/${currentBlogs[0]?.slug}`}
                    className="rounded bg-gradient-to-br from-red-500 via-red-600 to-purple-700 px-10 py-4 text-white"
                  >
                    Read More
                  </Link>
                </>
              )}
            </div>
            <div className="blog-scrollbar blog-scrollbar-track blog-scrollbar-thumb h-[40rem] w-full overflow-y-scroll mt-6">
              {currentBlogs.slice(1).map((item, index) => (
                <div className="mb-10 flex gap-x-6 pr-2" key={index}>
                  <div className="h-full w-full flex-grow">
                    <Image
                      className="h-auto w-auto sm:h-auto mx-auto sm:w-auto rounded-lg"
                      src={item?.imageSrc}
                      alt={item?.name}
                      width="250"
                      height="150"
                      priority
                    />
                  </div>
                  <div className="flex-grow-1 w-full">
                    {" "}
                    <h1 className="text-lg sm:text-base font-semibold">{item?.name}</h1>
                    <p className="mb-4">{item?.authorName}</p>
                    <Link
                      href={`/Blogs/${item?.slug}`}
                      className="py-3 rounded-xl bg-gradient-to-br from-red-500 via-red-600 to-purple-700 px-4 text-white sm:px-2 "
                    >
                      Read More
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="mb-4 mt-10 flex items-center justify-center">
            <nav
              className="isolate -mx-px gap-4 inline-flex rounded-none shadow-none"
              aria-label="Pagination"
            >
              <button
                className="relative inline-flex items-center rounded-l-md px-2 py-1 text-gray-700 hover:text-gray-950 focus:z-20"
                disabled={currentPage > 1 ? false : true}
                onClick={(e) => {
                  e.preventDefault();
                  setCurrentPage((prev) => prev - 1);
                }}
              >
                <span className="sr-only">Previous</span>
                <svg
                  className="h-4 w-3"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    d="M12.79 5.23a.75.75 0 01-.02 1.06L8.832 10l3.938 3.71a.75.75 0 11-1.04 1.08l-4.5-4.25a.75.75 0 010-1.08l4.5-4.25a.75.75 0 011.06.02z"
                    clipRule="evenodd"
                  />
                </svg>
              </button>
              <ul className="flex">
                {pageNumbers.map((number) => (
                  <button
                    key={number}
                    className={`relative inline-flex items-center mx-auto px-4 mt-1 font-semibold text-gray-700 focus:z-20 ${number === currentPage
                      ? "text-blue-600 hover:bg-blue-950 hover:text-slate-50 rounded-md"
                      : "text-slate-950 hover:bg-slate-950 hover:text-slate-50 rounded-md"
                      }`}
                    onClick={(event) => paginate(event, number)}
                  >
                    {number}
                  </button>
                ))}
              </ul>
              <button
                className="relative inline-flex items-center rounded-r-md px-2 py-1 text-gray-700 hover:text-gray-950 focus:z-20"
                disabled={currentPage === pageNumbers.length ? true : false}
                onClick={(e) => {
                  e.preventDefault();
                  setCurrentPage((prev) => prev + 1);
                }}
              >
                <span className="sr-only">Next</span>
                <svg
                  className="h-4 w-3"
                  aria-hidden="true"
                >
                  <path
                    fillRule="oddeven"
                    d="M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z"
                    clipRule="oddeven"
                  />
                </svg>
              </button>
            </nav>
          </div>
        </div>
      </div>
      <PageFooter />
    </>
  );
};

export default Blogs;

export async function getStaticProps() {
  // Call an external API endpoint to get posts.
  // You can use any data fetching library
  const res = await fetch("https://sublime-islands-blogs.vercel.app/api/blogs");
  const posts = await res.json();
  // By returning { props: { posts } }, the Blog component
  // will receive `posts` as a prop at build time

  if (!res.ok) {
    // If there is a server error, you might want to
    // throw an error instead of returning so that the cache is not updated
    // until the next successful request.
    throw new Error(`Failed to fetch posts, received status ${res.status}`)
  }

  return {
    props: {
      blogs: posts?.listing.reverse(),
    },
    revalidate: 10,
  };
}
