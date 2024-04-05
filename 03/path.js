// path 모듈 연습하기 ( 결과 비교 파일 : 03\results\path.js)
const path = require("path"); // path 모듈 가져오기.


// join 연습 -> some\work\ex.txt 라는 경로생성.
const fullPath = path.join('some', 'work', 'ex.txt');
console.log(fullPath);

// 경로만 추출 - dirname (파일이름 ex.txt만 제외)
const dir = path.dirname(fullPath);
console.log(dir);

// 파일이름만 추출 - basename (앞 some\work 제외)
const fn1 = path.basename(__filename); // 글로벌 모듈 : 현 파일의 절대경로를 나타냄.
console.log(fn1);
const fn2 = path.basename(__filename, '.js'); // 그 파일이름만 추출하는데도 확장자(.js)도 빼줘
console.log(fn2);