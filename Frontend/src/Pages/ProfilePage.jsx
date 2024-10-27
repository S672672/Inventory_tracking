import React from 'react';

export default function ProfilePage({ user }) {
    return (
        <div className="max-w-sm mx-auto bg-gray-100 p-6 rounded-lg shadow-md text-center">

            <div className="w-24 h-24 mx-auto rounded-full overflow-hidden">
                <img
                    src={user.photoUrl}
                    alt="Profile"
                    className="w-full h-full object-cover" />
            </div>


            <h2 className="mt-4 text-xl font-semibold text-gray-800">{user.name}</h2>
            <p className="text-gray-600">{user.email}</p>


            <h3 className="mt-6 text-lg font-medium text-gray-800">Your Cart Items:</h3>
            <ul className="mt-2 space-y-2">
                {user.cartItems.map((item, index) => (
                    <li key={index} className="text-gray-700">
                        {item.name} - {item.quantity}
                    </li>
                ))}
            </ul>
        </div>
    );
}
