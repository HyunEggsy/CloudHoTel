// 메세지 액션함수 정의

// 메세지 신호 정의(./types.js) import
import { SET_MESSAGE, CLEAR_MESSAGE } from "./types";

// 저장 메세지 함수
export const setMessage = (message) => ({
  type: SET_MESSAGE,  // 저장 메세지 신호
  payload: message,  // 에러메세지(코드)
});

// 메세지 지우기 함수
export const clearMessage = () => ({
  type: CLEAR_MESSAGE,  // 메세지 지우기 신호
});
