function leapYear(years) {
     if(years%4===0){
        return true;

     }
     else{
        return false;
     }
}
console.log(leapYear(2024));