import React, { useEffect } from "react";
import { Carousel } from "react-bootstrap";
import '../assets/css/style.css';
import "../assets/css/mystyle.css";

function Pool() {
    return (
        <div>
          <div>
            <div class="box_wrap">
             
              <Carousel slide={false} prevLabel={null} nextLabel={null} pause={false}>
                <Carousel.Item interval={3500}>
                  <div className="slidercontents13">
                    <div className="wrapText">
                      <h1>Fitness Club</h1>
                      <div className="wratTitle">
                        <p>Swimming Pool</p>
                      </div>
                    </div>
                  </div>
                </Carousel.Item>
                <Carousel.Item interval={3500}>
                  <div className="slidercontents14">
                    <div className="wrapText">
                      <h1>Fitness Club</h1>
                      <div className="wratTitle">
                        <p>Swimming Pool</p>
                      </div>
                    </div>
                  </div>
                </Carousel.Item>
                <Carousel.Item interval={3500}>
                  <div className="slidercontents15">
                    <div className="wrapText">
                      <h1>Fitness Club</h1>
                      <div className="wratTitle">
                        <p>Swimming Pool</p>
                      </div>
                    </div>
                  </div>
                </Carousel.Item>
              </Carousel>
   
    
           
    
              <div id="viewContents" class="view_cont">
                <div class="cont_wrap">
                  <div class="info_sec info_sec_01">
                    <div class="title_box">
                      <p class="info_tit">Swimming Pool</p>
                    </div>
                    <div class="text_box">
                      <p class="info_text">
                        성인풀, 패밀리풀, 그리고 아이들을 위한 실내·실외풀을 갖추고
                        있는 클라우드호텔 수영장은
                        <br />
                        투숙객 전용 공간으로 오존 살균 정수시스템으로 쾌적한 수질에서 탁 트인 전망을 바라보며 실내에서 사계절 내내 쾌적하고 여유로운 시간을 만끽할 수 있습니다.
                         
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
                            <td class="weekday" rowspan="2">
                              WEEKDAY
                            </td>
                            <td class="time">
                              {/* <!-- 06:00 ~ 21:30 --> */}
                              <b>오전</b> 06:00 ~ 11:00
                              <br />
                              <br />
                              <b>오후</b> 12:00 ~ 21:30
                            </td>
                          </tr>
                          <tr>
                            <td>
                              Cleaning &amp; Inspection Time <br />
                              <br /> 11:00 ~ 12:00
                            </td>
                          </tr>
                          <tr>
                            <td class="weekday" rowspan="2">
                              WEEKEND
                            </td>
                            <td class="time">
                              {/* <!-- 06:00 ~ 21:30 --> */}
                              <b>오전</b> 06:00 ~ 11:00
                              <br />
                              <br />
                              <b>오후</b> 12:00 ~ 13:40, 14:00 ~ 15:40, 16:00 ~
                              17:40, 18:00 ~ 19:40, 20:00 ~ 21:30
                            </td>
                          </tr>
                          <tr>
                            <td>
                              Cleaning &amp; Inspection Time <br />
                              <br /> 11:00 ~ 12:00, 13:40 ~ 14:00, 15:40 ~ 16:00,
                              17:40 ~ 18:00, 19:40 ~ 20:00
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
                      <div class="tabelCaption">
                        <ul>
                          <li>* 오후 시간대는 한 타임만 이용가능</li>
                        </ul>
                      </div>
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
                            깨끗한 수질관리를 위하여 샤워 후 입수 바라며, 입수 시
                            수영모를 착용하여 주시기 바랍니다.
                          </li>
                          <li>
                            만 5세 이상 어린이는 성별에 맞게 탈의실을 이용하여
                            주시기 바랍니다.
                          </li>
                          <li>
                          휴대전화를 포함한 촬영 장비로 수영장 내 수중 촬영, 락커, 카바나 내에서의 촬영은 불가합니다.
                          </li>
                          <li>
                            체크아웃 당일에는 11시까지 이용 가능하며, 이용을 원하실
                            경우 10시 전 입장하여 주시기 바랍니다.
                          </li>
                          <li>
                            만 13세 미만 자녀 성인풀 이용 시에는 부모 동반 및
                            자유수영에 한해 이용이 가능합니다.
                          </li>
                          <li>
                          분실 위험이 있는 귀중품은 데스크에 보관해주시기 바랍니다.
                          </li>
                          <li class="no_dot">
                            - 단, 튜브 및 보호장비 착용은 불가 하며 자유수영 외
                            물놀이는 금지합니다.
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
        </div>
      );
}

export default Pool
