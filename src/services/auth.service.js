// 벡엔드 연동 js
import axios from "axios";

import http from '../utils/http-common';

// const API_URL = "http://localhost:8000/api/auth/";

// 회원가입 함수
const register = (username, id, password, email, phone) => {
  return http.post("/auth/signup", {
    username,
    id,
    password,    
    email,
    phone,
  });
};

// 로그인 함수
const login = (id, password) => {
  return http
    .post("/auth/signin", {
      id,
      password,
    })
    .then((response) => {
      if (response.data.accessToken) {
        console.log(response.data);
        localStorage.setItem("user", JSON.stringify(response.data));
      }

      return response.data;
    });
};

const logout = () => {
  localStorage.removeItem("user");
};

export default {
  register,
  login,
  logout,
};
