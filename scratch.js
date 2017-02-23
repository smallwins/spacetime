'use strict';
const spacetime = require('./src/index');

// let s = spacetime([2017, 2, 22, 13, 45], 'Canada/Eastern');
let s = spacetime('February 22, 2017 15:42:00', 'Canada/Eastern');
s.log();

let b = s.clone().add(2, 'hours');
// b.log();
console.log(s.isSame(b, 'day'));