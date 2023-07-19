// 비동기 통신 라이브러리 import
import http from "../utils/http-common";

// 총 가격 계산하는 함수(룸가격 + 추가항목)
const selectTotalPrice = (checkOut,checkIn,rtype) => {
  return http.get(`/room/totalPrice?checkOut=${checkOut}&checkIn=${checkIn}&rtype=${rtype}`);
};

// 남은 방 업데이트 함수 (예약완료시 실행 할 것)
const updateRest = (checkIn, rtype,checkOut) => {
  return http.put(`/room/update/array/rest?checkIn=${checkIn}&rtype=${rtype}&checkOut=${checkOut}`);
};

// 새로운 ROOM정보 추가 요청함수(data(새로운 ROOM 객체), 예약완료시 실행 할 것)
const saveRoom = data => {
  return http.post("/room/save/array", data);
};

// 조회 함수
const searchRoom = (checkIn,checkOut,rtype) => {
  return http.get(`/booking?checkIn=${checkIn}&checkOut=${checkOut}&rtype=${rtype}`);
};

// 다른 페이지에서 사용할 수 있게 export 함
export default {
  selectTotalPrice,
  updateRest,
  saveRoom,
  searchRoom
};
