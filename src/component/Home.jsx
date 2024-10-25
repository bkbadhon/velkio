import { FaCircleQuestion, FaWhatsapp } from 'react-icons/fa6';
import { IoHome } from 'react-icons/io5';
import { TbSettings } from 'react-icons/tb';
import { GoInfo } from 'react-icons/go';
import { Link } from 'react-router-dom';
import logo from '../../public/banner1.jpg'
import { Helmet } from 'react-helmet';
const Home = () => {
    return (
        <div className=' p-4'>
            <Helmet>
                <title>Velkio | Home</title>
            </Helmet>
            <img className='w-full h-72 object-fit' src={logo} alt="" />

            <div className='py-2'>
                <div className='uppercase flex justify-center p-2 md:gap-8 bg-gray-300 my-4 items-center font-semibold'>
                    <Link to={'/homepage'}>
                        <button className='uppercase hover:bg-black hover:text-yellow-500 p-2 duration-300  md:text-xl font-bold flex items-center gap-1'><IoHome /> Home</button>
                    </Link>
                    <Link to={'/customerservice'}>
                        <button className='uppercase hover:bg-black hover:text-yellow-500 p-2 duration-300  md:text-xl font-bold flex items-center gap-1'><FaCircleQuestion /> Customer Service</button>
                    </Link>
                    <Link to={'/newNumber'}>
                        <button className='uppercase hover:bg-black hover:text-yellow-500 p-2 duration-300  md:text-xl font-bold flex items-center gap-1'><TbSettings /> Old/New</button>
                    </Link>
                </div>
            </div>
            <div className=''>
                <div className='uppercase flex justify-center p-2 md:gap-8 bg-gray-300 my-4 items-center font-semibold'>
                    <Link to={'/siteAdmin'}>
                        <button className='uppercase hover:bg-black hover:text-yellow-500 p-2 duration-300  md:text-xl font-bold flex items-center gap-1'><TbSettings />site admin</button>
                    </Link>
                    <Link to={'/subAdmin'}>
                        <button className='uppercase hover:bg-black hover:text-yellow-500 p-2 duration-300  md:text-xl font-bold flex items-center gap-1'><TbSettings />subadmin</button>
                    </Link>
                    <Link to={'/masterAgentList'}>
                        <button className='uppercase hover:bg-black hover:text-yellow-500 p-2 duration-300  md:text-xl font-bold flex items-center gap-1'><TbSettings /> master</button>
                    </Link>
                </div>
            </div>

            <div className=' p-3 my-6'>
                <h2 className='flex items-center gap-2 uppercase text-3xl leading-10 font-bold'><GoInfo className='bg-green-400 rounded-full' />QUICK MASTER AGENT NUMBER:</h2>
                <h2 className="uppercase font-bold text-black text-2xl my-4 text-center">Master Agent List</h2>
                <div className="overflow-x-hidden md:w-11/12 mx-auto my-8">
                    <table className="md:table table-xs">
                        {/* head */}
                        <thead>
                            <tr className="">
                                <th className="md:text-xl text-xs font-bold">ID NO</th>
                                <th className="md:text-xl text-xs font-bold">AGENT</th>
                                <th className="md:text-xl text-xs font-bold">APP</th>
                                <th className="md:text-xl text-xs font-bold">NUMBER</th>
                                <th className="md:text-xl text-xs font-bold">COMPLAIN</th>

                            </tr>
                        </thead>
                        <tbody>
                            <tr className="bg-gray-100 ">
                                <th className='text-black'>2</th>
                                <td className="md:text-xl text-xs text-black  font-semibold">Master</td>
                                <td><a href="https://wa.me/+966538432567"><FaWhatsapp className="text-3xl text-success"></FaWhatsapp></a></td>
                                <td className="md:text-xl text-xs font-semibold text-red-500"><a href="https://wa.me/+966538432567">+966538432534</a></td>
                                <td className="md:text-xl text-xs font-semibold text-red-500">COMPLAIN</td>
                            </tr>
                            <tr className="bg-gray-100 ">
                                <th className='text-black'>3</th>
                                <td className="md:text-xl text-xs text-black font-semibold">Master</td>
                                <td><a href="https://wa.me/+966538432567"><FaWhatsapp className="text-3xl text-success"></FaWhatsapp></a></td>
                                <td className="md:text-xl text-xs font-semibold text-red-500"><a href="https://wa.me/+966538432567">+966538432555</a></td>
                                <td className="md:text-xl text-xs font-semibold text-red-500">COMPLAIN</td>
                            </tr>
                            <tr className="bg-gray-100 ">
                                <th className='text-black'>4</th>
                                <td className="md:text-xl text-xs text-black font-semibold">Master</td>
                                <td><a href="https://wa.me/+966538432567"><FaWhatsapp className="text-3xl text-success"></FaWhatsapp></a></td>
                                <td className="md:text-xl text-xs font-semibold text-red-500"><a href="https://wa.me/+966538432567">+966538432563</a></td>
                                <td className="md:text-xl text-xs font-semibold text-red-500">COMPLAIN</td>
                            </tr>
                            <tr className="bg-gray-100 ">
                                <th className='text-black'>5</th>
                                <td className="md:text-xl text-xs text-black font-semibold">Master</td>
                                <td><a href="https://wa.me/+966538432567"><FaWhatsapp className="text-3xl text-success"></FaWhatsapp></a></td>
                                <td className="md:text-xl text-xs font-semibold text-red-500"><a href="https://wa.me/+966538432567">+966538432562</a></td>
                                <td className="md:text-xl text-xs font-semibold text-red-500">COMPLAIN</td>
                            </tr>
                            <tr className="bg-gray-100 ">
                                <th className='text-black'>6</th>
                                <td className="md:text-xl text-xs text-black font-semibold">Master</td>
                                <td><a href="https://wa.me/+966538432567"><FaWhatsapp className="text-3xl text-success"></FaWhatsapp></a></td>
                                <td className="md:text-xl text-xs font-semibold text-red-500"><a href="https://wa.me/+966538432567">+966538432564</a></td>
                                <td className="md:text-xl text-xs font-semibold text-red-500">COMPLAIN</td>
                            </tr>
                            <tr className="bg-gray-100 ">
                                <th className='text-black'>7</th>
                                <td className="md:text-xl text-xs text-black font-semibold">Master</td>
                                <td><a href="https://wa.me/+966538432567"><FaWhatsapp className="text-3xl text-success"></FaWhatsapp></a></td>
                                <td className="md:text-xl text-xs font-semibold text-red-500"><a href="https://wa.me/+966538432567">+966538432565</a></td>
                                <td className="md:text-xl text-xs font-semibold text-red-500">COMPLAIN</td>
                            </tr>
                            <tr className="bg-gray-100 ">
                                <th className='text-black'>8</th>
                                <td className="md:text-xl text-xs text-black font-semibold">Master</td>
                                <td><a href="https://wa.me/+966538432567"><FaWhatsapp className="text-3xl text-success"></FaWhatsapp></a></td>
                                <td className="md:text-xl text-xs font-semibold text-red-500"><a href="https://wa.me/+966538432567">+966538432568</a></td>
                                <td className="md:text-xl text-xs font-semibold text-red-500">COMPLAIN</td>
                            </tr>
                            <tr className="bg-gray-100 ">
                                <th className='text-black'>9</th>
                                <td className="md:text-xl text-xs text-black font-semibold">Master</td>
                                <td><a href="https://wa.me/+966538432567"><FaWhatsapp className="text-3xl text-success"></FaWhatsapp></a></td>
                                <td className="md:text-xl text-xs font-semibold text-red-500"><a href="https://wa.me/+966538432567">+966538432560</a></td>
                                <td className="md:text-xl text-xs font-semibold text-red-500">COMPLAIN</td>
                            </tr>
                            <tr className="bg-gray-100 ">
                                <th className='text-black'>10</th>
                                <td className="md:text-xl text-xs text-black font-semibold">Master</td>
                                <td><a href="https://wa.me/+966538432567"><FaWhatsapp className="text-3xl text-success"></FaWhatsapp></a></td>
                                <td className="md:text-xl text-xs font-semibold text-red-500"><a href="https://wa.me/+966538432567">+966538432567</a></td>
                                <td className="md:text-xl text-xs font-semibold text-red-500">COMPLAIN</td>
                            </tr>
                            <tr className="bg-gray-100 ">
                                <th className='text-black'>11</th>
                                <td className="md:text-xl text-xs text-black font-semibold">Master</td>
                                <td><a href="https://wa.me/+966538432567"><FaWhatsapp className="text-3xl text-success"></FaWhatsapp></a></td>
                                <td className="md:text-xl text-xs font-semibold text-red-500"><a href="https://wa.me/+966538432567">+966538432564</a></td>
                                <td className="md:text-xl text-xs font-semibold text-red-500">COMPLAIN</td>
                            </tr>

                        </tbody>
                    </table>
                </div>
                
            </div>
            <div className='bg-black p-3 my-6 text-white'>
                <h2 className='flex items-center gap-2 uppercase text-3xl font-bold'><GoInfo className='bg-green-400 rounded-full' />এজেন্ট লিস্টঃ
                </h2>
                <p className='my-2 bg-yellow-50 text-xl text-center leading-10 text-black '>একাউন্ট খুলতে নিম্বের অনলাইন এজেন্ট লিস্ট এ ক্লিক করুন। এজেন্ট লিষ্ট এর এজেন্ট দের সাথে ইউজার দের শুধু মাত্র হোয়াটসাপ এর মাধ্যমে যোগাযোগ করতে হবে। হোয়াটসাপ ছাড়া অন্য কোন মাধ্যমে যোগাযোগ করলে বা লেনদেন করলে তা গ্রহনযোগ্য হবে না। হোয়াটসাপ এ যোগাযোগ করতে হলে এজেন্ট লিস্টে হোয়াটসাপ আইকন উপরে ক্লিক করুন অথবা ফোন নাম্বার টি মোবাইলে সেভ করে তাকে হোয়াটসাপ এ মসেজ পাঠাতে পারবেন। হোয়াটসাপ এপ টি আপনার মোবাইলে আগে থেকেই থাকতে হবে। না থাকলে গুগুল প্লে থেকে ইন্সটল করে নিন।
                    <br /><a href="/masterAgentList" className='underline text-blue-500'>অনলাইন মাষ্টার এজেন্ট লিস্টঃ</a></p>
            </div>
            <div className='bg-black p-3  my-6 text-white'>
                <h2 className='flex items-center gap-2 uppercase text-3xl font-bold'><GoInfo className='bg-green-400 rounded-full' />কিভাবে একাউন্ট খুলবেনঃ
                </h2>

                <div className='bg-black border-2 border-yellow-500 my-4 p-4'>
                    <p className=' bg-yellow-50 text-xl text-center leading-10 text-black '> <a href="/siteAdmin" className='underline text-blue-400'>অনলাইন সুপার এজেন্ট লিস্টঃ</a> সুপার এজেন্ট রা, ইউজার একাউন্ট এবং মাষ্টার এজেন্ট একাউন্ট খুলে দিতে পারেন। কোন সুপার এজেন্ট এর নামে অভিযোগ থাকলে - সরাসরি এডমিন কে জানাতে হবে। উপরে মেনু তে এডমিন লিষ্ট দেয়া আছে।</p>
                    <p className=' bg-yellow-50 text-xl text-center leading-10 text-black '> <a href="/masterAgentList" className='underline text-blue-400'>অনলাইন মাষ্টার এজেন্ট লিস্টঃ</a> অনলাইন মাষ্টার এজেন্ট রা, শুধু ইউজার একাউন্ট খুলে দিতে পারেন। কোন মাষ্টার এজেন্ট এর নামে অভিযোগ থাকলে - সরাসরি সুপার এজেন্ট এর কাছে অভিযোগ করতে হবে। <br /> <a href="https://wa.me/+966538432567" className='underline text-blue-400'>বিস্তারিত জানতে এই লিঙ্ক এ ক্লিক করুন।</a> </p>
                    <p className=' bg-yellow-50 text-xl text-center leading-10 text-black '><a href="/masterAgentList" className='underline text-blue-400'>লোকাল মাষ্টার এজেন্ট লিস্টঃ</a> লোকাল মাষ্টার এজেন্ট রা, শুধু ইউজার একাউন্ট খুলে দিতে পারেন। কিন্তু তাদের সাথে লেনদেন প্রতিটি ইউজার কে নিজ দায়িত্বে লেনদেন করতে হবে। তাদের নামে কোন অভিযোগ কারো কাছে করা যাবে না।</p>
                    <p className=' bg-yellow-50 text-xl text-center leading-10 text-black '><a href="/masterAgentList" className='underline text-blue-400'>লোকাল মাষ্টার এজেন্টঃ</a> এই সব এজেন্ট সাধারনত – নিজের এলাকায় বা পরিচিত দের সাথে লেনদেন করে । যারা আগে বাজি ধরিয়ে দিত, তাদের কেই মুলত লোকাল এজেন্ট দেয়া হয়েছে। লোকাল এজেন্ট রা অনলাইনে আসে না এবং তারা তাদের পরিচয় গোপন রাখতে চায়। লোকাল এজেন্ট দের সাথে অনলাইনে কোন ভাবেই লেনদেন করবেন না, আর করে থাকলে তার দায়ভার পুরোটাই আপনার।</p>
                </div>
            </div>

        </div>
    );
};

export default Home;