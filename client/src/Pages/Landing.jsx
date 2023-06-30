import React from "react";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";

const Landing = () => {
  return (
    <>
      <Navbar />;
      <div className="news_section layout_padding">
        <div className="container">
          <h1 className="health_taital">Why choose 24hr home care</h1>
          <p className="health_text">
            labore et dolore magna aliqua. Ut enim ad minim veniam
          </p>
          <div className="news_section_2 layout_padding">
            <div className="row">
              <div className="col-lg-4 col-sm-6">
                <div className="box_main">
                  <div className="icon_1">
                    <img src="images/icon-2.png" />
                  </div>
                  <h4 className="daily_text">Daily care experts</h4>
                </div>
              </div>
              <div className="col-lg-4 col-sm-6">
                <div className="box_main active">
                  <div className="icon_1">
                    <img src="images/icon-3.png" />
                  </div>
                  <h4 className="daily_text_1">Available 24/7</h4>
                </div>
              </div>
              <div className="col-lg-4 col-sm-6">
                <div className="box_main">
                  <div className="icon_1">
                    <img src="images/icon-4.png" />
                  </div>
                  <h4 className="daily_text_1">Balanced care</h4>
                </div>
              </div>
            </div>
          </div>
          <div className="getquote_bt">
            <a href="#">
              Get A Quote{" "}
              <span>
                <img src="images/right-arrow.png" />
              </span>
            </a>
          </div>
        </div>
      </div>
      <div className="contact_section layout_padding">
        <div className="container">
          <h1 className="contact_taital">What we do</h1>
          <div className="news_section_2">
            <div className="row">
              <div className="col-md-6">
                <div className="icon_main">
                  <div className="icon_7">
                    <img src="images/icon-7.png" />
                  </div>
                  <h4 className="diabetes_text">
                    Diabetes and obesity Counselling{" "}
                  </h4>
                </div>
                <div className="icon_main">
                  <div className="icon_7">
                    <img src="images/icon-5.png" />
                  </div>
                  <h4 className="diabetes_text">Obstetrics and Gynsecology</h4>
                </div>
                <div className="icon_main">
                  <div className="icon_7">
                    <img src="images/icon-6.png" />
                  </div>
                  <h4 className="diabetes_text">
                    Surgical and medical Oncology
                  </h4>
                </div>
              </div>
              <div className="col-md-6">
                <div className="contact_box">
                  <h1 className="book_text">Book Appoinment</h1>
                  <input
                    type="text"
                    className="Email_text"
                    placeholder="Name"
                    name="Name"
                  />
                  <input
                    type="text"
                    className="Email_text"
                    placeholder="Name"
                    name="Name"
                  />
                  <textarea
                    className="massage-bt"
                    placeholder="Massage"
                    rows="5"
                    id="comment"
                    name="Massage"
                  ></textarea>
                  <div className="send_bt">
                    <a href="#">SEND</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="client_section layout_padding">
        <div id="my_slider" className="carousel slide" data-ride="carousel">
          <div className="carousel-inner">
            <div className="carousel-item active">
              <div className="container">
                <h1 className="client_taital">What People Say</h1>
                <p className="client_text">
                  It is a long established fact that a reader will be distracted{" "}
                </p>
                <div className="client_section_2">
                  <div className="client_left">
                    <div>
                      <img src="images/client-img.png" className="client_img" />
                    </div>
                  </div>
                  <div className="client_right">
                    <h3 className="distracted_text">Distracted by</h3>
                    <p className="lorem_text">
                      It is a long established fact that a reader will be
                      distracted by the readable content of a page when looking
                      at its layout. The point of using Lorem Ipsum is that it
                      has a more-or-less normal distribution of letters
                    </p>
                    <div className="quote_icon">
                      <img src="images/quote-icon.png" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="carousel-item">
              <div className="container">
                <h1 className="client_taital">What People Say</h1>
                <p className="client_text">
                  It is a long established fact that a reader will be distracted{" "}
                </p>
                <div className="client_section_2">
                  <div className="client_left">
                    <div>
                      <img src="images/client-img.png" className="client_img" />
                    </div>
                  </div>
                  <div className="client_right">
                    <h3 className="distracted_text">Distracted by</h3>
                    <p className="lorem_text">
                      It is a long established fact that a reader will be
                      distracted by the readable content of a page when looking
                      at its layout. The point of using Lorem Ipsum is that it
                      has a more-or-less normal distribution of letters
                    </p>
                    <div className="quote_icon">
                      <img src="images/quote-icon.png" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="carousel-item">
              <div className="container">
                <h1 className="client_taital">What People Say</h1>
                <p className="client_text">
                  It is a long established fact that a reader will be distracted{" "}
                </p>
                <div className="client_section_2">
                  <div className="client_left">
                    <div>
                      <img src="images/client-img.png" className="client_img" />
                    </div>
                  </div>
                  <div className="client_right">
                    <h3 className="distracted_text">Distracted by</h3>
                    <p className="lorem_text">
                      It is a long established fact that a reader will be
                      distracted by the readable content of a page when looking
                      at its layout. The point of using Lorem Ipsum is that it
                      has a more-or-less normal distribution of letters
                    </p>
                    <div className="quote_icon">
                      <img src="images/quote-icon.png" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <a
            className="carousel-control-prev"
            href="#my_slider"
            role="button"
            data-slide="prev"
          >
            <i
              className="fa fa-long-arrow-left"
              style={{ fontSize: 24, paddingTop: 4 }}
            ></i>
          </a>
          <a
            className="carousel-control-next"
            href="#my_slider"
            role="button"
            data-slide="next"
          >
            <i
              className="fa fa-long-arrow-right"
              style={{ fontSize: 24, paddingTop: 4 }}
            ></i>
          </a>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Landing;
