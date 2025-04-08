'use strict'

//f = 1;
//NaN = 1;
//Infinity = 0;
function f(a, aa) { console.log('outer f', a); }
//delete f; // error
{
    f(100);
    function f(a) { console.log('block f', a); }
}
f(200);
