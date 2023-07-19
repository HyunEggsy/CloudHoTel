import React from "react";
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import "../assets/css/mystyle.css";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import UserDataService from '../services/UserDataService';
// 강제 url 이동 : 메뉴 라이브러리 import
import { Navigate, useNavigate } from "react-router-dom";
import authservice from "../services/auth.service";



function Mypagelist() {

  const initialEditmemberState = {
    uno: null,
    id: "",
    password: "",
    username: "",
    email: "",
    phone: "",
  };

  const [id, setId] = useState("")
  const [uno, setUno] = useState()
  const [delet, setDelet] = useState("")

  const [currentEditmem, setCurrentEditmem] = useState(initialEditmemberState);
  

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);



    const [userName, setUserName] = useState("")

  let navigate = useNavigate();


    //  1) db삭제 함수 
    const getReservation = () => {
     
      UserDataService.deleteUser(uno)
        .then((response) => {
          delTodoItem();
          

        })
        .catch((e) => {
          // 실패
          console.log(e);
        });
    };


    //   로컬스토리지 키 삭제 함수
  const delTodoItem = () => {
    
    // 2)로컬스토리지 값 삭제
    localStorage.removeItem("user");
    alert("삭제되었습니다.");
    setDelet("");
    // 바닐라 자바스크립트 함수 : 화면 새로고침
    navigate("/"); // 강제 /profile 페이지로 이동
    window.location.reload();
  };

  // 상세 조회
  const getEditmem = (uno) => {
    // 고객id(cid) 여기선 회원번호?(uno)벡엔드로 상세조회 요청
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
  

    useEffect(() => {
        let localuser = JSON.parse(localStorage.getItem("user"));
        console.log(localuser.id);
        setId(localuser.id);
        // setUserName(localuser.username);
    setUno(localuser.uno);
    getEditmem(localuser.uno);

      
      }, []);


  return (
   

      <div className="myPageContents">
        <div className="myPageList">
          <div className="myName">
            <p>{currentEditmem.username}님</p>
          </div>
          <div className="myListDetail">
            <div>
              <h2> 예약확인</h2>
              <p>
                <Link to={"/rmypage/" + id}>
                  객실 &middot; 패키지 예약 내역
                </Link>
              </p>
              <p>
                {/* <Link to={"/rmypage/dmypage/" + id}>다이닝 예약 내역</Link> */}
                {/* <Link to={"/rmypage/dmypage/"+id}>다이닝 예약 내역</Link> */}
              </p>
            </div>
            <div>
              <h2> 관심리스트 </h2>
              <p>
                <Link to={"/rmypage/likeroom/" + id}> 객실 &middot; 패키지 리스트</Link>
              </p>
           
            </div>
            <div>
              <h2> 개인정보관리</h2>
              <p>
                <Link to={"/rmypage/editmember/" + id}>회원정보 수정</Link>
              </p>
              
              <p onClick={handleShow}>
                회원 탈퇴
                {/* <Link to={"/rmypage/withdrawal/" + id} onClick={handleShow}>회원 탈퇴</Link> */}
              </p>

              <div>
            {/* <Button className="btn" variant="outline-primary" onClick={handleShow}>탈퇴하기</Button> */}

            <Modal show={show} onHide={handleClose} backdrop="static"
        keyboard={false}>
                <Modal.Header closeButton>
                    <Modal.Title></Modal.Title>
                </Modal.Header>
                <Modal.Body>탈퇴하시겠습니까</Modal.Body>
                <Modal.Footer>
                    <Button className="btn_close" variant="secondary" onClick={handleClose}>
                        취소하기
                    </Button>
                    <Button className="btn_close" variant="secondary" onClick={getReservation}>
                        탈퇴하기
                    </Button>
                </Modal.Footer>
            </Modal>
        </div>
            </div>
          </div>
        </div>
      </div>

  );
}

export default Mypagelist;
