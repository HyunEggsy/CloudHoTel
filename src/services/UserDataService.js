// 비동기 통신 라이브러리 import
import http from "../utils/http-common";

// 회원 전체조회 함수 + email 로 like 검색
const getUserAll = (email, page, size) => {
  return http.get(`/user?email=${email}&page=${page}&size=${size}`);
};

// 유저번호로 상세정보 조회요청 함수
const getUserId = uno => {
  return http.get(`/user/${uno}`);
};

// 새로운 유저정보 추가 요청함수(data(새로운 유저 객체))
const createUser = data => {
  return http.post("/user", data);
};

// 유저정보 수정 요청 함수 (uno, data(수정될 유저 객체))
const updateUser = (uno, data) => {
  return http.put(`auth/user/${uno}`, data);
};

// 유저번호로 삭제요청 함수
const deleteUser = (uno) => {
  console.log(uno)
  return http.delete(`/auth/user/deletion/${uno}`);
};

// 다른 페이지에서 사용할 수 있게 export 함
export default {
  getUserAll,
  getUserId,
  createUser,
  updateUser,
  deleteUser
};
