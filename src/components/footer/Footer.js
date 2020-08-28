import React from "react";

import logo from "../../images/logo/logo.png";
import "./Footer.css";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div>
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="footer_wrapper">
              <Link to="/">
                <img
                  className=" align-items-center"
                  width="200px"
                  src={logo}
                  alt="Footer__Logo"
                />
              </Link>
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Culpa
                odio inventore ducimus impedit odit laboriosam consectetur
                voluptatibus dolorum voluptatem omnis similique at quis deserunt
                sed eum suscipit vitae, temporibus, autem soluta repellat
                laudantium. Quasi optio nostrum cum tempore doloremque
                distinctio tenetur. Recusandae repellat iste,
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
