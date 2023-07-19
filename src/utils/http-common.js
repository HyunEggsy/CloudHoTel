// 통신라이브러리
import axios from "axios";

export default axios.create({
    // springboot 서버 기본 주소 (REST api 주소)
    baseURL: "http://localhost:8000/api",
    // 문서 전송 양식(종류) : json(제이선,제이슨...)
    headers: {
        "Content-Type": "application/json"
    }
});