function plusMinus(arr) {
    let positive = 0;
    let negative = 0;
    let zeroes = 0;
    let n = arr.length
    
    for(let i = 0;i < n;i++){
        if(arr[i]>0){
            positive++;
        }else if(arr[i]<0){
            negative++;
        }else{
            zeroes++;
        }
    }
console.log(positive/n);
console.log(negative/n);
console.log(zeroes/n);

}