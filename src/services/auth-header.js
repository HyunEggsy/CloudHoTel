// 목적 : 웹토큰이 있는지 확인하는 함수
// http 데이터 : 헤더(웹토큰이 있음) - 바디
export default function authHeader() {
  // 로컬스토리지의 user 키이름으로 유저 객체 가져오기
  const user = JSON.parse(localStorage.getItem("user"));

  // user 객체가 null 이 아니고, accessToken 이 있으면
  // accessToken 속성 : 웹토큰(JWT)
  if (user && user.accessToken) {
    // For Spring Boot back-end
    // user.accessToken : 웹토큰
    // html 헤더 : Authorization: "Bearer 웹토큰" -> 스프링서버로 전송
    // 예) 부서전체조회 요청(+ 웹토큰) -> 서버 (웹토큰 인증)
    return { Authorization: "Bearer " + user.accessToken };
  } else {
    return {};
  }
}
