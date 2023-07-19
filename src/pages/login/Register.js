// 목적 : 회원가입 페이지
// 외부 라이브러리 : 유효성 체크 라이브러리 사용
import React, { useState, useRef } from "react";
import "../../assets/css/login.css";
// 공유저장소(Redux) import:
// 공유함수 : useDispatch, 공유변수 : useSelector
import { useDispatch, useSelector } from "react-redux";
// 공유액션함수 import
import { register } from "../../store/actions/auth";

// 유효성 체크 라이브러리 import
import Form from "react-validation/build/form";
import Input from "react-validation/build/input";
import CheckButton from "react-validation/build/button";
import { isEmail } from "validator";
// 강제 url 이동 : 메뉴 라이브러리 import
import { Navigate, useNavigate } from "react-router-dom";
// 유효성 체크 함수
// required 필수 입력 함수
const required = (value) => {
  // value 가 없다면 : 입력값이 없다면
  if (!value) {
    return (
      // 에러 메세지 화면 출력
      <div className="alert alert-danger" role="alert">
        This field is required!
      </div>
    );
  }
};

// 유저명 유효성 체크 함수
const vusername = (value) => {
  // 3 < value(입력값) <= 20 : 정상
  // 아니면 아래가 실행 화면에 에러메세지 출력
  if (value.length < 3 || value.length > 20) {
    return (
      // 에러메세지 출력
      <div className="alert alert-danger" role="alert">
        The username must be between 3 and 20 characters.
      </div>
    );
  }
};

const vId = (value) => {
  if (value.length < 3 || value.length > 20) {
    return (
      // 에러메세지 출력
      <div className="alert alert-danger" role="alert">
        The username must be between 3 and 20 characters.
      </div>
    );
  }
};

// 패스워드 유효성 체크 함수
const vpassword = (value) => {
  // value : 입력값
  // 6 < value <= 40 : 정상
  // 아니면 아래 에러메세지가 화면에 출력
  if (value.length < 6 || value.length > 40) {
    // 에러 메세지 출력
    return (
      <div className="alert alert-danger" role="alert">
        6자리 이상 40자 이하로 입력해 주세요
      </div>
    );
  }
};

// 이메일 유효성 체크 함수
const validEmail = (value) => {
  // value 입력값을 isEmail 함수로 유효성 체크해서
  // false 이면 잘못된 email 일 경우
  if (!isEmail(value)) {
    return (
      // 에러 메세지 화면 출력
      <div className="alert alert-danger" role="alert">
        잘못된 형식의 이메일입니다.
      </div>
    );
  }
};

// 전화번호 유효성 체크 함수
function vphNumber(phoneNumber) {
  const regex = /^010(\d{3}|\d{4})\d{4}$/;

  if (regex.test(phoneNumber)) {
    console.log("휴대폰 번호가 입력 되었습니다.");
  } else {
    console.log("유효하지 않은 휴대폰 번호입니다.");
  }
}

