// 벡엔드 연동해서 성공하면 Public
//  실패하면(권한 에러) 에러메세지 화면 출력
import React, { useState, useEffect } from "react";

// 벡엔드 axios 함수
import UserService from "../../services/user.service";

const Home = () => {
  // TODO : 변수정의
  // 벡엔드에서 문자열 보내주면 화면에 출력하는 변수
  const [content, setContent] = useState("");

  // TODO : 함수정의
  // 화면 시작 이벤트 함수
  useEffect(() => {
    // 벡엔드로 publicContent 요청 함수
    UserService.getPublicContent()
      .then((response) => {
        // 성공
        // 벡엔드 문자열을 저장
        setContent(response.data);
      })
      .catch((error) => {
        // 실패
        // 에러메세지 저장
        const _content =
          (error.response && error.response.data) ||
          error.message ||
          error.toString();
        // 화면에 에러메세지 저장
        setContent(_content);
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

export default Home;