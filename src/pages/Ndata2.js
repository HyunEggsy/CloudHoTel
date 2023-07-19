import React from "react";

function Ndata2() {
  const noticeNavi = ()=>{
    window.location.href="/notice";
   }; 
  return (
    <div className="ndata1_inner">
      <div className="ndata1">
        <h2 className="ndata1_tit">
          {" "}
          수영장 (가든풀/피크포인트풀) 시설정비 및 점검안내
        </h2>
        <div className="ndata1 txtBox ">
          <br />
          <br />
          그랜드 조선 제주를 찾아주시는 고객 여러분의 안전과 보다 쾌적한
          서비스를 위하여 시설 정비 및 점검 작업으로 일부 수영장 이용이
          불가하오니, 고객님의 양해 부탁 드리겠습니다.

          <br />
          <br />
          ◼ 시설명 : 가든풀 수영장
          <br />
          ◼ 위치 : 클라우드 호텔 본관 1층
          <br />
          ◼ 위치 : 2023년 01월 09일 (월) - 01월 11일 (수)
          (본관 R층 피크포인트풀 정상운영 / *성인전용)
          <br />
          <br />
         
          <br />
          ◼ 시설명 : 피크포인트풀 수영장
          <br />
          ◼ 위치 : 클라우드 호텔 본관 R층
          <br />
          ◼ 위치 : 2023년 01월 16일 (월) - 01월 18일 (수)
          (본관 1층 가든풀 정상운영 / *성인전용)
          <br />
          <br />
          <br />

          해당 기간 동안 힐 스위트관 (신관)에 위치한 헤븐리플 (실내/외) 이용이 가능합니다.
          (* 실외 수영장 : 성인전용)
          <br />
          <br />

          고객 여러분의 불편함을 최소화 하기 위하여 최선의 노력을 다하겠습니다.
          감사합니다.
        
          </div>
      </div>
      <div className="light_button">
      <button className="btn btn-outline-dark notice_button" onClick={noticeNavi}  >Notice</button> 
    </div>
    </div>
  );
}

export default Ndata2;
