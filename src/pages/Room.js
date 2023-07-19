// Room.js
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import initMain from "../assets/js/main";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import "../assets/css/roomstyle.css";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";

// import required modules
import { Autoplay, FreeMode, Navigation, Thumbs } from "swiper";

// image import

/* eslint-disable */
function Room() {
  useEffect(() => {
    initMain();
  }, []);

  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  const [thumbsSwiper1, setThumbsSwiper1] = useState(null);
  const [thumbsSwiper2, setThumbsSwiper2] = useState(null);
  const [thumbsSwiper3, setThumbsSwiper3] = useState(null);

  return (
    <div>
      <div id="untree_co--overlayer"></div>
      <div className="loader">
        <div className="spinner-border text-primary" role="status">
          <span className="sr-only">Loading...</span>
        </div>
      </div>
      {/* 로딩 화면 끝 */}

      <div className="room--site-wrap">
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
                      <input type="text" name="bookingdate" readonly />
                    </form>
                  </div>

                  {/* 룸 선택 */}
                  <div className="room">
                    <label className="modalRoomTitle">
                      Room
                      <Link to={"/package"} className="modalRoom">
                        room details {">"}
                      </Link>
                    </label>
                    <select className="room-select">
                      <option selected disabled value="">
                        Select Room Type
                      </option>
                      <option value="">Standard</option>
                      <option value="">Deluxe</option>
                      <option value="">Family</option>
                      <option value="">Suite</option>
                    </select>
                  </div>

                  {/* 인원 수 선택 */}
                  <div className="people">
                    <label className="modalPeopleTitle">People</label>
                    <select className="people-select">
                      <option selected disabled value="">
                        People
                      </option>
                      <option value="">1</option>
                      <option value="">2</option>
                      <option value="">3</option>
                      <option value="">4</option>
                      <option value="">5</option>
                      <option value="">6</option>
                      <option value="">7</option>
                      <option value="">8</option>
                      <option value="">9</option>
                    </select>
                  </div>
                </div>
                <div class="modal-footer">
                  <button type="button" class="btn btn-primary btn-default">
                    Reserve
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* booking now modal end */}

          <div class="room--site-wrap">
            <nav class="untree_co--site-nav js-sticky-nav">
              <div class="container d-flex align-items-center">
                <div class="logo-wrap">
                  <Link to={"/"} class="untree_co--site-logo">
                    Cloud Hotel
                  </Link>
                </div>
                <div class="site-nav-ul-wrap text-center d-none d-lg-block">
                  <ul class="site-nav-ul js-clone-nav">
                  <li>
                        <Link to={"/"}>Home</Link>
                      </li>
                      <li class="active">
                        <Link to={"/room"}>Room</Link>
                      </li>
                      <li>
                        <Link to={"/package"}>Package</Link>
                      </li>
                      <li>
                        <Link to={"/facilities"}>Facilities</Link>
                      </li>
                      <li>
                        <Link to={"/lightslider"}>About Us</Link>
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
        {/* 메뉴 끝 */}

        {/* 메인 첫화면 시작 */}
        <main className="untree_co--site-main">
          <div
            className="untree_co--site-hero inner-page"
            data-aos="fade-down"
            data-aos-delay="300"
            style={{
              backgroundImage: "url('/images/suite.jpg')",
            }}
          >
            <div className="container">
              <div className="row align-items-center justify-content-center">
                <div className="col-md-7 text-center">
                  <div className="room-hero-contents" data-aos="fade-up">
                    <h1 className="hero-heading text-black">Luxury</h1>
                    <h1 className="hero-heading text-black">Rooms</h1>
                  </div>
                </div>
                {/* <div className="row justify-content-center text-center site-section pt-0"> */}
                <ul
                  className="nav nav-pills room-hero-contents justify-content-center text-center "
                  data-aos="fade-down"
                  data-aos-delay="300"
                >
                  <li className="nav-item inner-page">
                    <a className="nav-link " href="#scrollspyHeading1">
                      스탠다드 |
                    </a>
                  </li>
                  <li className="nav-item inner-page">
                    <a className="nav-link" href="#scrollspyHeading2">
                      디럭스 |
                    </a>
                  </li>
                  <li className="nav-item inner-page">
                    <a className="nav-link" href="#scrollspyHeading3">
                      패밀리 |
                    </a>
                  </li>
                  <li className="nav-item inner-page">
                    <a className="nav-link" href="#scrollspyHeading4">
                      스위트
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          {/* </div> */}
          {/* 메인 첫화면 시작 */}

          <div className="untree_co--site-section pb-0">
            <div className="container-fluid px-md-0">
              <div className="row justify-content-center text-center site-section pt-0">
                {/* 룸 머리말 시작 */}
                <div className="col-md-6">
                  <h2 className="display-4" data-aos="fade-donw">
                    Room
                  </h2>
                  <p data-aos="fade-up" data-aos-delay="100">
                    호텔은 260개의 객실을 보유하고 있습니다. 대부분의 객실이
                    한국의 관광 명소인 해수욕장의 오션뷰를 감상할 수 있는
                    발코니를 갖추고있습니다. 6층에 위치한 피트니스 & 스파에서는
                    약 400평 규모의 야외수영장에 오션뷰의 인피니티 풀, 프라이빗
                    풀 카바나 등 레져 엔터테인먼트 공간을 즐길 수 있으며 호텔
                    8층에 위한 투숙객 전용 라운지에서 투숙하시는 동안 편안하고
                    신선한 '리프레시먼트' 서비스를 상시로 제공 받으실 수
                    있습니다.{" "}
                  </p>
                </div>
                {/* 룸 머리말 끝 */}
              </div>

              {/* 룸1 시작 */}
              <div className="room1">
                <h1 id="scrollspyHeading1"> </h1>
                <div className="row no-gutters align-items-stretch room-animate site-section">
                  <div className="swiper">
                    <div className="swiper-detail" data-aos="fade-right">
                      <Swiper
                        style={{
                          "--swiper-navigation-color": "#fff",
                          "--swiper-pagination-color": "#fff",
                        }}
                        loop={true}
                        spaceBetween={5}
                        navigation={true}
                        autoplay={{
                          delay: 2500,
                          disableOnInteraction: false,
                        }}
                        
                        thumbs={{ swiper: thumbsSwiper }}
                        modules={[Autoplay, FreeMode, Navigation, Thumbs]}
                        className="mySwiper2"
                      >
                        <SwiperSlide className="img1"></SwiperSlide>
                        <SwiperSlide className="img2"></SwiperSlide>
                        <SwiperSlide className="img3"></SwiperSlide>
                        <SwiperSlide className="img4"></SwiperSlide>
                        <SwiperSlide className="img5"></SwiperSlide>
                      </Swiper>
                      <Swiper
                        onSwiper={setThumbsSwiper}
                        loop={true}
                        spaceBetween={5}
                        slidesPerView={4}
                        freeMode={true}
                        watchSlidesProgress={true}
                        modules={[FreeMode, Navigation, Thumbs]}
                        className="mySwiper"
                      >
                        <SwiperSlide className="img1"></SwiperSlide>
                        <SwiperSlide className="img2"></SwiperSlide>
                        <SwiperSlide className="img3"></SwiperSlide>
                        <SwiperSlide className="img4"></SwiperSlide>
                        <SwiperSlide className="img5"></SwiperSlide>
                      </Swiper>
                    </div>
                    <div className="room1-all">
                      <div className="room-infoma">
                        <div className="room-info" data-aos="fade-left">
                          <h3 className="display-5 heading ">스탠다드</h3>
                          <div className="room-exerpt">
                            <p>
                              우아한 인테리어와 현대적 세련미가 조화롭게
                              어우러진 객실로, 비즈니스 여행객과 레저 여행객
                              모두에게 편안한 숙박을 제공 합니다.{" "}
                            </p>

                            <div className="row mt-5">
                              <div className="col-12">
                                <h3 className="mb-4">Amenities</h3>
                                <ul className="list-unstyled ul-check">
                                  <li>투숙객 전용 라운지(8F) 무료입장</li>
                                  <li>
                                    투숙객 실내/외 수영장 무료입장 (7~8월 :
                                    투숙기간 내 1회)
                                  </li>
                                  <li>
                                    전 객실 초고속 무료 인터넷 (유선, 와이파이)
                                  </li>
                                  <li>
                                    슈퍼 프리미엄 배딩 시스템 : 최상의 숙면을
                                    위한 침대 및 침구류
                                  </li>
                                </ul>
                                {/* 자세히 링크, 예약하기 링크 입력 아직안함 */}
                                {/* 버튼 시작 */}
                                <a href="/roomDetail">
                                  <span
                                    className="btn1 badge rounded-pill bg-warning"
                                    role="button"
                                  >
                                    자세히
                                  </span>
                                </a>
                                <a href="/booking">
                                  <span
                                    className="btn2 badge rounded-pill bg-warning"
                                    role="button"
                                  >
                                    예약하기
                                  </span>
                                </a>
                                {/* 버튼 끝 */}
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/* 룸1 끝 */}
              </div>
            </div>

            {/* 룸2 시작 */}
            <div className="room2">
              <h1 id="scrollspyHeading2"> </h1>
              <div className="row no-gutters align-items-stretch room-animate site-section">
                <div className="swiper">
                  <div className="swiper-detail1" data-aos="fade-right">
                    <Swiper
                      style={{
                        "--swiper-navigation-color": "#fff",
                        "--swiper-pagination-color": "#fff",
                      }}
                      spaceBetween={5}
                      navigation={true}
                      autoplay={{
                        delay: 2500,
                        disableOnInteraction: false,
                      }}
                      
                      thumbs={{ swiper: thumbsSwiper1 }}
                      modules={[Autoplay, FreeMode, Navigation, Thumbs]}
                      className="mySwiper4"
                    >
                      <SwiperSlide className="img1-1"></SwiperSlide>
                      <SwiperSlide className="img1-2"></SwiperSlide>
                      <SwiperSlide className="img1-3"></SwiperSlide>
                      <SwiperSlide className="img1-4"></SwiperSlide>
                      <SwiperSlide className="img1-5"></SwiperSlide>
                    </Swiper>
                    <Swiper
                      onSwiper={setThumbsSwiper1}
                      spaceBetween={5}
                      slidesPerView={4}
                      freeMode={true}
                      watchSlidesProgress={true}
                      modules={[FreeMode, Navigation, Thumbs]}
                      className="mySwiper3"
                    >
                      <SwiperSlide className="img1-1"></SwiperSlide>
                      <SwiperSlide className="img1-2"></SwiperSlide>
                      <SwiperSlide className="img1-3"></SwiperSlide>
                      <SwiperSlide className="img1-4"></SwiperSlide>
                      <SwiperSlide className="img1-5"></SwiperSlide>
                    </Swiper>
                  </div>
                  <div className="room1-all">
                    <div className="room-infoma">
                      <div className="room-info1" data-aos="fade-left">
                        <h3 className="display-5 heading ">디럭스</h3>
                        <div className="room-exerpt">
                          <p>
                            세련미와 우아함을 더한 고급스러운 인테리어로
                            구성되어 있으며, 대형 발코니 창을 통해 야외 온수풀과
                            아름다운 바다를 감상할 수 있는 객실 입니다.{" "}
                          </p>

                          <div className="row mt-5">
                            <div className="col-12">
                              <h3 className="mb-4">Amenities</h3>
                              <ul className="list-unstyled ul-check">
                                <li>투숙객 전용 라운지(8F) 무료입장</li>
                                <li>
                                  투숙객 실내/외 수영장 무료입장 (7~8월 :
                                  투숙기간 내 1회)
                                </li>
                                <li>
                                  전 객실 초고속 무료 인터넷 (유선, 와이파이)
                                </li>
                                <li>
                                  슈퍼 프리미엄 배딩 시스템 : 최상의 숙면을 위한
                                  침대 및 침구류
                                </li>
                              </ul>
                              {/* 자세히 링크, 예약하기 링크 입력 아직안함 */}
                              {/* 버튼 시작 */}
                              <a href="/roomDetail1">
                                <span
                                  className="btn1 badge rounded-pill bg-warning"
                                  role="button"
                                >
                                  자세히
                                </span>
                              </a>
                              <a href="/booking">
                                <span
                                  className="btn2 badge rounded-pill bg-warning"
                                  role="button"
                                >
                                  예약하기
                                </span>
                              </a>
                              {/* 버튼 끝 */}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* 룸1 끝 */}
            </div>

            {/* 룸2 끝 */}

            {/* 룸3 시작 */}
            <div className="room3">
              <h1 id="scrollspyHeading3"> </h1>
              <div className="row no-gutters align-items-stretch room-animate site-section">
                <div className="swiper">
                  <div className="swiper-detail" data-aos="fade-right">
                    <Swiper
                      style={{
                        "--swiper-navigation-color": "#fff",
                        "--swiper-pagination-color": "#fff",
                      }}
                      spaceBetween={5}
                      navigation={true}
                      autoplay={{
                        delay: 2500,
                        disableOnInteraction: false,
                      }}
                      
                      thumbs={{ swiper: thumbsSwiper2 }}
                      modules={[Autoplay, FreeMode, Navigation, Thumbs]}
                      className="mySwiper2"
                    >
                      <SwiperSlide className="img2-1"></SwiperSlide>
                      <SwiperSlide className="img2-2"></SwiperSlide>
                      <SwiperSlide className="img2-3"></SwiperSlide>
                      <SwiperSlide className="img2-4"></SwiperSlide>
                      <SwiperSlide className="img2-5"></SwiperSlide>
                    </Swiper>
                    <Swiper
                      onSwiper={setThumbsSwiper2}
                      spaceBetween={5}
                      slidesPerView={4}
                      freeMode={true}
                      watchSlidesProgress={true}
                      modules={[FreeMode, Navigation, Thumbs]}
                      className="mySwiper"
                    >
                      <SwiperSlide className="img2-1"></SwiperSlide>
                      <SwiperSlide className="img2-2"></SwiperSlide>
                      <SwiperSlide className="img2-3"></SwiperSlide>
                      <SwiperSlide className="img2-4"></SwiperSlide>
                      <SwiperSlide className="img2-5"></SwiperSlide>
                    </Swiper>
                  </div>
                  <div className="room2-all">
                    <div className="room-infoma">
                      <div className="room-info" data-aos="fade-left">
                        <h3 className="display-5">패밀리</h3>
                        <div className="room-exerpt">
                          <p>
                            세련미와 우아함을 더한 고급스러운 인테리어로
                            구성되어 있으며, 아름다운 야경을 감상 할 수 있는
                            고품격 객실 입니다.{" "}
                          </p>

                          <div className="row mt-5">
                            <div className="col-12">
                              <h3 className="mb-4">Amenities</h3>
                              <ul className="list-unstyled ul-check">
                                <li>투숙객 전용 라운지(8F) 무료입장</li>
                                <li>
                                  투숙객 실내/외 수영장 무료입장 (7~8월 :
                                  투숙기간 내 1회)
                                </li>
                                <li>
                                  전 객실 초고속 무료 인터넷 (유선, 와이파이)
                                </li>
                                <li>
                                  슈퍼 프리미엄 배딩 시스템 : 최상의 숙면을 위한
                                  침대 및 침구류
                                </li>
                              </ul>
                              {/* 자세히 링크, 예약하기 링크 입력 아직안함 */}
                              {/* 버튼 시작 */}
                              <a href="/roomDetail2">
                                <span
                                  className="btn1 badge rounded-pill bg-warning"
                                  role="button"
                                >
                                  자세히
                                </span>
                              </a>
                              <a href="/booking">
                                <span
                                  className="btn2 badge rounded-pill bg-warning"
                                  role="button"
                                >
                                  예약하기
                                </span>
                              </a>
                              {/* 버튼 끝 */}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* 룸1 끝 */}
            </div>

            {/* 룸3 끝 */}

            {/* 룸4 시작 */}
            <div className="room4">
              <h1 id="scrollspyHeading4"> </h1>
              <div className="row no-gutters align-items-stretch room-animate site-section">
                <div className="swiper">
                  <div className="swiper-detail1" data-aos="fade-right">
                    <Swiper
                      style={{
                        "--swiper-navigation-color": "#fff",
                        "--swiper-pagination-color": "#fff",
                      }}
                      spaceBetween={5}
                      navigation={true}
                      autoplay={{
                        delay: 2500,
                        disableOnInteraction: false,
                      }}
                      thumbs={{ swiper: thumbsSwiper3 }}
                      modules={[Autoplay, FreeMode, Navigation, Thumbs]}
                      className="mySwiper4"
                    >
                      <SwiperSlide className="img3-1"></SwiperSlide>
                      <SwiperSlide className="img3-2"></SwiperSlide>
                      <SwiperSlide className="img3-3"></SwiperSlide>
                      <SwiperSlide className="img3-4"></SwiperSlide>
                      <SwiperSlide className="img3-5"></SwiperSlide>
                    </Swiper>
                    <Swiper
                      onSwiper={setThumbsSwiper3}
                      spaceBetween={5}
                      slidesPerView={4}
                      freeMode={true}
                      watchSlidesProgress={true}
                      modules={[FreeMode, Navigation, Thumbs]}
                      className="mySwiper3"
                    >
                      <SwiperSlide className="img3-1"></SwiperSlide>
                      <SwiperSlide className="img3-2"></SwiperSlide>
                      <SwiperSlide className="img3-3"></SwiperSlide>
                      <SwiperSlide className="img3-4"></SwiperSlide>
                      <SwiperSlide className="img3-5"></SwiperSlide>
                    </Swiper>
                  </div>
                  <div className="room3-all">
                    <div className="room-infoma">
                      <div className="room-info1" data-aos="fade-left">
                        <h3 className="display-5 heading ">스위트</h3>
                        <div className="room-exerpt">
                          <p>
                            세계 각국의 국빈과 국내외 VVIP를 위한 단 하나뿐인
                            최고급 객실입니다. 럭셔리한 응접실과 회의실은 물론
                            비서고나 전용 객실, 용식 미러TV 등 최신 시설과 보안
                            시스템을 갖추고 있으며 바다의 파노라마 오션뷰를
                            즐기면서 우리호텔만의 세심하고 격조 높은 서비스는
                            잊지 못할 감동을 선사합니다.{" "}
                          </p>

                          <div className="row mt-5">
                            <div className="col-12">
                              <h3 className="mb-4">Amenities</h3>
                              <ul className="list-unstyled ul-check">
                                <li>투숙객 전용 라운지(8F) 무료입장</li>
                                <li>
                                  투숙객 실내/외 수영장 무료입장 (7~8월 :
                                  투숙기간 내 1회)
                                </li>
                                <li>
                                  전 객실 초고속 무료 인터넷 (유선, 와이파이)
                                </li>
                                <li>
                                  슈퍼 프리미엄 배딩 시스템 : 최상의 숙면을 위한
                                  침대 및 침구류
                                </li>
                                <li>LG 스타일러 구비</li>
                                <li>LG 오브제 냉장고 및 공기청정기 구비</li>
                              </ul>
                              {/* 자세히 링크, 예약하기 링크 입력 아직안함 */}
                              {/* 버튼 시작 */}
                              <a href="/roomDetail3">
                                <span
                                  className="btn1 badge rounded-pill bg-warning"
                                  role="button"
                                >
                                  자세히
                                </span>
                              </a>
                              <a href="/booking">
                                <span
                                  className="btn2 badge rounded-pill bg-warning"
                                  role="button"
                                >
                                  예약하기
                                </span>
                              </a>
                              {/* 버튼 끝 */}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* 룸1 끝 */}
            </div>

            {/* 룸4 끝 */}
          </div>
          <div className="untree_co--site-section py-5 bg-body-darker cta">
            <div className="container">
              <div className="row">
                <div className="col-12 text-center">
                  <h3 className="m-0 p-0">
                    If you have any special requests, please feel free to call
                    us. <a href="tel://+123456789012">+12.345.678.9012</a>
                  </h3>
                </div>
              </div>
            </div>
          </div>
        </main>
        {/* footer 시작 */}
        <footer className="untree_co--site-footer">
          <div className="container">
            <div className="row">
              <div className="col-md-4 pr-md-5">
                <h3>About Us</h3>
                <p>
                  A hotel is an establishment that provides paid lodging on a
                  short-term basis. Facilities provided may range from a
                  modest-quality.
                </p>
                <p>
                  <a href="#" className="readmore">
                    Read more
                  </a>
                </p>
              </div>
              <div className="col-md-8 ml-auto">
                <div className="row">
                  <div className="col-md-3">
                    <h3>Navigation</h3>
                    <ul className="list-unstyled">
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
                  <div className="col-md-9 ml-auto">
                    <div className="row mb-3">
                      <div className="col-md-6">
                        <h3>Address</h3>
                        <address>
                          273 South Riverview Rd. <br /> New York, NY 10011
                        </address>
                      </div>
                      <div className="col-md-6">
                        <h3>Telephone</h3>
                        <p>
                          <a href="#">+1 234 5678 910</a> <br />
                          <a href="#">+2 234 5678 910</a>
                        </p>
                      </div>
                    </div>

                    <h3 className="mb-0">Join our newsletter</h3>
                    <p>Be the first to know our latest updates and news!</p>
                    <form action="#" method="" className="form-subscribe">
                      <div className="form-group d-flex">
                        <input
                          type="email"
                          className="form-control mr-2"
                          placeholder="Enter your email"
                        />
                        <input
                          type="submit"
                          value="Subscribe"
                          className="btn btn-black px-4 text-white"
                        />
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
            <div className="row mt-5 pt-5 align-items-center">
              <div className="col-md-6 text-md-left">
                {/* <!-- Link back to Untree.co can't be removed. Template is licensed under CC BY 3.0. If you purchased a license you can remove this. --> */}
                <p>
                  Copyright &copy;
                  <script>
                    document.write(new Date().getFullYear());
                  </script>{" "}
                  <a href="index.html">Untree.co</a>. All Rights Reserved.
                  Design by{" "}
                  <a
                    href="https://untree.co/"
                    target="_blank"
                    className="text-primary"
                  >
                    Untree.co
                  </a>
                </p>
                {/* <!-- Link back to Untree.co can't be removed. Template is licensed under CC BY 3.0. If you purchased a license you can remove this. --> */}
              </div>
              <div className="col-md-6 text-md-right">
                <ul className="icons-top icons-dark">
                  <li>
                    <a href="#">
                      <span className="icon-facebook"></span>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <span className="icon-twitter"></span>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <span className="icon-instagram"></span>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <span className="icon-tripadvisor"></span>
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
      <div className="search-wrap">
        <a href="#" className="close-search js-search-toggle">
          <span>Close</span>
        </a>
        <div className="container">
          <div className="row justify-content-center align-items-center text-center">
            <div className="col-md-12">
              <form action="#">
                <input
                  type="search"
                  name="s"
                  id="s"
                  placeholder="Type a keyword and hit enter..."
                  autoComplete="false"
                />
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Room;
