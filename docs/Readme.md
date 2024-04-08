# 5주차 과제 정리

### ✨Mconponent : 사용자 정의 태그
- 사용자가 정의해서 태그 만드는 것 => 정리정돈!
- 복잡한 코드를 태그명만으로 표현 가능해짐
- 한 번 정의하면 재사용 가능
- 유지보수 향상


- 최상위 태그 무조건 있어야 함
-
``` 
class Middle extends Component {          //Middle이라는 컴포넌트 만듦
  render() {
    return (
      <div>                              //최상위 태그
        <p class="Text">{this.props.name}</p>           //코드의 props인 name 속성을 이용해 값 바꿔줄 수 있음 
      </div>
    );
  }
}
```

- <App> 사용자 정의 태그. 
[사용자 정의 태그 종류 2가지](./image01.png)
- import App from './App' ; ./App는 파일을 나타내며, App.js에서 확장자가 생략된 것

### ✨npm run start
```sh
cd (파일이 있는 폴더이름) => 파일로 이동하는거임
npm run start => 리액트 실행
```

### ✨리액트 작동 원리
- ndex.html 
```
<div id=“root”><div/> 
```
컴포넌트가 id가 root인 곳 안에다가 react로 만든 태그들이 들어간 것을 볼 수 있음. 
- id가 root인 태그 안에 들어가는 컴포넌트는 src 디렉토리 안에 넣을 것.
- 진입 파일 = index.js 
=> document.getElementById('root')이걸 기반으로 해서 index.html에서 root 접근.