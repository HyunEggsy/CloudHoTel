//TODO: 기존 GALLERY에서 PACKAGE로 변경작업

import React, { useEffect, useRef } from "react";
import initMain from "../assets/js/main";
import { Link } from "react-router-dom";
import "../assets/css/mycss.css";

/* eslint-disable */
function Package() {
  useEffect(() => {
    initMain();
  }, []);

  // 태그 함수
  useEffect(() => {
    $(".portfolio-container").imagesLoaded(function () {
      // isotope() 함수 사용
      let portfolioIsotope = $(".portfolio-container").isotope({
        // 옵션 설정
        // 필터 적용할 대상 이미지 클래스 넣기
        itemSelector: ".portfolio-item",
        // 어떻게 보여줄건가 옵션
        layoutMode: "fitRows",
      });

      // jquery 클릭 이벤트
      $("#portfolio-flters li").on("click", function () {
        // 클래스에 현재 active 가 있으면 제거하고
        $("#portfolio-flters li").removeClass("active");
        // 현재 클릭한 목록에 active 추가
        $(this).addClass("active");
        // 현재 클릭한 필터의 값을 선택해서 isotope의 값으로 전달
        portfolioIsotope.isotope({
          // 옵션 추가 : filter 속성
          filter: $(this).data("filter"),
        });
      });
    });
  });

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

        <div class="untree_co--site-wrap">
          {/* 23.07.01 - 김건우 [ Nav 컴포넌트로 따로 만들었지만 대메뉴 언더라인 효과 때문에 다시 컴포넌트 내로 배치 * className="active" ] */}
          {/* nav 시작 */}

          <div>
            {/* 23.07.01 - 김건우 [ 바로 예약하기 modal 로 페이지 띄울 수 있게 설정 ] */}

            {/* booking now! modal */}

            <div
                class="modal fade bd-example-modal-xl"
                id="myModal"
                tabindex="0"
                role="popper"
                aria-labelledby="myExtraLargeModalLabel"
                aria-hidden="false"
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
                            type="text"
                            name="bookingdate"
                            readonly
                          />
                        </form>
                      </div>

                      {/* 룸 선택 */}
                      <div className="room">
                        <label className="modalRoomTitle">Room
                        <Link to={"/package"} className="modalRoom hidden.bs.modal" >room details {'>'}</Link>
                        </label>
                        <select className="room-select">
                          <option selected disabled value="">
                            Select Room Type
                          </option>
                          <option value="">Standard</option>
                          <option value="">Deluxe</option>
                          <option value="">Suite</option>
                        </select>
                      </div>

                      {/* 인원 수 선택 */}
                      <div className="people">
                        <label className="modalPeopleTitle">People</label>
                        <br/>
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
                    <Link to={"/booking"} class="btn btn-primary btn-default">
                    Reserve
                  </Link>
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
                      <li>
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
                      <li class="active">
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

          {/* nav 끝 */}

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
 <div class="p_myback">
                <div class="p_main-text">
                  <h1 id="p_main-text1">PACKAGE</h1>
                  <br />
                  <p>The most reasonable way to enjoy a cloud hotel</p>
                </div>
              </div>

              {/* 타이틀 끝 */}

              {/* 메인시작 */}
              <div class="p_main">
                <div>
                  <div>
                    <div class="p_menu">
                      {/* 달력 */}
                      <div class="p_check">
                        <div class="p_check2">Check-In</div>
                        <input
                      className="Year-Month"
                      type="button"
                      id="datepicker"
                      ref={datepicker}
                    />
                      </div>
                      <div class="p_check">
                        <div class="p_check2">Check-Out</div>
                        <input
                      className="Year-Month"
                      type="button"
                      id="datepicker2"
                      ref={datepicker2}
                    />
                      </div>
                      {/* 검색어 */}
                      <div>
                        <input
                          type="text"
                          placeholder="Start typing..."
                          id="p_searchbox"
                        />
                      </div>
                      <button type="button" id="p_button">
                        Search
                      </button>
                      {/* 키워드시작 */}
                    </div>
                    <div id="keyword-box">
                      <p class="keyword">Keyword</p>
                      <div>
                        <ul class="tagList" id="portfolio-flters">
                          <li
                            id="tag-all"
                            className="tagList-group-item active"
                            type="button"
                            data-filter="*"
                          >
                            All
                          </li>
                          <li
                            class="tag-tab list-group-item"
                            type="button"
                            data-filter=".family"
                          >
                            Family
                          </li>
                          <li
                            class="tag-tab list-group-item"
                            type="button"
                            data-filter=".breakfast"
                          >
                            Breakfast
                          </li>
                          <li
                            class="tag-tab list-group-item"
                            type="button"
                            data-filter=".spa"
                          >
                            Spa
                          </li>
                          <li
                            class="tag-tab list-group-item"
                            type="button"
                            data-filter=".room_only"
                          >
                            Room Only
                          </li>
                          <li
                            class="tag-tab list-group-item"
                            type="button"
                            data-filter=".season"
                          >
                            Season
                          </li>
                          <li
                            class="tag-tab list-group-item"
                            type="button"
                            data-filter=".special"
                          >
                            Special
                          </li>
                        </ul>
                      </div>
                    </div>
                    {/* 키워드끝 */}
                  </div>
                </div>
                {/* package 타이틀 끝 */}

                {/* 패키지 시작 */}
                <div>
                  {/* TODO: 작업중 시작 */}
                  <div class="package-main portfolio-container">
                    {/* 패키지1 */}
                    <div class="package1 special portfolio-item">
                      <a href="/detailpages1">
                        <img
                          src={require("../assets/images/bridalshower.jpg")}
                          class="p_image"
                        ></img>
                      </a>

                      <div class="tag-box">
                        <p>#Special</p>
                        <p>#Event</p>
                        <p>#Party</p>
                      </div>
                      <div class="text2">
                        <p>Bridal shower package</p>

                        <p class="font1">
                          새로운 출발을 기다리고 있는 예비 신부와 친구들만의
                          특별한 파티인 브라이덜 샤워! 평생 단 한 번뿐인 소중한
                          파티를 함께해보세요!
                        </p>
                      </div>
                      {/* 가격과 관심박스 */}
                      <div class="price_heart">
                        <div class="price">
                          KRW <span id="p_number">150,000</span>
                        </div>
                        <div class="heartbox_1">
                          <input type="checkbox" id="heart_1" />
                          <label for="heart_1">♥</label>
                        </div>
                      </div>
                    </div>

                    {/* 패키지2 */}
                    <div class="package2 spa special portfolio-item">
                      <a href="/detailpages2">
                        <img
                          src={require("../assets/images/spa.jpg")}
                          class="p_image"
                        ></img>
                      </a>
                      <div class="tag-box">
                        <p>#Spa</p>
                        <p>#Special</p>
                        <p>#Healing</p>
                      </div>
                      <div class="text2">
                        <p>Spa package</p>

                        <p class="font1">
                          프랑스 상위 1%의 스파를 경험하는 하루 완벽한
                          트리트먼트를 경험해보세요.
                        </p>
                      </div>

                      {/* 가격과 관심박스 */}
                      <div class="price_heart">
                        <div class="price">
                          KRW <span id="p_number">200,000</span>
                        </div>
                        <div class="heartbox_2">
                          <input type="checkbox" id="heart_2" />
                          <label for="heart_2">♥</label>
                        </div>
                      </div>
                    </div>

                    {/* 패키지3 */}
                    <div class="package3 breakfast portfolio-item">
                      <a href="/detailpages3">
                        <img
                          src={require("../assets/images/breakfast.jpg")}
                          class="p_image"
                        ></img>
                      </a>
                      <div class="tag-box">
                        <p>#Breakfast</p>
                      </div>
                      <div class="text2">
                        <p>Breakfast package</p>

                        <p class="font1">
                          라이브 섹션에서 셰프가 직접 요리해주는 계란 요리와
                          취향 따라 즐길 수 있는 다채로운 메뉴를 즐기며 든든하고
                          여유로운 아침과 함께 하루를 시작해 보세요.
                        </p>
                      </div>

                      {/* 가격과 관심박스 */}
                      <div class="price_heart">
                        <div class="price">
                          KRW <span id="p_number">160,000</span>
                        </div>
                        <div class="heartbox_3">
                          <input type="checkbox" id="heart_3" />
                          <label for="heart_3">♥</label>
                        </div>
                      </div>
                    </div>

                    {/* 패키지4 */}
                    <div class="package4 family portfolio-item">
                      <a href="/detailpages4">
                        <img
                          src={require("../assets/images/kids.jpg")}
                          class="p_image"
                        ></img>
                      </a>
                      <div class="tag-box">
                        <p>#Kids</p>
                        <p>#Family</p>
                        <p>#Healing</p>
                      </div>
                      <div class="text2">
                        <p>Kids package</p>
                        <p class="font1">
                          자연의 진심을 담은 브랜드, 그린핑거! 자녀와 함께하는
                          호캉스의 즐거운 추억을 남겨보세요.
                        </p>
                      </div>

                      {/* 가격과 관심박스 */}
                      <div class="price_heart">
                        <div class="price">
                          KRW <span id="p_number">380,000</span>
                        </div>
                        <div class="heartbox_4">
                          <input type="checkbox" id="heart_4" />
                          <label for="heart_4">♥</label>
                        </div>
                      </div>
                    </div>

                    {/* 패키지5 */}
                    <div class="package5 special portfolio-item">
                      <a href="/detailpages5">
                        <img
                          src={require("../assets/images/파티룸.jpg")}
                          class="p_image"
                        ></img>
                      </a>
                      <div class="tag-box">
                        <p>#Special</p>
                        <p>#Party</p>
                        <p>#Privite</p>
                      </div>
                      <div class="text2">
                        <p>PartyRoom Pakage</p>

                        <p class="font1">
                          화려한 인터레이어의 프라이빗 파티룸과 스위트룸에서
                          새장을 벗어난 새처럼, 특별한 순간들을 마음껏
                          즐겨보세요.
                        </p>
                      </div>

                      {/* 가격과 관심박스 */}
                      <div class="price_heart">
                        <div class="price">
                          KRW <span id="p_number">480,000</span>
                        </div>
                        <div class="heartbox_5">
                          <input type="checkbox" id="heart_5" />
                          <label for="heart_5">♥</label>
                        </div>
                      </div>
                    </div>

                    {/* 패키지6 */}
                    <div class="package6 special room_only portfolio-item">
                      <a href="/detailpages6">
                        <img
                          src={require("../assets/images/pet.jpg")}
                          class="p_image"
                        ></img>
                      </a>
                      <div class="tag-box">
                        <p>#Pet</p>
                        <p>#Special</p>
                        <p>#Room Only</p>
                      </div>
                      <div class="text2">
                        <p>Pet Package</p>

                        <p class="font1">
                          펫 어메니티가 갖춰진 전용 객실에서 사랑하는 반려견과
                          함께 도심 속 펫캉스를 경험하세요.
                        </p>
                      </div>

                      {/* 가격과 관심박스 */}
                      <div class="price_heart">
                        <div class="price">
                          KRW <span id="p_number">150,000</span>
                        </div>
                        <div class="heartbox_6">
                          <input type="checkbox" id="heart_6" />
                          <label for="heart_6">♥</label>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* TODO: 작업중 끝 */}
                </div>
              </div>
            </div>
          </main>

          {/* 패키지 끝 */}

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

export default Package;
