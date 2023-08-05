import React from "react";

import node_shop from "@assets/node-shop.png";

const NodeShop = () => {
  return (
    <div className="projects__card">
      <h3>Full Stack Node Shop</h3>
      <img src={node_shop} alt="Full Stack Node Shop" />
      <p>
        A Full-Stack web app made with Node.js, Express.js and MongoDB. User can add products to
        cart and make payment with card (Stripe) and user can download invoices.
      </p>

      <div className="centered">
        <a
          href="https://github.com/nayak-nirmalya/node-shop.git"
          target="_blank"
          rel="noreferrer"
          className="button"
        >
          Code
        </a>
      </div>
    </div>
  );
};

export default NodeShop;
