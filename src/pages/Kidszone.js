
import React, { useEffect } from "react";
import { Carousel } from "react-bootstrap";
import '../assets/css/style.css';
import "../assets/css/mystyle.css";

function Kidszone() {
    return (
        <div>
          <div>
            <div class="box_wrap">
             
              <Carousel slide={false} prevLabel={null} nextLabel={null} pause={false}>
                <Carousel.Item interval={3500}>
                  <div className="slidercontents16">
                    <div className="wrapText">
                      <h1>Fitness Club</h1>
                      <div className="wratTitle">
                        <p>KIDSZONE</p>
                      </div>
                    </div>
                  </div>
                </Carousel.Item>
                <Carousel.Item interval={3500}>
                  <div className="slidercontents17">
                    <div className="wrapText">
                      <h1>Fitness Club</h1>
                      <div className="wratTitle">
                        <p>KIDSZONE</p>
                      </div>
                    </div>
                  </div>
                </Carousel.Item>
                <Carousel.Item interval={3500}>
                  <div className="slidercontents18">
                    <div className="wrapText">
                      <h1>Fitness Club</h1>
                      <div className="wratTitle">
                        <p>KIDSZONE</p>
                      </div>
                    </div>
                  </div>
                </Carousel.Item>
                <Carousel.Item interval={3500}>
                  <div className="slidercontents19">
                    <div className="wrapText">
                      <h1>Fitness Club</h1>
                      <div className="wratTitle">
                        <p>KIDSZONE</p>
                      </div>
                    </div>
                  </div>
                </Carousel.Item>
                <Carousel.Item interval={3500}>
                  <div className="slidercontents20">
                    <div className="wrapText">
                      <h1>Fitness Club</h1>
                      <div className="wratTitle">
                        <p>KIDSZONE</p>
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
                      <p class="info_tit">KidsZone</p>
                    </div>
                    <div class="text_box">
                      <p class="info_text">
                      색칠놀이, 도장찍기, 클라이밍, 미끄럼틀, 디지털로 즐기는 인터랙티브 영상 컨텐츠, 비즈놀이, 블록쌓기 등 각종 놀이 시설을 갖춘 신개념 키즈 플레이존입니다. 
                      <br/>전문 자격증을 갖춘 선생님과 함께하는 오감발달 즐거운 미술 놀이와 호기심 유발 체육&마술 프로그램도 만나볼 수 있습니다.

                      </p>
                    </div>
                    <div class="info_list_box">
                      <div class="info_box info_box_1">
                        <p class="info_tit">LOCATION</p>
                        <p class="info_text">빌라</p>
                      </div>
                    </div>
                    <div class="info_list_box">
                      <div class="info_box info_box_1">
                        <p class="info_tit">이용대상</p>
                        <p class="info_text">2세 ~ 6세 (권장 연령 : 3세 ~ 5세)</p>
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
                            <td class="weekday" >
                              WEEKDAY
                            </td>
                            <td class="time">
                              {/* <!-- 06:00 ~ 21:30 --> */}
                               09:00 ~ 19:00
                            </td>
                          </tr>
     
                          <tr>
                            <td class="weekday" >
                              WEEKEND and HOLIDAY
                            </td>
                            <td class="time">
                              {/* <!-- 06:00 ~ 21:30 --> */}
                               09:00 ~ 20:00
                            </td>
                          </tr>

                          <tr>
                            <td class="weekday" >
                            CLEANING & INSPECTION TIME
                            </td>
                            <td class="time">
                              {/* <!-- 06:00 ~ 21:30 --> */}
                                14:00 ~ 15:00
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
                         키즈존 입장은 영업시간 30분 전까지 입니다.
                        </li>
                        <li>
                        키즈존 내에 음식물 반입이 불가합니다.
                        </li>
                        <li>
                        부모님 동반하에 입장 가능한 시설입니다. 
                        </li>
                        <li>
                        ※ 신장 110cm 이상 입장 불가
                        </li>
                        <li>
                        보호자는 양말을 필수 착용해주시기 바랍니다.
                        </li>
                        <li>
                        부모님 또는 어린이 부주의에 의해 발생한 안전사고 및 분쟁에 대해서는 당 호텔에서 책임지지 않습니다
                        </li>
                        <li>
                        키즈존은 1박 1회 이용 가능합니다.
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

export default Kidszone