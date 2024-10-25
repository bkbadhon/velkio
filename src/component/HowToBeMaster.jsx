import React from 'react';
import Navbar from './Navbar';
import { Helmet } from 'react-helmet';

const HowToBeMaster = () => {
    return (
        <div>
             <Helmet>
                <title>Velkio | How to Become Master</title>
            </Helmet>
            <Navbar></Navbar>
            <div className='md:w-9/12 border-2 border-dashed p-4 mx-auto my-12'>
                <h2 className='text-3xl font-semibold'>কিভাবে আমি Velkio তে অনলাইন মাষ্টার এজেন্ট হতে পারি?</h2>

                <p className='my-12'>অনলাইন এজেন্ট হবার আগে আপনি লোকাল এজেন্ট হবার নিয়ম গুলো পড়ে নিনঃ

                    লোকাল এজেন্ট হবার নিয়ম জানতে এই লিঙ্ক এ ক্লিক করুন –
                    ** অনলাইন এজেন্ট এর পয়েন্ট প্রাইস ফিক্সড ৯৩ টাকা করে।
                    ** ২ লক্ষ টাকা জমা দিতে হবে, যা অফেরত যোগ্য।
                    ** যদি কোম্পানীর বিকাশ – নগদ এজেন্ট ব্যবহার করেন – তাহলে পয়েন্ট এর দাম হবে ৯৫ টাকা।
                    ** অনলাইন এজেন্ট কোন ভাবেই নিজে বেট ধরতে পারবেন না। যদি কোন ভাবে নিজে খেলেন, তাহলে অনতি বিলম্বে তাকে বাদ দেয়া হবে।</p>
            </div>
        </div>
    );
};

export default HowToBeMaster;