function mincost(arr)
{ 
//write your code here
    arr.sort((a, b) => a - b); 
    let total = 0;

    while (arr.length > 1) {
        let a = arr.shift();
        let b = arr.shift();
        let c = a + b;
        total += c;
        arr.push(cost);
        arr.sort((a, b) => a - b);
    }
    return total;
// return the min cost
  
}

module.exports=mincost;
