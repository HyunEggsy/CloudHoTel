// 공유 저장소 함수(리듀서(reducer))
// 1) 로그인, 2) 로그아웃, 3) 회원가입 정의

// 신호정의 파일(types.js) import
import {
  REGISTER_SUCCESS,
  REGISTER_FAIL,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  LOGOUT,
} from "../actions/types";

// 로컬스토리지에서 user 키이름에 해당하는 객체정보 가져오기
const user = JSON.parse(localStorage.getItem("user"));

// 초기화 객체
// user 가 null 이면 : isLoggedIn(false), user(null)
//      -> 로그아웃 상태
// user 가 null 아니면 : isLoggedIn(true), user(값있음)
//      -> 로그인 상태
const initialState = user
  ? { isLoggedIn: true, user }
  : { isLoggedIn: false, user: null };

// 리듀서 함수 정의
export default function (state = initialState, action) {
  // 구조분해 할당
  // action.type(신호), action.payload(데이터)
  const { type, payload } = action;

  // type : 신호
  switch (type) {
    // 회원가입 성공 신호
    case REGISTER_SUCCESS:
      return {
        ...state,
        isLoggedIn: false,   // 로그인변수 = false
      };
      // 회원가입 실패 신호
    case REGISTER_FAIL:
      return {
        ...state,
        isLoggedIn: false,   // 로그인변수 = false
      };
      // 로그인 성공
    case LOGIN_SUCCESS:
      return {
        ...state,
        isLoggedIn: true,    // 로그인변수 = true
        user: payload.user,  // user = 유저정보
      };
      // 로그인 실패 신호
    case LOGIN_FAIL:
      return {
        ...state,
        isLoggedIn: false,   // 로그인변수 = false
        user: null,          // user = null
      };
      // 로그 아웃 신호
    case LOGOUT:
      return {
        ...state,
        isLoggedIn: false,   // 로그인변수 = false
        user: null,          // user = null
      };
      // 고정
    default:
      return state;
  }
}
