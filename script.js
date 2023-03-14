let list = [1,1,1,1,1] // 

let result = 0
list.forEach((i) => {
    result += (i + 3)*1.001
    return result 
})


console.log(result)