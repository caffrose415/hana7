'use strict'

//f = 1;
//NaN = 1;
//Infinity = 0;                                   // 함수의 outerEnv가 global env.rec를 가리킴
function f(a, aa) { console.log('outer f', a,this); } // -> global env.rec 에 만들어지고 call stack에서 실행될때 Fn declaration에서만들어지면서
                                                // ENV가 global env.rec를 가리킴
//delete f; // error
{
    f(100);
    function f(a) { console.log('block f', a); }
}
f(200);

const u = {id:1};
f.bind(u)(200);
