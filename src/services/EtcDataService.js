// 비동기 통신 라이브러리 import
import http from "../utils/http-common";

//    전체 조회 함수
const getEtcAll = () => {
  return http.get(`/etc`);
};

  //  count(개수) + MulEprice 컬럼 데이터 업데이트
const updateCountMulEprice = (count,eno) => {
  return http.put(`/etc/update/count/mulEprice?count=${count}&eno=${eno}`);
};

// 다른 페이지에서 사용할 수 있게 export 함
export default {
  getEtcAll,
  updateCountMulEprice
};
