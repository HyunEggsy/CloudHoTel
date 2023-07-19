// 비동기 통신 라이브러리 import
import http from "../utils/http-common";

// 회원 전체조회 함수 + email 로 like 검색
const getMemberAll = (email, page, size) => {
  return http.get(`/member?email=${email}&page=${page}&size=${size}`);
};

// 멤버번호로 상세정보 조회요청 함수
const getMemberId = mno => {
  return http.get(`/member/${mno}`);
};

// 새로운 멤버정보 추가 요청함수(data(새로운 멤버 객체))
const createMember = data => {
  return http.post("/member", data);
};

// 멤버정보 수정 요청 함수 (mno, data(수정될 멤버 객체))
const updateMember = (mno, data) => {
  return http.put(`/member/${mno}`, data);
};

// 멤버번호로 삭제요청 함수
const deleteMember = (mno) => {
  return http.delete(`/member/deletion/${mno}`);
};

// 다른 페이지에서 사용할 수 있게 export 함
export default {
  getMemberAll,
  getMemberId,
  createMember,
  updateMember,
  deleteMember
};
