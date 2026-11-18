
import React, { useEffect, useState } from "react";
import { getNewItems } from "../../services/api";
import ReusableSlider from "../ReusableSlider";
import NewItemCard from "./NewItemCard";
import NewItemSkeleton from "./NewItemSkeleton";
import "../../css/components/NewItems.css";

const NewItems = () => {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchNewItems = async () => {
      try {
        const response = await getNewItems();
        setItems(Array.isArray(response.data) ? response.data : []);
      } catch (error) {
        console.error("Error fetching new items:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchNewItems();
  }, []);

  return (
    <section id="section-items" className="no-bottom">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="text-center">
              <h2>New Items</h2>
              <div className="small-border bg-color-2"></div>
            </div>
          </div>

          <div className="col-lg-12">
            {loading ? (
              <ReusableSlider key="loading">
                {Array(4).fill(0).map((_, index) => (
                  <NewItemSkeleton key={index} />
                ))}
              </ReusableSlider>
            ) : (
              <ReusableSlider key="loaded">
                {items.map((item) => (
                  <NewItemCard key={item.id} item={item} />
                ))}
              </ReusableSlider>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewItems;
