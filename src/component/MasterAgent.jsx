import Navbar from "./Navbar";
import { FaWhatsapp } from "react-icons/fa6";
import { Helmet } from "react-helmet";
import agents from '../../public/agent.json'
import { useEffect, useState } from "react";
const MasterAgent = () => {
    const [agent, setAgent] = useState(agents);
    const [masterAgents, setMasterAgents] = useState([]);
    const [superAgents, setSuperAgents] = useState([]);
    const [subAgents, setSubAgents] = useState([]);
    const [searchType, setSearchType] = useState('master');
    const [searchId, setSearchId] = useState('');
    const [filteredAgents, setFilteredAgents] = useState([]);

    useEffect(() => {
        // Filtering master agents
        const master = agent.filter(item => item.agentType === 'master');
        setMasterAgents(master);

        // Filtering super agents
        const superA = agent.filter(item => item.agentType === 'super');
        setSuperAgents(superA);

        // Filtering sub agents
        const sub = agent.filter(item => item.agentType === 'sub');
        setSubAgents(sub);
    }, [agent]);
    const handleSearch = (e) => {
        e.preventDefault();

        // Filter agents by type and agent ID
        const agentsList = agent.filter(item =>
            item.agentType === searchType && item.agentId.toString() === searchId
        );

        setFilteredAgents(agentsList);
    };
    return (
        <div>
            <Helmet>
                <title>Velkio | Master Agent</title>
            </Helmet>
            <Navbar></Navbar>
            <div>
                <h2 className="text-xl text-center font-semibold my-6">এজেন্ট এর আইডি নাম্বার দিয়ে খুজুনঃ</h2>
                <div className="md:w-3/12 px-2 mx-auto shadow-lg border-2 border-gray-300">
                    <form onSubmit={handleSearch}>
                        <label className="text-xl">Agent Type:</label><br />
                        <select
                            className="border-2 border-gray-200 p-1 my-2 w-full"
                            value={searchType}
                            onChange={(e) => setSearchType(e.target.value)}
                        >
                            <option value="master">মাস্টার এজেন্ট</option>
                            <option value="super">সুপার এজেন্ট</option>
                            <option value="sub">সাব এজেন্ট</option>
                        </select>

                        <label className="text-xl my-2" htmlFor="input">Agent ID:</label><br />
                        <input
                            className="p-1 px-2 my-2 outline-none w-full border-2 border-gray-200 rounded-lg"
                            type="text"
                            value={searchId}
                            onChange={(e) => setSearchId(e.target.value)}
                            placeholder="Enter Agent ID"
                        />
                        <input className="bg-success p-2 px-6 rounded-lg text-white my-4" type="submit" value="Submit" />
                    </form>

                </div>
            </div>
            {filteredAgents.length > 0 ? (
                <div key={filteredAgents.id} className="my-5 md:w-9/12 mx-auto">
                    <h2 className="text-2xl text-red-500 font-semibold leading-10 text-center">লটারী! লটারী!! লটারী!!!!!... <br />
                        আপনি যদি ভেল্কির ইউজার হয়ে থাকেন তাহলে ফ্রীতে লটারী তে জয়েন করুন...</h2>
                    {
                        filteredAgents.map(agent =>
                            <div key={agent.id} className="text-center my-4">
                                <h2 className="text-xl font-semibold">উনি ভেল্কির একজন অনলাইন মাষ্টার এজেন্ট নাম্বার {agent.agentId}</h2>
                                <div className="overflow-x-auto">
                                    <table className="md:table table-xs text-center">
                                        <thead className="text-center">
                                            <tr>
                                                <th>উনার মাষ্টার এজেন্ট আইডিঃ</th>
                                                <th>{agent.agentId}</th>
                                            </tr>
                                        </thead>
                                        <tbody className="text-center">
                                            <tr className="bg-base-200">
                                                <td className="text-lg">উনার হোয়াটসঅ্যাপ নাম্বারঃ</td>
                                                <td className="text-lg text-red-500"><a href="https://wa.me/+966538432567">+{agent.number}</a></td>
                                            </tr>

                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        )
                    }
                </div>

            ) : (
                null
            )}
            <div className="border-2 border-gray-300 p-2 md:w-9/12 mx-auto my-12">



                <h2 className="text-3xl font-bold text-center my-8">VELKIO MASTER AGENT LIST</h2>
                <h2 className="my-6 md:text-xl text-xs font-semibold text-center">সাব এডমিন 1 এর অধীনে সুপার এজেন্ট 156 এর অধীনে সর্বমোট মাস্টার এজেন্ট আছে 8 জন</h2>
                <div className="overflow-x-hidden my-8">
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

                            {
                                masterAgents.map(master =>
                                    <tr key={master.id} className="bg-base-100 ">
                                        <th>{master.agentId}</th>
                                        <td className="md:text-xl text-xs font-semibold">Master</td>
                                        <td><a href="https://wa.me/+966538432567"><FaWhatsapp className="text-3xl text-success"></FaWhatsapp></a></td>
                                        <td className="md:text-xl text-xs font-semibold text-red-500"><a href="https://wa.me/+966538432567">+{master.number}</a></td>
                                        <td className="md:text-xl text-xs font-semibold text-red-500"><a href="https://wa.me/+966538432567">অভিযোগ</a></td>
                                    </tr>
                                )
                            }


                        </tbody>
                    </table>
                </div>
                <div className="divider"></div>

                <h1 className="text-center md:text-xl text-xs font-semibold my-4"> সাব এডমিন 1 এর অধীনে সুপার এজেন্ট 564 এর অধীনে সর্বমোট মাস্টার এজেন্ট আছে 8 জন</h1>
                <div className="overflow-x-hidden my-8">
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

                            {
                                superAgents.map(superA =>
                                    <tr key={superA.id} className="bg-base-100 ">
                                        <th>{superA.agentId}</th>
                                        <td className="md:text-xl text-xs font-semibold">Master</td>
                                        <td><a href="https://wa.me/+966538432567"><FaWhatsapp className="text-3xl text-success"></FaWhatsapp></a></td>
                                        <td className="md:text-xl text-xs font-semibold text-red-500"><a href="https://wa.me/+966538432567">+{superA.number}</a></td>
                                        <td className="md:text-xl text-xs font-semibold text-red-500"><a href="https://wa.me/+966538432567">অভিযোগ</a></td>
                                    </tr>
                                )
                            }

                        </tbody>
                    </table>
                </div>
                <div className="divider"></div>
                <h2 className="text-center md:text-xl text-xs font-semibold my-4">সাব এডমিন 3 এর অধীনে সুপার এজেন্ট 58 এর অধীনে সর্বমোট মাস্টার এজেন্ট আছে 8 জন</h2>
                <div className="overflow-x-hidden my-8">
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

                            {
                                subAgents.map(sub =>
                                    <tr key={sub.id} className="bg-base-100 ">
                                        <th>{sub.agentId}</th>
                                        <td className="md:text-xl text-xs font-semibold">Master</td>
                                        <td><a href="https://wa.me/+966538432567"><FaWhatsapp className="text-3xl text-success"></FaWhatsapp></a></td>
                                        <td className="md:text-xl text-xs font-semibold text-red-500"><a href="https://wa.me/+966538432567">+{sub.number}</a></td>
                                        <td className="md:text-xl text-xs font-semibold text-red-500"><a href="https://wa.me/+966538432567">অভিযোগ</a></td>
                                    </tr>
                                )
                            }

                        </tbody>
                    </table>
                </div>
                <h2 className="md:text-xl text-xs font-semibold my-6">এজেন্ট দের সাথে লেনদেন এর আগে Velkio নিয়ম গুলো জেনে নিন!!</h2>
                <p className="leading-10">**প্রতারনার হাত থেকে বাচতে সবার আগে ভিজিট করুন Velkioসাইটঃ VELKIO.CO <br />

                    **হোয়াটসাপ ব্যাতিত অন্য কোন এপ এর মাধ্যমে যোগাযোগ বা লেনদেন করা যাবে না এবং করলে তা গ্রহনযোগ্য হবে না। <br />

                    **এজেন্ট পাসোয়ার্ড পরিবর্তন করে দিলে - আপনি একাউন্টে ঢুকে আবার পাসোয়ার্ড পরিবর্তন করে নিবেন। এজেন্ট যাতে কোন ভাবেই আপনার পাসোয়ার্ড না জানে। আপনার পাসোয়ার্ড আপনি কাউকেই দিবেন না - সে যেই হউক না কেন। <br />

                    **সকাল ৯ঃ৪৫ এর আগে এবং রাত ৯ঃ৪৫ এর পরে কোন ইউজার যদি এজেন্ট কে টাকা পাঠায় – অই টাকার দায়ভার Velkioনিবে না। <br />

                    **প্রতিবার এজেন্ট এর কাছ থেকে পয়েন্ট নেবার আগে – এজেন্ট এর কাছে লেনদেন এর তথ্য জেনে নিতে হবে। যেহেতু এজেন্ট এক এক সময় এক ভাবে লেনদেন করে সেহেতু এই তথ্য জানা জরুরী। <br />

                    **এজেন্ট এর বিরুদ্ধে কোন অভিযোগ থাকলে এজেন্ট এর নামের শেষে অভিযোগ বাটন এ ক্লিক করলে যে হোয়াটসাপ নাম্বার আসবে - তাকে অভিযোগ করতে হবে।</p>
            </div>
        </div>
    );
};

export default MasterAgent;