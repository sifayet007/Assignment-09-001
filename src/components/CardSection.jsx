import React, { useEffect, useState } from "react";
import Cards from "./Cards";

const CardSection = () => {
  const [donateCards, setDonateCards] = useState([]);
  useEffect(() => {
    fetch("donationCampaigns.json")
      .then((res) => res.json())
      .then((data) => setDonateCards(data));
  }, []);

  return (
    <div className="mx-10">
      <h1 className="text-3xl font-bold">Active Campaigns</h1>
      <p className="my-5">
        Support these ongoing initiatives and help make a difference
      </p>
      <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-8 ">
        {donateCards.map((donateCard) => (
          <Cards key={donateCard.id} donateCard={donateCard}></Cards>
        ))}
      </div>
    </div>
  );
};

export default CardSection;
<h1>hello</h1>;
