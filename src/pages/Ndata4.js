import React from "react";


function Ndata4() {
  
  const noticeNavi = ()=>{
    window.location.href="/notice";
   }; 
  return (
    <div className="ndata1_inner">
      <div className="ndata1">
        <h2 className="ndata1_tit"> 클라우드 호텔 객실 예약 취소 규정</h2>
        <div className="ndata1 txtBox ">
          <br />
          <br />
          <h3>※ 예약 취소 안내 </h3>
          <br />
          <h4>[비수기 취소 수수료] </h4>
          체크인 2일 전 취소 시 30%공제 
          <br />
          체크인 1일 전 취소 시 50% 공제 
          <br />
          체크인 당일 취소 시 100% 공제
          <br />
          <br />
          <h4>[성수기 취소 수수료] </h4>
          체크인 6-7일 전 취소 시 30% 공제
          <br /> 
          체크인 4-5일 전취소 시 50% 공제 
          <br />
          체크인 당일-3일 전 취소 시 100% 공제 
          <br />
          <br />
          <h3>※ 성수기 안내</h3> 
          <br />
          [호텔 ] 07. 16 - 08. 20 / 
          <br />
          <br />
          <h3>※ NO SHOW 100% </h3>
          취소 수수료가 발생 합니다. 
          <br />
          <br />
          <h3>※ 취소수수료 적용안내</h3> 
          <br />
          모든 취소 수수료는 객실료 1박에 한해서 공제 후 환급 됩니다. 
          <br />
          <br />
          <h3>※ 예약 및 취소 문의</h3>
          064-780-8000
        </div>
      </div>
      <div className="light_button">
      <button className="btn btn-outline-dark notice_button" onClick={noticeNavi}   >Notice</button> 
    </div>
    </div>
  );
}

export default Ndata4;
