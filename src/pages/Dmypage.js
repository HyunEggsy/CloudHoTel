import React from "react";
import { useState, useEffect } from "react";
import "../assets/css/mystyle.css";
import ReservationDataService from "../services/ReservationDataService";
import Mypagelist from "./Mypagelist";


function Dmypage() {
  // const [currentEdit, setCurrentEdit] = useState("");
  const [id, setId] = useState("")


  const [reservation, setReservation] = useState([]);



  const getReservation = (id) => {
    // 고객id(cid) 벡엔드로 상세조회 요청
    ReservationDataService.getReservationId(id)
      .then((response) => {
        // 성공 : response.data(벡엔드에서 전송한 데이터 )
        const { reservation, totalPages } = response.data;

        // 벡엔드에서 전송한 객체배열을 저장
        setReservation(reservation);
        // 콘솔 로그 출력ma
        console.log(response.data);
        console.log(reservation);
      })
      .catch((e) => {
        // 실패
        console.log(e);
      });
  };



  // useEffect(() => {
  //   let localuser = JSON.parse(localStorage.getItem("user"));
  //   console.log(localuser.id);
  //   setCurrentEdit(localuser.id);
  //   // setCurrentEdit(localuser.userName);
  //   setUserName(localuser.username);
  //   getReservation(currentEdit);
  //   getUserId(currentEdit);

  // }, []);


  useEffect(() => {
    let localuser = JSON.parse(localStorage.getItem("user"));
    console.log(localuser.id);
    setId(localuser.id);
    getReservation(id);
  }, []);

  return (
    <div>
      <div className="myPapeContainer">
        <div className="myPageTop">
          <div className="myPageBTit">
            <p>My Page</p>
          </div>
          <div className="myPageTit">
            <p>다이닝 예약 내역</p>
          </div>
        </div>
        <div className="myPageContents">
        <div className="myPageCom">
            <Mypagelist />
          </div>

          <div className="myReserveList">
            {reservation &&
              reservation.map((data) => (
                <div className="myReserveItem">
                  <div className="myThum">
                    <img
                      src={require("../assets/images/food1.jpg")}
                      alt="디럭스 트윈"
                    />
                  </div>
                  <div className="myReserveInfo">
                    <div>클라우드 호텔</div>
                    <div className="myReserveDay">{data.rsvTime}</div>
                    <div className="myReserveContents">
                      <span>{data.dtype} | </span>
                      <span>202313131584people</span>
                      <span>202313131584people</span>
                      
                    </div>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dmypage;
