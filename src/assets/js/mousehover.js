/* eslint-disable */
export default function initmousehover() {
  // mouseenter 마우스커서가 들어오면 이벤트 함수
  $(".single-portfolio a img").mouseenter(function () {
      let changeImage = $(this).attr("src");
      $("#amenities_page").css({
        "background-image": "url(" + changeImage + ")",
      });
    });


  // mouseenter 마우스커서가 나가면 나타나는 이벤트 함수
    $(".single-portfolio a img").mouseleave(function () {
      let changeImage = $(this).attr("src");
      $("#amenities_page").css({
        "background-image": "url(" + changeImage + ")",
        
      });
    });
}
