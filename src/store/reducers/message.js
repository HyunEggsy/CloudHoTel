// 2nd 리듀서 : 1) 메세지 저장, 2) 메세지 지우기

// 신호(types.js) 파일을 import
import { SET_MESSAGE, CLEAR_MESSAGE } from "../actions/types";

// 초기화 객체 : 빈객체
const initialState = {};

// 2nd 리듀서 함수 정의
export default function (state = initialState, action) {
  // 구조분해 할당
  // action.type(신호), action.payload(데이터)
  const { type, payload } = action;

  switch (type) {
    // 메세지 저장 신호
    case SET_MESSAGE:
      return { message: payload }; // 에러메세지 저장

    // 메세지 지우기 신호
    case CLEAR_MESSAGE:
      return { message: "" };  // "" 저장
    // 고정
    default:
      return state;
  }
}
