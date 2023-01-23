
function birthdayCakeCandles(candles) {
    let max = 0;
    for(let i = 0;i<candles.length;i++){
        if(max<candles[i]){
            max = candles[i]
        }
    }
    let count = 0;
    for(let j = 0;j<candles.length;j++){
        if(candles[j] == max){
            count++;
        }
    }
    return count;
}