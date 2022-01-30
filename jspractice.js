// let harsha = {
    
//     elements:[2,3,6,7,9,47,69,87,39,43],
    
//     final: function(){
            
            
//             for(let i=0;i<=this.elements.length;i++){
//                 let factors=0
//                 for(let j=2;j<this.elements[i]/2;j++){
                    
//                     if(this.elements[i]%j==0)
//                         factors++
//                 }  
//                 if(factors<2){
//                     this.primes.push(this.elements[i])
//                     }     
//                 }
//             },  
        
//     primes: []
// }

// console.log(harsha.final())

// function swap(arr,x,y){
//     let temp = x;
//     x = y;
//     y = temp;
//     return x,y
// }

// function bubblesort(arr){
//     for(let i=0;i<arr.length;i++){
//         for(let j=i+1;i<arr.length-1;j++){
//             if(arr[j+1]<arr[j]){
//                 swap(arr,j+1,j) 
//             }
//         }
//         return arr
//     }
    
// }

// arr=[3,7,85,34,9,26,94,6,88,33,48]
// console.log(bubblesort(arr))

// let arr = [2,5,7,4,1,9]
// arr = arr.map(function rec(value){
    
//     while(value<2){
//         return value;
//     }
//     let sum=0
//     sum=rec(value-1)+rec(value-2)
//     return sum
// })
// console.log(arr)

arr=[3,7,85,34,9,26,94,6,88,33,48,7]
let isprime = arr.some((num)=>{
    
    let flag=true
    for(let i=2;i<num;i++){
        if(num%i==0)
            flag=false
            break
        
    }
    return flag
})
console.log(isprime)