import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import initMain from "../assets/js/main";
import { Carousel } from "react-bootstrap";

import "../assets/css/mystyle.css";
import initmousehover from "../assets/js/mousehover";

/* eslint-disable */
function Facilities() {
  useEffect(() => {
    initmousehover();
  }, []);
  return (
    <div id="amenities">
      <div id="amenities_page">
        <div className="amenities_title">
          <strong className="amenities_tname">Amenities</strong>
          <br />
          <p className="amenities_text">
            클라우드호텔의 라이프 스타일 브랜드
            <br />
            호스피탈리티 전문성을 바탕으로 확장한 라이프 스타일 브랜드를
            소개합니다.
          </p>
        </div>
        <div id="page">
          {/* box1 */}
          <div class="row ambox">
            <div class="col-lg-4 p-1">
              <div class="hidden-portfolio">
                <img
                  src={require("../assets/images/aaa.jpg")}
                  alt="Image"
                  class="img-fluid"
                />
                {/* <!-- <p>자세히 보기</p> --> */}
              </div>
            </div>

            <div class="col-lg-4 p-1">
              <div class="hidden-portfolio">
                <img
                  src={require("../assets/images/aaa.jpg")}
                  class="img-fluid"
                />
              </div>
            </div>
            <div class=" col-lg-4 p-1">
              <div class="hidden-portfolio">
                <img
                  src={require("../assets/images/aaa.jpg")}
                  class="img-fluid"
                />
              </div>
            </div>

            <div class="col-lg-4 p-1">
              <div class="hidden-portfolio">
                <img
                  src={require("../assets/images/aaa.jpg")}
                  class="img-fluid"
                />
              </div>
            </div>
            <div class=" col-lg-4 p-1">
              <div class="hidden-portfolio">
                <img
                  src={require("../assets/images/aaa.jpg")}
                  class="img-fluid"
                />
              </div>
            </div>
            <div class=" col-lg-4 p-1">
              <div class="hidden-portfolio">
                <img
                  src={require("../assets/images/aaa.jpg")}
                  class="img-fluid"
                />
              </div>
            </div>
          </div>

          {/* box2 */}
          <div class="row ambox2">
            <div class="col-xs-12 col-sm-6 col-md-6 col-lg-4 p-1">
              <div class="single-portfolio">
                <Link to={"/outpool"}>
                  <img
                    src={require("../assets/images/fpool3.jpg")}
                    alt="Image"
                    class="img-fluid"
                  />
                  {/* <!-- <p>자세히 보기</p> --> */}
                </Link>
              </div>
            </div>

            <div class="col-xs-12 col-sm-6 col-md-6 col-lg-4 p-1">
              <div class="single-portfolio">
                <Link to={"/pool"}>
                  <img
                    src={require("../assets/images/pool3.jpg")}
                    class="img-fluid"
                  />
                </Link>
              </div>
            </div>
            <div class="col-xs-12 col-sm-6 col-md-6 col-lg-4 p-1">
              <div class="single-portfolio">
                <Link to={"/fitness"}>
                  <img
                    src={require("../assets/images/fitness1.jpg")}
                    class="img-fluid"
                  />
                </Link>
              </div>
            </div>

            <div class="col-xs-12 col-sm-6 col-md-6 col-lg-4 p-1">
              <div class="single-portfolio">
                <Link to={"/sauna"}>
                  <img
                    src={require("../assets/images/sauna1.jpg")}
                    class="img-fluid"
                  />
                </Link>
              </div>
            </div>
            <div class="col-xs-12 col-sm-6 col-md-6 col-lg-4 p-1">
              <div class="single-portfolio">
                <Link to={"/spa"}>
                  <img
                    src={require("../assets/images/spa1.jpg")}
                    class="img-fluid"
                  />
                </Link>
              </div>
            </div>
            <div class="col-xs-12 col-sm-6 col-md-6 col-lg-4 p-1">
              <div class="single-portfolio">
                <Link to={"/kidszone"}>
                  <img
                    src={require("../assets/images/kid2.jpg")}
                    class="img-fluid"
                  />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Facilities;
