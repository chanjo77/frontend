// undefined은 변수를 선언하고 값을 할당하지 자료형이 없는 상태이다. 
//null은 변수를 선언하고 빈 값을 할당한 상태(빈 객체)이다. 

// undefined case 1
var a;
console.log(a); // undefined
console.log(typeof a); // undefined

// undefined case 2

const obj = {};
obj.prop; // undefined

// undefined case 설명 
//JavaScript는 값이 대입되지 않은 변수 혹은 속성을 사용하려고 하면 undefined를 반환합니다.
//undefined는 ‘아무 값도 할당받지 않은 상태’를 의미합니다.
//var 키워드로 선언한 변수는 undefined로 초기화됩니다.
// undefined 뜻 JavaScript언어에서 '아직 할당하지 않은 값'을 표현하기 위해 사용하는 값.


//null case 1

var nullType = null;
console.log(typeof null); // object

//null case 2

var element = document.querySelector('.myClass');
console.log(element); // null

// null case 설명
// null은 개발자가 변수에 의도적으로 '비어있는' 상태를 표현하기 위해 사용되며, typeof null은 JavaScript의 오래된 버그로 인해 "object"를 반환합니다. 
// DOM 메서드인 document.querySelector와 같이 요소를 찾지 못할 때에도 null을 반환합니다
// element 변수의 값이 null인 경우는 해당 클래스를 가진 요소가 존재하지 않는 경우입니다.



//비교연산자

// undefined case 1
var a;
console.log(a === null);       // Output: false
console.log(a === undefined);  // Output: true

// undefined case 2
const obj = {};
console.log(obj.prop === null);       // Output: false
console.log(obj.prop === undefined);  // Output: true

// null case 2
var element = document.querySelector('.myClass');
console.log(element === null);       // Output: true
console.log(element === undefined);  // Output: false

var nullType = null;

// typeof null의 결과가 "object"이지만, 비교 연산자를 사용하여 null인지 확인합니다.
if (nullType === null) {
  console.log('변수 nullType은 null입니다.');
} else {
  console.log('변수 nullType은 null이 아닙니다.');
}

var undefinedType;

// 변수가 undefined인지 확인합니다.
if (undefinedType === undefined) {
  console.log('변수 undefinedType은 undefined입니다.');
} else {
  console.log('변수 undefinedType은 undefined가 아닙니다.');
}




