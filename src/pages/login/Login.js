import React, { useState, useRef } from "react";
import "../../assets/css/login.css";
// 공유저장소 import
// useDispatch : 공유함수, useSelector : 공유변수
import { useDispatch, useSelector } from "react-redux";
// 공유 액션함수 import : login
import { login } from "../../store/actions/auth";

// 강제 url 이동 : 메뉴 라이브러리 import
import { Navigate, useNavigate } from "react-router-dom";

// 유효성 체크 라이브러리 import
import Form from "react-validation/build/form";
import Input from "react-validation/build/input";
import CheckButton from "react-validation/build/button";

// 유효성 체크
const required = (value) => {
  // value(입력값) 이 없다면
  if (!value) {
    return (
      // 에러메세지 화면 출력
      <div className="alert alert-danger" role="alert">
        입력하세요!
      </div>
    );
  }
};

function Login() {
  // 강제 url 이동을 위한 함수
  let navigate = useNavigate();

  // TODO : 변수정의
  const form = useRef(); // Form 태그 직접접근 함수
  const checkBtn = useRef(); // checkButton 태그 직접접근 함수

  // 유저명을 위한 변수
  const [id, setId] = useState("");
  // 패스워드 위한 변수
  const [password, setPassword] = useState("");
  // 로딩 이미지(스피너)를 위한 변수
  const [loading, setLoading] = useState(false);

  // 공유저장소(auth) 변수 isLoggein
  const { isLoggedIn } = useSelector((state) => state.auth);
  // 공쥬저장소(message,)
  const { message } = useSelector((state) => state.message);

  const dispatch = useDispatch();

  // TODO : 함수정의
  // 수동 바인딩 : 화면값(유저명) 변경 -> 변수값도 변경 코딩
  const onChangeId = (e) => {
    const id = e.target.value;
    setId(id);
  };

  // 수동 바인딩 : 화면값(패스워드) 변경 -> 변수값도 변경 코딩
  const onChangePassword = (e) => {
    const password = e.target.value;
    setPassword(password);
  };

  // 로그인 함수
  const handleLogin = (e) => {
    e.preventDefault(); // form 기본 이벤트 막기(중단)

    setLoading(true); // 스피너 이미지 보이기

    // 폼 유효성 체크 시작 : form(useRef())
    form.current.validateAll();

    // 폼 체크 후 에러가 0개이면 로그인 요청 진행
    // 아니면 진행하지 않음
    if (checkBtn.current.context._errors.length === 0) {
      // 벡엔드로 로그인 요청(공유저장소 login 함수 이요)
      dispatch(login(id, password))
        .then(() => {
          // 성공
          navigate("/"); // 강제 /profile 페이지로 이동
          // 바닐라 자바함수 : 화면 새로고침
          window.location.reload();
        })
        .catch(() => {
          // 실패
          setLoading(false); // 스피너 이미지 안보임
        });
    } else {
      // 유효성 에러가 발생하면
      setLoading(false); // 스피너 이미지 안보임
    }
  };

  // 공유저장소의 공유변수 isLoggedIn 가 true 이면
  // 현재 유저가 로그인된 상태 : 로그인 할 필요 없음
  if (isLoggedIn) {
    // 강제 /profile 페이지 이동
    return <Navigate to="/profile" />;
  }

  return (
    <div className="body">
      <div className="login-wrapper">
        <h2>Login</h2>
        <div className="login-form ">
          
          {/* Form : 유효성 체크 태그 */}
          {/* validations={[함수명...]} */}
          <Form onSubmit={handleLogin} ref={form}>
            <div className="form-group">
              {/* Form : 유효성 체크 태그(유저명) */}
              <Input
                type="text"
                className="form-control"
                name="id"
                placeholder="ID"
                value={id}
                onChange={onChangeId}
                validations={[required]}
              />
            </div>

            <div className="form-group">
              {/* Form : 유효성 체크 태그(패스워드) */}
              <Input
                type="password"
                className="form-control"
                name="password"
                placeholder="Password"
                value={password}
                onChange={onChangePassword}
                validations={[required]}
              />
            </div>
            <div className="remember-check">
            <label for="remember-check">
              <input type="checkbox" id="remember-check" />
              아이디 저장하기
            </label>
            </div>
            <div className="form-button">
              <button className="submit" disabled={loading}>
                {loading && <span className="spinner-border"></span>}
                <span>Login</span>
              </button>
            </div>
            
            {/* 에러 메세지 화면 출력 */}
            {message && (
              <div className="form-group">
                <div className="alert alert-danger" role="alert">
                  {message}
                </div>
              </div>
            )}
            {/* 유효성 체크시 현재 에러 발생 개수를 저장하는 태그 */}
            <CheckButton style={{ display: "none" }} ref={checkBtn} />
            <div className="form-button">
                <a className="submit1"
                href="/register">회원가입</a>
            </div>
          </Form>
        </div>
      </div>
    </div>
  );
}

export default Login;
