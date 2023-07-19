// 목적 : 유저가 로컬스토리지에 있으면 화면을 보여주고,
//        권한에러(401) 발생시 강제 로그아웃

import React, { useState, useEffect, useCallback } from "react";
// 공유저장소 함수 import
import { useDispatch } from "react-redux";
// 액션 함수 import
import { logout } from "../../store/actions/auth";
// 벡엔드 aixos import
import UserService from "../../services/user.service";
// import EventBus from "../common/EventBus";

const BoardUser = () => {
  // TODO : 변수 정의
  // 벡엔드에서 보내준 문자열을 화면에 표시하는 변수
  const [content, setContent] = useState("");
  // 공유저장소 함수 정의
  const dispatch = useDispatch();

  // 공유저장소의 액션함수를 호출하는 함수
  const logOut = useCallback(() => {
    dispatch(logout());  // 액션함수
  }, [dispatch]);

  // 화면 시작 이벤트 함수
  useEffect(() => {
    // 벡엔드에 UserBoard 요청
    UserService.getUserBoard()
      .then((response) => {
        // 성공 : 벡엔드 데이터를 content 저장
        setContent(response.data);
      })
      .catch((error) => {
        // 실패
        // 에러메세지를 content 저장
        const _content =
          (error.response &&
            error.response.data &&
            error.response.data.message) ||
          error.message ||
          error.toString();

        setContent(_content);

        // 권한에러 : 401 이면 강제 logout() 함수 호출
        if (error.response && error.response.status === 401) {
          // EventBus.dispatch("logout");
          logOut();
        }
      });
  }, []);

  return (
    <div className="container">
      <header className="jumbotron">
        <h3>{content}</h3>
      </header>
    </div>
  );
};

export default BoardUser;