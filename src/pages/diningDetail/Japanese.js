import React, { useEffect } from "react";
import initMain from "../../assets/js/main";
import "../../assets/css/diningDetail.css";


/* eslint-disable */
function Japanese() {
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
            <h3 class="text-center">일 식</h3>
          </div>
          <hr />
          <h2>
            청정해역의 엄선된 최고급 식재료와 친환경적 공간미가 돋보이는 일식의
            명가
          </h2>

          <p className="content-text">
            {" "}
            정통 일식의 맛과 멋을 사까에만의 감성으로 트렌디하게 재해석한 고품격
            미식공간입니다. 손끝에서 선보이는 품격 있는 오마카세 스시와 화려한
            퍼포먼스가 돋보이는 라이브 철판구이 코너, 프라이빗한 식사를 즐길 수
            있는 별실이 있어 소중한 분과의 만남에 더욱 좋습니다.
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
            <div className="japanese1 item">
            </div>
            {/* 1st 이미지 끝 */}

            {/* 2nd 이미지 시작 */}
            <div className="japanese2 item">
            </div>
            {/* 2nd 이미지 끝 */}

            {/* 3rd 이미지 시작 */}
            <div className="japanese3 item">
            </div>
            {/* 3rd 이미지 끝 */}

            {/* 4th 이미지 시작 */}
            <div className="japanese4 item">
            </div>
            {/* 4th 이미지 끝 */}

            {/* 5th 이미지 시작 */}
            <div className="japanese5 item">
            </div>
            {/* 5th 이미지 끝 */}

            {/* 캐러셀 이미지 끝 */}
          </div>
      </div>
    </div>
  );
}

export default Japanese;
