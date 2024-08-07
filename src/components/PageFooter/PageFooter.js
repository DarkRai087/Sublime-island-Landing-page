import Link from 'next/link'

const FooterSection = () => {
  return (
    <footer className="footer text-base-content z-0 w-full bg-gradient-to-br from-red-500 via-red-600 to-purple-700 px-10 pt-16 text-lg">
      <div className="w-full flex-col">
        <div className="mx-auto flex w-full items-center justify-around gap-y-3 sm:mx-0 sm:flex-col sm:items-start sm:justify-start">
          <div className="flex flex-col gap-y-1">
            <p className="pb-1 text-xl font-extrabold text-white/80">
              Top Destinations
            </p>
            <Link
              href={'/islands/baratang-andaman'}
              className="cursor-pointer font-semibold text-slate-50 hover:underline"
            >
              Baratang Island
            </Link>
            <Link
              href={'/islands/havelock-andaman'}
              className="cursor-pointer font-semibold text-slate-50 hover:underline"
            >
              Havelock Island
            </Link>
            <Link
              href={'/islands/neil-andaman'}
              className="cursor-pointer font-semibold text-slate-50 hover:underline"
            >
              Neil Island
            </Link>
            <Link
              href={'/islands/ross-island-andaman'}
              className="cursor-pointer font-semibold text-slate-50 hover:underline"
            >
              Ross Island
            </Link>
          </div>
          <div className="flex flex-col gap-y-1">
            <p className="pb-1 text-xl font-extrabold text-white/80">
              Services
            </p>
            <Link
              href="https://sublimeislands.in/Ferries"
              target="_blank"
              rel="noreferrer"
              className="cursor-pointer font-semibold text-slate-50 hover:underline"
            >
              Ferry Tracking
            </Link>
            <Link
              href="https://sublimeislands.in/Ships"
              target="_blank"
              rel="noreferrer"
              className="cursor-pointer font-semibold text-slate-50 hover:underline"
            >
              Ship Booking
            </Link>
            <Link
              href="https://sublimeislands.in/Flights"
              target="_blank"
              rel="noreferrer"
              className="cursor-pointer font-semibold text-slate-50 hover:underline"
            >
              Flight Booking
            </Link>
            <Link
              href="https://sublimeislands.in/Package"
              target="_blank"
              rel="noreferrer"
              className="cursor-pointer font-semibold text-slate-50 hover:underline"
            >
              Tour Packages
            </Link>
          </div>
          <div className="flex flex-col gap-y-1">
            <p className="pb-1 text-xl font-extrabold text-white/80">
              Sublime Islands
            </p>
            <Link
              href={'https://sublimeislands.in/'}
              rel="noreferrer"
              className="cursor-pointer font-semibold text-slate-50 hover:underline"
              target="_blank"
            >
              All Services
            </Link>
            <Link
              href={'/About'}
              rel="noreferrer"
              className="cursor-pointer font-semibold text-slate-50 hover:underline"
            >
              About us
            </Link>
            <Link
              href={'/Contact'}
              rel="noreferrer"
              className="cursor-pointer font-semibold text-slate-50 hover:underline"
            >
              Contact
            </Link>
            <Link
              href={'/Blogs'}
              rel="noreferrer"
              className="cursor-pointer font-semibold text-slate-50 hover:underline"
            >
              Blogs
            </Link>
          </div>
        </div>
        <div className="mb-2 ml-2 mt-6 w-full border-b-2 border-t-2 border-gray-700"></div>
        <div className="ml-2 w-full flex-col">
          <div className="flex w-full pb-6">
            <div className="mx-auto flex w-full items-center justify-evenly gap-x-10">
              <p className="w-full pb-2 pt-3 font-semibold text-slate-50">
                All Rights Reserved Parth Pandey
              </p>
              <div className="flex w-full items-end justify-end gap-4">
                

               
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default FooterSection
