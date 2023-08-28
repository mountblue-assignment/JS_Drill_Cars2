const {inventory}=require('../inventory');
const findCarByIdFunc=require('../problem1');


const result=findCarByIdFunc(inventory,33);
// console.log(result);

console.log(`Car 33 is a ${result.car_year} ${result.car_make} ${result.car_model}`);
