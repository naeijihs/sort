const shell=(arr)=>{
    for(let gap=Math.floor(arr.length/2);gap>0;gap=Math.floor(gap/2))
    {
        for(let i=gap;i<arr.length;i++)
        {
            let j=i
            const cur=arr[i]
            while(j-gap>=0&&cur<arr[j-gap])
            {
                arr[j]=arr[j-gap]
                j=j-gap
            }
            arr[j]=cur
        }
    }
    console.log(arr);
}
const arr=[98,10,9,1,4,3,7,6,99]
shell(arr)