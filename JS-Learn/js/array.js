let abc=["a","b","c","d"] // מערך 
let fro=["bnana","melon","coconuts","orange","watermelon"]
let user = "koko"

let temp = fro.slice(2)// מראה את המערך מהמספר של האינדקס שאתה בוחר
console.log(temp)
abc[4] = "z" // להוסיף עוד תו במערך

abc.push("E")//מוסיף תא בסוף המערך 

abc.unshift("J")// מוסיף תא בתחילת המערך

let lastDel = abc.pop();//מוחק את התו האחרון

let SearchD = abc.indexOf("d")
abc.splice(SearchD,1);

console.log(abc) // פקודה שמדפיסה בקונסול 
let firstDel=abc.shift();
console.log(lastDel)
console.log(firstDel)

console.log(user)
