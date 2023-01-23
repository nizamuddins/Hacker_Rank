
function compareTriplets(a, b) {
    let alice = 0;
    let bob = 0;
    let reward = [];
    for(let i = 0;i < a.length;i++){
            if(a[i]>b[i]){
                alice++;
            }else if(b[i]>a[i]){
                bob++;
            }
    }
    reward.push(alice);
    reward.push(bob)
    
    return reward
}
