// let bankBalances = [30000,10000,50000,20000,40000]
// bankBalances = bankBalances.map(balance => {
//     if((balance.toString())[0] % 2 === 0){
//         balance = balance + 0.2*balance
//     } else{
//         balance+=0.35*balance
//     }
//     return balance

// })

// console.log(bankBalances)

// let x=5
// {x='String'}
// console.log(x)

// let arr = [1,3,5,2,0]


// let arr = [3,4,6,0,1,2]
let arr = [0,3,6,2,5,1]

arr.sort((a,b)=>a-b)
let ans = 0

for(let i=0;i<arr.length;i++){
    if(i!=arr[i+1]){
        ans = i
    }
}
console.log(ans)

