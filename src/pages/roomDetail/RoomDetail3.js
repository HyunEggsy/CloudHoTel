import React, { useEffect, useState } from "react";
import initMain from "../../assets/js/main";
import "../../assets/css/roomstyle.css";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";

import { Autoplay, FreeMode, Navigation, Thumbs } from "swiper";
/* eslint-disable */
function RoomDetail3() {
  useEffect(() => {
    initMain();
  }, []);
  const [thumbsSwiper, setThumbsSwiper] = useState(null);

  return (
    <body>
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
                    <li class="active">
                      <Link to={"/"}>Home</Link>
                    </li>
                    <li class="has-children">
                      <Link to={"/room"}>Room</Link>
                    </li>
                    <li>
                      <Link to={"/dining"}>dining</Link>
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

        {/* 메뉴 끝 */}
        <main class="untree_co--site-main">
          <div class="untree_co--site-section">
            <div class="container-fluid px-0">
              <div class="row justify-content-center text-center pt-0 pb-5">
                <div class="col-lg-6 section-heading" data-aos="fade-up">
                  <h3 class="text-center">Suite</h3>
                </div>
              </div>
              <div class="row swiper-all">
                <div
                  class="col-9 relative"
                  data-aos="fade-up"
                  data-aos-delay=""
                  animateOut="fadeOut"
                >
                  <Swiper
                    style={{
                      "--swiper-navigation-color": "#fff",
                      "--swiper-pagination-color": "#fff",
                    }}
                    loop={true}
                    spaceBetween={4}
                    navigation={true}
                    autoplay={{
                      delay: 2500,
                      disableOnInteraction: false,
                    }}
                    thumbs={{ swiper: thumbsSwiper }}
                    modules={[Autoplay, FreeMode, Navigation, Thumbs]}
                    className="rdSwiper"
                  >
                    <SwiperSlide className="suite1"></SwiperSlide>
                    <SwiperSlide className="suite2"></SwiperSlide>
                    <SwiperSlide className="suite3"></SwiperSlide>
                    <SwiperSlide className="suite4"></SwiperSlide>
                  </Swiper>
                  <Swiper
                    onSwiper={setThumbsSwiper}
                    spaceBetween={4}
                    loop={true}
                    slidesPerView={1}
                    freeMode={true}
                    watchSlidesProgress={true}
                    modules={[FreeMode, Navigation, Thumbs]}
                    className="rdSwiper2"
                  >
                    <SwiperSlide className="suite2"></SwiperSlide>
                    <SwiperSlide className="suite3"></SwiperSlide>
                    <SwiperSlide className="suite4"></SwiperSlide>
                    <SwiperSlide className="suite1"></SwiperSlide>
                  </Swiper>
                </div>

                <a href="/booking">
                  <span
                    className="btn3 badge rounded-pill bg-info"
                    role="button"
                  >
                    예약하기
                  </span>
                </a>
              </div>
            </div>
          </div>
        </main>
        <div class="s011-information">
          <input type="hidden" name="roomonlycode" value="MNGKE" />
          <div class="room-information__title col">객실개요</div>
          <div class="room-information__item">
            <div class="item-information__title col">침대타입</div>
            <div class="item-information__list col">
              <ul>
                <li>더블 </li>
              </ul>
            </div>
          </div>
          <div class="room-information__item">
            <div class="item-information__title col">투숙인원</div>
            <div class="item-information__list col">
              <ul>
                <li>1~2명</li>
              </ul>
            </div>
          </div>
          <div class="room-information__item">
            <div class="item-information__title col">전망</div>
            <div class="item-information__list col">
              <ul>
                <li>바다전망</li>
              </ul>
            </div>
          </div>
          <div class="room-information__item">
            <div class="item-information__title col">객실면적</div>
            <div class="item-information__list col">
              <ul>
                <li>122.2 ㎡</li>
              </ul>
            </div>
          </div>
          <div class="room-information__item">
            <div class="item-information__title col">체크인/체크아웃</div>
            <div class="item-information__list col">
              <ul>
                <li>15:00/11:00</li>
              </ul>
            </div>
          </div>
        </div>
        <div class="s124-3-7-parsys aem-GridColumn aem-GridColumn--default--12">
          <div class="s124  ">
            <div class="s124-information">
              <div class="s124-information_inner row align-items-center">
                {/* <div class="s124-information__title"> */}
                {/* <h2>특별서비스</h2> */}
                {/* <div> */}
                <div class="s124-information_title1 col">특별서비스</div>

                <ul class="s124-information_title col-9">
                  <li class="s023-content__text">웰컴티 제공</li>

                  <li class="s023-content__text">
                    투숙객 전용 라운지(8F)' 무료입장
                  </li>

                  <li class="s023-content__text">
                    만 12세 (초등학교 6학년) 이하의 어린이 패밀리 라운지
                    입장가능
                  </li>

                  <li class="s023-content__text">
                    투숙객 실내/외 수영장 무료입장 (7~8월 : 투숙기간 내 1회)
                  </li>

                  <li class="s023-content__text">
                    투숙객 키즈라운지 무료입장 (36개월~10세 이용가능)
                  </li>

                  <li class="s023-content__text">
                    셔츠 무료 다림질 서비스 or 의류 탈취 및 건조 (1일 2개)
                  </li>

                  <li class="s023-content__text">슈폴리싱 서비스</li>

                  <li class="s023-content__text">턴다운 서비스</li>

                  <li class="s023-content__text">웰컴레터 서비스</li>

                  <li class="s023-content__text">
                    전 객실 초고속 무료 인터넷 (유선, 와이파이)
                  </li>

                  <li class="s023-content__text">맞춤형 베개 서비스</li>

                  <li class="s023-content__text">
                    슈퍼 프리미엄 배딩 시스템 : 최상의 숙면을 위한 침대 및
                    침구류
                  </li>
                  <li class="s023-content__text">사우나 무료 (1일 1회)</li>
                  <li class="s023-content__text">스타일러 구비</li>
                </ul>
                {/* </div> */}
                {/* </div> */}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="room-amenities__wrap row align-items-center">
        <div class="room-amenities__title col">어메니티</div>
        <div class="room-amenities__item">
          <div class="item__title col">일반</div>
          <div class="item__list col">
            <ul>
              <li>UHD TV 49"(침실) 75"(거실)</li>
              <li>미니바</li>
              <li>티포트</li>
              <li>금고</li>
              <li>전화기</li>
              <li>우산</li>
              <li>구둣주걱</li>
              <li>오디오 시스템</li>
            </ul>
          </div>
        </div>
        <div class="room-amenities__item">
          <div class="item__title1 col">욕실</div>
          <div class="item__list col">
            <ul>
              <li>욕조</li>
              <li>비데</li>
              <li>면봉</li>
              <li>샤워 캡</li>
              <li>슬리퍼</li>
              <li>욕실용품 (Diptyque)</li>
              <li>목욕 가운</li>
              <li>헤어드라이어</li>
              <li>베니티 킷</li>
              <li>베스 솔트</li>
            </ul>
          </div>
        </div>
        <div class="room-amenities__item">
          <div class="item__title2 col">기타</div>
          <div class="item__list col">
            <ul>
              <li>무료 생수 1일 2병</li>
              <li>커피 및 티 메이커</li>
              <li>케이블 위성 TV 채널</li>
            </ul>
          </div>
        </div>
      </div>
    </body>
  );
}

export default RoomDetail3;
