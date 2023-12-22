let number;
let sum = 0;
while (number!=0){
    number = Number(prompt())
    if (number > 0 && number%2 == 0){
        sum += number
    }
}
console.log(sum)


