// function romanize(num){
//     const symbols = {
//         M: 1000,
//         CM: 900,
//         D: 500,
//         CD: 400,
//         C: 100,
//         XC: 90,
//         L: 50,
//         XL: 40,
//         X: 10,
//         IX: 9,
//         V: 5,
//         IV: 4,
//         I: 1,
//       };
//     let ans= ''
//     for(i in symbols){
//         while(num>=symbols[i]){
//             ans+=i;
//             num-=symbols[i]
//         }
//     }
//     return ans
// }

// console.log(romanize(34))

// function major(arr,n)
// {
//   //your code here
  
//   let max = 0
//   let index=-1
//   for(let i=1;i<=n;i++){
//     let count = 0
//     for(let j=1;j<=n;j++){
//       if(arr[i]==arr[j]){
//         count++;
//       }
//       if(count>max){
//         max=count
//         index=i

//       }
//     }
//   }
//   return arr[index]
// }

// arr=[2,2,5]
// n=3
// console.log(major(arr,n))

// function divby3and5(num){
//     let arr=[]
//     for(let i=1;i<=num;i++){
//         if((i%3)===0 && (i%5)===0){
//             arr.push(i)
//         }
//     }
//     return arr 
// }

// console.log(divby3and5(32))


// let cap = (name)=>{
//     let arr=[]
//     let name2=''
//     arr=name.split('')
//     arr[0]=arr[0].toUpperCase()
//     for(let i=0;i<arr.length;i++){
//         name2+=arr[i]
//     }
//     return name2
// }



let cap = (inputs)=>{
    let cstr = inputs[0].toUpperCase()+inputs.slice(1)
    return cstr
}

console.log(cap('harsha'))