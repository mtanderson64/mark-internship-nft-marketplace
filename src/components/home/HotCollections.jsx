
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getHotCollections } from "../../services/api";
import "../../css/components/HotCollections.css";
import ReusableSlider from "../ReusableSlider";

// Individual collection card
const CollectionCard = ({ collection }) => {
  return (
    <div className="nft_coll">
      <div className="nft_wrap">
        <Link to="/item-details">
          <img
            src={collection.nftImage}
            className="lazy img-fluid"
            alt={collection.title}
          />
        </Link>
      </div>

      <div className="nft_coll_pp">
        <Link to="/author">
          <img
            className="lazy pp-coll"
            src={collection.authorImage}
            alt={collection.title}
          />
        </Link>
        <i className="fa fa-check"></i>
      </div>

      <div className="nft_coll_info">
        <Link to="/explore">
          <h4>{collection.title}</h4>
        </Link>
        <span>ERC-{collection.code}</span>
      </div>
    </div>
  );
};

// Skeleton loading cards
const CollectionSkeleton = () => {
  return (
    <div className="nft_coll">
      <div className="nft_wrap">
        <div className="skeleton skeleton-image"></div>
      </div>

      <div className="nft_coll_pp">
        <div className="skeleton skeleton-avatar"></div>
      </div>

      <div className="nft_coll_info">
        <div className="skeleton skeleton-title"></div>
        <div className="skeleton skeleton-code"></div>
      </div>
    </div>
  );
};



// Main HotCollections component
const HotCollections = () => {
  const [collections, setCollections] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCollections = async () => {
      try {
        const response = await getHotCollections();
        setCollections(response.data);
      } catch (error) {
        console.error("Error fetching hot collections:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchCollections();
  }, []);

  return (
    <section id="section-collections" className="no-bottom">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="text-center">
              <h2>Hot Collections</h2>
              <div className="small-border bg-color-2"></div>
            </div>
          </div>
        </div>

        {loading ? (
          <div className="row">
            {new Array(3).fill(null).map((_, index) => (
              <div
                className="col-lg-3 col-md-6 col-sm-6 col-xs-12"
                key={index}
              >
                <CollectionSkeleton />
              </div>
            ))}
          </div>
        ) : (
          <ReusableSlider>
            {collections.map((collection) => (
              <div className="keen-slider__slide" key={collection.id}>
                <CollectionCard collection={collection} />
              </div>
            ))}
          </ReusableSlider>
        )}

      </div>
    </section>
  );
};

export default HotCollections;


