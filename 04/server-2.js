// 요청 객체(req) 살펴보기  (결과 비교 파일 : 04\results\server-2.js)
// server-2,3,4,5는 변형시켜 적용.

const http = require("http");
const server = http.createServer((req, res) => {
    console.log(req);
}); // 요청, 응답

server.listen(3000, () => {
    console.log("서버가 실행 중");
})