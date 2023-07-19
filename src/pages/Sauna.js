import React, { useEffect } from "react";
import { Carousel } from "react-bootstrap";
import "../assets/css/style.css";
import "../assets/css/mystyle.css";

function Sauna() {
  return (
    <div>
      <div>
        <div class="box_wrap">
          <Carousel
            slide={false}
            prevLabel={null}
            nextLabel={null}
            pause={false}
          >
            <Carousel.Item interval={3500}>
              <div className="slidercontents7">
                <div className="wrapText">
                  <h1>Fitness Club</h1>
                  <div className="wratTitle">
                    <p>SAUNA</p>
                  </div>
                </div>
              </div>
            </Carousel.Item>
            <Carousel.Item interval={3500}>
              <div className="slidercontents8">
                <div className="wrapText">
                  <h1>Fitness Club</h1>
                  <div className="wratTitle">
                    <p>SAUNA</p>
                  </div>
                </div>
              </div>
            </Carousel.Item>
            <Carousel.Item interval={3500}>
              <div className="slidercontents9">
                <div className="wrapText">
                  <h1>Fitness Club</h1>
                  <div className="wratTitle">
                    <p>SAUNA</p>
                  </div>
                </div>
              </div>
            </Carousel.Item>
          </Carousel>


          <div claa="reservation_btn">
            <button>유선문의</button>
          </div>

          <div id="viewContents" class="view_cont">
            <div class="cont_wrap">
              <div class="info_sec info_sec_01">
                <div class="title_box">
                  <p class="info_tit">SAUNA</p>
                </div>
                <div class="text_box">
                  <p class="info_text">
                    고급스러운 프리미엄 찜질 스파에서 품격 높은 휴식을 즐기세요
                    <br />
                    원기를 회복하고 핀란드식 사우나를 겸비한 고품격 사우나에서
                    피로를 씻고 심신의 안정을 찾아보세요
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
                          06:00 ~ 22:30
                        </td>
                      </tr>

                      <tr>
                        <td class="weekday">WEEKEND and HOLIDAY</td>
                        <td class="time">
                          {/* <!-- 06:00 ~ 21:30 --> */}
                          06:00 ~ 22:00
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
                      <li>사우나 입장은 영업 종료시간 30분전까지 입니다.</li>
                      <li>
                        분실 위험이 있는 귀중품은 데스크에 보관해주시기
                        바랍니다.
                      </li>
                      <li>
                        고객의 안전을 위하여 음주 후 사우나 시설 이용은 제한될
                        수 있습니다.
                      </li>
                      <li>
                        휴대전화를 포함한 촬영 장비로 사우나 내에서의 촬영은
                        불가합니다.
                      </li>
                      <li>
                        공중위생에 영향을 미치는 감염성 질환이 있을 경우 이용이
                        제한 됩니다.
                      </li>
                      <li>
                        음주자, 임산부, 노약자, 고혈압, 당뇨가 있으신 분들은
                        이용을 삼가 주시기 바랍니다.
                      </li>
                      <li>사우나 내 모든 지역은 금연구역 입니다.</li>
                      <li>사우나 내에 음식물 반입 불가 합니다.</li>
                      <li> 문의·예약 : T. 051.123.4567</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Sauna;
