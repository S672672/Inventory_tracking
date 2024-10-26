import React, { useEffect, useState } from 'react';
import axios from 'axios'; 
import Accessory from '../components/Accessory';


export default function AccessoryPage() {
    const [accessory, setAccessory] = useState([]);

    useEffect(() => {
        const fetchAccessory = async () => {
            try {
                const response = await axios.get('http://localhost:5000/api/accessory'); 
                setAccessory(response.data);
                console.log(response.data)
            } catch (error) {
                console.error('Error fetching cakes:', error);
            }
        };

        fetchAccessory();
    }, []);

    return (
        <div className="container mx-auto py-10 px-4">
            <h2 className="text-3xl font-bold text-center mb-8">Get School Accessories</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {accessory.map((accessory) => (
                    <Accessory key={accessory._id} accessory={accessory} />
                ))}
            </div>
        </div>
    );
}