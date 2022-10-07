function birthdayCakeCandles(candles) {
    // Write your code here
let counter = 0;
let max = 0;
candles.forEach(item => {
    // 1, 4, 5, 5, 7
    if (item > max) {
        max = item;
        counter = 1;
    } else if (item === max) {
        counter ++
    }
    
});
return counter;
}
