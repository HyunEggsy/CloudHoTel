//TODO:디테일페이지

import React, { useEffect, useState, useRef } from "react";
import initMain from "../assets/js/main";
import { Link } from "react-router-dom";
import "../assets/css/mycss.css";
import "../assets/css/detailpages.css";

/* eslint-disable */
function Detailpages1() {
  const [roomType, setRoomType] = useState("");

  useEffect(() => {
    initMain();
  }, []);

  const onChangeRoomType = (event) => {
    // 화면값 -> 변수값 저장
    setRoomType(event.target.value);
  };

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
    {/* 로딩 화면 시작 */}
    <div id="untree_co--overlayer"></div>
    <div className="loader">
      <div className="spinner-border text-primary" role="status">
        <span className="sr-only">Loading...</span>
      </div>
    </div>
    {/* 로딩 화면 끝 */}

    <div className="untree_co--site-wrap">
      {/* 23.07.01 - 김건우 [ Nav 컴포넌트로 따로 만들었지만 대메뉴 언더라인 효과 때문에 다시 컴포넌트 내로 배치 ] */}
      {/* nav 시작 */}

      <div>
        {/* 23.07.01 - 김건우 [ 바로 예약하기 modal 로 페이지 띄울 수 있게 설정 ] */}

        {/* booking now! modal */}

        <div
          class="modal fade bd-example-modal-xl"
          id="myModal"
          tabindex="0"
          role="dialog"
          aria-labelledby="myExtraLargeModalLabel"
          aria-hidden="true"
          data-backdrop="false"
        >
          <div class="modal-dialog modal-xl">
            <div class="modal-content">
              <div class="modal-header">
                <h4 class="modal-title">예약하기</h4>
                <button type="button" class="close" data-dismiss="modal">
                  &times;
                </button>
              </div>
              <div class="modal-body">
                {/* 날짜 선택 */}
             <div className="date">
                    <form autocomplete="off">
                      <label className="modalDateTitle">Date</label>
                      <input 
                      name="checkInModal"
                      ref={daterange}
               />
                    </form>
                  </div>

                  {/* 룸 선택 */}
                  <div className="room">
                    <label htmlFor="roomtype">Room</label>
                    <select
                      type="text"
                      className="form-control"
                      id="rtype"
                      required
                      name="rtype"
                      value={searchRtype}
                      onChange={onChangeSearchRtype}
                    >
                      <option selected disabled value="">
                        Select Room Type
                        </option>
                        <option value="R001">standard</option>
                        <option value="R002">deluxe</option>
                        <option value="R003">family</option>
                        <option value="R004">suite</option>
                      </select>
                  </div>

                  {/* 인원 수 선택 */}
                  <div className="people">
                    <label className="modalPeopleTitle">People</label>
                    <br />
                                       <select
                      type="text"
                      className="form-control"
                      id="people"
                      required
                      name="people"
                      value={searchPeople}
                      onChange={onChangeSearchPeople}
                    >
                      <option selected disabled value="">
                        People
                      </option>
                      <option value="1">1</option>
                      <option value="2">2</option>
                      <option value="3">3</option>
                      <option value="4">4</option>
                    </select>
                  </div>

                {/* search 버튼 시작 */}
                <button
                          className="btn btn-primary btn-block"
                          onClick={onClickSearch}
                          // onClick={`/reservation/jdate/${daterange.current.value}/email/${email}`}
                        >
                          Search
                        </button>
              </div>
            </div>
          </div>
        </div>

        {/* booking now modal end */}

        <div class="untree_co--site-wrap">
          <nav class="untree_co--site-nav js-sticky-nav">
            <div class="container d-flex align-items-center">
              <div class="logo-wrap">
                <Link to={"/"} class="untree_co--site-logo">
                  Cloud Hotel
                </Link>
              </div>
              <div class="site-nav-ul-wrap text-center d-none d-lg-block">
                <ul class="site-nav-ul js-clone-nav">
                  <li class="active">
                    <Link to={"/"}>Home</Link>
                  </li>
                  <li class="has-children">
                    <Link to={"/room"}>Room</Link>
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
                  <li>
                    <Link to={"/package"}>Package</Link>
                  </li>
                  <li>
                    <Link to={"/about"}>About Us</Link>
                  </li>
                  <li>
                    <Link to={"/contact"}>Contact</Link>
                  </li>
                  <li>
                    {/* <!-- Trigger the modal with a button --> */}
                    <Link
                      class="navBooking"
                      data-toggle="modal"
                      data-target="#myModal"
                    >
                      Booking Now !
                    </Link>
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
        </div>
      </div>

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
              <div id="myback1">
                <div class="main-text">
                  <h1 id="main-text1">BRIDAL SHOWER</h1><br />
                </div>
              </div>
              {/* 타이틀 끝 */}
            </div>
          </main>

              {/* //TODO: 디테일 시작 (07/03 수정) */}
              <div class="detail-main">
            <div class="detail-maintext1">
              새로운 출발을 기다리고 있는 예비 신부와 친구들만의 특별한 파티인
              브라이덜 샤워! 평생 단 한 번뿐인 소중한 파티를 함께해보세요!
            </div>
            <div class="bridal-main">
              <div>
                <img
                  src={require("../assets/images/DetailImages/bridal.jpg")}
                ></img>
                <p class="bridal_text">
                  오직 HAPPY ANNIVERSARY 패키지에서만 가능한 IN ROOM AMENITY
                  <br />
                  45주년 축하의 의미를 담은 조선델리 미니케이크 '카멜리아' 와
                  샴페인, 치즈플레터, 파티DIY 키트 로<br />
                  탁 트인 해운대 바다가 보이는 쾌적한 객실에서 나만의 호캉스를
                  만끽해보세요
                  <br />
                  <br />
                  · 구성ㅣ조선델리 미니케이크 '카멜리아', 모엣샹동 하프보틀
                  1병(375ml), 치즈 플래터, 프리미엄 파티용품 '알렉스앤소냐' DIY
                  3종 키트(머리띠, 어깨띠, 풍선 6PCS)
                  <br />
                  ** 본 혜택은 본 패키지 상품의 Executive 또는 Suite 이용 시
                  제공 됩니다.(투숙기간 내 1회)
                  <br />
                  ** 본 혜택은 지정된 세트 외 타 음료 및 푸드로 교환, 변경되지
                  않습니다.
                  <br />
                  ** 본 혜택은 객실 내 에서만 이용가능하며, 외부에서 이용 및
                  포장은 되지 않습니다.
                </p>
              </div>
              <div>
                <img
                  src={require("../assets/images/DetailImages/pink-wine.jpg")}
                ></img>
                <p class="bridal_text">
                  해운대 바다가 가장 아름답게 펼쳐진 호텔 룸 안에서의 스윗
                  모먼트
                  <br />
                  호텔 플라워 부띠끄에서 생화로 제작한 로맨틱 로즈 박스와 와인,
                  치즈 플레이트 까지,
                  <br />
                  사랑하는 사람과 더욱 로맨틱하고 달콤한 분위기를 선사해
                  드립니다
                  <br />
                  <br />
                  · 구성ㅣ웨스틴 조선 부산 플라워부띠끄 로맨틱 로즈 박스
                  1EA(Small Size), 메시지 카드 1EA
                  <br />
                  와인 1병(부샤 꼬뜨 드 본 빌라쥐 2018), 치즈 플레이트, 마카롱
                  3PCS
                </p>
              </div>
            </div>
          </div>
          {/* 예약시작 */}
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
    </div>
  );
}

export default Detailpages1;
