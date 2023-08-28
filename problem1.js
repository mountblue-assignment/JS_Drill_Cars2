// ==== Problem #1 ====
// The dealer can't recall the information for a car with an id of 33 on his lot. Help the dealer find out which car has an id of 33 by calling a function that will return the data for that car. Then log the car's year, make, and model in the console log in the format of:
// "Car 33 is a *car year goes here* *car make goes here* *car model goes here*"


function findCarById(inventory,id){
  
   let carObj=inventory.filter((car)=>{
    if(car.id===id){
        return car;
    } 
   })
   /*we will do array distruturing bcz it return array and
   in the array it will contain obj  
   */ 
    let [car]=carObj;
    return car;
   
}
module.exports=findCarById;