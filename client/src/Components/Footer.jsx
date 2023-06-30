import React from "react";

const Footer = () => {
  return (
    <>
      <div className="footer_section layout_padding">
        <div className="container">
          <div className="row">
            <div className="col-lg-3 col-sm-6">
              <div className="footer_logo">
                <a href="index.html">
                  <img src="images/footer-logo.png" />
                </a>
              </div>
              <h1 className="adderss_text">Contact Us</h1>
              <div className="map_icon">
                <img src="images/map-icon.png" />
                <span className="paddlin_left_0">Page when looking at its</span>
              </div>
              <div className="map_icon">
                <img src="images/call-icon.png" />
                <span className="paddlin_left_0">+7586656566</span>
              </div>
              <div className="map_icon">
                <img src="images/mail-icon.png" />
                <span className="paddlin_left_0">volim@gmail.com</span>
              </div>
            </div>
            <div className="col-lg-3 col-sm-6">
              <h1 className="adderss_text">Doctors</h1>
              <div className="hiphop_text_1">
                There are many variations of passages of Lorem Ipsum available,
                but the majority have suffered alteration in some form, by
                injected humour,
              </div>
            </div>
            <div className="col-lg-3 col-sm-6">
              <h1 className="adderss_text">Useful Links</h1>
              <div className="Useful_text">
                There are many variations of passages of Lorem Ipsum available,
                but the majority have suffered ,
              </div>
            </div>
            <div className="col-lg-3 col-sm-6">
              <h1 className="adderss_text">Newsletter</h1>
              <input
                type="text"
                className="Enter_text"
                placeholder="Enter your Emil"
                name="Enter your Emil"
              />
              <div className="subscribe_bt">
                <a href="#">Subscribe</a>
              </div>
              <div className="social_icon">
                <ul>
                  <li>
                    <a href="#">
                      <img src="images/fb-icon.png" />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <img src="images/twitter-icon.png" />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <img src="images/linkedin-icon.png" />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <img src="images/instagram-icon.png" />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="copyright_section">
        <div className="container">
          <p className="copyright_text">
            2019 All Rights Reserved. Design by <a href="/">Demo App</a>
          </p>
        </div>
      </div>
    </>
  );
};

export default Footer;
