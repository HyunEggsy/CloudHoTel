import http from "../utils/http-common";

const getAll = ( page, size) => {
  return http.get(`/notice?&page=${page}&size=${size}`);
};

export default{
  getAll
}