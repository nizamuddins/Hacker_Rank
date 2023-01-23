
function staircase(n) {
    let star = 1;
    var string = '';
    for(let i = 0;i < n;i++){
        let j = 0;
        while(j<n-star){
            string += " ";
            j++;
        };

        let k = 0;
        while(k<star){
            string += "#";
            k++;
        }
        console.log(string);
        string = '';
        star++;
    }
}