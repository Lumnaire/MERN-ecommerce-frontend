import React from "react";
import "./DescriptionBox.css";

const DescriptionBox = () => {
  return (
    <div className="descriptionbox">
      <div className="descriptionbox-navigator">
        <div className="descriptionbox-nav-box">Description</div>
        <div className="descriptionbox-nav-box fade">Reviews (122)</div>
      </div>
      <div className="descriptionbox-description">
        <p>
          An e-commerce website is an online platform that facilitates buying
          and selling of products or services over the internet. It also serves
          as a virtual marketplace where businesses and individuals showcase
          their products, interact with costumers, and conduct transactions
          without the need for physical presence. E-commerce websites have
          gained immense popularity due to their convenient accessibility and
          the global reach they offer.
        </p>
        <p>
          E-commerce websites typically display products or services and
          detailed descriptions, images, prices and any available varieties
          (e.g., sizes, color) . Each product usually has its own dedications
          with relevant information.
        </p>
      </div>
    </div>
  );
};

export default DescriptionBox;
