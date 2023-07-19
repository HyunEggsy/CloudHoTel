import React from "react";
import "../assets/css/mystyle.css";
import { useState, useEffect } from "react";
import Mypagelist from "./Mypagelist";

// 벡엔드 연동 js 파일 import

import ReservationDataService from "../services/ReservationDataService";

function Rmypage() {
  // 다른페이지에서(전체조회) 기본키(cid)를 전달받는 함수
  // const { id } = useParams();

  const [id, setId] = useState("");

  const [reservation, setReservation] = useState([]);

  // 함수 정의
  // 화면이 뜰때 고객id(cid)로 1건조회(상세조회)를 위한 함수
  // const getreservation = (rvno) => {
  //   // 고객id(cid) 벡엔드로 상세조회 요청
  //   ReservationDataService.getReservationId(rvno)
  //     .then((response) => {
  //       // 성공 : response.data(벡엔드에서 전송한 데이터 )
  //       const { reservation } = response.data;

  //       // 벡엔드에서 전송한 객체배열을 저장
  //       setreservation(reservation);
  //       // 콘솔 로그 출력ma
  //       console.log(response.data);
  //     })
  //     .catch((e) => {
  //       // 실패
  //       console.log(e);
  //     });
  // };

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

  useEffect(() => {
    let localuser = JSON.parse(localStorage.getItem("user"));
    console.log(localuser.id);
    setId(localuser.id);
    console.log("fdsafsd")
    getReservation(id);
  }, []);

  // useEffect(() => {
  //   let localuser = JSON.parse(localStorage.getItem("user"));
  //   console.log(localuser.id);
  //   setId(localuser.id);
  //   setUserName(localuser.username);
  // }, []);

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
            {reservation ? (
              <div>
                {reservation.map((data) => (
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
                        <span>{data.rtype} {data.pname} </span>
                        {/* <span>202313131584people</span> */}
                        <br />
                        <span>체크인: 16:00 | 체크아웃: 11:00 </span>
                        <br />
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="myReserveList_No">예약정보가 없습니다.</div>
            )}
            
          </div>
        </div>
      </div>
    </div>
  );
}

export default Rmypage;
