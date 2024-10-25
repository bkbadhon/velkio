import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../../public/banner.jpg'

const navLinks = (
    <>
        <li>
            <NavLink to="/depositAgent" exact activeClassName="active">অটো ডিপোজিট এজেন্ট</NavLink>
        </li>
        <li>
            <NavLink to="/homepage" activeClassName="active">হোম পেইজ</NavLink>
        </li>
        <li>
            <details>
                <summary>সাধারন প্রশ্ন উত্তর</summary>
                <ul className="p-2">
                    <li>
                        <NavLink to="/create" activeClassName="active">কিভাবে একাউন্ট খুলবেন?</NavLink>
                    </li>
                    <li>
                        <NavLink to="/lenden" activeClassName="active">কিভাবে লেনদেন করবেন?</NavLink>
                    </li>
                </ul>
            </details>
        </li>
        <li>
            <details>
                <summary>এজেন্ট লিষ্ট</summary>
                <ul className="p-2">
                    <li>
                        <NavLink to="/masterAgentList" activeClassName="active">মাষ্টার এজেন্ট লিষ্ট</NavLink>
                    </li>
                    <li>
                        <NavLink to="/subAdmin" activeClassName="active">সাব এডমিন লিষ্ট</NavLink>
                    </li>
                    <li>
                        <NavLink to="/siteAdmin" activeClassName="active">সাইট এডমিন লিষ্ট</NavLink>
                    </li>
                    <li>
                        <NavLink to="/customerService" activeClassName="active">কাস্টমার সার্ভিস লিষ্ট</NavLink>
                    </li>
                </ul>
            </details>
        </li>
    </>
);

const Navbar = () => {
    return (
        <div className="navbar bg-gray-100">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor">
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 6h16M4 12h8m-8 6h16" />
                        </svg>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                        {navLinks}
                    </ul>
                </div>
                <a href='/' className="btn btn-ghost text-xl"><img className='w-32' src={logo} alt="" /></a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {navLinks}
                </ul>
            </div>
            <div className="navbar-end">
                <a href='https://wa.me/+966538432567' className="btn text-red-600">কাস্টমার সার্ভিস</a>
            </div>
        </div>
    );
};

export default Navbar;
