function sumDigit(suma){
    let sum = 0;
    let num = 12345;
    while (num > 0) {
        sum += num % 10;
        num = Math.floor(num / 10);


    }

}
console.log(sum(12));