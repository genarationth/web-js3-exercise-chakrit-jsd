// Exercise #1
let list = [1,1,1,1,1] // 

let result = 0
list.forEach((i) => {
    result += (i + 3)*1.001
    return result 
})
console.log(result)



// Exercise #2 part #1#2#3
const edFriends = [
    {name: 'John', birthyear: 1992}, 
    {name:'Joe', birthyear: 1993}, 
    {name:'jane', birthyear: 1994}
]

function SayToFriends (data) {
    data.forEach((friend) => {
        const presentYear = new Date().getFullYear()
        const age = presentYear - friend.birthyear
        console.log(`Welcome ${friend.name} :age ${age}`)
    })
}
SayToFriends(edFriends)

// Challenge Yourself
const students = [
    {name: 'Lorem', score: 5, grade: null},
    {name: 'dolor', score: 3, grade: null},
    {name: 'sit', score: 7, grade: null},
    {name: 'amet', score: 5, grade: null},
    {name: 'consectetur', score: 8, grade: null},
    {name: 'adipisicing', score: 10, grade: null},
    {name: 'elit', score: 11, grade: null},
    {name: 'Laudantium', score: 3, grade: null},
    {name: 'ipsa', score: 11, grade: null}
]

students.forEach((i) => {
     if (i.score < 5) {
        i.grade = 'D'
    } else if (i.score < 8) {
        i.grade = 'C'
    } else if (i.score < 11) {
        i.grade = 'B'
    } else if (i.score === 11) {
        i.grade = 'A'
    } else {
        console.log('Error') 
    }
    console.log(`Name: ${i.name} | Grade: ${i.grade}`)
})