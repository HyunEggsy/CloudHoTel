// Gallery.js
import React, { useEffect, useState, useRef } from "react";
import initMain from "../assets/js/main";
import { Link } from "react-router-dom";
import "../assets/css/detailpages4.css";

/* eslint-disable */
function Detailpages() {
  const [roomType, setRoomType] = useState("");

  const onChangeRoomType = (event) => {
    // 화면값 -> 변수값 저장
    setRoomType(event.target.value);
  };

  useEffect(() => {
    initMain();
    new WOW({
      // 옵션
    }).init();
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
              <div id="myback4">
                <div class="main-text">
                  <h1 id="main-text1">KIDS</h1> <br />
                </div>
              </div>
              {/* 타이틀 끝 */}
            </div>
          </main>
          {/* 디테일 시작 */}
          <div class="detail-main4">
            <div class="main_kids">
              <div class="detail-maintext4">
                자연의 진심을 담은 브랜드, 그린핑거! 글래드 키즈와 함께하는
                호캉스의 즐거운 추억을 남겨보세요.
              </div>
              <div className="wow fadeInUp" data-wow-delay="0.8s">
                <img
                  src={require("../assets/images/DetailImages/kids.jpg")}
                ></img>
              </div>
            </div>
            <div class="kids wow fadeInUp" data-wow-delay="0.8s">
              <img
                src={require("../assets/images/DetailImages/kids1.jpg")}
              ></img>
              <ul class="kids_text">
                어푸어푸 물놀이하며 떼었다 붙였다!
                <br />
                '나띵프로젝트'의 방수 포스터와 스펀지 스티커 세트로 사랑하는
                우리 아이에게 즐거운 일상을 선물하세요.
                <br />
                <br />
                푸른 바다와 다양한 바닷속의 아쿠아리움, 상상 속의 공룡을 만나볼
                수 있는 공룡시대.
                <br />
                2가지 테마로 아이들의 상상력을 북돋아 여행을 더욱 다채롭게
                만들어줍니다.
                <br />
                <br />· 제공 수량 : 투숙 당 1개
                <br />· 제공 내용 : 2가지 테마 중 랜덤 제공
                <br />
                - 아쿠아리움 / 공룡시대
                <br />- 방수 포스터 + 친환경 EVA 스펀지 스티커 1세트 구성
              </ul>
            </div>
            <div class="kids wow fadeInUp" data-wow-delay="0.8s">
              <img
                src={require("../assets/images/DetailImages/kids2.jpg")}
              ></img>
              <ul class="kids_text">
                아이들의 꿈과 즐거움이 가득한 조선 주니어
                <br />
                그랜드 조선에서는 어린이 고객이 보다 편하게 지낼 수 있도록 웰컴
                기프트 및 어메니티를 준비 해 드립니다.
                <br />
                <br />· 키즈 웰컴 기프트 : 키즈 백팩, 컬러링 북 & 색연필 세트
                <br />· 키즈 어메`니티 : 조선 주니어 목욕 가운, 조선 주니어
                슬리퍼, 조선 주니어 물컵, 어린이 배스 어메니티
                <br />
                <br />※ 조선 주니어 어메니티는 키즈 객실 당 기본 1세트 제공되며,
                어린이 2인 투숙의 경우 별도 요청 시 추가 제공
              </ul>
            </div>

            <div class="kids wow fadeInUp" data-wow-delay="0.8s">
              <img
                src={require("../assets/images/DetailImages/kids3.jpg")}
              ></img>
              <ul class="kids_text">
                여행의 짐이 간편해야 보다 즐거운 여행이 가능합니다.
                <br />
                렌딩 라이브러리에서는 여행이 더 즐겁고 편안하도록 유아용품부터
                일반 여행용품까지 세심하게 준비된 다양한 물품을 대여 해
                드립니다.
                <br />
                <br />· 대여 품목
                <br />
                - 유아용품 : 유아 베개, 유모차, 모빌, 바운서, 젖병 소독기, 분유
                포트, 아기 침대, 아기 욕조, 안전 가드, 아기 변기 커버, 세면대
                발판, 미끄럼 방지 매트, 하이 체어, 유아용 의자
                <br />
                - 일반용품 : 템퍼 베개, 메밀 베개, 바디필로우, 가습기,
                공기청정기, 제습기, 빨래 건조대
                <br />
                - 펀용품(Pool) : 성인&키즈 가운, 키즈 구명조끼, 키즈 퍼들 점퍼,
                모래놀이 세트, 비치타월
                <br />
                - Self 이용 : 세탁기(세제 별도 구매 요망), 건조기, 전자레인지
                <br />
                <br />※ 대여 품목은 수량에 따라 이용 가능 여부 상이
                <br />※ 렌딩 라이브러리에 관한 세부 내용은 유선상으로 안내 가능
                (대표 번호: 051-922-5000)
              </ul>
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
                          <a href="#">Package</a>
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

export default Detailpages;
