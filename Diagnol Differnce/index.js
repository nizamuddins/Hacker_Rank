function diagonalDifference(arr) {
    let l = 0;
    let r = 0;
    
    for(let i = 0;i<arr.length;i++){
        l += arr[i][i];
    }
    let k = arr.length-1;
    for(let j = 0;j < arr.length;j++){
        while(k >= 0){
            r += arr[j][k];;
            k--;
            break;
        }
    }
    
    let diff = l-r;
    if(diff < 0){
        let val = String(diff).split('');
        val.shift(); 
        diff = +(val.join(''))
    }
    return diff; 
 }