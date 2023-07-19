// Index.js
import React, { useState, useEffect, useRef, useCallback } from "react";
import RoomDataService from "../services/RoomDataService";
import { useParams, Link, useNavigate, useLocation } from "react-router-dom";
import initMain from "../assets/js/main";

// 공유저장소를 위한 import
import { useDispatch, useSelector } from "react-redux";
// 액션함수를 위한 import
import { logout } from "../store/actions/auth";
import { clearMessage } from "../store/actions/message";

// bootstrap css import
import "bootstrap/dist/css/bootstrap.min.css";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-cards";
import "swiper/css/pagination";
import "swiper/css/navigation";

import SwiperCore, {
  EffectFade,
  Pagination,
  Autoplay,
  EffectCards,
  Navigation,
} from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

import "../assets/css/Scrollsnap.css";
import "../assets/css/style.css";
import "../assets/css/Swiper.css";

/* eslint-disable */
function Index() {
  useEffect(() => {
    initMain();
  }, []);
  // 변수 정의


  //  태그 직접 접근을 위한 Ref 정의
  //  사용법) 1) const 변수명 = useRef();
  //         2) html 태그에 ref={변수명}
  const checkInDate = useRef();
  const checkOutDate = useRef();

  let navigate = useNavigate();

  const progressCircle = useRef(null);
  const progressContent = useRef(null);
  const onAutoplayTimeLeft = (s, time, progress) => {
    progressCircle.current.style.setProperty("--progress", 1 - progress);
    progressContent.current.textContent = `${Math.ceil(time / 1000)}s`;
  };


  // 변수 정의
  // showAdminBoard = true 이면 어드민 메뉴 보이게하고,
  // 아니면 (false) 안보이게 하는 변수
  const [showAdminBoard, setShowAdminBoard] = useState(false);

  // 공유저장소 의 user 객체 정보 가져오기 
  // currentUser = 공유저장소user(현재 로그인한 유저)
  const { user: currentUser } = useSelector((state) => state.auth);
  // 공유저장소의 액션함수를 실행하기 위한 함수 정의 
  const dispatch = useDispatch();

  // 현재 페이지의 url 정보를 가져오는 훅함수
  let location = useLocation();


    // 로그아웃 함수 : 공유저장소의 액션함수(logout()) 호출
    const logOut = useCallback(() => {
      dispatch(logout());
    }, [dispatch]);



  useEffect(() => {
    initMain();
    // retrieveBooking(); // 전체 조회 함수'

    $(function () {
      // 달력 정의
      $("#datepicker").datepicker({
        // 옵션 속성 정의
        // 날짜 포맷 바꾸기 속성
        dateFormat: "yy-mm-dd",
      });
    });
    $('#datepicker').datepicker('setDate', 'today')

    $(function () {
      // 달력 정의
      $("#datepicker2").datepicker({
        // 옵션 속성 정의
        // 날짜 포맷 바꾸기 속성
        dateFormat: "yy-mm-dd",
      });
    });
    $('#datepicker2').datepicker('setDate', '+1D')

    $(function () {
      // 달력 정의
      $("#datepicker3").datepicker({
        // 옵션 속성 정의
        // 날짜 포맷 바꾸기 속성
        dateFormat: "yy-mm-dd",
      });
    });
    $('#datepicker3').datepicker('setDate', 'today')
    $(function () {
      // 달력 정의
      $("#datepicker4").datepicker({
        // 옵션 속성 정의
        // 날짜 포맷 바꾸기 속성
        dateFormat: "yy-mm-dd",
      });
    });
    $('#datepicker4').datepicker('setDate', '+1D')
  }, []);



  // 화면 시작 이벤트 함수
  // dispatch, location 변경여부 감시해서 변경되면 재실행
  useEffect(() => {
    // 현재 url 정보 : location.pathname
    // 현재 url 정보가 /login , /register 이면
    // 화면에 에러메세지를 지우기 실행
    if (["/login", "/register"].includes(location.pathname)) {
      dispatch(clearMessage()); // clear message when changing location
    }
  }, [dispatch, location]);



  // 화면 시작하면 실행되는 이벤트 함수
  // currentUser, logOut 변경여부 감시 재실행
  useEffect(() => {
    // currentUser(로그인한 유저)
    if (currentUser) {
      // ROLE_ADMIN 권한 있는지 체크해서 있으면 
      // showAdminBoard = true 저장
      setShowAdminBoard(currentUser.roles.includes("ROLE_ADMIN"));
    } else {
      // ROLE_ADMIN 권한 없으면 , false 저장
      setShowAdminBoard(false);
    }
  }, [currentUser, logOut]);




  const checkInD = useRef();
  const checkOutD = useRef();

  //   수동 바인딩 : 화면값 -> 변수값 변경
  // nfn
  // const onChangeJdate = (event) => {
  //   setJdate(event.target.value); // 화면값 -> 변수값 저장
  // };

  //   클릭시 화면에 현재 달력에서 선택할 날짜를 출력
  // nfn

  // const siteMove = () => {
  //   let strDaterange = daterange.current.value.split(" - ");
  //   // alert(strDaterange);
  //   let firstDate = strDaterange[0];
  //   // alert(firstDate);

  //   let endDate = strDaterange[1];
  //   // alert(endDate);

  const [checkInRoom, setCheckInRoom] = useState("");
  const [checkOutRoom, setCheckOutRoom] = useState("");
  const [roomType, setRoomType] = useState("standard");
  // const [people, setPeople] = useState("");

  // 함수 정의
  // nfn
  // 수동 바인딩 함수
  const onChangeCheckInRoom = (event) => {
    // 화면값 -> 변수값 저장
    setCheckInRoom(event.target.value);
  };
  const onChangeCheckOutRoom = (event) => {
    // 화면값 -> 변수값 저장
    setCheckOutRoom(event.target.value);
  };
  const onChangeRoomType = (event) => {
    // 화면값 -> 변수값 저장
    setRoomType(event.target.value);
  };
  // const onChangePeople = (event) => {
  //   // 화면값 -> 변수값 저장
  //   setPeople(event.target.value);
  // };

  const siteMove = () => {
    let checkInShot = checkInD.current.value;
    let checkOutShot = checkOutD.current.value;
    // alert(checkInShot);
    // let firstDate = strDaterange[0];
    // alert(checkOutShot);
    // alert(roomType);
    // let endDate = strDaterange[1];
    // alert(endDate);

    navigate(
      `/booking/checkIn/${checkInShot}/checkOut/${checkOutShot}/rtype/${roomType}`
    );
  };

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

      <div className="scrollContainer">
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
              role="popper"
              aria-labelledby="myExtraLargeModalLabel"
              aria-hidden="false"
              data-backdrop="false"
            >
              <div class="modal-dialog modal-xl">
                <div class="modal-content">
                  <div class="modal-header">
                    <h4 class="modal-title">Booking</h4>
                    <button type="button" class="close" data-dismiss="modal">
                      &times;
                    </button>
                  </div>
                  <div class="modal-body">
          {/* 룸 선택 */}
          <div className="room">
                    <label htmlFor="roomType">Room</label>
                    <select
                      type="text"
                      className="form-control"
                      id="roomType"
                      required
                      name="roomType"
                      value={roomType}
                      onChange={onChangeRoomType}
                    >
                      <option value="standard">standard</option>
                      <option value="deluxe">deluxe</option>
                      <option value="family">family</option>
                      <option value="suite">suite</option>
                    </select>
                  </div>

                  {/* 날짜 선택 */}
                  <div className="date">
                    <div className="form-group1">
                      <label htmlFor="checkInRoom">Check-In</label>
                      {/* ref : html 태그 직접 접근하는 태그 */}
                      {/* 바닐라 : querySelector 비슷 */}
                      <input
                        type="text"
                        id="datepicker3"
                        ref={checkInD}
                        value={checkInRoom}
                        onChange={onChangeCheckInRoom}
                      />
                    </div>
                  </div>

                  {/* 체크아웃 날짜 선택 */}
                  <div className="date2">
                    <div className="form-group1">
                      <label htmlFor="checkOutRoom">Check-Out</label>
                      {/* ref : html 태그 직접 접근하는 태그 */}
                      {/* 바닐라 : querySelector 비슷 */}
                      <input
                        type="text"
                        id="datepicker4"
                        ref={checkOutD}
                        value={checkOutRoom}
                        onChange={onChangeCheckOutRoom}
                      />
                    </div>
                  </div>

                  {/* 인원 수 선택 */}
                  {/* <div className="people">
                    <label className="modalPeopleTitle">People</label>
                    <br />
                    <select
                      type="text"
                      className="form-control"
                      id="people"
                      required
                      name="people"
                      value={people}
                      onChange={onChangePeople}
                    >
                      <option selected disabled value="">
                        People
                      </option>
                      <option value="1">1</option>
                      <option value="2">2</option>
                      <option value="3">3</option>
                      <option value="4">4</option>
                    </select>
                  </div> */}

                  {/* search 버튼 시작 */}
                  {/* <Link
                            className="btn btn-primary btn-block"
                            to={`/booking/checkIn/${checkIn}/rtype/${rtype}/people/${people}`}
                          >
                    Search
                  </Link> */}
                  <button
                    className="btn btn-primary btn-block"
                    onClick={siteMove}
                    // onClick={`/reservation/jdate/${daterange.current.value}/email/${email}`}
                  >
                    Search
                  </button>
                  {/* search 버튼 끝 */}
                </div>
              </div>
              {/* 예약 화면 끝 */}
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

                  <div className="loginLink">
                    {/* <!--          Todo: login 추가 --> */}
                    {/* <!--      div #2 시작 --> */}
                    {/* currentUser(로그인한 유저) 가 없으면 */}
                    {/* /register 와 /login 메뉴를 보여주고 */}
                    {!currentUser && (
                      <div className="navbar-nav ml-auto">
                        <Link to={"/register"} className="nav-link">
                          <font-awesome-icon icon="user-plus" />
                          Sign Up
                        </Link>

                        <Link to={"/login"} className="nav-link">
                          Login
                        </Link>
                      </div>
                    )}

                    {/* <!--      div #2 끝 --> */}

                    {/* <!--      div #3 시작 --> */}
                    {/* currentUser(로그인한 유저) 가 있으면 */}
                    {/* /profile 와 /LogOut 메뉴를 보여주고 */}
                    {currentUser && (
                      <div className="navbar-nav ml-auto">
                        <ul className="navbar-nav">
                          <li className="nav-item">
                            <Link to={"/profile"} className="nav-link">
                              {currentUser.username}
                            </Link>
                          </li>
                          <li className="nav-item">
                            <a href="/" className="nav-link" onClick={logOut}>
                              LogOut
                            </a>
                          </li>
                        </ul>
                      </div>
                    )}
                  </div>

                  <div class="icons-wrap text-md-right">
                    {/* <ul class="icons-top d-none d-lg-block">
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
                    </ul> */}

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
          {/* 메인 이미지 슬라이더 시작 */}
          <div className="scrollArea">
            <div className="untree_co--site-main">
              <div className="owl-carousel owl-hero">
                {/* 메인 이미지 슬라이더 1 시작 */}
                <div
                  className="untree_co--site-hero overlay"
                  style={{ backgroundImage: "url('images/hotel_5.jpg')" }}
                >
                  <div className="container">
                    <div className="row align-items-center justify-content-center">
                      <div className="col-md-8">
                        <div
                          className="site-hero-contents text-center"
                          data-aos="fade-up"
                        >
                          <h1 className="hero-heading">
                            Cloud Hotel by A team
                          </h1>
                          <div className="sub-text">
                            <p>
                              Another free awesome templates for Hotels and any
                              kind of website by{" "}
                              <a
                                href="https://untree.co/"
                                target="_blank"
                                className="text-white font-weight-bold"
                              >
                                Untree.co
                              </a>
                              . See our{" "}
                              <a
                                href="https://untree.co/license/"
                                className="text-white font-weight-bold"
                              >
                                license page
                              </a>{" "}
                              for more usage details
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/* 메인 이미지 슬라이더 1 끝 */}

                {/* 23.06.18 - 김건우 [index.js 에서 nav.js 분리]  */}

                {/* 메인 이미지 슬라이더 2 시작 */}
                <div
                  className="untree_co--site-hero overlay"
                  style={{ backgroundImage: "url('images/hotel_4.jpg')" }}
                >
                  <div className="container">
                    <div className="row align-items-center justify-content-center">
                      <div className="col-md-7">
                        <div
                          className="site-hero-contents text-center"
                          data-aos="fade-up"
                        >
                          <h1 className="hero-heading">Enjoy Your Stay</h1>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/* 메인 이미지 슬라이더 2 끝 */}

                {/* 메인 이미지 슬라이더 3 시작 */}
                <div
                  className="untree_co--site-hero overlay"
                  style={{ backgroundImage: "url('images/hotel_6.jpg')" }}
                >
                  <div className="container">
                    <div className="row align-items-center justify-content-center">
                      <div className="col-md-10">
                        <div
                          className="site-hero-contents text-center"
                          data-aos="fade-up"
                        >
                          <h1 className="hero-heading">
                            Away from the Hustle and Bustle of City Life
                          </h1>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/* 메인 이미지 슬라이더 3 끝 */}
              </div>
              {/* 예약 화면 */}
              <div className="bookingBox">
                <div className="inBox">
                  {/* 룸 선택 */}
                  <div className="room">
                    <label htmlFor="roomType">Room</label>
                    <select
                      type="text"
                      className="form-control"
                      id="roomType"
                      required
                      name="roomType"
                      value={roomType}
                      onChange={onChangeRoomType}
                    >
                      <option value="standard">standard</option>
                      <option value="deluxe">deluxe</option>
                      <option value="family">family</option>
                      <option value="suite">suite</option>
                    </select>
                  </div>

                  {/* 날짜 선택 */}
                  <div className="date">
                    <div className="form-group">
                      <label htmlFor="checkInRoom">Check-In</label>
                      {/* ref : html 태그 직접 접근하는 태그 */}
                      {/* 바닐라 : querySelector 비슷 */}
                      <input
                        type="text"
                        id="datepicker"
                        ref={checkInD}
                        value={checkInRoom}
                        onChange={onChangeCheckInRoom}
                      />
                    </div>
                  </div>

                  {/* 체크아웃 날짜 선택 */}
                  <div className="date2">
                    <div className="form-group">
                      <label htmlFor="checkOutRoom">Check-Out</label>
                      {/* ref : html 태그 직접 접근하는 태그 */}
                      {/* 바닐라 : querySelector 비슷 */}
                      <input
                        type="text"
                        id="datepicker2"
                        ref={checkOutD}
                        value={checkOutRoom}
                        onChange={onChangeCheckOutRoom}
                      />
                    </div>
                  </div>

                  {/* 인원 수 선택 */}
                  {/* <div className="people">
                    <label className="modalPeopleTitle">People</label>
                    <br />
                    <select
                      type="text"
                      className="form-control"
                      id="people"
                      required
                      name="people"
                      value={people}
                      onChange={onChangePeople}
                    >
                      <option selected disabled value="">
                        People
                      </option>
                      <option value="1">1</option>
                      <option value="2">2</option>
                      <option value="3">3</option>
                      <option value="4">4</option>
                    </select>
                  </div> */}

                  {/* search 버튼 시작 */}
                  {/* <Link
                            className="btn btn-primary btn-block"
                            to={`/booking/checkIn/${checkIn}/rtype/${rtype}/people/${people}`}
                          >
                    Search
                  </Link> */}
                  <button
                    className="btn btn-primary btn-block"
                    onClick={siteMove}
                    // onClick={`/reservation/jdate/${daterange.current.value}/email/${email}`}
                  >
                    Search
                  </button>
                  {/* search 버튼 끝 */}
                </div>
              </div>
              {/* 예약 화면 끝 */}
            </div>
          </div>

          {/* 메인 이미지 슬라이더 끝 */}

          {/* 23.06.16 - 김건우 [ 룸 파트 이미지 수정 및 배치 ] */}

          {/* 파트 제목 부분 시작 */}
          {/* <div class="untree_co--site-section float-left pb-0 featured-rooms"></div> */}
          {/* 파트 제목 부분 끝 */}

          {/* 룸 파트 시작 */}
          <div className="scrollArea">
            <div className="container-col mb-5 mt-3 pt-5">
              <div className="suite-wrap overlap-image-1">
                <div className="suite">
                  <div className="image-stack">
                    <div
                      className="image-stack-item image-stack-item-top"
                      data-jarallax-element="-50"
                    >
                      {/* className overlay */}
                      <div className="overlay"></div>
                      <img
                        src={require("../assets/images/Room_5.jpg")}
                        alt="Image"
                        className="img-fluid pic1"
                      />
                    </div>
                    <div className="image-stack-item row align-items-end image-stack-item-bottom">
                      <div className="overlay"></div>
                      <img
                        src={require("../assets/images/Room_2.jpeg")}
                        alt="Image"
                        className="img-fluid pic2"
                      />
                    </div>
                  </div>
                </div>

                {/* <!-- .suite --> */}
                <div className="suite-excerpt">
                  <p>
                    모던과 클래식, 도시와 자연이 공존하는 슈페리어 룸에서
                    클라우드 호텔의 디자인 철학을 느낄 수 있습니다. 특별히
                    제작된 베드와 최고급 침구는 일상에서 경험하지 못한 가장
                    안락한 휴식의 시간을 선물할 것입니다.
                  </p>
                  <p>
                    <Link to={"/room"} className="readmore">
                      Room Details
                    </Link>
                  </p>
                </div>
                <div className="suite-contents" data-jarallax-element="50">
                  <h2 className="suite-title">Room Description</h2>
                </div>
              </div>
            </div>
          </div>
          {/* 룸 파트 끝 */}

          {/* 23.06.19 - 김건우 [ 룸 파트 이미지 수정 및 배치 마무리 ] */}

          {/* 23.06.19 - 김건우 [ 다이닝 파트 이미지 수정 및 배치 시작 ] */}

          {/* 다이닝 파트 */}
          <div className="scrollArea">
            <div className="suite-wrap overlap-image-2">
              <div className="suite">
                <div className="image-stack">
                  <div className="image-stack-item image-stack-item-top">
                    <div className="overlay"></div>
                    <img
                      src={require("../assets/images/dining_3.jpg")}
                      alt="Image"
                      className="img-fluid pic1"
                    />
                  </div>
                  <div
                    className="image-stack-item image-stack-item-mid"
                    data-jarallax-element="-50"
                  >
                    <div className="overlay"></div>
                    <img
                      src={require("../assets/images/dining_2.jpeg")}
                      alt="Image"
                      className="img-fluid pic2"
                    />
                  </div>
                  <div
                    className="image-stack-item image-stack-item-bottom"
                    data-jarallax-element="-50"
                  >
                    <div className="overlay"></div>
                    <img
                      src={require("../assets/images/dining_1.jpeg")}
                      alt="Image"
                      className="img-fluid pic2"
                    />
                  </div>
                </div>
              </div>

              <div className="suite-contents" data-jarallax-element="50">
                <h2 className="suite-title">Dining & Lounge</h2>
                <div className="suite-excerpt col-xs-12">
                  <p>
                    클라우드 호텔에서만 느낄 수 있는 최상의 미식과 분위기로
                    여러분에게 최고의 시간을 선물해 드리겠습니다.
                  </p>
                  <p>
                    <a href="#" className="readmore">
                      Store Details
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* 다이닝 파트 끝 */}

        {/* 23.06.21 - 김건우 [ 다이닝 파트 마무리 ] */}

        {/* 23.06.21 - 김건우 [ 패키지 파트 시작 ] */}

        {/* 패키지 파트 시작 */}

        <div className="scrollArea">
          <div className="suite-wrap overlap-image-3">
            <div className="suite">
              <div className="image-stack">
                {/* <div className="image-stack-item image-stack-item-top">
                    <div className="overlay"></div>
                    <img
                      src={require("../assets/images/dining_3.jpg")}
                      alt="Image"
                      className="img-fluid pic1"
                    />
                  </div> */}
                <div className="image-stack-item image-stack-item-mid">
                  <div className="overlay"></div>

                  {/* ******************************************************* */}

                  <>
                    <Swiper
                      loop={true}
                      followFinger={false}
                      effect={"cards"}
                      touchRatio={"0"}
                      autoplay={{
                        touchRatio: 0,
                        followFinger: false,
                        loop: true,
                        delay: 2000,
                        disableOnInteraction: false,
                      }}
                      modules={[EffectCards, Autoplay]}
                      className="mySwiper"
                    >
                      <SwiperSlide>
                        <img
                          src={require("../assets/images/Pack_1.jpg")}
                          alt="Image"
                          className="carousel_img"
                        />
                      </SwiperSlide>

                      <SwiperSlide>
                        <img
                          src={require("../assets/images/Pack_2.jpg")}
                          alt="Image"
                          className="carousel_img"
                        />
                      </SwiperSlide>

                      <SwiperSlide>
                        <img
                          src={require("../assets/images/Pack_3.jpg")}
                          alt="Image"
                          className="carousel_img"
                        />
                      </SwiperSlide>

                      <SwiperSlide>
                        <img
                          src={require("../assets/images/Pack_4.jpg")}
                          alt="Image"
                          className="carousel_img"
                        />
                      </SwiperSlide>

                      <SwiperSlide>
                        <img
                          src={require("../assets/images/Pack_5.jpg")}
                          alt="Image"
                          className="carousel_img"
                        />
                      </SwiperSlide>

                      <SwiperSlide>
                        <img
                          src={require("../assets/images/Pack_6.jpg")}
                          alt="Image"
                          className="carousel_img"
                        />
                      </SwiperSlide>
                    </Swiper>
                  </>

                  {/* ******************************************************* */}

                  {/* ******************************************************* */}
                </div>
                <div className="image-stack-item image-stack-item-bottum">
                  <div className="overlay"></div>

                  <>
                    <Swiper
                      loop={true}
                      effect={"cards"}
                      touchRatio={"0"}
                      modules={[Autoplay]}
                      autoplay={{
                        touchRatio: 0,
                        loop: true,
                        delay: 2000,
                        disableOnInteraction: false,
                      }}
                      className="mySwiper_1"
                    >
                      <SwiperSlide>
                        <p>Bridal Shower</p>
                      </SwiperSlide>

                      <SwiperSlide>
                        <p>SPA</p>
                      </SwiperSlide>

                      <SwiperSlide>
                        <p>BreakFast</p>
                      </SwiperSlide>

                      <SwiperSlide>
                        <p>Kids</p>
                      </SwiperSlide>

                      <SwiperSlide>
                        <p>PartyRoom</p>
                      </SwiperSlide>

                      <SwiperSlide>
                        <p>Pet</p>
                      </SwiperSlide>
                    </Swiper>
                  </>

                  {/* ******************************************************* */}
                </div>
              </div>
            </div>

            <div className="suite-contents" data-jarallax-element="50">
              <h2 className="suite-title">Package</h2>
              <div className="suite-excerpt col-xs-12">
                <p>
                  여유로운 휴식과 합리적인 가격으로 다양하게 즐길 수 있는
                  클라우드 호텔의 패키지를 만나보세요.
                </p>
                <p>
                  <Link to={"/package"} className="readmore">
                    Package Details
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </div>
        {/* 패키지 파트 끝 */}

        {/* 23.06.22 - 김건우 [ 하주롱일 패키지 파트 이미지 수정 및 배치 했지만 마무리 못하고 캐러셀 선생님께 문의해놓음 ] */}

        {/* 23.06.23 - 김건우 [ 부대시설 파트 이미지 수정 및 배치 시작 ] */}

        {/* 부대시설 파트 시작 */}
        <div className="scrollArea">
          <div className="suite-wrap overlap-image-4">
            <div className="suite">
              <div className="image-stack">
                <>
                  <Swiper
                    loop={true}
                    spaceBetween={30}
                    centeredSlides={true}
                    autoplay={{
                      loop: true,
                      delay: 4000,
                      disableOnInteraction: false,
                    }}
                    pagination={{
                      clickable: true,
                    }}
                    navigation={true}
                    modules={[Autoplay, Pagination, Navigation]}
                    onAutoplayTimeLeft={onAutoplayTimeLeft}
                    className="mySwiper"
                  >
                    <SwiperSlide>
                      <img
                        src={require("../assets/images/sauna.jpg")}
                        alt="Image"
                        className="carousel_img"
                      />
                    </SwiperSlide>
                    <SwiperSlide>
                      <img
                        src={require("../assets/images/fitness.jpg")}
                        alt="Image"
                        className="carousel_img"
                      />
                    </SwiperSlide>
                    <SwiperSlide>
                      <img
                        src={require("../assets/images/pool.jpg")}
                        alt="Image"
                        className="carousel_img"
                      />
                    </SwiperSlide>
                    <SwiperSlide>
                      <img
                        src={require("../assets/images/family.jpg")}
                        alt="Image"
                        className="carousel_img"
                      />
                    </SwiperSlide>
                    <SwiperSlide>
                      <img
                        src={require("../assets/images/skin.jpeg")}
                        alt="Image"
                        className="img-fluid pic1"
                      />
                    </SwiperSlide>
                    <div className="autoplay-progress" slot="container-end">
                      <svg viewBox="0 0 48 48" ref={progressCircle}>
                        <circle cx="24" cy="24" r="20"></circle>
                      </svg>
                      <span ref={progressContent}></span>
                    </div>
                  </Swiper>
                </>

                {/* <div
                      className="image-stack-item image-stack-item-fiv"
                      data-jarallax-element="-50"
                    >
                      <div className="overlay"></div>
                      <img
                        src={require("../assets/images/family.jpg")}
                        alt="Image"
                        className="img-fluid pic2"
                      />
                    </div>
                  <div
                      className="image-stack-item image-stack-item-four"
                      data-jarallax-element="-50"
                    >
                      <div className="overlay"></div>
                      <img
                        src={require("../assets/images/skin.jpg")}
                        alt="Image"
                        className="img-fluid pic1"
                      />
                    </div>
                  <div
                      className="image-stack-item image-stack-item-thr"
                      data-jarallax-element="-50"
                    >
                      <div className="overlay"></div>
                      <img
                        src={require("../assets/images/sauna.jpg")}
                        alt="Image"
                        className="img-fluid pic2"
                      />
                    </div>
                    <div
                      className="image-stack-item image-stack-item-sec"
                      data-jarallax-element="-50"
                    >
                      <div className="overlay"></div>
                      <img
                        src={require("../assets/images/fitness.jpg")}
                        alt="Image"
                        className="img-fluid pic1"
                      />
                    </div>
                    <div className="image-stack-item image-stack-item-fir">
                      <div className="overlay"></div>
                      <img
                        src={require("../assets/images/pool.jpg")}
                        alt="Image"
                        className="img-fluid pic1"
                      />
                    </div> */}
              </div>
            </div>

            <div className="suite-contents" data-jarallax-element="50">
              <h2 className="suite-title">Cloud&nbsp;Facilities</h2>
              <div className="suite-excerpt col-xs-12">
                <p>POOL</p>
                <p>FITNESS</p>
                <p>SAUNA</p>
                <p>AESTHETIC</p>
                <p>FAMAILY LOUNGE</p>
                <p>
                  <Link to={"/facilities"} className="readmore">
                    Facilities Details
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </div>
        {/* 부대시설 파트 끝 */}

        {/* 푸터 시작 */}
        <div className="scrollEnd">
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
                          <Link to={"/"}>Home</Link>
                        </li>
                        <li>
                          <Link to={"/room"}>Room</Link>
                        </li>
                        <li>
                          <Link to={"/amenities"}>Amenities</Link>
                        </li>
                        <li>
                          <Link to={"/gallery"}>Gallery</Link>
                        </li>
                        <li>
                          <Link to={"/aboutus"}>About Us</Link>
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
                      autocomplete="false"
                    />
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* 푸터 끝 */}
      </div>
    </div>
  );
}

export default Index;
