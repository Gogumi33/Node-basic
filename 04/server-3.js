// 응답 객체 확인하기 - 응답 헤더, 응답 본문, 응답 종료 (결과 비교 파일 : 04\results\server-3.js)

const http = require("http");
const server = http.createServer((req, res) => {
    res.setHeader("Content-type", "text/plain");
    res.write("Hello Node"); // res라는 응답 객체에 write를 써서 화면에 띄우는 방법.
    res.end();
});

server.listen(3000, () => {
    console.log("서버가 실행 중");
})