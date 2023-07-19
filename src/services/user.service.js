// 인증/권한관리 테스트 목적의 파일
import axios from "axios";
import authHeader from "./auth-header";
import http from '../utils/http-common'

// const API_URL = "http://localhost:8000/api/test/";

// 로그인을 했건 안했건 보여주는 화면 : authHeader() (웹토큰 확인 함수)
// 사용법) http.get("URL", { headers: authHeader() })
const getPublicContent = () => {
  return http.get("/test/all");
};

// 인증/권한관리 화면 : authHeader() (웹토큰)
// ROLE_USER, ROLE_ADMIN 권한을 가진 사람만 보는 화면
// 사용법) http.get("URL", { headers: authHeader() })
const getUserBoard = () => {
  return http.get("/test/user", { headers: authHeader() });
};

// 인증/권한관리 화면 : authHeader() (웹토큰)
// ROLE_ADMIN 권한을 가진 사람만 보는 화면
const getAdminBoard = () => {
  return http.get("/test/admin", { headers: authHeader() });
};

export default {
  getPublicContent,
  getUserBoard,
  getAdminBoard,
};