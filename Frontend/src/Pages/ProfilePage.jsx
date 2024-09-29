import React from 'react';
import { User } from 'lucide-react';

export default function ProfilePage(name,gmail) {
    return (
        <div className="container mx-auto px-4 py-8">
            <div className="bg-white shadow-md rounded-lg p-6">
                <div className="flex items-center mb-6">
                    <User size={64} className="text-gray-500 mr-4" />
                    <div>
                        <h2 className="text-2xl font-bold">{name}</h2>
                        <p className="text-gray-600">{gmail}</p>
                    </div>
                </div>
                <div className="space-y-4">
                    <button className="w-full bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-700">
                        Edit Profile
                    </button>
                    <button className="w-full bg-gray-200 text-gray-800 py-2 px-4 rounded hover:bg-gray-300">
                        Order History
                    </button>
                    <button className="w-full bg-gray-200 text-gray-800 py-2 px-4 rounded hover:bg-gray-300">
                        Saved Addresses
                    </button>
                    <button className="w-full bg-gray-200 text-gray-800 py-2 px-4 rounded hover:bg-gray-300">
                        Payment Methods
                    </button>
                    <button className="w-full bg-red-500 text-white py-2 px-4 rounded hover:bg-red-700">
                        Log Out
                    </button>
                </div>
            </div>
        </div>
    );
}