const mergeSort=(arr)=>{
    const len=arr.length
    if(len<2)
    return arr
    const middle=Math.floor(len/2)
    const left=arr.slice(0,middle)
    const right=arr.slice(middle)
    return merge(mergeSort(left),mergeSort(right))
}
const merge=(left,right)=>{
    const result=[]
    while(left.length>0&&right.length>0)
    {
        if(left[0]<=right[0])
        result.push(left.shift())
        else
        result.push(right.shift())
    }
    while(left.length)
    {
       result.push(left.shift())
    }
    while(right.length)
    {
       result.push(right.shift())
    }
    return result
}
const arr=require("./array")
const a=mergeSort(arr)
console.log(a);