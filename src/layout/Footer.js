import React from "react";
import Link from "next/link";
import Image from "next/image";
import logo from "../assets/images/logo.svg";

const Footer = () => {
  return (
    <footer className="bg-white">
      <div className="footer-top footer-style2 bt0">
        <div className="container">
          <div className="row">
            <div className="text-center">
              <Image width={250} src={logo} alt="Infispark" />
              <p>
                201, Antares Business Center, Scheme No. 54, Agra Bombay Rd,
                <br />
                Near C21 Mall, Vijay Nagar, Indore, Madhya Pradesh 452010
              </p>
            </div>
            <div className="widget widget_info">
              <div className="widget">
                <ul className="list-inline ft-social-bx">
                  <li>
                    <Link
                      href={"https://www.facebook.com/infispark"}
                      className="btn-secondry button-sm "
                    >
                      <i className="fa fa-facebook"></i>
                    </Link>
                  </li>
                  <li>
                    <Link
                      href={"https://twitter.com/InfiSpark"}
                      className=" btn-secondry button-sm"
                    >
                      <i className="fa fa-twitter"></i>
                    </Link>
                  </li>
                  <li>
                    <Link
                      href={"https://instagram.com/infispark"}
                      className=" btn-secondry button-sm"
                    >
                      <i className="fa fa-instagram"></i>
                    </Link>
                  </li>
                  <li>
                    <Link
                      href={"https://linkedin.com/company/infispark"}
                      className="btn-secondry button-sm"
                    >
                      <i className="fa fa-linkedin"></i>
                    </Link>
                  </li>
                </ul>
              </div>

              <div className="text-center">
                <p>
                  <strong>Mail us at:</strong> contact@infispark.com
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="container  p-10">
          <div className="row">
            <div className="col-lg-6 col-md-6 col-sm-12 "></div>
            <div className="col-lg-6 col-md-6 col-sm-12 ">
              <div className="d-flex justify-content-end">
                <div className="p-l10">
                  
                  <Link href={"/"}>Home</Link>
                </div>
                <div className="p-l10">
                  
                  <Link href={"/about-us"}>About</Link>
                </div>
                <div className="p-l10">
                  
                  <Link href={"/what-we-do"}>Services</Link>
                </div>
                <div className="p-l10">
                  
                  <Link href={"/contact-us"}>Contact Us</Link>
                </div>
              </div>
            </div>
          </div>
          <hr />
          <div className="row ">
          <div className="col-lg-6 col-md-6 col-sm-12  order-lg-2 m-b20">
              <div className="d-flex justify-content-end text-sm-center">
               <div className="p-l10">
                  
                  <Link href={"/how-we-do-it"}>How We Do it</Link>
                </div>
                 <div className="p-l10">
                  
                  <Link href={"/unispark"}>Unispark</Link>
                </div>
                <div className="p-l10">
                  
                  <Link href={"https://shelovescode.com"}>She Loves Code</Link>
                </div>
                
              </div>
            </div>
            <div className="col-lg-6 col-md-6 col-sm-12 ">
              <p className="justify-content-start text-sm-center">
               <strong>© 2023 InfiSpark. All Rights Reserved.</strong> 
              </p>
            </div>
            
          </div>
        </div>
      </div>
    
    </footer>
  );
};

export default Footer;
