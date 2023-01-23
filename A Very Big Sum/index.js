
function aVeryBigSum(ar) {
    let sum = BigInt(0);
    for(let i of ar){
        sum += BigInt(i)
    }
  return sum
}