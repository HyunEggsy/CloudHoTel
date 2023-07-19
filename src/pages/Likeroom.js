import React from "react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "../assets/css/mystyle.css";
import LikeDataService from "../services/LikeDataService";
import Mypagelist from "./Mypagelist";


function Likeroom() {

    
  const [id, setId] = useState("")

  const [like, setLike] = useState([]);


  const getLikePage = (id) => {
    // 고객id(cid) 벡엔드로 상세조회 요청
    LikeDataService.getLikeAllById(id)
      .then((response) => {
        // 성공 : response.data(벡엔드에서 전송한 데이터 )
        const like  = response.data;

        // 벡엔드에서 전송한 객체배열을 저장
        setLike(like);
        // 콘솔 로그 출력ma
        console.log(response.data);
        console.log(like);
      })
      .catch((e) => {
        // 실패
        console.log(e);
      });
  };

  useEffect(() => {
    let localuser = JSON.parse(localStorage.getItem("user"));
    console.log(localuser.id);
    setId(localuser.id);
    getLikePage(localuser.id);
  }, []);



  return (
    <div>
    <div className="myPapeContainer">
      <div className="myPageTop">
        <div className="myPageBTit">
          <p>My Page</p>
        </div>
        <div className="myPageTit">
          <p>객실 &middot; 패키지 예약내역</p>
        </div>
      </div>
      <div className="myPageContents">
      <div className="myPageCom">
            <Mypagelist />
          </div>

        <div className="myReserveList">
          {like &&
            like.map((data) => (
              <div className="myReserveItem">
                <div className="myThum">
                  <img
                    src={require("../assets/images/room2.jpg")}
                    alt="디럭스 트윈"
                  />
                </div>
                <div className="myReserveInfo">
                <div className="myPageHotelName">Cloud Hotel</div>

                  <div className="myReserveDay">
                    {data.checkIn} ~ {data.checkOut}
                  </div>
                  <div className="myReserveContents">
                    <span>{data.rtype} {data.pname} | </span>
                    {/* <span>202313131584people</span> */}
                    <br/>
                    <span>{data.price} ₩ </span>
                    <br/>
                   
                    
                  </div>
                </div>
              </div>
            ))}
        </div>
      </div>
    </div>
  </div>
  )
}

export default Likeroom