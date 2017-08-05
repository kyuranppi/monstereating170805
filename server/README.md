# 서버페이지

### API 서버를 만들어 놓은 곳이다.

1. main.js  :   서버다. MongoDB 서버 연결하고 세션을 관리하고 기본은 public/index.html로 api요청은 server/routes 로 라우팅을 해준다.
2. models   :   데이터 스키마와 해쉬처럼 간단한 메소드를 설정해둔다. 여기서는 람다식같은 에로우 메소드(=>) 를 사용 할 수 없다. 
                몽고디비에 저장하고 꺼내오는 데이터 스키마이며, 몽고디비에 저장할 때는 모델명+s(복수형)의 테이블에 저장이 된다.
                default값과 형식을 미리 지정할 수 있어 데이터의 약속을 할 수 있다.
3. routes   :   api 요청이 들어오면 주는 거다. 보통 model - route  1 대 1로 작성하는데, 조인검색이 필요한 경우에 route파일에 임포트해서 사용한다.



----
#### main.js 의 역할은 라우팅과 서버 기본 설정
- 몽고디비 서버의 어떤 데이터베이스와 통신할 것인지 설정
- static 파일 위치 public 으로 고정
- session 유지
- 기본 라우팅, api 라우팅
- 


#### url 라우팅
- http://monstereating-dnay2k.c9users.io  : 기본 public/index.html (React 어플리케이션) 으로 보낸다.
- http://monstereating-dnay2k.c9users.io/api/{원하는 api route} : server/routes/{api route}.js 로 보낸다. 라고 생각하면 된다.
- 라우팅 순서를 굳이 말하자면, /api/post 로 url이 입력되었을 경우, main.js => routes/index.js => routes/post.js



#### 리액트와의 관계
리액트 앱에서는 AJAX 통신을 기본으로 한다. 레일즈처럼 Controller가 한 화면씩 맡아서 데이터 뿌려주고 입력받는게 아니라
리액트는 클라이언트 사이드, 익스프레스는 서버사이드로 병렬적으로 구성된다. 사용자들이 웹에서 리액트 앱을 실행시키면 여러 사용자가
하나의 서버에 요청과 응답으로 최소한의 데이터만 오가는 형식이다. 마치 핸드폰 앱으로 서버에 통신하는 것처럼 된다. 
서버는 서버 개인적으로 서버와의 통신이 끊겨도 리액트는 동작한다. 리액트 내부적으로 상태 변화가 감지되면, 리프레시를 요청하고 받게된다.