// 리액트 함수
function Register() {
  // TODO : 변수 정의
  const form = useRef();
  const checkBtn = useRef();
  let navigate = useNavigate();

  // Id를 저장할 변수
  const [id, setId] = useState("");
  // 유저명을 저장할 변수
  const [username, setUsername] = useState("");
  // 패스워드를 저장할 변수
  const [password, setPassword] = useState("");
  // 이메일을 저장할 변수
  const [email, setEmail] = useState("");
  // 전화번호를 저장할 변수
  const [phone, setPhone] = useState("");
  // 유효성 체크 모두 통과하면 successful = true
  // 처리할 변수
  const [successful, setSuccessful] = useState(false);
  // 유효성 체크 발생시 화면에 보여줄 변수
  const { message } = useSelector((state) => state.message);
  // 공유저장소 함수 접근 정의
  const dispatch = useDispatch();

  // TODO : 함수정의
  // 수동바인딩 : 화면값이 변경되면 변수값도 변경하는 코딩
  // 유저명
  const onChangeUsername = (e) => {
    const username = e.target.value;
    setUsername(username);
  };

  // 아이디
  const onChangeId = (e) => {
    const id = e.target.value;
    setId(id);
  };

  // 수동바인딩 : 화면값이 변경되면 변수값도 변경하는 코딩
  // 패스워드
  const onChangePassword = (e) => {
    const password = e.target.value;
    setPassword(password);
  };

  // 수동바인딩 : 화면값이 변경되면 변수값도 변경하는 코딩
  // 이메일
  const onChangeEmail = (e) => {
    const email = e.target.value;
    setEmail(email);
  };

  // 수동바인딩 : 화면값이 변경되면 변수값도 변경하는 코딩
  // 전화번호
  const onChangePhone = (e) => {
    const phone = e.target.value;
    setPhone(phone);
  };

  // 회원가입 함수
  const handleRegister = (e) => {
    e.preventDefault(); // form 기본 이벤트 중단

    setSuccessful(false); // 초기화(false)

    // 폼 유효성 체크 실행
    form.current.validateAll();

    // 실행 결과 에러가 0개이면 회원가입 진행
    if (checkBtn.current.context._errors.length === 0) {
      // 공유저장의 액션함수 : reqister 실행(벡엔드통신_함수정의)
      dispatch(register(username, id, password, email, phone))
        .then(() => {
          // 성공
          setSuccessful(true); // 화면에 성공메세지 출력
          navigate("/"); // 강제 /profile 페이지로 이동

        })
        .catch(() => {
          // 실패
          setSuccessful(false); // 화면에 다시 입력박스 나옴
        });
    }
  };

  return (
    <div className="body">
      <div className="signup-wrapper">
        <h2>회원가입</h2>
        <div className="signup-form">  
          
          {/* Form 태그 : 유효성 체크, 직접접근 ref= {form} */}
          <Form onSubmit={handleRegister} ref={form}>
            {/* successful 이 false 이면 아래 div 보여줌 */}
            {/* successful 의 false 의미는 잘못 입력 */}
            {!successful && (
              <div>
                <div className="form-group">
                  {/* Input : 유효성 체크 태크 */}
                  {/* validations 속성 : required, vusername 함수로 체크함 */}
                  {/* validations={[함수명1, 함수명2...]} */}
                  {/* required 함수 : 입력안하면 에러메세지 출력로직(필수입력) */}
                  {/* vusername 함수 : 입력값이 3자보다 크고 20보다 작을때만 */}
                  <Input
                    type="text"
                    className="form-control"
                    name="username"
                    placeholder="Name"
                    value={username}
                    onChange={onChangeUsername}
                    validations={[required, vusername]}
                  />
                </div>

                <div className="form-group">
                  {/* Input : 유효성 체크 (email) */}
                  <Input
                    type="text"
                    className="form-control"
                    name="id"
                    placeholder="Id"
                    value={id}
                    onChange={onChangeId}
                    validations={[required, vId]}
                  />
                </div>

                <div className="form-group">
                  {/* Input : 유효성 체크 (password) */}
                  <Input
                    type="password"
                    className="form-control"
                    name="password"
                    placeholder="Password"
                    value={password}
                    onChange={onChangePassword}
                    validations={[required, vpassword]}
                  />
                </div>

                <div className="form-group">
                  {/* Input : 유효성 체크 (email) */}
                  <Input
                    type="text"
                    className="form-control"
                    name="email"
                    placeholder="Email"
                    value={email}
                    onChange={onChangeEmail}
                    validations={[required, validEmail]}
                  />
                </div>

                <div className="form-group">
                  {/* Input : 유효성 체크 (password) */}
                  <Input
                    type="phone"
                    className="form-control"
                    name="phone"
                    placeholder="Phone Number"
                    value={phone}
                    onChange={onChangePhone}
                    validations={[required, vphNumber]}
                  />
                </div>

                <div className="form-button1">
                  <button className="submit2">
                    가입하기
                  </button>
                </div>
              </div>
            )}

            {/* message : 유효성 체크 에러시 메세지 화면 출력 */}
            {message && (
              <div className="form-group">
                <div
                  className={
                    successful ? "alert alert-success" : "alert alert-danger"
                  }
                  role="alert"
                >
                  {message}
                </div>
              </div>
            )}
            {/* CheckButton : 유효성 체크, 직접접근 ref={checkBtn} */}
            {/* 현재 에러 개수를 체크해서 CheckButton 에 넘겨줌 */}
            <CheckButton style={{ display: "none" }} ref={checkBtn} />
          </Form>
        </div>
      </div>
    </div>
  );
}

export default Register;
