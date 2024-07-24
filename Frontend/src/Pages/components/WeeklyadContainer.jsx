import React, { useRef } from 'react';
import Weeklyad from './weeklyad.jsx'
import NavigationArrow from './NavigationArrow.jsx';

export default function WeeklyadContainer() {
  const weeklyAdData = [
    {
      imageSrc: "./src/assets/pictures/momo.jpg",
      title: "Jennie-O Fresh Ground Turkey",
      price: "$6.59",
      unit: "oz",
      quantity: "16",
      additionalInfo: "($0.41/oz)",
    },
    {
      imageSrc: "/src/assets/pictures/momo.jpg",
      title: "Pacific SeaFood, Shrimp Easy Peel, Farm-Raised",
      price: "$12.98",
      originalPrice: "$26.99",
      unit: "oz",
      quantity: "16",
      additionalInfo: "($6.49/lb)",
    },
    {
      imageSrc: "/src/assets/pictures/momo.jpg",
      title: "Brawny Tear-A-Square Paper Towels, Double Rolls",
      price: "$13.99",
      originalPrice: "$19.49",
      unit: "roll",
      quantity: "2",
      additionalInfo: "($2.33/roll)",
    },
    {
      imageSrc: "/src/assets/pictures/momo.jpg",
      title: "FOSTER FARMS Young Chicken, Cage Free, Fresh",
      price: "approx $6.99",
      unit: "lb",
      quantity: "5.5",
      additionalInfo: "($1.27/lb)",
    },
    {
      imageSrc: "/src/assets/pictures/momo.jpg",
      title: "LaCroix Sparkling Water, Tangerine",
      price: "$3.99",
      originalPrice: "$5.19",
      unit: "oz",
      quantity: "96",
      additionalInfo: "($0.04 / oz)",
    },
  ];

  return (
    <div className="container mx-auto my-10">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
        {weeklyAdData.map((item, index) => (
          <Weeklyad key={index} {...item} />
        ))}
      </div>
      {/* <NavigationArrow /> */}
    </div>
  );
}