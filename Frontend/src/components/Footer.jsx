import React from 'react';

export default function Footer() {
    return (
        <footer className="bg-red-500 text-white py-8">
            <div className="container mx-auto px-4">
                <div className="flex flex-col md:flex-row justify-between">
                    <div className="mb-4 md:mb-0">
                        <h2 className="text-xl font-bold mb-4">About us</h2>
                        <ul>
                            <li className='hover:underline cursor-pointer'>Overview</li>
                            <li className='hover:underline cursor-pointer'>Our Story</li>
                            <li className='hover:underline cursor-pointer'>Our Purpose</li>
                            <li className='hover:underline cursor-pointer'>Our Brands</li>
                            <li className='hover:underline cursor-pointer'>Careers</li>
                            <li className='hover:underline cursor-pointer'>Leadership</li>
                        </ul>
                    </div>
                    <div className="mb-4 md:mb-0">
                        <h2 className="text-xl font-bold mb-4">Explore</h2>
                        <ul>
                            <li className='cursor-pointer hover:underline'>Store Locator</li>
                            <li className='cursor-pointer hover:underline'>How to Shop Online</li>
                            <li className='cursor-pointer hover:underline'>Wellness</li>
                            <li className='cursor-pointer hover:underline'>News</li>
                            <li className='cursor-pointer hover:underline'>Vendors</li>
                            <li className='cursor-pointer hover:underline'>Gift Cards</li>
                        </ul>
                    </div>
                    <div className="mb-4 md:mb-0">
                        <h2 className="text-xl font-bold mb-4">Our Community</h2>
                        <ul>
                            <li className='cursor-pointer hover:underline'>Giving</li>
                            <li className='cursor-pointer hover:underline'>Community Giving</li>
                            <li className='cursor-pointer hover:underline'>Crisis Response</li>
                            <li className='cursor-pointer hover:underline'>Food for Families</li>
                            <li className='cursor-pointer hover:underline'>Extra Credit Grants</li>
                            <li className='cursor-pointer hover:underline'>Event Centers</li>
                        </ul>
                    </div>
                    <div className="mb-4 md:mb-0">
                        <h2 className="text-xl font-bold mb-4">Download Our App</h2>
                        <div className="flex space-x-4">
                            <a
                                href="#"
                                className="bg-white text-gray-800 font-bold py-2 px-4 rounded"
                            >
                                GET IT ON
                                <br />
                                <img src="/google-play.svg" alt="Google Play" />
                            </a>
                            <a
                                href="#"
                                className="bg-white text-gray-800 font-bold py-2 px-4 rounded"
                            >
                                Download on the
                                <br />
                                <img src="/app-store.svg" alt="App Store" />
                            </a>
                        </div>
                        <h2 className="text-xl font-bold mb-4 mt-4 cursor-pointer hover:underline">Follow Us</h2>
                        <div className="flex space-x-4">
                            <a href="#" className="text-white">
                                <i className="fab fa-facebook-f"></i>
                            </a>
                            <a href="#" className="text-white">
                                <i className="fab fa-instagram"></i>
                            </a>
                            <a href="#" className="text-white">
                                <i className="fab fa-youtube"></i>
                            </a>
                            <a href="#" className="text-white">
                                <i className="fab fa-linkedin-in"></i>
                            </a>
                        </div>
                        <h2 className="text-xl font-bold mb-4 mt-4 hover:underline cursor-pointer">
                            Questions? We're here to help.
                        </h2>
                        <ul>
                            <li>
                                <a href="#" className="text-white hover:underline cursor-pointer">
                                    <i className="fas fa-info-circle"></i> Help Center
                                </a>
                            </li>
                            <li>
                                <a href="#" className="text-white hover:underline cursor-pointer">
                                    <i className="fas fa-comment-dots"></i> Live Chat Offline
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="mt-8 text-center">
                    <p className="text-sm">
                        © 2023 All Rights Reserved
                    </p>
                    <p className="text-sm mt-2">
                        <a
                            href="#"
                            className="text-white hover:underline"
                            rel="noopener noreferrer"
                        >
                            Supply Chain Disclosures
                        </a>
                        {' | '}
                        <a
                            href="#"
                            className="text-white hover:underline"
                            rel="noopener noreferrer"
                        >
                            Transparency in Health Care
                        </a>
                        {' | '}
                        <a
                            href="#"
                            className="text-white hover:underline"
                            rel="noopener noreferrer"
                        >
                            Privacy Policy
                        </a>
                        {' | '}
                        <a
                            href="#"
                            className="text-white hover:underline"
                            rel="noopener noreferrer"
                        >
                            CCPA/CPRA FAQ
                        </a>
                        {' | '}
                        <a
                            href="#"
                            className="text-white hover:underline"
                            rel="noopener noreferrer"
                        >
                            Fraud Reporting
                        </a>
                        {' | '}
                        <a
                            href="#"
                            className="text-white hover:underline"
                            rel="noopener noreferrer"
                        >
                            Terms of Use
                        </a>
                        {' | '}
                        <a
                            href="#"
                            className="text-white hover:underline"
                            rel="noopener noreferrer"
                        >
                            Accessibility
                        </a>
                        {' | '}
                        <a
                            href="#"
                            className="text-white hover:underline"
                            rel="noopener noreferrer"
                        >
                            Cookie Preferences
                        </a>
                    </p>
                </div>
            </div>
        </footer>
    );
}