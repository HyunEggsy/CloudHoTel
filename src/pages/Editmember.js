import React, { useState, useEffect } from "react";
// 통신 라이브러리(CRUD)

import authservice from "../services/auth.service";
// useParams : 다른페이지에서 기본키(cid)를 전달받는 함수 import
import { useParams, useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import Mypagelist from "./Mypagelist";

import "../assets/css/mystyle.css";

function Editmember() {
  // 변수 정의
  // 다른페이지에서(전체조회) 기본키(mno)를 전달받는 함수
  const { uno } = useParams();

  // let navigate = useNavigate();
  // const editNavi =()=>{
  //   navigate("#");
  //  };

  const newform = () => {
    // Add 버튼 클릭하면 실행되는 함수

    setCurrentEditmem(initialEditmemberState);
  };

  // * 고객 객체 초기화 정의
  const initialEditmemberState = {
    uno: null,
    id: "",
    password: "",
    username: "",
    email: "",
    phone: "",
  };

  // 벡엔드로 전송할 객체(수정된 고객객체)를 위한 변수
  const [currentEditmem, setCurrentEditmem] = useState(initialEditmemberState);
  // 수정 성공 메세지를 위한 변수
  const [message, setMessage] = useState("");

  // 함수 정의
  // 화면이 뜰때 고객번호(mno)로 1건조회(상세조회)를 위한 함수
  const getEditmem = (uno) => {
    // 고객id(cid) 여기선 회원번호?(mno)벡엔드로 상세조회 요청
    authservice.getUserId(uno)
      .then((response) => {
        // 성공: response.data(벡엔드에서 전송한 데이터)
        // 벡엔드에 전송한 수정된 고객객체를 변수에 저장
        setCurrentEditmem(response.data);
        // 콘솔 로그 출력
        console.log("getEditmem",response.data);
      })
      .catch((e) => {
        // 실패
        console.log(e);
      });
  };

  // 화면이 뜨자마자 실행되는 이벤트 함수
  // [변수] : 변수의 값이 변경되면 앞의 함수가 재실행됨
  useEffect(() => {
    // 고객번호(mno) 있으면 상세조회(getEditmem(mno)) 실행
    if (uno) getEditmem(uno);
  }, [uno]);

  // 수동 바인딩 : 화면값 변경 -> 변수값도 같이 변경하는 코딩
  const handleInputChange = (event) => {
    const { name, value } = event.target; // 화면값
    // 여기서 name은 뭔 네임인거지 그냥 변수인건가 밑에 input에 들어간 name,value?
    // 변수에 값을 저장
    setCurrentEditmem({ ...currentEditmem, [name]: value });
  };

  

  // 수정버튼 클릭시 실행되는 함수
  const updateEditmem = () => {
    // 벡엔드로 수정 요청(고객id, 수정된고객객체)
    authservice.updateUser(currentEditmem.username,currentEditmem.email, currentEditmem.phone,currentEditmem.uno )
      .then((response) => {
        // 성공 : response.data(벡엔드에서 전송된 데이터)
        // 콘솔 로그 출력
        console.log(response.data);
        // 화면에 성공 메세지 출력
        alert("수정되었습니다.");

      })
      .catch((e) => {
        // 실패
        console.log(e);
      });
  };

  const [currentEdit, setCurrentEdit] = useState("");

  useEffect(()=>{
   let localuser=  JSON.parse(localStorage.getItem("user"))  
   console.log(localuser.id)  
   setCurrentEdit(localuser.id)   
   getEditmem(localuser.uno)  
                                                       
},[]);

  return (
    
    <div className="myPapeContainer">
      <div className="myPageTop">
        <div className="myPageBTit">
          <p>My Page</p>
        </div>
        <div className="myPageTit">
          <p>회원정보</p>
        </div>
      </div>
      <div className="myPageContents">
      <div className="myPageCom">
            <Mypagelist />
          </div>
      </div>

      <div>
        <div id="edit_container">
          <form action="#" id="editmemfrom">
            {/* <!-- fieldset : 외곽 박스를(그룹핑) 그려주는 html 태그 --> */}
            <fieldset>
              {/* <!-- legend : 외곽 박스의 제목 html 태그 --> */}
              <legend> 회원 정보 </legend>
              {/* <!-- 입력란 시작 --> */}
              <ul id="user-info">
                <li>
                  {/* <!-- label 클릭하면 input 양식에 포커스가 옴 --> */}
                  {/* <!-- input - required : 필수입력 --> */}
                  <label htmlFor="username" class="edit_field">
                    이름
                  </label>
                  <input
                    type="text"
                    id="username"
                    class="edit_input-box"
                    placeholder=""
                    required
                    value={currentEditmem.username}
                    onChange={handleInputChange}
                    name="username"
                  />
                </li>
                {/* name 도 써야하나..? 아 여기 name이 위에 수동바인딩 그 name인가 */}

                <li>
                  {/* <!-- label 클릭하면 input 양식에 포커스가 옴 --> */}
                  {/* <!-- input - required : 필수입력 --> */}
                  <label htmlFor="id" class="edit_field">
                    아이디
                  </label>
                  <input
                    type="text"
                    id="id"
                    class="edit_input-box"
                    placeholder="영문과 숫자로 입력"
                    required
                    value={currentEditmem.id}
                    onChange={handleInputChange}
                    name="id"
                  />
                </li>

                <li>
                  {/* <!-- 비밀번호 --> */}
                  {/* <!-- 유효성 체크 : 자리수, 필수입력 --> */}
                  <label htmlFor="password" class="edit_field">
                    비밀번호
                  </label>
                  <input
                    type="password"
                    id="password"
                    class="edit_input-box"
                    placeholder="8자리 이상 비밀번호 적기"
                    minlength="8"
                    required
                    value={currentEditmem.password}
                    onChange={handleInputChange}
                    name="password"
                  />
                </li>

                <li>
                  {/* <!-- 비밀번호 --> */}
                  {/* <!-- 유효성 체크 : 자리수, 필수입력 --> */}
                  <label htmlFor="password" class="edit_field">
                    비밀번호 확인
                  </label>
                  <input
                    type="password"
                    id="password"
                    class="edit_input-box"
                    placeholder="8자리 이상 비밀번호 적기"
                    minlength="8"
                    required
                    value={currentEditmem.password}
                    onChange={handleInputChange}
                    name="password"
                  />
                </li>

                <li>
                  {/* <!-- email --> */}
                  {/* <!-- input type = email -> 유효성체크 --> */}
                  <label htmlFor="email" class="edit_field">
                    이메일
                  </label>
                  <input
                    type="email"
                    class="edit_input-box"
                    id="email"
                    required
                    value={currentEditmem.email}
                    onChange={handleInputChange}
                    name="email"
                  />
                </li>
              </ul>
              {/* <!-- 입력란 끝 --> */}
              <ul id="edit_buttons">
                {/* <!-- 서브밋 버튼 --> */}
                <li>
                  <button
                    type="submit"
                    class="btn btn-outline-dark"
                    onClick={updateEditmem}
                  >
                    수정하기
                  </button>
                  {/* 수정 성공 메세지 출력 */}
                  <p>{message}</p>
                </li>
                {/* <!-- 리셋 버튼 --> */}
                <li>
                  <button
                    type="reset"
                    class="btn btn-outline-dark"
                    onClick={newform}
                  >
                    취소
                  </button>
                </li>
              </ul>
              {/* <!-- 서브밋/리셋 버튼 끝 --> */}
            </fieldset>
          </form>
          {/* <!-- 서브밋/리셋 버튼 시작 --> */}
        </div>
      </div>
    </div>
  );
}

export default Editmember;
