const  numbers = prompt("vergulle ayrilmis 5 eded daxil edin");
const arr = numbers.split(",");

let enKicik =  arr[0];
for (let number of arr){
   if (+enKicik > +number) {
    enKicik = +number;
   }
}
console.log(enKicik);

