import React from 'react';
import Navbar from './Navbar';
import { Helmet } from 'react-helmet';

const DepositAgent = () => {
    return (
       <div>
        <Helmet>
            <title>Velkio | অটো ডিপোজিট</title>
        </Helmet>
            <Navbar></Navbar>
             <div className='my-10 md:w-9/12 mx-auto border-2 border-gray-600 p-8'>
            <h2 className='text-4xl mb-4 leading-10'>Velkio অটো ডিপোজিট এজেন্ট</h2>
            <button className='border-red-400 border-2 p-1 hover:bg-red-500 hover:text-white duration-300'>Agent</button>

            <div className='text-center my-6'>
                <a href="" className='text-3xl text-red-500 mb-4 hover:underline'>Velkio তে কিভাবে অটো ডিপোজিট করবেন তা জানতে <br />
                    আপনি এই লিঙ্ক এ ক্লিক করে দয়া করে ভিডিও টি দেখে নিন</a>

                <p className='text-base my-6 leading-10'>আপনি এখন থেকে সরাসরি Velkio সাইটে এজেন্ট ছাড়াই একাউন্ট খুলতে পারবেন। <br />

                    এই খানে সব কিছু অটোমেটিক - অপেক্ষার কোন বালাই নাই। <br />

                    দিন রাত ২৪ ঘন্টা ডিপোজিট এবং উইথড্র করতে পারবেন। <br />

                    প্রতিবার ডিপোজিট এবং উইথড্র লিমিট হচ্ছে ৫০০ টাকা থেকে ২৫০০০ টাকা পর্যন্ত। <br />

                    দিনে যত বার মনে চায় অতবার উইথড্র এবং ডিপোজিট করতে পারবেন। <br />

                    ভিডিও তে দেখলে ১ মিনিটেই শিখতে পারবেন কিভাবে ডিপোজিট করতে হবে এবং উইথড্র করতে হবে।</p>

                    <h2 className='text-2xl my-4'>অটো ডিপোজিট আইডি খোলার জন্য এই হোয়াটসাপ নাম্বার এ মেসেজ দিতে হবেঃ</h2>

                    <h3 className='text-red-500 text-2xl'> <a href="https://wa.me/+966538432567">+966538432567</a></h3>
            </div>
        </div>
       </div>
    );
};

export default DepositAgent;