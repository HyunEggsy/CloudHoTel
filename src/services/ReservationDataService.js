// 비동기 통신 라이브러리 import
import http from "../utils/http-common";

// 1) 예약 전체 조회 함수, 2)email like 검색(쿼리스트링)
// page : 현재페이지, size : 페이지당 개수
const getReservationAll = (email, page, size) => {
  return http.get(`/reservation?email=${email}&page=${page}&size=${size}`);
};

// 예약번호로 상세정보 조회요청 함수
const getReservationId = rvno => {
  return http.get(`/reservation/${rvno}`);
};

// 새로운 예약정보 추가 요청함수(data(새로운 예약 객체))
const createReservation = data => {
  return http.post("/reservation", data);
};

// 예약정보 수정 요청 함수 (rvno, data(수정될 예약 객체))
const updateReservation = (rvno, data) => {
  return http.put(`/reservation/${rvno}`, data);
};

// 예약번호로 삭제요청 함수
const deleteReservation = (rvno) => {
  return http.delete(`/reservation/deletion/${rvno}`);
};

// 다른 페이지에서 사용할 수 있게 export 함
export default {
  getReservationAll,
  getReservationId,
  createReservation,
  updateReservation,
  deleteReservation
};
