import Navbar from './Navbar';
import logo from '../../public/banner.jpg'
import { Helmet } from 'react-helmet';
const CustomerService = () => {
    return (
        <div>
            <Helmet>
                <title>Velkio | Customer Service</title>
            </Helmet>
            <Navbar></Navbar>
            <div className='md:w-9/12 mx-auto my-12 border-2 border-gray-300 p-4'>
                <img className='w-full h-80 p-4' src={logo} alt="" />
                <h2 className='my-4 text-3xl font-bold text-center'>VELKIO CUSTOMER SERVICE LIST</h2>
                <p className='text-xl font-semibold my-4 text-center'>
                Velkio তে আপনি অটো ডিপোজিট এবং অটো উইথড্র আইডি খুলে নিতে পারবেন। বিস্তারিত জানতে কাস্টমার সার্ভিসে যোগাযোগ করুন <br /> 

                    <a href="https://wa.me/+966538432567" className='text-red-500 text-center capitalize my-5 '>click here</a>
                </p>
            </div>
        </div>
    );
};

export default CustomerService;