import Link from "next/link";
import { FaTelegramPlane, FaHouzz, FaPlaneDeparture, FaPlus } from "react-icons/fa";

const Bookings = () => {
    return (
        <div className="card w-4/5 mx-auto mt-[-130px] bg-base-100 shadow-xl">
            <div className="card-body">
                <div className="flex text-lg md:text-sm">
                    <Link href="https://andamane.vercel.app/Ships" target="_blank" className="mr-14 md:mr-4">
                        <div className="flex items-center">
                            <FaTelegramPlane className="mr-2" />
                            <span>Ship</span>
                        </div>
                    </Link>
                    <Link href="https://andamane.vercel.app/Flights" target="_blank" className="mr-14 md:mr-4">
                        <div className="flex items-center">
                            <FaPlaneDeparture className="mr-2" />
                            <span>Flights</span>
                        </div>
                    </Link>
                    <Link href="https://andamane.vercel.app/Hotels" target="_blank" className="mr-14 md:mr-4">
                        <div className="flex items-center">
                            <FaHouzz className="mr-2" />
                            <span>Stays</span>
                        </div>
                    </Link>
                </div>
                <Link href="https://andamane.vercel.app/Flights" target="_blank">
                    <form className='flex flex-row lg:flex-col my-4'>
                        <fieldset className='border p-2 lg:w-full w-4/12 mr-2'>
                            <legend>From-To</legend>
                            <input type="text" placeholder="Type Your Destination" className="input input-bordered w-full" />
                        </fieldset>
                        <fieldset className='border p-2 lg:w-full w-3/12 mr-2'>
                            <legend>Trip</legend>
                            <select className="select select-bordered w-full">
                                <option disabled selected>Select Your Trip?</option>
                                <option>One way</option>
                                <option>Return</option>
                            </select>
                        </fieldset>
                        <fieldset className='border p-2 lg:w-full w-3/12 mr-2'>
                            <legend>Depart-Return</legend>
                            <select className="select select-bordered w-full">
                                <option disabled selected>Select Your Date</option>
                                <option>07 Nov 23</option>
                                <option>23 Nov 23</option>
                            </select>
                        </fieldset>
                        <fieldset className='border p-2 lg:w-full w-3/12'>
                            <legend>Passenger Class</legend>
                            <select className="select select-bordered w-full">
                                <option disabled selected>Select Your Date</option>
                                <option>1 Passenger, 1 Economy</option>
                                <option>2 Passenger, Two Economy</option>
                            </select>
                        </fieldset>
                    </form>
                </Link>
                <Link href="https://andamane.vercel.app/Bus" target="_blank">
                    <div className='flex items-center justify-end'>
                        <button className="flex items-center mr-3 disabled">
                            <FaPlus className="mr-2" />
                            <span>Add Promo Code</span>
                        </button>
                        <button className='flex items-center bg-emerald-500 px-3 py-2'>
                            <FaTelegramPlane className="mr-2" />
                            <span>Show Transport</span>
                        </button>
                    </div>
                </Link>
            </div>
        </div>
    );
};

export default Bookings;