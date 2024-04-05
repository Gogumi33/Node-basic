# Node.js 1주차 스터디

# 백엔드 기초
-> Node.js를 배우기 위해선 우선 서버-클라이언트 관계에 대해 알아야 한다.

## 서버-클라이언트
* 주방 : 서버(언어-JAVA, JS, PHP)
* 식당 고객 : 클라이언트
* 서빙 알바 : http 프로토콜

![](https://velog.velcdn.com/images/king33/post/368bd6a0-8645-474f-8609-9e24a3862bc8/image.png)


## Node.js
그렇다면 Node.js란? 위 서버언어인 JS를 백엔드 개발에 사용하기 위한, JS코드를 브라우저 '밖'에서 실행할 수 있게 해주는 런타임(JS 실행가능) 환경이다.
즉, 사용자 컴퓨터에서도 돌아가고 서버에서도 돌아간다!

**_최대 장점 - JS는 보통 프론트엔트 언어로 알려져있으나, 이를 백엔드에서도 사용할 수 있다는 것._**
 +) 다른사람이 만들어 놓은 모듈을 터미널에서 설치만 해줌으로써 바로 가져와 사용할 수 있음.
 +) 커뮤니티도 매우 크게 잘 형성되어있음.
 +) 몽고DB 또한 JS로만으로도 사용가능.
 
--- 

## 서버
웹 서버를 만든다?
-> 컴퓨터를 웹 서버로 동작하게 하는 프로그램을 만든다.

## VS Code에서 .js파일 바로 실행하기
1. 우선 터미널(powershell)을 연다.
2. 터미널에서 cd명령어 - `cd 폴더명` 을 통해 실행할 js파일이 있는 폴더로 이동해준다
+) cd.. : 부모 폴더로 이동

3. `node 폴더명.js` 입력 시 js파일 실행됨.

## npm이란?
Node Package Manager의 약자로, Node.js설치 시 npm도 같이 설치된다. JS 라이브러리를 비롯해 프레임워크, 플러그인 등 다양한 다른사람들이 만들어놓은 것들을 내려받아 사용할 수 있게 해주는 도구이다.

사용하기 위해선 초기화 필요.
```
npm init
```
이후 나오는 것들은 일단 엔터로 다 넘어간 뒤, `Is this OK? (yes)` 창이 뜨면 yes만 입력해준다.

## npm 설치된 패키지 삭제
```
npm uninstall 패키지명
```
-> package.json 에서 설치된 모든 패키지들을 확인할 수 있다.

---

# JS 기본문법
모르는 것만 간단히 정리한다.

* setTimeout() - 지정한 시간 이후에 실행되도록 하는 Timer 함수이다.
```
setTimeout(() => {
	console.log("haha");
}, 2000); // 2000은 2초.
```

## JS 가장 큰 특징
**쓰레드가 '1개'이기 때문에 무조건 빨리 끝나는 작업부터 우선순위로 처리한다.**
#### 💻_이를 '동기'라고 한다._ 

## 비동기처리
프로그램에서 처리해야 할 기능들을 원하는 순서에 맞게끔 조절을 해주는 것.
-> React.js에서도 API를 받아올 때 비동기처리를 했었음.

---

# Node.js 모듈
## 모듈이란?
프로그램을 가장 작은 단위로 쪼개어 파일 형태로 저장해놓은 것. 수정이 필요할 땐 그 작은 단위만 고치면 되기 때문에 편리하다.
(변수던 함수던 코드를 조각내서 저장할 수 있다)

* CommonJS 모듈 시스템 - Node.js 기본 모듈
* ES 모듈 시스템 - ES6이후로 표준화된 모듈

-> 둘 다 공존하며 원하는 것을 사용 가능하다.

## 모듈 사용예시
```
const user = "홍길동";

module.exports = user;
```
이렇게 함으로써 밖으로 수출시키는 느낌이다.

```
const user = require("./user.js");
```
그리고 수출시킨 모듈은 이렇게 `require(파일명)`을 통해 받아오면 된다.

### 그렇다면 2개 이상의 값을 내보내야 한다면?
`module.exprots = {user1, user2};`

---

## path 모듈
파일의 경로와 관련된 모듈이다.

### 경로?
* 절대경로 - 파일/폴더의 위치를 루트(root)부터 시작해서 지금 위치까지 전체를 전부 다 보이는 것.
* 상대경로 - 기준이 되는 파일부터 나타내는 방식.

## path 모듈 사용예시
```
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
```

---

## File System 모듈
파일에 관련된 모든 모듈

#### readdir() - 해당 디렉토리 소속의 모든 파일들을 읽는다.

