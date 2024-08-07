import { useRef, useState } from 'react';
import Head from 'next/head';
import Script from 'next/script';

import emailjs from '@emailjs/browser';

import PageFooter from '../components/PageFooter/PageFooter';
import PageNavbar from '@/components/PageNavbar/PageNavbar';

const Contact = () => {
  const [status, setStatus] = useState('Submit');
  const form = useRef();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('Sending...');

    await emailjs
      .sendForm(
        'service_pkzbfvh',
        'contact_form33',
        form.current,
        'AXR3hpc7KFGANllcV'
      )
      .then(
        (result) => {
          console.log(result.text);
          alert(
            'Thank you for taking your time. Sublime Island will reach out to you in 2-3 hours or as soon as possible 😁✌🏻'
          );
        },
        (error) => {
          console.log(error.text);
          alert(error.text);
        }
      );

    setStatus('Submit');
  };

  const contactUsContent =
    "Trust us to help you create memories that you'll cherish for a lifetime. Book your trip with us today and embark on a journey of a lifetime!";

  return (
    <>
      <Head>
        <title>Contact Us - Sublime Islands</title>
        <meta name="keywords" content={contactUsContent} />
      </Head>
      <PageNavbar />
      <Script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-5027162336385222"
        crossorigin="anonymous" />
      <div className="flex h-full items-center justify-center bg-gradient-to-tl from-slate-50 via-slate-100 to-slate-200 p-10 lg:h-full">
        <div className="flex h-full w-fit shadow-lg lg:w-full lg:shadow-none">
          <div className=" flex w-[40%] items-start justify-center bg-gradient-to-br from-red-500 via-red-600 to-purple-700 bg-cover bg-bottom bg-no-repeat shadow-xl shadow-red-600 lg:hidden">
            <div className="mt-20 h-fit w-[70%] text-left">
              <h1 className="font-serif text-2xl font-semibold text-white">
                Contact Info
              </h1>
              <h1 className="mt-5 text-base text-slate-100 font-medium">
                Sublime Islands is your one-stop destination for an
                unforgettable trip to Andamans
              </h1>
              <div className="mt-5 flex gap-2 text-white ">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M1 6C1 4.34315 2.34315 3 4 3H20C21.6569 3 23 4.34315 23 6V18C23 19.6569 21.6569 21 20 21H4C2.34315 21 1 19.6569 1 18V6ZM4 5C3.44772 5 3 5.44772 3 6V7.43381L12 12.8338L21 7.43381V6C21 5.44772 20.5523 5 20 5H4ZM21 9.76619L13.029 14.5488C12.3956 14.9288 11.6044 14.9288 10.971 14.5488L3 9.76619V18C3 18.5523 3.44772 19 4 19H20C20.5523 19 21 18.5523 21 18V9.76619Z"
                    fill="white"
                  />
                </svg>
                <h1 className="text-base font-medium">travel@sublimeislands.com</h1>
              </div>
              <div className="mt-5 flex gap-2 text-white">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M3.47517 3.72696C4.54793 2.2251 6.74784 2.13484 7.94003 3.54379L9.84666 5.79708C10.3997 6.45067 10.4754 7.38379 10.0349 8.11796L8.56609 10.5659C8.68383 10.7586 8.84338 10.9885 9.04748 11.2508C9.41145 11.7185 9.87652 12.2376 10.3952 12.7563C11.2686 13.6297 12.2464 14.4544 13.0881 15.0117L15.4884 13.5715C16.2226 13.131 17.1557 13.2066 17.8093 13.7597L20.1713 15.7583C21.5251 16.9038 21.4384 19.0176 19.9953 20.0484C17.7699 21.6379 14.779 22.016 12.3285 20.5204C10.6392 19.4894 8.56919 18.0338 6.7173 16.1819C5.00043 14.4651 3.7486 12.6853 2.8755 11.2048C1.43721 8.76597 1.94262 5.87254 3.47517 3.72696ZM6.41326 4.83567C6.0633 4.42209 5.41753 4.44858 5.10263 4.88944C3.91121 6.55743 3.65587 8.59092 4.59823 10.1889C5.4046 11.5562 6.55758 13.1938 8.13152 14.7677C9.83586 16.4721 11.7655 17.8337 13.3704 18.8132C15.0242 19.8225 17.1456 19.6261 18.8328 18.4209C19.2149 18.148 19.2378 17.5884 18.8794 17.2851L16.5174 15.2865L13.5958 17.0394C13.2864 17.225 12.9011 17.2296 12.5875 17.0515C11.4392 16.3995 10.097 15.2865 8.98094 14.1705C8.41748 13.607 7.89457 13.0258 7.46916 12.4792C7.0556 11.9478 6.68959 11.393 6.49279 10.8885C6.3803 10.6002 6.40767 10.276 6.56692 10.0106L8.31989 7.08897L6.41326 4.83567Z"
                    fill="white"
                  />
                </svg>
                <h1 className="text-base font-medium">+91 9434279729</h1>
                <h1 className="text-base font-medium">+91 9933240857</h1>
              </div>
            </div>
          </div>
          <div className="relative h-fit w-[60%] shadow-lg shadow-red-600 drop-shadow-xl lg:h-fit lg:w-full">
            <h1 className="mt-10 px-5 text-center text-3xl font-semibold text-black">
              Contact Us
            </h1>
            <form
              ref={form}
              onSubmit={handleSubmit}
              className="w-full p-5 lg:mt-5"
            >
              <div className="flex items-center justify-between lg:flex-col lg:items-start">
                <div className="grow px-5 py-2 lg:w-full lg:p-0">
                  <label
                    htmlFor="name"
                    className="block w-[] font-medium text-gray-700"
                  >
                    Your Name
                  </label>
                  <input
                    id="name"
                    name="user_name"
                    placeholder="John Doe"
                    className=" w-full rounded-md border bg-white p-2 font-medium text-gray-700"
                    required
                  />
                </div>
                <div className="grow px-5 py-2 lg:w-full lg:p-0 lg:pt-3">
                  <label
                    htmlFor="email"
                    className="block font-medium text-gray-700"
                  >
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="user_email"
                    placeholder="John@gmail.com"
                    className="w-full rounded-md border bg-white p-2 text-gray-700"
                    required
                  />
                </div>
              </div>

              <div className="flex items-center justify-between lg:flex-col lg:items-start">
                <div className="grow px-5 py-2 lg:w-full lg:p-0">
                  <label
                    htmlFor="phoneNumber"
                    className="block font-medium text-gray-700"
                  >
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="user_phone"
                    placeholder="Phone Number"
                    className="w-full rounded-md border bg-white p-2 text-gray-700"
                    required
                  />
                </div>
                <div className="grow px-5 py-2 lg:w-full lg:p-0 lg:pt-3">
                  <label
                    htmlFor="service"
                    className="block font-medium text-gray-700"
                  >
                    Date
                  </label>
                  <input
                    type="date"
                    id="arrival"
                    name="user_date"
                    className="w-full rounded-md border bg-white p-2  text-gray-700"
                    required
                  />
                </div>
              </div>
              <div className="grow px-5 py-2 lg:px-0">
                <label
                  htmlFor="details"
                  className="block font-medium text-gray-700"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  placeholder="Type here"
                  className=" h-[7rem] w-full rounded-md border bg-white p-2 text-gray-700"
                  required
                ></textarea>
              </div>

              <div className="lg:mt- mt-3 px-5 lg:flex-col lg:items-start lg:px-0 ">
                <button
                  type="submit"
                  className=" w-[40%] rounded-md bg-gradient-to-br from-red-500 via-red-600 to-purple-700 p-2 text-white duration-300 ease-in-out hover:scale-105"
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
      <PageFooter />
    </>
  );
};

export default Contact;
