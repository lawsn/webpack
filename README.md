웹팩
========

- whereis `` https://github.com/lawsn/webpack.git ``

시작하기
-----------

- ``npm`` 으로 전역 설치하기
> npm install -g webpack

- 특정 프로젝트 의존성으로 설치하기
> npm install --save-dev webpack

소스맵 생성
---------------

- devtool 옵션
  + source-map
  + cheap-module-source-map
  + eval-source-map
  + cheap-module-eval-source-map


웹팩 개발서버
---------------
- node.js `` Express `` 앱
  > npm install --save-dev webpack-dev-server


- 특징
  + 정적 파일을 제공
  + HMR (Hot Module Replacement)
    * 애셋을 빌드 한 후 메모리에 저장했다가 소스 파일을 수정하면 자동으로 브라우저를 새로고침