## readdir() 사용예시
```
const fs = require("fs");

fs.readdir("./", (err, files) => {
    if(err) console.log(err);
    else console.log(files);
});
```

결과화면 - 모든 파일들을 싹 다 보여준다.
![](https://velog.velcdn.com/images/king33/post/6e4c1586-c0b5-40a3-aa5c-8a80ec7ef9cb/image.PNG)

## 파일 입출력
* 파일 읽어오기 예시
```
const fs = require("fs");

fs.readFile("./example.txt", "utf-8", (err, data) => {
    if(err) console.log(err);
    else console.log(data); 
});
// 경로와 콜백함수 2가지 매개변수가 필요함. + 인코딩까지 적어주기(utf-8) 옵션.
```
* 파일 기록하기 예시
```
fs.writeFile("./test.txt", data, (err) => {
    if(err) console.log(err);
    else console.log(err);
})
```

---

# ⭐서버(중요)
## Node.js의 http모듈로 서버 만들기

### http 프로토콜이란?
HTTP(Hypertext Transfer Protocol)는 인터넷상에서 데이터를 주고 받기 위한 서버/클라이언트 모델을 따르는 규약이다. 애플리케이션 레벨의 프로토콜로 TCP/IP위에서 작동한다.

_참고 - https://velog.io/@dnjscksdn98/HTTP-%ED%94%84%EB%A1%9C%ED%86%A0%EC%BD%9C%EC%97%90-%EB%8C%80%ED%95%98%EC%97%AC_

## 포트
해당 서버 안에 있는 여러 프로그램중에 특정한 하나의 프로그램을 찾아가는 번호이다.
보통 IP주소 뒤에 : 로 붙어서 같이 나옴

## 본격 서버다루기
1. 우선 Node.js에 있는 http 모듈을 가지고 와야한다.
2. 그 후 모듈을 담아둔 http변수에 createServer() 함수를 작동시킨다.
```
const http = require("http");
const server = http.createServer((req, res) => {
    console.log("요청 발생");
}); // 요청, 응답
```
3. 이제 서버는 다 만들었으므로 listen() 함수를 통해 서버를 실행시켜야 한다.
```
server.listen(3000, () => {
    console.log("서버가 실행 중");
})
```

그렇다면 이제 localhost:3000 의 주소로 서버가 실행중인 것이다.

**이 때, 웹을 켜고 위 주소를 입력하게 되면 요청이 발생한다.**

## 서버 화면에 원하는 텍스트띄우기
```
const http = require("http");
const server = http.createServer((req, res) => {
    res.setHeader("Content-type", "text/plain");
    res.write("Hello Node"); // res라는 응답 객체에 write를 써서 화면에 띄우는 방법.
    res.end();
});
```

---

# 라우팅
라우팅이란? 클라이언트에서 들어오는 요청에 따라 이에 맞는 함수를 각각 실행하는 것을 의미한다.
즉, 사용자가 입력하는 URL에 따라 웹에서 각기 다른 내용을 보여줄 수 있다.
(React.js의 id값과 쿼리를 이용한 화면전환과 같은 개념)

## 라우팅 다뤄보기
```
const http = require("http");
const server = http.createServer((req, res) => {
    // req.url : 요청경로
    // req.method : 요청방식

    const { url, method } = req;

    res.setHeader("Content-type", "text/plain");

    if(method==="GET" && url==="/home"){
        res.write("HOME"); // res.end("Home"); 과 같은의미.
        res.end();
    } else if(method==="GET" && url==="/about"){
        res.end("ABOUT");
    } else {
        res.end("NOT FOUND!!!");
    }
});

server.listen(3000, () => {
    console.log("서버가 실행 중");
})
```

---

# 익스프레스 프레임워크
위 라우팅을 훨씬 쉽게 다룰 수 있게 도와주는 프레임워크이다.

+) 미들웨어 / 템플릿 엔진 등 다양한 장점

## 설치 - VS Code
1. `npm init`으로 젤 먼저 초기화작업
2. `npm i express` 로 익스프레스 설치
 -> package.json 에 "express" 버젼으로 설치확인 가능.
3. nodemon설치 : 계속 개발할 때 마다 서버 끄고 해야하는 불편함 개선
`npm i nodemon --save-dev -g` (앱 코드자체엔 영향X)

## 익스프레스 사용예시
```
const express = require("express");
const app = express(); // express에서는 createServer() 해줄 필요 X. 이렇게 실행만 해주면 됨.

app.get("/", (req, res) => { // 매우 간단함 - 요청방식 : 함수이름
    res.send('Hello, Node!');
})

app.listen(3000, () => {
    console.log("서버가 실행중입니다.");
})
```