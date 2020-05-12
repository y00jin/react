## React Immutability

1. NEVER MANIPULATE this.state DIRECTLY!
2. TREAT this.state AS IF IT WERE IMMUTABLE!
3. ALWAYS USE THE setState METHOD TO UPDATE THE STATE OF COMPONENT'S UI!

이유 설명해 줄 것 :
1. this.state를 직접 조작하는 것은 React의 상태 관리를 우회하는 것 -> Against the React paradigm and Potentially Dangerous
2. 이 후, setState() 호출은 this.state를 직접 조작한 내용을 무효화 한다.
3. 나중에 성능개선 여지가 없다.
   - 객체의 변경 유무 검사시 객체 동질성 비교는 고비용
   - 객체의 변경 유무 검사시 객체 동일성 비교는 저비용 ( object1 === object2 )
4. 결론은 변경하지 말고 대체해라: 불변성의 주개념!!!!
5. Functional JavaScript 에서는 4번이 표준이 아니다(가능하지만) 따라서 의도치 않게 변경할 가능성이 있다 -> 이를 주의해야 한다.

Emaillist 불변성 위반 예시: 

새 이메일 추가
```
    this.state.emails = [{}, {}, {}]
    let emails = this.state.emails;
    emails.push({});
```

해결 방법:
1. 비파괴 배열 메소드 및 연산자: map, filter, concat, ...(ES6 spread 연산자 활용) -> project-ex01.ex01
2. Object.assign 을 이용해 변경이 적용된 객체를 새로 생성하는 방법 -> project-ex01.ex02
3. 1, 2는 Nest Object 가 있는 경우 까다롭다 -> project-ex01.ex03
    1) Object.assign은 deep copy 지원 안함
    2) deep clone을 뜨는 방법은 비용이 비싸다.
    3) 직접 하는 방법은 관리가 어렵고 코드에 실수가 있을 가능 성 많음
4. 이는 자바스크립트가 원래 저따위이기 때문에 어쩔 수 없다.

찐해결 방법:
React Addon에 복잡하고 중첩된 객체의 변경을 도와주는 immutablity helper 함수를 사용하는 것이다. -> project-ex01.ex04

1) npm i -D react-addons-update    
2) import update from 'react-addons-update';
3) 업데이트 형식
   let newObject = update( objectInState, { [WHERE] : { [WHAT]: updateValue }  }
4) 예
   속성 변경       $set
   배열 요소 추가   $push
   배열 요소 변경   $set

5) WHAT 명령
   $push      *
   $splice
   $unsift
   ---------
   $set       *
   $merge
   $apply


6) kanban-app 태스크 추가/삭제 기능 추가
   - Node API 서버 작성