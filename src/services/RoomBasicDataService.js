// 비동기 통신 라이브러리 import
import http from "../utils/http-common";

// 조회 함수
const searchRoom = (rtype) => {
  return http.get(`/reserve?rtype=${rtype}`);
};


// 다른 페이지에서 사용할 수 있게 export 함
export default {
  searchRoom
};
