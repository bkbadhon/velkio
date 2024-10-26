import Navbar from "./Navbar";
import logo from '../../public/banner.jpg'
import { Helmet } from "react-helmet";

const Lenden = () => {
    return (
        <div>
             <Helmet>
                <title>Velki | কিভাবে লেনদেন করবেন</title>
            </Helmet>
            <Navbar></Navbar>
            <div className="md:w-9/12 border-2 border-gray-200 p-4 mx-auto my-12">
                <h2 className="text-3xl font-semibold">Velki তে কিভাবে লেনদেন করবেন?</h2>

                <img className="w-full h-96 p-8" src={logo} alt="" />

                <div className="my-4">
                    <h2 className="text-xl font-semibold mb-2">বিকাশ / নগদ / রকেট বা অন্যান্য মোবাইল ব্যাংকিং এ কিভাবে লেনদেন করবেন?</h2>
                    <h3>ইউজার যখন এজেন্ট কে টাকা পাঠাবে এবং এজেন্ট যখন ইউজার কে টাকা পাঠাবেঃ-</h3>
                    <ul className="px-4">
                        <li className="list-disc">ইউজার যদি এজেন্টর বিকাশ পার্সোনাল এ টাকা পাঠায় ১০ পয়েন্ট এর জন্য ক্যাশ ইন বা সেন্ড ম্যানি করবে ১০২০ টাকা।</li>
                        <li className="list-disc">ইউজার যদি এজেন্টের বিকাশ এজেন্ট এ টাকা পাঠায় ১০ পয়েন্টের জন্য ক্যাশ আউট করবে ১০০০ টাকা।</li>
                        <li className="list-disc">এজেন্ট যদি ইউজার এর বিকাশ পার্সোনাল এ টাকা পাঠায় ১০ পয়েন্টের জন্য এজেন্ট ক্যাশ ইন করবে ১০০০ টাকা।</li>
                        <li className="list-disc">এজেন্ট যদি ইউজার এর বিকাশ এজেন্ট এ টাকা পাঠায় ১০ পয়েন্ট এর জন্য ক্যাশ আউট করবে ৯৮০ টাকা</li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Lenden;