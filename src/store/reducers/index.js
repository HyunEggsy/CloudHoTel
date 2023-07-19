// 목적 : 여러 리듀서를 1개로 합치는 역할
import { combineReducers } from "redux";
import auth from "./auth";
import message from "./message";

// reducer : auth, message 합치기
// 리듀서는(저장소) 오직 1개만 사용가능하므로 합치는 작업이 필요함
// 사용법) combineReducers({리듀서1, 리듀서2...})
export default combineReducers({
  auth, // 리듀서(로그인/로그아웃)
  message,  // 리듀서(에러메세지)
});
