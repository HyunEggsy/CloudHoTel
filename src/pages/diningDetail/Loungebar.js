import React, { useEffect } from "react";
import initMain from "../../assets/js/main";
import "../../assets/css/diningDetail.css";

// import required modules

/* eslint-disable */
function Loungebar() {
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
            <h3 class="text-center">라운지 & 바</h3>
          </div>
          <hr />
          <h2>최고의 오션뷰를 자랑하는 더 라운지</h2>
          <p className="content-text">
            {" "}
            감각적인 시그니처 디쉬와 페스튜리를 선보입니다. 바다위로 펼쳐지는
            선셋을 바라보며 여유롭고 편안한 분위기를 즐길 수 있습니다.
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
            <div className="loungebar1 item">
            </div>
            {/* 1st 이미지 끝 */}

            {/* 2nd 이미지 시작 */}
            <div className="loungebar2 item">
            </div>
            {/* 2nd 이미지 끝 */}

            {/* 3rd 이미지 시작 */}
            <div className="loungebar3 item">
            </div>
            {/* 3rd 이미지 끝 */}

            {/* 4th 이미지 시작 */}
            <div className="loungebar4 item">
            </div>
            {/* 4th 이미지 끝 */}

            {/* 5th 이미지 시작 */}
            <div className="loungebar5 item">
            </div>
            {/* 5th 이미지 끝 */}

            {/* 캐러셀 이미지 끝 */}
          </div>
      </div>
    </div>
  );
}

export default Loungebar;
