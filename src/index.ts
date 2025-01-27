import { addition as add, soustraction } from './math'
import *  as calcul from './math'
import arithmetic from './math'

let nombreA = add(3, 7)
let nombreB = soustraction(12, 8)
let nombreC = calcul.multiplication(6, 8)
let nombreD = arithmetic.division(4, 2)

console.log(nombreA)
console.log(nombreB)
console.log(nombreC)
console.log(nombreD)