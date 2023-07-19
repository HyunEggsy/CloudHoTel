import React, { useEffect } from "react";
import initMain from "../../assets/js/main";
import "../../assets/css/diningDetail.css";


/* eslint-disable */
function Western() {
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
            <h3 class="text-center">양 식</h3>
          </div>
          <hr />
          <h2>
            이탈리아 본연의 맛을 모던한 감성으로 구현한 Italian Grill Restaurant
          </h2>
          <p className="content-text">
            {" "}
            이탈리아의 풍부하고 화려한 맛을 밀라노의 감성으로 재해석한 라
            스칼라는 가성비 있는 브런치 메뉴부터 숯불 그릴에서 바로 구운 최상급
            스테이크까지 수준 높은 이탈리안 요리를 선보입니다. 해운대 오션 뷰를
            바라보며 최고의 와인 페어링을 함께 즐길 수 있는 특별한 공간에서
            여유로운 다이닝을 경험해보세요
          </p>
        </div>
        <div className="but">
          <a className="btn5" href="#">
            <span className="btn4 badge rounded-pill bg-warning" role="button">
              예약하기
            </span>
          </a>
        </div>
        <div className="owl-carousel owl-theme">
            {/* 캐러셀 이미지 시작 */}
            {/* 1st 이미지 시작 */}
            <div className="western1 item">
              {/* 이미지 넣기(리액트) : require("이미지경로") */}
            </div>
            {/* 1st 이미지 끝 */}

            {/* 2nd 이미지 시작 */}
            <div className="western2 item">
            </div>
            {/* 2nd 이미지 끝 */}

            {/* 3rd 이미지 시작 */}
            <div className="western3 item">
              {/* 이미지 넣기(리액트) : require("이미지경로") */}
            </div>
            {/* 3rd 이미지 끝 */}

            {/* 4th 이미지 시작 */}
            <div className="western4 item">
              {/* 이미지 넣기(리액트) : require("이미지경로") */}
            </div>
            {/* 4th 이미지 끝 */}

            {/* 5th 이미지 시작 */}
            <div className="western5 item">
              {/* 이미지 넣기(리액트) : require("이미지경로") */}
            </div>
            {/* 5th 이미지 끝 */}

            {/* 캐러셀 이미지 끝 */}
          </div>
        </div>
    </div>
  );
}

export default Western;
