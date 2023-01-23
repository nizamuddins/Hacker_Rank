function arrayManipulation(n, queries) {
    const array = new Array(n).fill(0);
      let max = 0;
      
      for (let i = 0; i < queries.length; i++) {
          array[queries[i][0] - 1] += queries[i][2];
          array[queries[i][1]] -= queries[i][2];
      }
    let k = 0;
    while(k<array.length){
      if(array[k]>=0){
        max += array[k];
      }
      k++;
    }    
      return max;
  }
  console.log(arrayManipulation(10,[[2,6,8],[3,5,7],[1,8,1],[5,9,15]]))