// 리덕스 환경설정 파일
import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
// 비동기 기능 추가 라이브러리 import
import thunk from "redux-thunk";
// 합친 리듀서 import
import rootReducer from "../store/reducers";
// 리듀서에 비동기 기능 추가 변수 정의
const middleware = [thunk];

// 리듀서에 비동기 기능 추가 함수
const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
