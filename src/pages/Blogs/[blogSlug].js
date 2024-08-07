import Image from "next/image";
import Link from "next/link";
import Head from "next/head";
import Script from "next/script";

import Date from "@/components/DateSerialization/Date";

import "react-quill/dist/quill.bubble.css";

import PageFooter from "@/components/PageFooter/PageFooter";
import PageNavbar from "@/components/PageNavbar/PageNavbar";

const BlogPost = ({ blog }) => {
  return (
    <>
      <Head>
        <title>Blog - {blog.name}</title>
        <meta name="keywords" content={blog.name} />
      </Head>
      <PageNavbar />
      <Script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-5027162336385222"
        crossorigin="anonymous" />
      <div className="flex w-full flex-col bg-white bg-gradient-to-b font-Montserrat">
        <div className="mx-auto mt-16 w-5/6 flex-col px-4">
          <h1 className="text-5xl font-bold uppercase leading-tight text-black md:text-lg lg:text-xl">
            {blog.name}
          </h1>
          <hr className="h-0.5 mt-2 bg-[#484C52]" />
          {/* <p className="md:mt-3 md:text-xs font-light font-mono text-sm">Published on <Date dateString={blog.createdAt} /> IST</p> */}
          <p className="flex gap-1 mt-2 text-[#B9ADBB]">Published by<p className="text-slate-700">{blog.authorName}</p></p>
          <p className="text-[#B9ADBB]">Published on <Date dateString={blog.createdAt} /> IST</p>
        </div>
        <div className="mb-20 mt-5 w-full px-10">
          <div className="mt-8 flex-col">
            <div className="mx-auto mb-3 flex">
              <Image
                src={blog.imageSrc}
                width={1080}
                height={1080}
                alt={`${blog.name}`}
                className="mx-auto object-contain rounded-lg"
                priority
              />
            </div>
            <div className="text-sm underline font-light font-serif text-center mt-5 mb-5 text-blue-800">
              <Link href="https://sublimeislands.in/Package">
                Looking for a Vacation or a Holiday Destination 😍, check no other than Sublime Island! ✈️🎉⭐
              </Link>
            </div>
            <div className="mb-5 mt-5 text-center text-base md:text-sm font-Montserrat font-bold">
              <p>{blog.description}</p>
            </div>
            {/* <p className="w-full text-justify text-lg font-medium">
              {blog.content}
            </p> */}

            {/* This div is from react-quill */}
            <div
              dangerouslySetInnerHTML={{
                __html: blog.content,
              }}
              className="ql-editor text-lg md:text-sm text-slate-950"
            ></div>
          </div>
        </div>
        <PageFooter />
      </div>
    </>
  );
};

export default BlogPost;

export async function getStaticPaths() {
  const res = await fetch("https://sublime-islands-blogs.vercel.app/api/blogs");
  const data = await res.json();
  const blogs = data?.listing;
  const paths = blogs.map((blog) => {
    return {
      params: {
        blogSlug: `${blog.slug}`,
      },
    };
  });

  return {
    paths,
    fallback: 'blocking',
  };
}

export async function getStaticProps(context) {
  const { params } = context;
  const res = await fetch("https://sublime-islands-blogs.vercel.app/api/blogs");
  const posts = await res.json();
  const blog = posts?.listing.find((post) => post.slug === params.blogSlug);
  return {
    props: {
      blog: blog,
    },
    revalidate: 10,
  };
}