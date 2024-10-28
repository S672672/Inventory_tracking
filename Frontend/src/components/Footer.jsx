import React from 'react';
import { FaFacebookF, FaInstagram, FaYoutube } from 'react-icons/fa';
import { Link } from 'react-router-dom';

export default function Footer() {
    return (
        <footer className="bg-gradient-to-r from-red-500 to-red-700 text-white py-10">
            <div className="container mx-auto px-4">
                <h1 className="text-4xl font-extrabold text-center mb-6">
                    Our Own Mart
                </h1>

                <div className="flex flex-col md:flex-row justify-between items-start text-center md:text-left">
                    <div className="mb-4 md:mb-0">
                        <h2 className="text-2xl font-semibold mb-2">Explore</h2>
                        <ul className="space-y-2">
                            <li className='hover:underline cursor-pointer transition-all duration-200'>Home</li>
                            <li className='hover:underline cursor-pointer transition-all duration-200'>Products</li>
                            <Link to = '/contact'>
                            <li className='hover:underline cursor-pointer transition-all duration-200'>Contact Us</li>
                            </Link>
                        </ul>
                    </div>

                    <div className="mb-4 md:mb-0">
                        <h2 className="text-2xl font-semibold mb-2">Follow Us</h2>
                        <div className="flex justify-center md:justify-start space-x-4">
                            <a href="#" className="text-white hover:text-red-200 transition-all duration-200">
                                <FaFacebookF size={25} />
                            </a>
                            <a href="#" className="text-white hover:text-red-200 transition-all duration-200">
                                <FaInstagram size={25} />
                            </a>
                            <a href="#" className="text-white hover:text-red-200 transition-all duration-200">
                                <FaYoutube size={25} />
                            </a>
                        </div>
                    </div>
                </div>

                <div className="mt-6 text-center border-t border-red-400 pt-4">
                    <p className="text-sm">© 2023 All Rights Reserved</p>
                </div>
            </div>
        </footer>
    );
}
