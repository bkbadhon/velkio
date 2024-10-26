import React from 'react';
import Navbar from './Navbar';
import img from '../../public/banner.jpg'

const NewNumber = () => {
    return (
        <div>
            <Navbar></Navbar>
            <div className='md:w-9/12 mx-auto border-2 border-gray-300 p-4 my-12'>
                <h2 className='text-3xl font-semibold my-4'>এজেন্টের এর নতুন পুরাতন নাম্বার</h2>

                <img className='w-full p-4 h-80' src={img} alt="" />

                <h2 className='text-xl p-2 font-semibold my-4'>দয়া করে একটু নির্দেশনা গুলো পড়ে নিনঃ</h2>
                <p className='leading-10 p-5'>
                    **প্রতারনার হাত থেকে বাচতে সবার আগে ভিজিট করুন ভেল্কি সাইটঃ Velki.CO <br />

                    **হোয়াটসাপ ব্যাতিত অন্য কোন এপ এর মাধ্যমে যোগাযোগ বা লেনদেন করা যাবে না এবং করলে তা গ্রহনযোগ্য হবে না। <br />

                    **এজেন্ট পাসোয়ার্ড পরিবর্তন করে দিলে - আপনি একাউন্টে ঢুকে আবার পাসোয়ার্ড পরিবর্তন করে নিবেন। এজেন্ট যাতে কোন ভাবেই আপনার পাসোয়ার্ড না জানে। আপনার পাসোয়ার্ড আপনি কাউকেই দিবেন না - সে যেই হউক না কেন। <br />

                    **সকাল ৯ঃ৪৫ এর আগে এবং রাত ৯ঃ৪৫ এর পরে কোন ইউজার যদি এজেন্ট কে টাকা পাঠায় – অই টাকার দায়ভার ভেল্কি নিবে না। <br />

                    **প্রতিবার এজেন্ট এর কাছ থেকে পয়েন্ট নেবার আগে – এজেন্ট এর কাছে লেনদেন এর তথ্য জেনে নিতে হবে। যেহেতু এজেন্ট এক এক সময় এক ভাবে লেনদেন করে সেহেতু এই তথ্য জানা জরুরী। <br />

                    **এজেন্ট এর বিরুদ্ধে কোন অভিযোগ থাকলে এজেন্ট এর নামের শেষে অভিযোগ বাটন এ ক্লিক করলে যে হোয়াটসাপ নাম্বার আসবে - তাকে অভিযোগ করতে হবে।
                </p>

                <h2 className='text-2xl font-bold uppercase my-5 text-center'>old new number of agents</h2>

                <table className="md:table table-xs">
                        {/* head */}
                        <thead>
                            <tr className="border-2 border-gray-300">
                                <th className="md:text-xl text-xs font-bold">OLD ID</th>
                                <th className="md:text-xl text-xs font-bold">NEW ID</th>
                                <th className="md:text-xl text-xs font-bold">OLD NUMBER</th>
                                <th className="md:text-xl text-xs font-bold">NEW NUMBER</th>

                            </tr>
                        </thead>
                        <tbody>
                            <tr className="bg-base-200 ">
                                <th>51</th>
                                <td className="md:text-xl text-xs font-semibold">325</td>
                                <td className="md:text-xl text-xs line-through font-semibold text-red-500">+966565432576</td>
                                <td className="md:text-xl text-xs font-semibold text-red-500">+966538432567</td>
                            </tr>
                            <tr className="bg-base-200 border-b-2 ">
                                <th>52</th>
                                <td className="md:text-xl text-xs font-semibold">357</td>
                                <td className="md:text-xl text-xs line-through font-semibold text-red-500">+966565432650</td>
                                <td className="md:text-xl text-xs font-semibold text-red-500">+966538432567</td>
                            </tr>
                            <tr className="bg-base-200 border-b-2 border-gray-300">
                                <th>45</th>
                                <td className="md:text-xl text-xs font-semibold">323</td>
                                <td className="md:text-xl text-xs line-through font-semibold text-red-500">+966565436565</td>
                                <td className="md:text-xl text-xs font-semibold text-red-500">+966538432567</td>
                            </tr>
                            <tr className="bg-base-200 border-b-2 border-gray-300">
                                <th>31</th>
                                <td className="md:text-xl text-xs font-semibold">328</td>
                                <td className="md:text-xl text-xs line-through font-semibold text-red-500">+966568778659</td>
                                <td className="md:text-xl text-xs font-semibold text-red-500">+966538432567</td>
                            </tr>
                            <tr className="bg-base-200 border-b-2 border-gray-300">
                                <th>43</th>
                                <td className="md:text-xl text-xs font-semibold">376</td>
                                <td className="md:text-xl text-xs line-through font-semibold text-red-500">+966567675657</td>
                                <td className="md:text-xl text-xs font-semibold text-red-500">+966538432567</td>
                            </tr>
                            <tr className="bg-base-200 border-b-2 border-gray-300">
                                <th>22</th>
                                <td className="md:text-xl text-xs font-semibold">343</td>
                                <td className="md:text-xl text-xs line-through font-semibold text-red-500">+966554354343</td>
                                <td className="md:text-xl text-xs font-semibold text-red-500">+966538432567</td>
                            </tr>
                            <tr className="bg-base-200 border-b-2 border-gray-300">
                                <th>59</th>
                                <td className="md:text-xl text-xs font-semibold">436</td>
                                <td className="md:text-xl text-xs line-through font-semibold text-red-500">+963232454554</td>
                                <td className="md:text-xl text-xs font-semibold text-red-500">+966538432567</td>
                            </tr>
                           
                        </tbody>
                    </table>
            </div>

        </div>
    );
};

export default NewNumber;