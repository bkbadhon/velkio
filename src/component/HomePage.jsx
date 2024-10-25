import { Link } from "react-router-dom";
import Navbar from "./Navbar";
import logo from '../../public/banner.jpg'
import account from '../../public/acc.jpg'
import { FaArrowRight } from "react-icons/fa";
import master from '../../public/masterCard-D7_O7WUg.jpg'
import { Helmet } from "react-helmet";

const HomePage = () => {
    return (
        <div>
            <Helmet>
                <title>Velkio | Homepage</title>
            </Helmet>
            <Navbar></Navbar>
            <div className="md:w-9/12 md:flex  my-8 mx-auto border-2 border-gray-600">
                <div className="md:w-3/5">
                    <h2 className="uppercase bg-gray-400 p-2 text-white">In The Spotlight</h2>
                    <button className="border-2 border-gray-500 hover:border-none duration-300 hover:bg-red-600 hover:text-white my-4 ml-2 p-1">Agent</button>
                    <h2 className="text-3xl font-semibold hover:text-red-600 ml-6">Velkio অটো ডিপোজিট এজেন্ট</h2>

                    <p className="text-red-600 hover:underline text-center my-8  "><a href="#">Velkio তে কিভাবে অটো ডিপোজিট করবেন তা জানতে <br />
                        আপনি এই লিঙ্ক এ ক্লিক করে দয়া করে ভিডিও টি দেখে নিন</a></p>

                    <button className="border-2 border-gray-300 p-1 bg-gray-100 mx-auto w-full my-2 ml-2 mr-2"><Link to={'/depositagent'}>Read more …Velkio অটো ডিপোজিট এজেন্ট</Link></button>

                    <div className="divider "></div>
                    <div className="md:flex gap-4 justify-center">
                        <div className="w-full mx-auto">
                            <div className="relative my-4 p-2">
                                <img className="md:w-40 md:h-24 p-2" src={logo} alt="" />
                                <button className="border-2 border-gray-500 absolute top-16 hover:border-none duration-300 rounded-xl hover:bg-red-600 bg-white hover:text-white my-4 ml-2 p-1">Agent</button>
                            </div>
                            <Link to={'/'}>
                                <h2 className="text-xl text-center hover:text-red-500 font-semibold mb-2">কাস্টমার সার্ভিস লিষ্ট</h2>
                            </Link>
                            <h2 className="text-xl text-center font-bold ">VELKIO CUSTOMER SERVICE LIST</h2>

                            <button className="border-2 border-gray-300 p-1 bg-gray-100 mx-auto w-full my-2 ml-2 mr-2"><Link to={'/customerService'}>Read more …কাস্টমার সার্ভিস লিষ্ট</Link></button>
                        </div>
                        <div className="mx-auto w-full">
                            <div className="relative  my-4 p-2">
                                <img className="md:w-40 md:h-24" src={logo} alt="" />
                                <button className="border-2 border-gray-500 absolute top-16 hover:border-none duration-300 rounded-xl hover:bg-red-600 bg-white hover:text-white my-4 ml-2 p-1">Agent</button>
                            </div>
                            <Link to={'/'}>
                                <h2 className="text-xl text-center hover:text-red-500 font-semibold mb-2">মাস্টার এজেন্ট লিষ্টঃ</h2>
                            </Link>
                            <h2 className="text-xs text-center font-bold">এজেন্ট দের সাথে লেনদেন এর আগে Velkio নিয়ম গুলো জেনে নিন!! **প্রতারনার হাত থেকে বাচতে সবার আগে</h2>

                            <button className="border-2 border-gray-300 p-1 bg-gray-100 mx-auto w-full my-2 ml-2 mr-2"><Link to={'/masterAgentList'}>Read more.. মাস্টার এজেন্ট লিষ্ট</Link></button>
                        </div>
                        <div className="w-full mx-auto">
                            <div className="relative my-4 p-2">
                                <img className="md:w-40 md:h-24" src={logo} alt="" />
                                <button className="border-2 border-gray-500 absolute top-16 hover:border-none duration-300 rounded-xl hover:bg-red-600 bg-white hover:text-white my-4 ml-2 p-1">Agent</button>
                            </div>
                            <Link to={'/'}>
                                <h2 className="text-xl text-center hover:text-red-500 font-semibold mb-2">সুপার এজেন্ট লিষ্টঃ</h2>
                            </Link>
                            <h2 className="text-xs text-center font-bold">এজেন্ট দের সাথে লেনদেন এর আগে Velkio নিয়ম গুলো জেনে নিন!! **প্রতারনার হাত থেকে বাচতে সবার আগে</h2>

                            <button className="border-2 border-gray-300 p-1 bg-gray-100 mx-auto w-full my-2 ml-2 mr-2"><Link to={'/siteAdmin'}>Read more.. Site Admin লিষ্ট</Link></button>
                        </div>
                    </div>
                </div>
                <div className="md:w-2/5 border-l-2 ml-2 border-gray-100">
                    <h2 className="uppercase bg-gray-200 p-2 text-center w-full">more news</h2>
                    <div className="flex gap-4">
                        <img className="w-32 mt-6 ml-2 h-12" src={logo} alt="" />
                        <div className="">
                            <div className="flex gap-4 items-center">
                                <button className="border-2 border-gray-500 hover:border-none duration-300 rounded-xl hover:bg-red-600 bg-white hover:text-white my-4 ml-2 p-1">Agent</button>
                                <h2>02 January 2024</h2>
                            </div>
                            <Link to={'/subAdmin'}>
                                <button className="hover:text-red-600 font-semibold">সাব এডমিন লিষ্টঃ</button>
                            </Link>
                        </div>
                    </div>
                    <div className="flex gap-4">
                        <img className="w-32 mt-6 ml-2 h-12" src={logo} alt="" />
                        <div className="">
                            <div className="flex gap-4 items-center">
                                <button className="border-2 border-gray-500 hover:border-none duration-300 rounded-xl hover:bg-red-600 bg-white hover:text-white my-4 ml-2 p-1">Agent</button>
                                <h2>02 January 2024</h2>
                            </div>
                            <Link to={'/agenttype'}>
                                <button className="hover:text-red-600 font-semibold">এজেন্ট কয় প্রকারঃ</button>
                            </Link>
                        </div>
                    </div>
                    <div className="flex gap-4">
                        <img className="w-32 mt-6 ml-2 h-12" src={logo} alt="" />
                        <div className="">
                            <div className="flex gap-4 items-center">
                                <button className="border-2 border-gray-500 hover:border-none duration-300 rounded-xl hover:bg-red-600 bg-white hover:text-white my-4 ml-2 p-1">Agent</button>
                                <h2>02 January 2024</h2>
                            </div>
                            <Link to={'/masterAgentList'}>
                                <button className="hover:text-red-600 font-semibold">এজেন্ট লিস্টঃ</button>
                            </Link>
                        </div>
                    </div>
                    <div className="flex gap-4">
                        <img className="w-32 mt-6 ml-2 h-12" src={logo} alt="" />
                        <div className="">
                            <div className="flex gap-4 items-center">
                                <button className="border-2 border-gray-500 hover:border-none duration-300 rounded-xl hover:bg-red-600 bg-white hover:text-white my-4 ml-2 p-1">Agent</button>
                                <h2>02 January 2024</h2>
                            </div>
                            <Link to={'/siteAdmin'}>
                                <button className="hover:text-red-600 font-semibold">সাইট এডমিন লিস্ট</button>
                            </Link>
                        </div>
                    </div>

                    <img className="px-2 mt-8 w-full" src={account} alt="" />


                </div>
            </div>
            <div className="md:w-9/12 border-2 p-2 border-gray-400 mx-auto">
                <h2 className="text-3xl p-2 font-bold">Random Master Agent</h2>
                <div className="bg-gray-200 w-full p-2">
                    <button className=" flex gap-2 items-center bg-red-500 text-white p-1 px-4">Master Agent <FaArrowRight /></button>
                </div>
            </div>
            <div className="md:w-9/12 md:flex my-6 p-4 mx-auto">
                <div className="relative border-2 border-dashed">
                    <img src={master} alt="" />
                    <button className="btn-sm bg-white border-2 border-gray-100 absolute top-16 hover:bg-red-600 duration-300 hover:border-none ml-2 hover:text-white">Master Agent</button>
                    <h2 className="text-center text-xl my-4 font-semibold">মাষ্টার এজেন্ট এর তথ্য 1</h2>
                    <p className="text-gray-500 text-center">Administrator 10/15/2024</p>

                    <p className="text-center text-xl my-2 font-semibold">মাষ্টার এজেন্ট আইডিঃ 778
                    হোয়াটসঅ্যাপ নাম্বারঃ <br /> <a href="https://wa.me/+966538432567" className="text-red-600">+966538432567</a></p>
                </div>
                <div className="relative border-2 border-dashed">
                    <img src={master} alt="" />
                    <button className="btn-sm bg-white border-2 border-gray-100 absolute top-16 hover:bg-red-600 duration-300 hover:border-none ml-2 hover:text-white">Master Agent</button>
                    <h2 className="text-center text-xl my-4 font-semibold">মাষ্টার এজেন্ট এর তথ্য 2</h2>
                    <p className="text-gray-500 text-center">Administrator 10/28/2024</p>

                    <p className="text-center text-xl my-2 font-semibold">মাষ্টার এজেন্ট আইডিঃ 78
                    হোয়াটসঅ্যাপ নাম্বারঃ <br /> <a href="https://wa.me/+966538432567" className="text-red-600">+966538432567</a></p>
                </div>
                <div className="relative border-2 border-dashed">
                    <img src={master} alt="" />
                    <button className="btn-sm bg-white border-2 border-gray-100 absolute top-16 hover:bg-red-600 duration-300 hover:border-none ml-2 hover:text-white">Master Agent</button>
                    <h2 className="text-center text-xl my-4 font-semibold">মাষ্টার এজেন্ট এর তথ্য 3</h2>
                    <p className="text-gray-500 text-center">Administrator 10/10/2024</p>

                    <p className="text-center text-xl my-2 font-semibold">মাষ্টার এজেন্ট আইডিঃ 798
                    হোয়াটসঅ্যাপ নাম্বারঃ <br /> <a href="https://wa.me/+966538432567" className="text-red-600">+966538432567</a></p>
                </div>
                <div className="relative border-2 border-dashed">
                    <img src={master} alt="" />
                    <button className="btn-sm bg-white border-2 border-gray-100 absolute top-16 hover:bg-red-600 duration-300 hover:border-none ml-2 hover:text-white">Master Agent</button>
                    <h2 className="text-center text-xl my-4 font-semibold">মাষ্টার এজেন্ট এর তথ্য 4</h2>
                    <p className="text-gray-500 text-center">Administrator 09/15/2024</p>

                    <p className="text-center text-xl my-2 font-semibold">মাষ্টার এজেন্ট আইডিঃ 733
                    হোয়াটসঅ্যাপ নাম্বারঃ <br /> <a href="https://wa.me/+966538432567" className="text-red-600">+966538432567</a></p>
                </div>
                
            </div>
            <div className="md:w-9/12 mx-auto">
                <h2 className="text-2xl font-bold">FAQ</h2>
                <div className="bg-gray-200 w-full p-2">
                    <button className=" flex gap-2 items-center bg-red-500 text-white p-1 px-4">Velkio FAQ <FaArrowRight /></button>
                </div>

                <div>
                    <div className="divider"></div>
                    <div className="flex mb-2 border-2 border-dashed items-center gap-2">
                        <img className="w-40 h-20" src={logo} alt="" />
                        <div>
                            <button className="border-2 border-gray-300 hover:bg-red-500 duration-300 hover:text-white">Velkio FAQ</button>
                            <h2 className="md:text-xl hover:text-red-500"><Link to={'/lenden'}>Velkio তে কিভাবে লেনদেন করবেন?</Link></h2>
                        </div>
                    </div>
                    <div className="flex mb-2 border-2 border-dashed items-center gap-2">
                        <img className="w-40 h-20" src={logo} alt="" />
                        <div>
                            <button className="border-2 border-gray-300 hover:bg-red-500 duration-300 hover:text-white">Velkio FAQ</button>
                            <h2 className="md:text-xl  hover:text-red-500"><Link to={'/create'}>কিভাবে একাউন্ট খুলবেন?</Link></h2>
                        </div>
                    </div>
                    <div className="flex mb-2 border-2 border-dashed items-center gap-2">
                        <img className="w-40 h-20" src={logo} alt="" />
                        <div>
                            <button className="border-2 border-gray-300 hover:bg-red-500 duration-300 hover:text-white">Velkio FAQ</button>
                            <h2 className="md:text-xl hover:text-red-500"><Link to={'/condition'}>
                            একাউন্ট খোলার নিয়ম বা শর্ত গুলো কি কি?</Link></h2>
                        </div>
                    </div>
                    <div className="flex mb-2 border-2 border-dashed items-center gap-2">
                        <img className="w-40 h-20" src={logo} alt="" />
                        <div>
                            <button className="border-2 border-gray-300 hover:bg-red-500 duration-300 hover:text-white">Velkio FAQ</button>
                            <h2 className="md:text-xl  hover:text-red-500"><Link to={'/'}>Velkio ফেইসবুক গ্রুপ লিঙ্ক কোন টা?</Link></h2>
                        </div>
                    </div>
                    <div className="flex mb-2 border-2 border-dashed items-center gap-2">
                        <img className="w-40 h-20" src={logo} alt="" />
                        <div>
                            <button className="border-2 border-gray-300 hover:bg-red-500 duration-300 hover:text-white">Velkio FAQ</button>
                            <h2 className="md:text-xl  hover:text-red-500"><Link to={'/howToBeAgent'}>কিভাবে আমি Velkioতে এজেন্ট হতে পারি?</Link></h2>
                        </div>
                    </div>
                    <div className="flex mb-2 border-2 border-dashed items-center gap-2">
                        <img className="w-40 h-20" src={logo} alt="" />
                        <div>
                            <button className="border-2 border-gray-300 hover:bg-red-500 duration-300 hover:text-white">Velkio FAQ</button>
                            <h2 className="md:text-xl  hover:text-red-500"><Link to={'/master'}>কিভাবে আমি অনলাইন মাষ্টার এজেন্ট হতে পারি?</Link></h2>
                        </div>
                    </div>
                    <div className="flex mb-2 border-2 border-dashed items-center gap-2">
                        <img className="w-40 h-20" src={logo} alt="" />
                        <div>
                            <button className="border-2 border-gray-300 hover:bg-red-500 duration-300 hover:text-white">Velkio FAQ</button>
                            <h2 className="md:text-xl  hover:text-red-500"><Link to={'/ovijog'}>এজেন্ট এর বিরুদ্ধে কিভাবে অভিযোগ করবেন?</Link></h2>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default HomePage;