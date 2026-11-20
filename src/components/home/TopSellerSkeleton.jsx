
import React from "react";

const TopSellerSkeleton = () => {
  return (
    <li>
      <div className="author_list_pp">
        <div className="skeleton top-seller-skeleton-avatar"></div>
      </div>

      <div className="author_list_info">
        <div className="skeleton top-seller-skeleton-name"></div>
        <div className="skeleton top-seller-skeleton-price"></div>
      </div>
    </li>
  );
};

export default TopSellerSkeleton;
