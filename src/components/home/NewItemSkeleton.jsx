
import React from "react";

const NewItemSkeleton = () => {
  return (
    <div className="keen-slider__slide">
      <div className="nft__item">
        <div className="skeleton skeleton-avatar"></div>

        <div className="skeleton skeleton-image"></div>

        <div className="nft__item_info">
          <div className="skeleton skeleton-title"></div>
          <div className="skeleton skeleton-price"></div>
          <div className="skeleton skeleton-likes"></div>
        </div>
      </div>
    </div>
  );
};

export default NewItemSkeleton;
