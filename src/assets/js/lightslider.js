/* eslint-disable */
export default function initLightslider() {
  $(document).ready(function () {
    $("#lightSlider").lightSlider({
       item: 1,
       thumbItem:5,
       auto: true,
       pauseOnHover: true,
       loop: true,
       pause: 1000,
       gallery: true,

      //  autoWidth: true,
    });
  });
}
