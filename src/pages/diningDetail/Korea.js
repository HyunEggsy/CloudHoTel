import React, { useEffect } from "react";
import initMain from "../../assets/js/main";
import "../../assets/css/diningDetail.css";

/* eslint-disable */
function Korea() {
  useEffect(() => {
    initMain();
  }, []);

  useEffect(() => {
    // 캐러셀 정의 : jQuery
    // jQuery 선택자 : $(css선택자)
    $(".owl-carousel").owlCarousel({
      // 옵션
      autoplay: true,
      autoplayTimeout: 1000, // 이미지 변경될때 변경 속도
      autoplayHoverPause: true,
      items: 1, // 화면에 이미지가 표시될 개수
      loop: true, // 마지막 도달했을때 처음으로 돌아가는지 여부
      mergeFit: true
    });
    $(".play").on("click", function () {
      owl.trigger("play.owl.autoplay", [1000]);
    });
    $(".stop").on("click", function () {
      owl.trigger("stop.owl.autoplay");
    });
  }, []);

  return (
    <div className="dining">
      <div id="untree_co--overlayer"></div>
      <div className="loader">
        <div className="spinner-border text-primary" role="status">
          <span className="sr-only">Loading...</span>
        </div>
      </div>
      {/* 로딩 화면 끝 */}

      {/* 23.07.01 - 김건우 [ Nav 컴포넌트로 따로 만들었지만 대메뉴 언더라인 효과 때문에 다시 컴포넌트 내로 배치 ] */}
      {/* nav 시작 */}

      <div className="maindining">
        {/* 메뉴 시작 */}
        <div class="diningtitle">
          <div class="title1 section-heading" data-aos="fade-up">
            <h3 class="text-center">한 식</h3>
          </div>
          <hr />
          <h2>한국 전통 음식을 현대적으로 재해석해 선보이는 모던 한식당</h2>
          <p className="content-text">
            {" "}
            전국 각지의 제철 특산물을 이용한 정갈한 메뉴는 물론, 오랜 시간의
            기다림과 정성으로 끓여 내는 진한 국물 요리는 비단 한국인들 뿐만
            아니라 세계 각지에서 찾아 오신 여행객들께 특별한 미식 경험을
            선물합니다. 모던하게 꾸며진 실내 인테리어와 한국 고유의 절제미가
            느껴지는 식기 컬렉션은 모든 식사 모임에 기품을 더해 줍니다. 어떤
            계절, 어떤 시간대, 어떤 날씨에도 아름다운 모습을 자랑하는 전망도
            누릴 수 있는 또 하나의 즐거움입니다. 메인 홀에 비해 보다 한국적으로
            꾸며 놓은 네 개의 별실을 갖추어 상견례와 같은 특별한 모임을 갖기에도
            제격입니다.
          </p>
        </div>{" "}
        <div className="but">
          <a className="btn5" href="#">
            <span className="btn4 badge rounded-pill bg-warning" role="button">
              예약하기
            </span>
          </a>
        </div>
        <div>
          {/* 캐러셀 사용법 */}
          {/* 부모 div class="owl-carousel" 클래스 이름 필수 */}
          {/* 부모 div - 자식div 들 */}
          <div className="owl-carousel owl-theme">
            {/* 캐러셀 이미지 시작 */}
            {/* 1st 이미지 시작 */}
            <div className="korea1 item">
            </div>
            {/* 1st 이미지 끝 */}

            {/* 2nd 이미지 시작 */}
            <div className="korea2 item">
            </div>
            {/* 2nd 이미지 끝 */}

            {/* 3rd 이미지 시작 */}
            <div className="korea3 item">
            </div>
            {/* 3rd 이미지 끝 */}

            {/* 4th 이미지 시작 */}
            <div className="korea4 item">
            </div>
            {/* 4th 이미지 끝 */}

            {/* 5th 이미지 시작 */}
            <div className="korea5 item">
            </div>
            {/* 5th 이미지 끝 */}

            {/* 캐러셀 이미지 끝 */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Korea;
