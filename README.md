# typescript
learn typescript


npm ls - g => 글로벌로 깔려있는 모듈 확인
npm i typescript - g => 타입스크립트 사용하기 위한 설치

    < tsc 명령어 필요할 때 찾아보기 >
        tsc--version => 설치된 버전 확인
tsc--init => tsconfig.json생성(자동세팅됨 다 지우고 필요할 때 추가 사용)

tsconfig.json에 dom을 기입해주는거 대신
npm i @types/node 를 설치하면 console.log 사용 가능

ts-node src/타입스크립트파일.ts => node로 전환된 파일이 생성됨

node app.js 처럼 노드를 실행시키는 거 대신
npm i -g ts-node를 설치
npm i -D ts-node => devDependencies로 사용하겟다?
ts-node src/test.ts => typescript가 nodejs로 전환되면서 실행까지
______________

tsconfig.json

"include": ["src/**/*.ts"], //src 밑에 있는 .ts로 되어 있는 모든 파일들을 포함시키겠다
  "compilerOptions": {
    "lib": ["ES2021"], //dom 대신  npm i @types/node를 설치해 console.log 인터페이스를 만들어줌
    // esModuleInterop 속성이 위의 코드 처럼 true로 설정될 경우, ES6 모듈 사양을 준수하여 CommonJS 모듈을 가져올 수 있게 됨
    // e.g. typescript-test.ts => import express from "express"
    "esModuleInterop": true,
    "target": "ES2021",
    // rootDir : 컴파일될 타입스크립트 코드들의 위치를 명시
    // "rootDir":"src,
    // outDir : 컴파일 후 생성되는 js파일이 생성될 폴더명
    "outDir": "dist",
    "strictNullChecks": true
  }

_____
