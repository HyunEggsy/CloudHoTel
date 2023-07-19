import React, { useEffect } from "react";
import { Carousel } from "react-bootstrap";
import "../assets/css/style.css";
import "../assets/css/mystyle.css";

function Spa() {
  return (
    <div>
      <div>
        <div class="box_wrap">
          <div className="carousel_wrap">
          <Carousel
            slide={false}
            prevLabel={null}
            nextLabel={null}
            pause={false}
          >
            <Carousel.Item interval={3500}>
              <div className="slidercontents10">
                <div className="wrapText">
                  <h1>Fitness Club</h1>
                  <div className="wratTitle">
                    <p>SPA</p>
                  </div>
                </div>
              </div>
            </Carousel.Item>
            <Carousel.Item interval={3500}>
              <div className="slidercontents11">
                <div className="wrapText">
                  <h1>Fitness Club</h1>
                  <div className="wratTitle">
                    <p>SPA</p>
                  </div>
                </div>
              </div>
            </Carousel.Item>
            <Carousel.Item interval={3500}>
              <div className="slidercontents12">
                <div className="wrapText">
                  <h1>Fitness Club</h1>
                  <div className="wratTitle">
                    <p>SPA</p>
                  </div>
                </div>
              </div>
            </Carousel.Item>
          </Carousel>
          </div>
          


          <div id="viewContents" class="view_cont">
            <div class="cont_wrap">
              <div class="info_sec info_sec_01">
                <div class="title_box">
                  <p class="info_tit">Spa</p>
                </div>
                <div class="text_box">
                  <p class="info_text">
                    특유의 여유로운 분위기속에서 마음을 위한 힐링의 시간을
                    가져보세요
                    <br />
                    전문적이고 쳬계적인 교육을 받은 국내 최고 수준의
                    테라피스트가
                    <br />
                    최고급 오가닉 제품만을 사용하여 고객님 취향에 맞는 오감 만족
                    테라피를 선사합니다
                    <br />
                    심신의 활력을 고려한 고급스럽고 감각적인 공간에서 생기를
                    되찾고 럭셔리한 휴식을 경험하세요
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
                        <td class="weekday">WEEKDAY/WEEKEND</td>
                        <td class="time">
                          {/* <!-- 06:00 ~ 21:30 --> */}
                          10:00 ~ 21:00
                        </td>
                      </tr>

                      <tr>
                        <td class="weekday">REGULAR CLOSING DAY</td>
                        <td class="time">
                          <span>매주 월요일 휴무</span>
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
                        분실 위험이 있는 귀중품은 데스크에 보관해주시기
                        바랍니다.
                      </li>
                      <li>
                        휴대전화를 포함한 촬영 장비로 스파 내에서의 촬영은
                        불가합니다.
                      </li>
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

export default Spa;
