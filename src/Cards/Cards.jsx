import React from "react";
import Card from "../Card/Card";

const Cards = () => {
  const pricing = [
    {
      id: 1,
      name: "Free",
      price: 0,
      benefits: [
        "unlimitate Storage",
        "Free Support",
        "Low cost",
        "Customization",
        "Extra Utilities",
      ],
    },
    {
      id: 2,
      name: "Regular",
      price: 9.99,
      benefits: [
        "unlimitate Storage",
        "Free Support",
        "Low cost",
        "Customization",
        "Extra Utilities",
      ],
    },
    {
      id: 3,
      name: "Premeum",
      price: 19.99,
      benefits: [
        "unlimitate Storage",
        "Free Support",
        "Low cost",
        "Customization",
        "Extra Utilities",
      ],
    },
  ];
  return (
    <div className="md:grid container mx-auto grid-cols-3 gap-5">
      {pricing.map((price) => (
        <Card key={price.id} pricee={price} />
      ))}
    </div>
  );
};

export default Cards;
