// 비동기 통신 라이브러리 import
import http from "../utils/http-common";

// 1) 비회원 전체 조회 함수, 2)email like 검색(쿼리스트링)
// page : 현재페이지, size : 페이지당 개수
const getNonMemberAll = (email, page, size) => {
  return http.get(`/nonmember?email=${email}&page=${page}&size=${size}`);
};

// 비회원번호로 상세정보 조회요청 함수
const getNonMemberId = nno => {
  return http.get(`/nonmember/${nno}`);
};

// 새로운 비회원정보 추가 요청함수(data(새로운 비회원 객체))
const createNonMember = data => {
  return http.post("/nonmember", data);
};

// 비회원정보 수정 요청 함수 (nno, data(수정될 비회원 객체))
const updateNonMember = (nno, data) => {
  return http.put(`/nonmember/${nno}`, data);
};

// 비회원번호로 삭제요청 함수
const deleteNonMember = (nno) => {
  return http.delete(`/nonmember/deletion/${nno}`);
};


// 다른 페이지에서 사용할 수 있게 export 함
export default {
  getNonMemberAll,
  getNonMemberId,
  createNonMember,
  updateNonMember,
  deleteNonMember
};
