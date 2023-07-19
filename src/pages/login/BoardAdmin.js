// 목적 : 유저가 로컬스토리지에 있으면 화면을 보여주고,
//        권한에러(401) 발생시 강제 로그아웃
import React, { useState, useEffect, useCallback } from "react";
// 공유 저장소 함수 import
import { useDispatch } from "react-redux";
import { logout } from "../../store/actions/auth";
// 벡엔드 axios 함수 import
import UserService from "../../services/user.service";
// import EventBus from "../common/EventBus";

const BoardAdmin = () => {
  // 벡엔드 전송한 문자열을 저장할 변수(화면 바인딩)
  const [content, setContent] = useState("");

  // 공유저장소 함수 정의
  const dispatch = useDispatch();
  // 액션함수 호출 하는 함수
  const logOut = useCallback(() => {
    dispatch(logout());
  }, [dispatch]);

  // 화면 시작 이벤트 함수
  useEffect(() => {
    // 벡엔드에 AdminBoard 요청
    UserService.getAdminBoard()
      .then((response) => {
        // 성공 : 벡엔드 데이터를 content 저장
        setContent(response.data);
      })
      .catch((error) => {
        // 실패 : 벡엔드 에러메세지를 content 저장
        const _content =
          (error.response &&
            error.response.data &&
            error.response.data.message) ||
          error.message ||
          error.toString();

        setContent(_content);

        // 권한에러 : 401 이면 강제 logOut() 함수 호출
        if (error.response && error.response.status === 401) {
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

export default BoardAdmin;