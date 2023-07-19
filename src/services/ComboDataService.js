// 비동기 통신 라이브러리 import
import http from "../utils/http-common";

// 기간으로 조회하는 함수
// page : 현재페이지, size : 페이지당 개수
const selectByDate = (checkIn,checkOut, page, size) => {
  return http.get(`/combo/checkIn/checkOut/paging?checkIn=${checkIn}&checkOut=${checkOut}&page=${page}&size=${size}`);
};

// 이름/테마로 like 조회하는 함수
const selectBypname = (pname,theme, page, size) => {
  return http.get(`/combo/pname/theme/paging?pname=${pname}&theme=${theme}&page=${page}&size=${size}`);
};

// 패키지 번호(기본키)로 삭제 함수
const deletePackage = pno => {
  return http.delete(`/combo/deletion/${pno}`);
};

// 새로운 패키지정보 저장 함수
const createcombo = data => {
  return http.post(`/combo`, data);
};

// 패키지 수정 함수
const updateCombo = (pno) => {
  return http.put(`/combo/${pno}`);
};

// 패키지 + 추가사항 가격 합계 함수
const selectTotalPrice = (comboCode) => {
  return http.get(`/combo/totalPrice?comboCode=${comboCode}`);
};

// 다른 페이지에서 사용할 수 있게 export 함
export default {
  selectByDate,
  selectBypname,
  deletePackage,
  createcombo,
  updateCombo,
  selectTotalPrice
};
