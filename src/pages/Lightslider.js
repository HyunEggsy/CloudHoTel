import React, { useEffect } from "react";
import "../assets/css/mystyle.css";
import initLightslider from "../assets/js/lightslider";
import { useNavigate } from "react-router-dom";

function Lightslider() {
  useEffect(() => {
    initLightslider();
  }, []);

  const navigate = useNavigate();
 const noticeNavi =()=>{
  navigate("/notice");
 };

 const locationNavi = ()=>{
  window.location.href="https://naver.me/xQOaCSUw";
 }; 

//  const locationNavi = ()=>{
//   window.location.replace("https://naver.me/xQOaCSUw");
//  };

 


  return (
    <div>
      <div className="hotel_main">
      <div className="hotel_main_img">
      <img src={require("../assets/images/hotel6.jpg")} />
      </div>
      <div className="hotel_main_txt">
        <h1>We're Cloud Hotel</h1>
        <span>Hotel Description</span>
        <p>끊임없이 일렁이는 파도를 바라보면 일상에서 잊었던 즐거움이 다시 꿈틀거립니다.
          <br/>
          바다를 물들이는 주황빛 노을은, 시간이 자시 멈춘 듯한 황홀한 감동을 일깨웁니다.
        </p>
        <p>
          바람과 바다 그리고 하늘.
          <br/>
          눈과 마음을 모두 사로잡는 아름다운 자연은 클라우드 호텔이 당신만을 위해 준비한 새로운 럭셔리입니다.
          <br/>
          머묾과 역동이 공존하는 클라우드 호텔에서 당신의 마음을 사로잡기 위해 준비된 매혹적인 여정과 함께 하시기 바랍니다.
        </p>
        </div>
        </div>
    <div className="hotel_lightslider">
      <div className="banner">
        <ul id="lightSlider">
          <li data-thumb={require("../assets/images/hotel1.jpg")} className="lightslider_thumb">
            <img src={require("../assets/images/hotel1.jpg")} />
          </li>
          <li data-thumb={require("../assets/images/hotel2.jpg")}>
            <img src={require("../assets/images/hotel2.jpg")} />
          </li>
          <li data-thumb={require("../assets/images/hotel3.jpg")}>
            <img src={require("../assets/images/hotel3.jpg")} />
          </li>
          <li data-thumb={require("../assets/images/hotel4.jpg")}>
            <img src={require("../assets/images/hotel4.jpg")} />
          </li>
          <li data-thumb={require("../assets/images/hotel5.jpg")}>
            <img src={require("../assets/images/hotel5.jpg")} />
          </li>
        </ul>
      </div>
    </div>
    <div className="light_button">
      <button className="btn btn-outline-dark notice_button"  onClick={noticeNavi}>Notice</button> 
      <button className="btn btn-outline-dark location_button"  onClick={locationNavi}>Location</button>
    </div>
    </div>
  );
}

export default Lightslider;
