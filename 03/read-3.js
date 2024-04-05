// fs 모듈의 readFile 함수 연습하기 (결과 비교 파일은 03\results\read-3.js)

const fs = require("fs");

fs.readFile("./example.txt", "utf-8", (err, data) => {
    if(err) console.log(err);
    else console.log(data); 

    fs.writeFile("./test.txt", data, (err) => {
        if(err) console.log(err);
        else console.log(err);
    })
}); // 경로와 콜백함수 2가지 매개변수가 필요함. + 인코딩까지 적어주기(utf-8) 옵션.