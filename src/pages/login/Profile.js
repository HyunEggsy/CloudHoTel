// 목적 : 로그인한 유저의 정보를 간략하게 화면에 표시
import React from "react";
// 리액트에서 url 이동시 사용하는 태그(/login 화면 강제이동)
import { Navigate } from 'react-router-dom';
// 공유저장소 import
import { useSelector } from "react-redux";

const Profile = () => {
  // 공유저장소의 user 객체 가져오기
  // currentUser = 공유저장소 user 정보
  const { user: currentUser } = useSelector((state) => state.auth);

  // currentUser(현재 로그인한 유저) 없다면(불법)
  if (!currentUser) {
    // 강제 /login 페이지로 이동
    return <Navigate to="/login" />; // useNavigate(url) 와 동일한 효과
  }

  return (
    <div className="container">
      <header className="jumbotron">
        <h3>
          <strong>{currentUser.username}</strong> Profile
        </h3>
      </header>
      <p>
        <strong>Token:</strong> {currentUser.accessToken.substring(0, 20)} ...{" "}
        {currentUser.accessToken.substr(currentUser.accessToken.length - 20)}
      </p>
      <p>
        <strong>Id:</strong> {currentUser.id}
      </p>
      <p>
        <strong>Name:</strong> {currentUser.username}
      </p>
      <p>
        <strong>Email:</strong> {currentUser.email}
      </p>
      <p>
        <strong>PhoneNumber:</strong> {currentUser.phone}
      </p>
      <strong>Authorities:</strong>
      <ul>
        {/* roles : 배열(admin, superadnin 등 여러개가 등록될 수 있음) */}
        {currentUser.roles &&
          currentUser.roles.map((role, index) => <li key={index}>{role}</li>)}
      </ul>
    </div>
  );
};

export default Profile;