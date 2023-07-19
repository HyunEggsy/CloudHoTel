import React from 'react'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import "../assets/css/mystyle.css";
import { useState, useEffect } from "react";
import UserDataService from '../services/UserDataService';

function Withdrawal() {
  const [id, setId] = useState("")
  const [uno, setUno] = useState()
  const [delet, setDelet] = useState("")

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);



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
    window.location.reload();
  };

//   useEffect(() => {
//     let localuser = JSON.parse(localStorage.getItem("user"));
//     console.log(localuser.id);
//     setId(localuser.id);
//     setUserName(localuser.username);
//     getReservation(id);
//   }, []);

useEffect(() => {
   let localuser = JSON.parse(localStorage.getItem("user"));
    console.log(localuser.id);
    setId(localuser.id);
    setUno(localuser.uno);
 

  }, []);


  return (
     <div>
            <Button className="btn" variant="outline-primary" onClick={handleShow}>탈퇴하기</Button>

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
  )
}

export default Withdrawal