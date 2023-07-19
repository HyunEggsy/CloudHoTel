// 비동기 통신 라이브러리 import
import http from "../utils/http-common";

// 1) 전체 조회 함수, 2) like 검색(쿼리스트링)
// page : 현재페이지, size : 페이지 당 개수
const getAll = (email, page, size) => {
    return http.get(`/member?email=${email}&page=${page}&size=${size}`);
  };

// *  const getAll = ( page, size) => {
//     return http.get(`/editmember?page=${page}&size=${size}`);
//   };

// 회원번호(mno)로 상세정보 조회요청 함수
const get = mno => {
    return http.get(`/member/${mno}`);
  };;

// * 새로운 회원정보 추가 요청함수(data(새로운회원객체))
const create = data => {
    return http.post("/member", data);
  };

// * 회원정보 수정 요청함수(dno(회원번호),data(수정될회원객체))
const update = (mno, data) => {
    return http.put(`/member/${mno}`, data);
  };

// 회원번호(dno)로 삭제요청 함수
const remove = (mno) => {
    return http.delete(`/member/deletion/${mno}`);
  };

// 회원정보 모두 삭제요청 함수
// TODO: url 수정 (editmember -> editmember/all)
const removeAll = () => {
    return http.delete(`/member/all`);
  };

// 다른 페이지에서 사용할 수 있게 export 함
const MypageDataService =  {
    getAll,
    get,
    create,
    update,
    remove,
    removeAll,
  };

export default MypageDataService;
