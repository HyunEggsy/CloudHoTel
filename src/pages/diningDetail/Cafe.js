import React, { useEffect } from "react";
import initMain from "../../assets/js/main";
import "../../assets/css/diningDetail.css";


/* eslint-disable */
function Cafe() {
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
            <h3 class="text-center">카 페</h3>
          </div>
          <hr />
          <h2>아름다운 자연의 풍경 속에서 편안하고 유쾌한 만남</h2>
          <p className="content-text">
            {" "}
            만남 아름다운 풍경이 한눈에 담기는 탁 트인 공간에서 최상의 아라비카
            원두로 블렌딩하여 최적의 온도에서 로스팅한 에스프레소와 다양한
            음료를 즐길 수 있으며, 감미로운 음악과 함께 편안하고 자연스러운
            대화로 유쾌한 만남을 선사해 드립니다.
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
            <div className="cafe1 item">
            </div>
            {/* 1st 이미지 끝 */}

            {/* 2nd 이미지 시작 */}
            <div className="cafe2 item">
            </div>
            {/* 2nd 이미지 끝 */}

            {/* 3rd 이미지 시작 */}
            <div className="cafe3 item">
            </div>
            {/* 3rd 이미지 끝 */}

            {/* 4th 이미지 시작 */}
            <div className="cafe4 item">
            </div>
            {/* 4th 이미지 끝 */}

            {/* 5th 이미지 시작 */}
            <div className="cafe5 item">
            </div>
            {/* 5th 이미지 끝 */}

            {/* 캐러셀 이미지 끝 */}
          </div>
      </div>
    </div>
  );
}

export default Cafe;
