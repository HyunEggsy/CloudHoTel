// Reserve.js
import React, { useEffect, useRef, useState } from "react";
import initMain from "../assets/js/main";
import { Link, useParams } from "react-router-dom";

import { useDispatch, useSelector } from "react-redux";
// 공유액션함수 import
import { profile } from "../store/actions/auth";


// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-cards";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "../assets/css/Scrollsnap.css";
import "../assets/css/style.css";
import "../assets/css/reserve.css";
import "../assets/css/Swiper.css";
import RoomBasicDataService from "../services/RoomBasicDataService";
import EtcDataService from "../services/EtcDataService";
import ReservationDataService from "../services/ReservationDataService";
import Profile from './login/Profile';

/* eslint-disable */
function Reserve() {
  useEffect(() => {
    initMain();
  }, []);

    // 공유저장소의 user 객체 가져오기
  // currentUser = 공유저장소 user 정보
  const { user: currentUser } = useSelector((state) => state.auth);


  const { rtype } = useParams();
  const { checkIn } = useParams();
  const { checkOut } = useParams();

const [eno, setEno] = useState([]);

  const [inDate, setInDate] = useState(checkIn);
  const [outDate, setOutDate] = useState(checkOut);
  const [message, setMessage] = useState("");

  const [peopleCount, setPeopleCount] = useState("");
  // 벡엔드 전송한 데이터를 저장할 변수
  const progressCircle = useRef(null);
  const progressContent = useRef(null);
  const onAutoplayTimeLeft = (s, time, progress) => {
    progressCircle.current.style.setProperty("--progress", 1 - progress);
    progressContent.current.textContent = `${Math.ceil(time / 1000)}s`;
  };

  // 인원 수, 조식추가 정의
  const [quantityP, setQuantityP] = useState({
    addPeople: 0,
  });
  const [quantityA, setQuantityA] = useState({
    breakfastAdult: 2,
  });
  const [quantityK, setQuantityK] = useState({
    breakfastKid: 0,
  });

  // const onChangeAddPeople = (quantityP) => {
  //   // 벡엔드로 수정 요청(부서번호, 수정된부서객체)
  //   EtcDataService.updateCountMulEprice(eno[2]?.count, eno[2])
  //     .then((response) => {
  //       // 성공 : response.data(벡엔드에서 전송된 데이터)
  //       // 콘솔 로그 출력
  //       console.log(response.data);
  //       // 화면에 성공 메세지 출력
  //       // setMessage("The dept was updated successfully!");
  //     })
  //     .catch((e) => {
  //       // 실패
  //       console.log(e);
  //     });
  // };

  const onChangeAddPeople = (e) => {
    setQuantityP(e.target.value);
  };
  
  const onChangebreakAdult = (e) => {
    setQuantityA(e.target.value);
  };
  const onChangeBreakKid = (e) => {
    setQuantityK(e.target.value);
  };

  const initialRoom = {
    insertTime: null,
    updateTime: null,
    deleteYn: "",
    deleteTime: null,
    rno: "",
    typeCode: "",
    rtype: "",
    rprice: "",
    people: "",
    total: "",
    roomurl: "",
  };



  // 벡엔드에서 전송한 부서객체를 저장할 변수
  const [currentReserve, setCurrentReserve] = useState(initialRoom);

  const handleQuantityP = (item, action) => {
    setQuantityP((prevState) => {
      return {
        ...prevState,

        [item]: action === "up" ? quantityP[item] + 1 : quantityP[item] - 1,
      };
    });
  };

  const handleQuantityA = (item, action) => {
    setQuantityA((prevState) => {
      return {
        ...prevState,

        [item]: action === "up" ? quantityA[item] + 1 : quantityA[item] - 1,
      };
    });
  };

  const handleQuantityK = (item, action) => {
    setQuantityK((prevState) => {
      return {
        ...prevState,

        [item]: action === "up" ? quantityK[item] + 1 : quantityK[item] - 1,
      };
    });
  };

  // 전체 부서 목록에서 클릭시
  // 현재 클릭한 부서정보를 저장하는 함수
  const setActive = (quantityP, quantityA, quantityK) => {
    setQuantityP(quantityP); // 현재 클릭한 부서정보 저장
    setQuantityA(quantityA); // 현재 클릭한 부서정보 저장
    setQuantityK(quantityK); // 현재 클릭한 부서정보 저장
  };


  // 함수 정의
  // 부서번호(dno)로 부서정보를 조회하는 함수(상세조회함수)
  const getReserve = (rtype) => {
    // 벡엔드로 상세조회요청(dno(부서번호))
    RoomBasicDataService.searchRoom(rtype)
      .then((response) => {
        // 성공
        // 벡엔드 전송 데이터 : response.data
        // 벡엔드 전송 데이터를 currentDept 변수에 저장
        setCurrentReserve(response.data);
        // 콘솔 로그 출력
        console.log(response.data);
      })
      .catch((e) => {
        // 실패
        console.log(e);
      });
  };

  // 전체 조회 함수
  const getEtc = () => {
    // 벡엔드에 전체 조회를 요청
    EtcDataService.getEtcAll()
      .then((response) => {
        // 성공
        const eno = response.data;

        // 벡엔드에서 전송한 객체배열을 저장
        setEno(eno);
        // setBooking(response.data);

        console.log("etc", response.data);
      })
      .catch((e) => {
        // 실패
        console.log(e);
      });
  };

    // 수정버튼 클릭시 실행되는 함수
    const updateDept = () => {
      // 벡엔드로 수정 요청(부서번호, 수정된부서객체)
      DeptDataService.update(currentDept.dno, currentDept)
        .then((response) => {
          // 성공 : response.data(벡엔드에서 전송된 데이터)
          // 콘솔 로그 출력
          console.log(response.data);
          // 화면에 성공 메세지 출력
          setMessage("The dept was updated successfully!");
        })
        .catch((e) => {
          // 실패
          console.log(e);
        });
    };


  // 화면이 뜨자마자 실행되는 이벤트 함수
  // 추가기능 : dno 값이 변경되면 다시 함수가 실행됨
  useEffect(() => {
    // dno(부서번호) 있으면 상세조회요청(getDept(dno))
    if (rtype) {
      getReserve(rtype);
    }
  }, [rtype]);

  useEffect(() => {
    initMain();
    getEtc();
    console.log(total);
  }, []);



  const total = (
    parseInt((currentReserve.rprice) + (eno[2]?.eprice * quantityP.addPeople) + (eno[0]?.eprice * quantityA.breakfastAdult) + (eno[1]?.eprice * quantityK.breakfastKid))
  )


    // 수정버튼 클릭시 실행되는 함수
    const updateRoom = () => {
      let data = {
        username: currentUser.username,
        email: currentUser.email,
        phone: currentUser.phone,
        rtype: rtype,
        checkIn: checkIn,
        checkOut: checkOut,
        price: total
      }
      // 벡엔드로 수정 요청(부서번호, 수정된부서객체)
      ReservationDataService.createReservation(data)
        .then((response) => {
          // 성공 : response.data(벡엔드에서 전송된 데이터)
          // 콘솔 로그 출력
          console.log("createReservation", response.data);
          // 화면에 성공 메세지 출력
          alert("booking successfully!");
        })
        .catch((e) => {
          // 실패
          console.log(e);
          setMessage("실패");
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
                  <div className="date">
                    <label className="modalDateTitle">Date</label>
                    <div className="datePick">{inDate}</div>
                    {/* <input 
                      type="text" 
                      name="bookingdate" 
                      readonly /> */}
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
                    </select>
                  </div>
                </div>
                <div class="modal-footer">
                  <Link
                    to={"/booking"}
                    class="btn btn-primary btn-default"
                    id="myBtn"
                  >
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

        {/* --------------------------------------------------------------------------------------------------------- */}

        <div className="reserveMain">
          <img
            src={require("../assets/images/booking_1.png")}
            alt="Image"
            className="img-fluid pic2"
          />
          <div className="reserveTitle">
            <h1>Booking</h1>
          </div>
          <div className="reserveServeTitle">
            <p>Select options</p>
          </div>
        </div>

        <div className="reserveContect">
          <div className="reserveInformation">
            {/* 날짜 선택 */}
            <div className="reserveDate">
              <form autocomplete="off">
                <label className="">Check-In</label>
                <br />
                <h2>{inDate}</h2>
              </form>
            </div>

            {/* 객실 선택 */}
            <div className="reserveRoom">
              <label className="">Check-Out</label>
              <br />
              <h2>{outDate}</h2>
            </div>

            {/* 인원 수 선택 */}
            <div className="reservePeople">
              <label className="">People</label>
              <br />
   <h2>{currentReserve.people}</h2>
            </div>

            {/* search 버튼 시작 */}
            <Link to={"/booking"} className="btn btn-primary btn-inline-block">
              Return to Select
            </Link>
          </div>

          <div className="bookingRoomData">
            <div className="roomData">
              <div className="roomDataTitle">
              <h1>{currentReserve.rtype}</h1>
              </div>
            </div>
            <div className="roomDataBreakfast">
              <div className="roomCount">
                <h3>Room1</h3>
              </div>
              <div className="addPeopleTitle">
                <h2>Add People</h2>
                <br />
              </div>
              {/* 인원 수 조식추가 */}
              <div className="addPeopleCount">
                <h3>
                  인원 추가 &nbsp; &nbsp; | &nbsp; &nbsp; KRW &nbsp; &nbsp; 
                  </h3>
                  <div className="addPeopleCountPrice">{eno[2]?.eprice}</div>
                

                <div className="wrapper">
                  <div className="flex">
                    <button
                      disabled={quantityP.addPeople <= 0}
                      onClick={() => handleQuantityP("addPeople", "down")}
                    >
                      -
                    </button>
                    <span>{quantityP.addPeople}</span>
                    <button 
                    onClick={() => handleQuantityP("addPeople", "up")}
                    >
                      +
                    </button>
                  </div>
                </div>
              </div>
              <div className="breakfastTitle">
                <h2>BREAKFAST</h2>
                <br />
              </div>
              <div className="breakfastAdult">
                <h3>성인 조식 추가 &nbsp; &nbsp; | &nbsp; &nbsp; KRW &nbsp; &nbsp;</h3>
                <div className="breakfastAdultPrice">{eno[0]?.eprice}</div>

                <div className="wrapper">
                  <div className="flex">
                    <button
                      disabled={quantityA.breakfastAdult <= 0}
                      onClick={() => handleQuantityA("breakfastAdult", "down")}
                    >
                      -
                    </button>
                    <span>{quantityA.breakfastAdult}</span>
                    <button
                      onClick={() => handleQuantityA("breakfastAdult", "up")}
                    >
                      +
                    </button>
                  </div>
                </div>
              </div>
              <div className="breakfastKid">
                <h3>어린이 조식 추가 &nbsp; &nbsp;|&nbsp; &nbsp; KRW &nbsp; &nbsp;</h3> 
                <div className="breakfastKidPrice">{eno[1]?.eprice}</div>

                <div className="wrapper">
                  <div className="flex">
                    <button
                      disabled={quantityK.breakfastKid <= 0}
                      onClick={() => handleQuantityK("breakfastKid", "down")}
                    >
                      -
                    </button>
                    <span>{quantityK.breakfastKid}</span>
                    <button
                      onClick={() => handleQuantityK("breakfastKid", "up")}
                    >
                      +
                    </button>
                  </div>
                </div>
              </div>
              <div className="breakfastNotice">
                <p>
                  * 조식 옵션 추가 시, 투숙 일수와 동일한 횟수의 조식이
                  제공됩니다.
                </p>
                <p>
                  * 조식이 이미 포함되어 있는 패키지의 경우, 별도의 신청을 하지
                  않으셔도 됩니다.
                </p>
                <p>
                  * 어린이 조식 추가 비용 적용 대상은 49개월 이상 12세
                  이하입니다.
                </p>
                <p>
                  * 사전 추가된 조식의 경우 특별요금이 적용된 혜택으로, 체크인
                  후 미사용 시 환불이 불가합니다.
                </p>
                <p>
                  * 만나이 통일법 시행에 따라 2023.06.28부터 연령 표기
                  변경되었습니다.
                </p>
              </div>
            </div>
          </div>

          <div className="bookingCost">
            <div className="roomName">
                <h1>{currentReserve.rtype}</h1>
              <h2>ToTal</h2>
            </div>
            <div className="roomCost">
            {/* <h1>{parseInt((currentReserve.rprice) + (eno[2]?.eprice * quantityP.addPeople) + (eno[0]?.eprice * quantityA.breakfastAdult) + (eno[1]?.eprice * quantityK.breakfastKid))}</h1><h4>KRW</h4> */}
                <h1>{total}</h1><h4>KRW</h4>
            </div>
            <div className="costContect">
              <div className="bookingDate">
                <h3> {inDate} </h3>
              </div>
              <div className="bookingRoomCost">
                <h3>{currentReserve.rprice}</h3> &nbsp; <h3>KRW</h3>
              </div>
              <br />
              <br />
        <div className="bookingAddPeople">
        <h5>인원 추가 : &nbsp;&nbsp;</h5><h3>{quantityP.addPeople}&nbsp;&nbsp;&nbsp; {parseInt(eno[2]?.eprice) * (quantityP.addPeople)}&nbsp;KRW</h3>
        </div>
              <br />
              <br />
        <div className="bookingAddBreakAdult">
        <h5>성인 조식추가 : &nbsp;&nbsp;</h5><h3>{quantityA.breakfastAdult}&nbsp;&nbsp;&nbsp; {parseInt(eno[0]?.eprice) * (quantityA.breakfastAdult)}&nbsp;KRW</h3>
        </div>
        
              <br />
        <div className="bookingAddBreakKid">
        <h5>어린이 조식추가 : &nbsp;&nbsp;</h5><h3>{quantityK.breakfastKid}&nbsp;&nbsp;&nbsp; {parseInt(eno[1]?.eprice) * (quantityK.breakfastKid)}&nbsp;KRW</h3>
        </div>

              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <div className="guest btn btn-primary">For Guest</div>
              <button className="member btn btn-primary"
              onClick={updateRoom}>For Member</button>
            </div>
          </div>
        </div>
        {/* --------------------------------------------------------------------------------------------------------- */}

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
    </div>
  );
}

export default Reserve;
