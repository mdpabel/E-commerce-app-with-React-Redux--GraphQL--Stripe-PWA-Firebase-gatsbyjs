import React from "react";
import FeaturedNav from "./nav/FeaturedNav";
import FeaturedSlider from "./slider/Slider";
import PopularCategories from "./popularCategory/PopularCategories";

const Featured = () => {
  return (
    <>
      <div className="card">
        <div className="card-body">
          <div className="container-fluid">
            <div className="row">
              <div className="col-md-2">
                <FeaturedNav />
              </div>

              <div className="col-md-8">
                <FeaturedSlider />
              </div>

              <div className="col-md-2">
                <PopularCategories />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Featured;
