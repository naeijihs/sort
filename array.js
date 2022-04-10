const arrayRandom=()=>{
    return Array.from({length:10}).map(()=>{
        return Math.floor(Math.random()*10)+1
    })
}
const arr=arrayRandom()
module.exports=arr
