import React, { useEffect, useState, useRef } from "react";
import initMain from "../assets/js/main";
import { Link } from "react-router-dom";
import "../assets/css/detailpages2.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination, Mousewheel, Keyboard } from "swiper";

/* eslint-disable */
function Detailpages2() {
  const [roomType, setRoomType] = useState("");

  useEffect(() => {
    initMain();
  }, []);

  // 룸타입
  const onChangeRoomType = (event) => {
    // 화면값 -> 변수값 저장
    setRoomType(event.target.value);
  };

  useEffect(() => {
    initMain();
    $(".owl-carousel").owlCarousel({
      // 옵션
      smartSpeed: 1000, // 이미지 변경될때 변경 속도
      nav: true, // 메뉴
      items: 1, // 화면에 이미지가 표시될 개수
      loop: true, // 마지막 도달했을대 처음으로 돌아가는지 여부
      center: true,
    });
  }, []);

  // 예약 달력
  const datepicker = useRef();
  const datepicker2 = useRef();

  useEffect(() => {
    $("#datepicker").datepicker({
      dateFormat: "yy-mm-dd",
    });

    $("#datepicker2").datepicker({
      dateFormat: "yy-mm-dd",
    });

    let today = new Date();

    let year = today.getFullYear(); // 년도
    let month = today.getMonth(); // 월
    let date = today.getDate(); // 날짜
    let date2 = today.getDate() + 1; // 날짜

    let fullDate = year + "." + month + "." + date;
    let fullDate2 = year + "." + month + "." + date2;
    console.log(fullDate);

    datepicker.current.value = fullDate;
    datepicker2.current.value = fullDate2;
  }, []);
  return (
    <div>
      <body>
        <div id="untree_co--overlayer"></div>
        <div class="loader">
          <div class="spinner-border text-primary" role="status">
            <span class="sr-only">Loading...</span>
          </div>
        </div>

        <nav class="untree_co--site-mobile-menu">
          <div class="close-wrap d-flex">
            <a href="#" class="d-flex ml-auto js-menu-toggle">
              <span class="close-label">Close</span>
              <div class="close-times">
                <span class="bar1"></span>
                <span class="bar2"></span>
              </div>
            </a>
          </div>
          <div class="site-mobile-inner"></div>
        </nav>

        <div class="untree_co--site-wrap">
          <nav class="untree_co--site-nav js-sticky-nav">
            <div class="container d-flex align-items-center">
              <div class="logo-wrap">
                <a href="index.html" class="untree_co--site-logo">
                  LuxuryHotel
                </a>
              </div>
              <div class="site-nav-ul-wrap text-center d-none d-lg-block">
                <ul class="site-nav-ul js-clone-nav">
                  <li>
                    <Link to={"/"}>Home</Link>
                  </li>
                  <li class="has-children">
                    <a href="rooms.html">Rooms</a>
                    <ul class="dropdown">
                      <li class="has-children">
                        <a href="#">King Bedroom</a>
                        <ul class="dropdown">
                          <li>
                            <a href="#">King Bedroom</a>
                          </li>
                          <li>
                            <a href="#">Queen &amp; Double Bedroom</a>
                          </li>
                          <li>
                            <a href="#">Le Voila Suite</a>
                          </li>
                        </ul>
                      </li>
                      <li>
                        <a href="#">Queen &amp; Double Bedroom</a>
                      </li>
                      <li>
                        <a href="#">Le Voila Suite</a>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <Link to={"/amenities"}>Amenities</Link>
                  </li>
                  <li class="active">
                    <Link to={"/package"}>PACKAGE</Link>
                  </li>
                  <li>
                    <Link to={"/about"}>About Us</Link>
                  </li>
                  <li>
                    <Link to={"/contact"}>Contact</Link>
                  </li>
                </ul>
              </div>
              <div class="icons-wrap text-md-right">
                <ul class="icons-top d-none d-lg-block">
                  <li class="mr-4">
                    <a href="#" class="js-search-toggle">
                      <span class="icon-search2"></span>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <span class="icon-facebook"></span>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <span class="icon-twitter"></span>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <span class="icon-instagram"></span>
                    </a>
                  </li>
                </ul>

                {/* <!-- Mobile Toggle --> */}
                <a
                  href="#"
                  class="d-block d-lg-none burger js-menu-toggle"
                  data-toggle="collapse"
                  data-target="#main-navbar"
                >
                  <span></span>
                </a>
              </div>
            </div>
          </nav>

          <main class="untree_co--site-main">
            {/* 검색창 */}
            <div
            // class="untree_co--site-hero inner-page"
            // style={{backgroundImage: "url('images/slider_2.jpg')"}}
            >
              {/* <div class="container">
                <div class="row align-items-center justify-content-center">
                  <div class="col-md-7 text-center">
                    <div class="site-hero-contents" data-aos="fade-up">
                      <h1 class="hero-heading text-white">Gallery</h1>
                    </div>
                  </div>
                </div>
              </div> */}

              {/* package 타이틀 시작 */}
              <div id="myback2">
                <div class="main-text">
                  <h1 id="main-text1">SPA</h1>
                  <br />
                </div>
              </div>
              {/* 타이틀 끝 */}
            </div>
          </main>

          {/* 디테일 시작 */}
          <div class="detail-main2">
            <div class="spa_text">
              <h2 id="main_spa_text">몸과 마음에 힐링을 </h2>
              <br />
              <br />
              <p>
                도심 속 휴양지, 스파 & 마사지와 함께 사랑하는 사람과 탁 트인
                오션뷰를 감상하며 완벽한 휴식을 즐기십시오.
                <br />
                고객의 라이프 패턴과 심신 상태에 맞춤화된 특별한 프로그램으로
                <br />
                활력과 생기를 불어넣어 드리고 몸과 마음의 균형을 되찾아
                드립니다.
                <br /> 전문 테라피와 마사지 트리트먼트를 경험할 수 있는 특별한
                공간으로, <br />탁 트인 바다 전망이 보이는 오션뷰의 커플룸과
                싱글룸이 마련되어 있습니다.
              </p>
            </div>
            {/* 슬라이드 이미지 시작 */}
            <div class="owl-carousel">
              <div class="slider">
                <Swiper
                  cssMode={true}
                  navigation={true}
                  pagination={true}
                  mousewheel={true}
                  keyboard={true}
                  modules={[Navigation, Pagination, Mousewheel, Keyboard]}
                  className="mySwiper"
                >
                  <SwiperSlide>
                    <div class="img-slider">
                      <img
                        src={require("../assets/images/DetailImages/스파1.jpg")}
                      />
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    num{" "}
                    <div class="img-slider">
                      <img
                        src={require("../assets/images/DetailImages/스파2.jpg")}
                      />
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    {" "}
                    <div class="img-slider">
                      <img
                        src={require("../assets/images/DetailImages/스파3.jpg")}
                      />
                    </div>
                  </SwiperSlide>
                </Swiper>
              </div>
            </div>
          </div>
          {/* 예약 */}
          <div class="p_reserve_all">
            <div id="p_reserve">Reserve</div>
            <div class="p_search">
              <div>
                <label htmlFor="roomType">Room</label>
                <select
                  type="text"
                  className="form-control"
                  id="p_roomType"
                  required
                  name="roomType"
                  value={roomType}
                  onChange={onChangeRoomType}
                >
                  <option value="standard">Standard</option>
                  <option value="deluxe">Deluxe</option>
                  <option value="family">Family</option>
                  <option value="suite">Suite</option>
                </select>
              </div>
              <div class="check">
                <label>Check-In</label>
                <div>
                  <p>
                    <input
                      className="Year-Month"
                      type="button"
                      id="datepicker"
                      ref={datepicker}
                    />
                  </p>
                </div>
              </div>
              <div class="check">
                <label>Check-Out</label>
                <div>
                  <p>
                    <input
                      className="Year-Month"
                      type="button"
                      id="datepicker2"
                      ref={datepicker2}
                    />
                  </p>
                </div>
              </div>

              <button type="button" class="p_search_button">
                Search
              </button>
            </div>
            <ol class="p_All_room">
              <li class="p_room">
                <div class="p_room_img_name">
                  <img
                    src={require("../assets/images/DetailImages/standard.jpg")}
                    class="p_room_img"
                  ></img>
                  <div class="p_room_name_price">
                    <div class="p_room_name">Standard</div>
                    <div class="p_room_price">
                      KRW <span id="room_pricenumber">150,000</span>
                    </div>
                  </div>
                </div>
                <div>
                  <button type="button" id="p_reserve_button">
                    예약하기
                  </button>
                </div>
              </li>
              <li class="p_room">
                <div class="p_room_img_name">
                  <img
                    src={require("../assets/images/DetailImages/deluxe.jpg")}
                    class="p_room_img"
                  ></img>
                  <div class="p_room_name_price">
                    <div class="p_room_name">Deluxe</div>
                    <div class="p_room_price">
                      KRW <span id="room_pricenumber">250,000</span>
                    </div>
                  </div>
                </div>
                <div>
                  <button type="button" id="p_reserve_button">
                    예약하기
                  </button>
                </div>
              </li>
              <li class="p_room">
                <div class="p_room_img_name">
                  <img
                    src={require("../assets/images/DetailImages/suite.jpg")}
                    class="p_room_img"
                  ></img>
                  <div class="p_room_name_price">
                    <div class="p_room_name">Suite</div>
                    <div class="p_room_price">
                      KRW <span id="room_pricenumber">350,000</span>
                    </div>
                  </div>
                </div>
                <div>
                  <button type="button" id="p_reserve_button">
                    예약하기
                  </button>
                </div>
              </li>
              <li class="p_room">
                <div class="p_room_img_name">
                  <img
                    src={require("../assets/images/DetailImages/family.jpg")}
                    class="p_room_img"
                  ></img>
                  <div class="p_room_name_price">
                    <div class="p_room_name">Family</div>
                    <div class="p_room_price">
                      KRW <span id="room_pricenumber">450,000</span>
                    </div>
                  </div>
                </div>
                <div>
                  <button type="button" id="p_reserve_button">
                    예약하기
                  </button>
                </div>
              </li>
            </ol>
          </div>
          {/* 예약끝 */}

          {/* footer 시작 */}
          <footer class="untree_co--site-footer">
            <div class="container">
              <div class="row">
                <div class="col-md-4 pr-md-5">
                  <h3>About Us</h3>
                  <p>
                    A hotel is an establishment that provides paid lodging on a
                    short-term basis. Facilities provided may range from a
                    modest-quality.
                  </p>
                  <p>
                    <a href="#" class="readmore">
                      Read more
                    </a>
                  </p>
                </div>
                <div class="col-md-8 ml-auto">
                  <div class="row">
                    <div class="col-md-3">
                      <h3>Navigation</h3>
                      <ul class="list-unstyled">
                        <li>
                          <a href="#">Home</a>
                        </li>
                        <li>
                          <a href="#">Rooms</a>
                        </li>
                        <li>
                          <a href="#">Amenities</a>
                        </li>
                        <li>
                          <a href="#">Gallery</a>
                        </li>
                        <li>
                          <a href="#">About Us</a>
                        </li>
                        <li>
                          <a href="#">Contact</a>
                        </li>
                      </ul>
                    </div>
                    <div class="col-md-9 ml-auto">
                      <div class="row mb-3">
                        <div class="col-md-6">
                          <h3>Address</h3>
                          <address>
                            273 South Riverview Rd. <br /> New York, NY 10011
                          </address>
                        </div>
                        <div class="col-md-6">
                          <h3>Telephone</h3>
                          <p>
                            <a href="#">+1 234 5678 910</a> <br />
                            <a href="#">+2 234 5678 910</a>
                          </p>
                        </div>
                      </div>

                      <h3 class="mb-0">Join our newsletter</h3>
                      <p>Be the first to know our latest updates and news!</p>
                      <form action="#" method="" class="form-subscribe">
                        <div class="form-group d-flex">
                          <input
                            type="email"
                            class="form-control mr-2"
                            placeholder="Enter your email"
                          />
                          <input
                            type="submit"
                            value="Subscribe"
                            class="btn btn-black px-4 text-white"
                          />
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
              <div class="row mt-5 pt-5 align-items-center">
                <div class="col-md-6 text-md-left"></div>
                <div class="col-md-6 text-md-right">
                  <ul class="icons-top icons-dark">
                    <li>
                      <a href="#">
                        <span class="icon-facebook"></span>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <span class="icon-twitter"></span>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <span class="icon-instagram"></span>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <span class="icon-tripadvisor"></span>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </footer>
          {/* footer 끝 */}
        </div>
        {/* <!-- Search --> */}
        <div class="search-wrap">
          <a href="#" class="close-search js-search-toggle">
            <span>Close</span>
          </a>
          <div class="container">
            <div class="row justify-content-center align-items-center text-center">
              <div class="col-md-12">
                <form action="#">
                  <input
                    type="search"
                    name="s"
                    id="s"
                    placeholder="Type a keyword and hit enter..."
                    autocomplete="false"
                  />
                </form>
              </div>
            </div>
          </div>
        </div>
      </body>
    </div>
  );
}

export default Detailpages2;
