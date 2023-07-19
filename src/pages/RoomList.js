import React, { useState, useEffect } from "react";
import RoomDataService from "../services/RoomDataService";
import { Link } from "react-router-dom";

function roomList() {
  const [room, setRoom] = useState([]);
  const [searchSelectCheckin, setSearchSelectCheckin] = useState("");
  // 검색어를 저장할 변수
  const [searchRoomtype, setSearchRoomtype] = useState("standard");
  const [searchPeople, setSearchPeople] = useState("2");

  // 함수 정의
  // 수동 바인딩 : 화면입력값 변경 -> 변수도 변경 코딩
  // onchange 함수 : Keyword 검색
  const onChangeSearchRoomtype = (e) => {
    setSearchRoomtype(e.target.value); // 변수에 저장
  };

  // 셀렉트 박스 값 변경시 실행되는 함수
  // 수동바인딩 : 화면값 변경 -> 변수값도 변경위해 필요
  const onChangeSearchSelectCheckin = (e) => {
    setSearchSelectCheckin(e.target.value);
  };

  const onChangeSearchSelectPeople = (e) => {
    setSearchPeople(e.target.value);
  };

  const retrieveRoom = () => {
    console.log(
      "retrieveRoom",
      searchSelectCheckin,
      searchRoomtype,
      searchPeople
    );

    RoomDataService.getAll(searchSelectCheckin, searchRoomtype, searchPeople)
      .then((response) => {
        const { room, searchSelectCheckin, searchRoomtype, searchPeople } =
          response.data;

        setRoom(room);
        console.log(response.data);
      })
      .catch((e) => {
        console.log(e);
      });
  };

  useEffect(retrieveRoom, [searchSelectCheckin, searchRoomtype, searchPeople]);

  return (
    <div>
      {/* 검색어 시작 */}
      <div className="col-md-8">
        <div className="input-group mb-3">
          {/* 셀렉트박스 시작 : 2칸 */}
          <div className="col-2">
            날짜
            <select
              class="form-select"
              onChange={onChangeSearchSelectCheckin}
              value={searchSelectCheckin}
            >
                {/* 날짜어떻게?? */}
              <option key="question" value="question">
                question
              </option>
            </select>
          </div>

          <div className="col-2">
            룸타입
            <select
              class="form-select"
              onChange={onChangeSearchRoomtype}
              value={searchRoomtype}
            >
              <option key="R001" value="Standard">
              Standard
              </option>
              <option key="R002" value="Deluxe">
              Deluxe
              </option>
              <option key="R003" value="Family">
              Family
              </option>
              <option key="R004" value="Suite">
              Suite
              </option>
            </select>
          </div>
          <div className="col-2">
            인원
            <select
              class="form-select"
              onChange={onChangeSearchSelectPeople}
              value={searchPeople}
            >
              <option key="1" value="1">
                1
              </option>
              <option key="2" value="2">
                2
              </option>
              <option key="3" value="3">
                3
              </option>
              <option key="4" value="4">
                4
              </option>
            </select>
          </div>
        </div>
      </div>
    </div>
  );
}

export default roomList;
