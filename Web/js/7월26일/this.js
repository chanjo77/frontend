//this. 를 안 붙이면 reference Error가 뜨는데 위에 선언을 했음에도 불구하고 왜 에러가 뜨는지 원인 찾아보기

//**예시코드
//var person = {
//    name: “홍길동“,      // 이름 프로퍼티를 정의함.
//    birthday: “030219”,  // 생년월일 프로퍼티를 정의함.
//    age: 30,
//    pId: “1234567",      // 개인 id 프로퍼티를 정의함.
//    fullId: function() { // 생년월일과 개인 id를 합쳐서 주민등록번호를 반환함.
//        return this.birthday + this.pId;
//    },
//};


var person = {
    name: "홍길동",
    birthday: "030219",
    age: 30,
    pId: "1234567",
    fullId: function() {
      return this.birthday + this.pId;
    },
  };
  

  console.log(person.name);    
console.log(person.age);        
console.log(person.fullId());   