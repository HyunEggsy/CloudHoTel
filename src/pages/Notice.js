import React from "react";
import { useState, useEffect } from "react";


// Pagination 페이지 태그 import
import Pagination from "@material-ui/lab/Pagination";

// 벡엔드 연동 js 파일 import
import NoticeDataService from "../services/NoticeDataService";

function Notice() {
  // 변수 정의
  // 벡엔드에서 전송된 객체배열을 저장할 변수
  const [notice, setNotice] = useState([]);

  // 공통 페이지 관련 변수
  const [page, setPage] = useState(1);
  const [count, setCount] = useState(0);
  const [pageSize, setPageSize] = useState(3);
  const pageSizes = [3, 6, 9];

  // 함수 정의

  // 화면 시작 이벤트 함수
  // [page, pageSize] : page, pageSize 값이 변경되면 useEffect가 재실행됨
  useEffect(() => {
    retrieveNotice(); // 전체 조회 함수 실행
  }, [page, pageSize]);




  // 전체 조회 함수
  const retrieveNotice = () => {
    // 백엔드로 전체 조회 요청
    NoticeDataService.getAll(page - 1, pageSize)
      .then((response) => {
        // 성공 : response.data(벡엔드에서 전송한 데이터 )
        const { notice, totalPages } = response.data;

        // 벡엔드에서 전송한 객체배열을 저장
        setNotice(notice);
        // 벡엔드에서 전송한 전체페이지 수를 저장
        setCount(totalPages);

        console.log(response.data);
      })
      .catch((e) => {
        // 실패
        console.log(e);
      });
  };

  // 공통 : 페이지 관련 함수
  const handlePageChange = (event, value) => {
    setPage(value);
  };

  // 공통 : 페이지 관련 함수
  const handlePageSizeChange = (event) => {
    setPageSize(event.target.value);
    setPage(1);
  };

  return (
    <div>
      <div className="col-lg-6 mx-auto notice_top">
        <div className="notice_inner">
          <h1 className="notice_title">NEWS</h1>
          <p className="notice_content">
            클라우드호텔의 다양한 활동소식을 만나보세요
          </p>
        </div>
      </div>

      <div className="notice_inner"> 
        <div className="row">
          {/* <div className="col-lg-10 mx-auto "> */}
          <div className="col-lg-10 mx-auto ">
            {/* 위에 col-lg-6 이거 없애면 테이블 다시 길어짐 */}
            {/* page 바 시작 */}
            <div className="col-md-8 offset-7">
              <div className="mb-5">
                Items per Page:
                <select value={pageSize} onChange={handlePageSizeChange}>
                  {pageSizes.map((size) => (
                    <option key={size} value={size}>
                      {size}
                    </option>
                  ))}
                </select>
              </div>
            </div>
            {/* page 바 끝 */}

            <table className="table tcontent">
              <thead>
                <tr>
                  <th scope="col" >제목</th>
                  <th scope="col">등록일</th>
                </tr>
              </thead>
              <tbody>
                {notice &&
                  notice.map((data, index) => (
                    <tr>
                      <td> <a href={data.titleUrl}>{data.title}</a></td>
                      <td>{data.insertTime}</td>
                    </tr>
                  ))}
              </tbody>
            </table>

            {/* page 바 시작 */}
            <div className="col-md-8 offset-3">
              <Pagination
                className="my-3"
                count={count}
                page={page}
                siblingCount={1}
                boundaryCount={1}
                variant="outlined"
                shape="rounded"
                onChange={handlePageChange}
              />
            </div>
            {/* page 바 끝 */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Notice;
