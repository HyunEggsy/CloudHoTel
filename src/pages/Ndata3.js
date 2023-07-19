import React from "react";

function Ndata3() {
  const noticeNavi = ()=>{
    window.location.href="/notice";
   }; 
  return (
    <div className="ndata1_inner">
      <div className="ndata1">
        <h2 className="ndata1_tit"> 홈페이지 서버 점검 안내</h2>
        <div className="ndata1 txtBox ">
          <br />
          <br />
          안녕하십니까
          <br />
          항상 저희 클라우드 호텔을 이용해 주시는 고객님께 깊은 감사를
          드립니다.
          <br />
          <br />
          안정적인 서비스를 지속하고자 아래와 같이 홈페이지 일부 서비스의
          정기점검을 진행 할 예정입니다.
          <br />
          <br />
          <br />
          ◼ 일시 : 2023년 5월 8일(월) 01:00 ~ 01:30(30분간)
          <br />
          ◼ 대상 : 회원 로그인 서비스
          <br />
          ◼ 영향 : 로그인 및 회원가입 불가
          <br />
          <br />
          이용에 불편을 드린 점 널리 양해 부탁드리며,
          <br />
          더 나은 서비스 제공을 위해 최선을 다하겠습니다.
          <br />
          감사합니다.
        </div>
      </div>
      <div className="light_button">
      <button className="btn btn-outline-dark notice_button" onClick={noticeNavi}  >Notice</button> 
    </div>
    </div>
  );
}

export default Ndata3;
