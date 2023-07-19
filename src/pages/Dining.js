import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import "../assets/css/dining.css";

/* eslint-disable */
function Dining() {
  useEffect(() => {
    initmousehover();
  }, []);
  function initmousehover() {
    // mouseenter 마우스커서가 들어오면 이벤트 함수
    $(".single-portfolio img").mouseenter(function () {
      let changeImage = $(this).attr("src");
      $("#dining_page").css({
        "background-image": "url(" + changeImage + ")",
      });
      $("p").show();
    });

    // mouseenter 마우스커서가 나가면 나타나는 이벤트 함수
    $(".single-portfolio img").mouseleave(function () {
      let changeImage = $(this).attr("src");
      $("#dining_page").css({
        "background-image": "url(" + changeImage + ")",
      });
      $("p").show();
    });
  }

  return (
    <div id="dining">
      <div id="dining_page">
        <div className="dining_title">
          <strong className="dining_tname">Dining</strong>
          <br />
        </div>
        <div id="page">
          {/* <div class="row row-cols-6 box"> */}
          <div class="row box">
            <div class="col">
              <div class="hidden-portfolio">
                <p className="text-fluid">한식</p>
              </div>
            </div>
            <div class="col">
              <div class="hidden-portfolio">
                <p className="text-fluid">양식</p>
              </div>
            </div>
            <div class="col">
              <div class="hidden-portfolio">
                <p className="text-fluid">일식</p>
              </div>
            </div>

            <div class="col">
              <div class="hidden-portfolio">
                <p className="text-fluid">라운지&바</p>
              </div>
            </div>

            <div class="col">
              <div class="hidden-portfolio">
                <p className="text-fluid">카페</p>
              </div>
            </div>
          </div>

          {/* box2 큰이미지*/}
          <div class="row row-cols-6 box2">
            <div class="col">
              <div class="single-portfolio">
                <Link to={"/korea"}>
                  <img
                    src={require("../assets/images/dining/korea/korea1.jpg")}
                    alt="Image"
                  />
                  {/* <!-- <p>자세히 보기</p> --> */}
                </Link>
                <p className="korea">
                  전통의 맛을 세심하고 세련되게 표현한 한식당 예와 격을 갖추어
                  정성으로 차려낸 한식정찬을 선보입니다.
                </p>
              </div>
            </div>

            <div class="col">
              <div class="single-portfolio">
                <Link to={"/western"}>
                  <img
                    src={require("../assets/images/dining/western/western.jpg")}
                  />
                </Link>
                <p className="western">
                  우아한 실내장식과 부드러운 조명, 전문적이고 세심한 직원 서비스
                  또한 소중한 사람과의 특별한 만남을 더욱 빛나게 합니다.
                </p>
              </div>
            </div>
            <div class="col">
              <div class="single-portfolio">
                <Link to={"/japanese"}>
                  <img
                    src={require("../assets/images/dining/japanese/japanese.jpg")}
                  />
                </Link>
                <p className="japanese">
                  모던함이 느껴지는 현대적 감각의 레스토랑으로 청정해의 해산물과
                  직접 엄선한 최고급 식재료로 정통 일식의 정수를 선보입니다.
                </p>
              </div>
            </div>

            <div class="col">
              <div class="single-portfolio">
                <Link to={"/loungebar"}>
                  <img
                    src={require("../assets/images/dining/loungebar/loungebar.jpg")}
                  />
                </Link>
                <p className="loungebar">
                  세계적인 인테리어 디자이너가 디자인한 곳으로 라이프스타일과
                  취향에 따라 다양하게 이용할 수 있는 라우지&바입니다.
                </p>
              </div>
            </div>
            <div class="col">
              <div class="single-portfolio">
                <Link to={"/cafe"}>
                  <img src={require("../assets/images/dining/cafe/cafe.jpg")} />
                </Link>
                <p className="cafe">
                  세계적인 인테리어 디자이너가 디자인한 곳으로 라이프스타일과
                  취향에 따라 다양하게 이용할 수 있는 라우지&바입니다.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Dining;
