// 비동기 통신 라이브러리 import
import http from "../utils/http-common";

// 관심항목 ID로 전체 조회 함수
const getLikeAllById = (id) => {
  console.log(id);
  return http.get(`/like?id=${id}`);
};

// 새로운 정보 추가 요청함수(data(새로운 관심항목 객체))
const createLike = data => {
  return http.post(`/like`, data);
};

// Like번호(기본키)로 삭제요청 함수
const deleteLike = (lno) => {
  return http.delete(`/like/deletion/${lno}`);
};


// 다른 페이지에서 사용할 수 있게 export 함
export default {
  getLikeAllById,
  createLike,
  deleteLike
};