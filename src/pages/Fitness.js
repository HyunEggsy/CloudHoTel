import React, { useEffect } from "react";
import { Carousel } from "react-bootstrap";
// import "../assets/css/style.css";
import "../assets/css/mystyle.css";

function Fitness() {
  return (
    <div>
      <div class="box_wrap">
        <div className="react_carousel">
          <Carousel
            slide={false}
            prevLabel={null}
            nextLabel={null}
            pause={false}
          >
            <Carousel.Item interval={3500}>
              <div className="slidercontents4">
                <div className="wrapText">
                  <h1>Fitness Club</h1>
                  <div className="wratTitle">
                    <p>FITNESS</p>
                  </div>
                </div>
              </div>
            </Carousel.Item>
            <Carousel.Item interval={3500}>
              <div className="slidercontents5">
                <div className="wrapText">
                  <h1>Fitness Club</h1>
                  <div className="wratTitle">
                    <p>FITNESS</p>
                  </div>
                </div>
              </div>
            </Carousel.Item>
            <Carousel.Item interval={3500}>
              <div className="slidercontents6">
                <div className="wrapText">
                  <h1>Fitness Club</h1>
                  <div className="wratTitle">
                    <p>FITNESS</p>
                  </div>
                </div>
              </div>
            </Carousel.Item>
          </Carousel>
        </div>

        {/* <div claa="reservation_btn">
            <button>유선문의</button>
          </div> */}

        <div id="viewContents" class="view_cont">
          <div class="cont_wrap">
            <div class="info_sec info_sec_01">
              <div class="title_box">
                <p class="info_tit">FITNESS</p>
              </div>
              <div class="text_box">
                <p class="info_text">
                  125평 규모에 다양한 운동 장비를 갖춘 체련장은 퍼스널 트레이닝
                  시스템을 통해 과학적인 체성분 분석 기반 체력증진, 비만관리,
                  재활 등 체계적인 건강관리를 받을 수 있습니다.
                </p>
              </div>
              <div class="info_list_box">
                <div class="info_box info_box_1">
                  <p class="info_tit">LOCATION</p>
                  <p class="info_text">빌라</p>
                </div>
              </div>
            </div>

            <div class="info_sec info_sec_02">
              <div class="title_box">
                <p class="info_tit">운영시간</p>
              </div>
              <div class="table_box mg hg">
                <table class="table">
                  <tbody>
                    <tr>
                      <td class="weekday">WEEKDAY</td>
                      <td class="time">
                        {/* <!-- 06:00 ~ 21:30 --> */}
                        06:00 ~ 22:00
                      </td>
                    </tr>

                    <tr>
                      <td class="weekday">WEEKEND and HOLIDAY</td>
                      <td class="time">
                        {/* <!-- 06:00 ~ 21:30 --> */}
                        06:00 ~ 21:30
                      </td>
                    </tr>

                    <tr>
                      <td class="weekday">REGULAR CLOSING DAY</td>
                      <td class="time">
                        <span>매월 두 번째, 네 번째 월요일</span>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            <div class="info_sec info_sec_04 infoli">
              <div class="title_box">
                <p class="info_tit">안내 사항</p>
              </div>
              <div class="info_box">
                <div class="info_list">
                  <ul>
                    <li>
                      클라우드호텔 피트니스 연간 회원 가입 시 연령 제한 : 20세 이상
                      성인 남녀
                    </li>
                    <li>피트니스 입장은 영업 종료시간 30분전까지 입니다.</li>
                    <li>피트니스는 1박 1회 이용 가능합니다.</li>
                    <li>
                      분실 위험이 있는 귀중품은 데스크에 보관해주시기 바랍니다.
                    </li>
                    <li>
                      쾌적한 환경을 위하여 외부음식 반입을 삼가여 주시기
                      바랍니다.
                    </li>
                    <li>
                      입장 시 운동복과 실내운동화를 착용해 주시기 바랍니다.
                    </li>
                    <li>
                      피트니스는 무인 운영 공간으로 고객 부주의로 인한 사고 발생
                      시 당사는 책임을 지지 않습니다.
                    </li>
                    <li> 문의·예약 : T. 051.123.4567</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Fitness;
