var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split(' ');

var a = parseFloat (lines[0]);
var b = parseFloat (lines[1]);
var c = parseFloat (lines[2]);
var p = a + b + c;
var x = a + b;
var ar = x * c;
var t = ar / 2;

if (b + c > a && a + c > b && a + b > c){
  console.log('Perimetro = ' + p.toFixed(1));
} else {
  console.log('Area = ' + t.toFixed(1));
}
