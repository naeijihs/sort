const quickSort=(left,right)=>{
        if(left>=right)
        return
        let i=left
        let j=right
        const temp=arr[left]
        while(i<j)
        {   
            while(arr[j]>=temp&&i<j)
            {
                j--
            }
            while(arr[i]<=temp&&i<j)
            {
                i++
            }
            if(i<j)
            {
                const t=arr[i]
                arr[i]=arr[j]
                arr[j]=t
            }
        }
        arr[left]=arr[i]
        arr[i]=temp
        quickSort(left,i-1)
        quickSort(i+1,right)
}
const arr=require('./array')
quickSort(0,arr.length-1)
console.log(arr);