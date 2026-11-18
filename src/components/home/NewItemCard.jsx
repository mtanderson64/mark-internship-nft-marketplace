
import React, { useEffect, useState } from "react";

const NewItemCard = ({ item }) => {
  const [timeLeft, setTimeLeft] = useState("");

  useEffect(() => {
    if (!item.expiryDate) return;

    const updateCountdown = () => {
      const difference = item.expiryDate - Date.now();

      if (difference <= 0) {
        setTimeLeft("Expired");
        return;
      }

      const hours = Math.floor(difference / (1000 * 60 * 60));
      const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((difference % (1000 * 60)) / 1000);

      setTimeLeft(`${hours}h ${minutes}m ${seconds}s`);
    };

    updateCountdown();
    const interval = setInterval(updateCountdown, 1000);

    return () => clearInterval(interval);
  }, [item.expiryDate]);

  return (
    <div className="keen-slider__slide">
      <div className="nft__item">

        <div className="author_list_pp">
          <img
            src={item.authorImage}
            alt={`${item.title} creator`}
          />
          <i className="fa fa-check"></i>
        </div>

        {item.expiryDate && (
          
          <div className="de_countdown">{timeLeft}</div>
        )}

        <div className="nft__item_wrap">
          <img
            src={item.nftImage}
            className="nft__item_preview"
            alt={item.title}
            style={{ width: "100%", height: "auto", display: "block" }}
          />
        </div>

        <div className="nft__item_info">
          <h4>{item.title}</h4>

          <div className="nft__item_price">{item.price} ETH</div>

          <div className="nft__item_like">
            <i className="fa fa-heart"></i>
            <span>{item.likes}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewItemCard;
