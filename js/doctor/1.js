// 编写一个函数， 传入[1,2,3,4,5,6,7,8,9,0] 
//return "(123) 456-7890"格式的电话号码

function getPhoneNum(arr){
    //for(let i=0; i<arr.length;i++){    
    //     console.log(arr[i])
    //}
   // return "("+arr[0]+arr[1]+arr[2]+") "
   // +arr[3]+arr[4]+arr[5]+"-"+arr[6]+arr[7]+arr[8]+arr[9]
   //``在es6中表模板字符串 提升代码的可读性
return`(${arr[0]}${arr[1]}${arr[2]}) `
   
}


console.log( getPhoneNum([1,2,3,4,5,6,7,8,9,0]))