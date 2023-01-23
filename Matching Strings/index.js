let stringList = ['ab','ab','abc'];
let queries =  ['ab','abc','bc']
function matchingStrings(stringList, queries) {
  // Write your code here
  let count = 0;
  let arr = [];
  let ind = 0;
  for(let i = 0;i<queries.length;i++){
      for(let j = 0;j<stringList.length;j++){
          if(queries[i] == stringList[j]){
              count++;
          }
      }
      arr[ind++] = count;
      count = 0;
  }
return arr
}
console.log(matchingStrings(stringList,queries))
