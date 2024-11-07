import React, { useEffect, useState } from 'react';
import axios from 'axios'; 
import CakeCard from '../components/cakeCard';
import BackButton from '../components/BackButton';

export default function CakesPage() {
    const [cakes, setCakes] = useState([]);

    useEffect(() => {
        const fetchCakes = async () => {
            try {
                const response = await axios.get('http://localhost:5000/api/cakes');
                setCakes(response.data);
                console.log(response.data)
            } catch (error) {
                console.error('Error fetching cakes:', error);
            }
        };

        fetchCakes();
    }, []);

    return (
        <>
        <BackButton />
        <div className="container mx-auto py-10 px-4">
            <h2 className="text-3xl font-bold text-center mb-8">Our Cakes</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {cakes.map((cake) => (
                    <CakeCard key={cake._id} cake={cake} />
                ))}
            </div>
        </div>
        </>
    );
}
