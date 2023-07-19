// Booking.js
import React, { useEffect, useRef, useState } from "react";
import initMain from "../assets/js/main";
import { Link, useParams, useNavigate } from "react-router-dom";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-cards";
import "swiper/css/pagination";
import "swiper/css/navigation";


import "../assets/css/Scrollsnap.css";
import "../assets/css/style.css";
import "../assets/css/booking.css";
import "../assets/css/Swiper.css";
import RoomDataService from "../services/RoomDataService";
import { Card } from "react-bootstrap";

/* eslint-disable */
function Booking() {
  useEffect(() => {
    initMain();
  }, []);
  let navigate = useNavigate();

  const { checkInShot } = useParams();
  const { checkOutShot } = useParams();
  const { roomType } = useParams();
  // const { people } = useParams();
  // const { strDaterange } = useParams();

  const progressCircle = useRef(null);
  const progressContent = useRef(null);
  const onAutoplayTimeLeft = (s, time, progress) => {
    progressCircle.current.style.setProperty("--progress", 1 - progress);
    progressContent.current.textContent = `${Math.ceil(time / 1000)}s`;
  };

  const reserveMove = (rtype) => {
    navigate(`/reserve/rtype/${rtype}/checkIn/${checkIn}/checkOut/${checkOut}`);
  };

  // 벡엔드 전송한 데이터를 저장할 변수
  const [booking, setBooking] = useState([]);
  // 현재 클릭했을때의 객체를 저장할 변수
  const [currentData, setCurrentData] = useState(null);

  const [rtype, setRtype] = useState(roomType);
  // const [searchPeople, setSearchPeople] = useState(people);
  const [checkIn, setCheckIn] = useState(checkInShot);
  const [checkOut, setCheckOut] = useState(checkOutShot);
  // const [searchStrDaterange, setSearchStrDaterange] = useState(strDaterange);

  const onChangeRtype = (e) => {
    setRtype(e.target.value);
  };
  const onChangeCheckIn = (e) => {
    setCheckIn(e.target.value);
  };
  const onChangeCheckOut = (e) => {
    setCheckOut(e.target.value);
  };
  // const onChangeSearchPeople = (e) => {
  //   setSearchPeople(e.target.value);
  // };
  // const onChangeSearchStrDaterange = (e) => {
  //   setSearchStrDaterange(e.target.value);
  // };

  const onClickSearch = () => {
    navigate(`/booking/checkIn/${checkIn}/checkOut/${checkOut}/rtype/${rtype}`);
    window.location.reload();
  };

  useEffect(() => {
    initMain();
    retrieveBooking(); // 전체 조회 함수

    $(function () {
      // 달력 정의
      $("#datepicker").datepicker({
        // 옵션 속성 정의
        // 날짜 포맷 바꾸기 속성
        dateFormat: "yy-mm-dd",
      });
    });

    $(function () {
      // 달력 정의
      $("#datepicker2").datepicker({
        // 옵션 속성 정의
        // 날짜 포맷 바꾸기 속성
        dateFormat: "yy-mm-dd",
      });
    });

    $(function () {
      // 달력 정의
      $("#datepicker3").datepicker({
        // 옵션 속성 정의
        // 날짜 포맷 바꾸기 속성
        dateFormat: "yy-mm-dd",
      });
    });

    $(function () {
      // 달력 정의
      $("#datepicker4").datepicker({
        // 옵션 속성 정의
        // 날짜 포맷 바꾸기 속성
        dateFormat: "yy-mm-dd",
      });
    });
  }, []);

  const datepicker = useRef();

  // 전체 조회 함수
  const retrieveBooking = () => {
    // 벡엔드에 전체 조회를 요청
    RoomDataService.searchRoom(checkIn, checkOut, rtype)
      .then((response) => {
        // 성공
        const booking = response.data;

        // 벡엔드에서 전송한 객체배열을 저장
        setBooking(booking);
        // setBooking(response.data);

        console.log("booking", response.data);
      })
      .catch((e) => {
        // 실패
        console.log(e);
      });
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

        {/* nav 끝 */}

        {/* ---------------------------------------------------------------------------------------------- */}

        <div className="bookingRoomMain">
          <img
            src={require("../assets/images/booking_1.png")}
            alt="Image"
            className="img-fluid pic2"
          />
          <div className="bookingTitle">
            <h1>Booking</h1>
          </div>
          <div className="bookingServeTitle">
            <p>Select rooms</p>
          </div>
        </div>

        <div className="bookingInformation">
          {/* 룸 선택 */}
          <div className="bookingRoom">
            <label htmlFor="rtype">Room</label>
            <select
              type="text"
              className="form-control"
              id="rtype"
              required
              name="rtype"
              value={rtype}
              onChange={onChangeRtype}
            >
              <option value="standard">standard</option>
              <option value="deluxe">deluxe</option>
              <option value="family">family</option>
              <option value="suite">suite</option>
            </select>
          </div>

          {/* 날짜 선택 */}
          <div className="bookingDate">
                    <div className="form-group">
                      <label htmlFor="checkInRoom">Check-In</label>
                      {/* ref : html 태그 직접 접근하는 태그 */}
                      {/* 바닐라 : querySelector 비슷 */}
                      <input
                        type="text"
                        id="datepicker"
                        ref={datepicker}
                        value={checkIn}
                        onChange={onChangeCheckIn}
                      />
                    </div>
                  </div>

                  {/* 체크아웃 날짜 선택 */}
                  <div className="bookingDate2">
                    <div className="form-group">
                      <label htmlFor="checkOutRoom">Check-Out</label>
                      {/* ref : html 태그 직접 접근하는 태그 */}
                      {/* 바닐라 : querySelector 비슷 */}
                      <input
                        type="text"
                        id="datepicker2"
                        ref={datepicker}
                        value={checkOut}
                        onChange={onChangeCheckOut}
                      />
                    </div>
                  </div>

          {/* 인원 수 선택 */}
          {/* <div className="bookingPeople">
                      <label className="modalPeopleTitle">People</label>
                      <br />
                                         <select
                        type="text"
                        className="form-control"
                        id="searchPeople"
                        required
                        name="searchPeople"
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
                    </div> */}
          {/* search 버튼 시작 */}
          <button
            className="btn btn-primary btn-block"
            onClick={() => {
              onClickSearch();
            }}
          >
            Search
          </button>
        </div>


        <div className="bookingRoomList">
          {booking &&
            booking.map((data) => (
              <ul>
                <div className="roomCard">
                  <li className="roomName">{data.rtype}</li>
                  <br />
                  <li className="roomPeople">기준: {data.people}인 / 최대: {parseInt(data.people) +1} 인</li>
                  <br />
                  <li className="roomPrice">₩ {data.rprice} ~</li>
                  <br />
                  <li className="detailLink">
                    <Link to={data.roomurl} className="roomDetailBtn">
                      <h3>room details &nbsp; {">"}</h3>
                    </Link>
                  </li>
                  <li className="reserveLink">
                  <button
                      className="reserveBtn btn"
                      onClick={() => reserveMove(data.rtype)}
                      // onClick={`/reservation/jdate/${daterange.current.value}/email/${email}`}
                    >
                <h3>Reserve &nbsp; {">"}</h3>
                    </button>
                  </li>
                  <br />
                </div>
              </ul>
            ))}
        </div>
      </div>
      {/* 푸터 시작 */}
      <div>
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
                        <Link to={"/about"}>About Us</Link>
                      </li>
                      <li>
                        <Link to={"/contact"}>Contact</Link>
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
  );
}

export default Booking;
