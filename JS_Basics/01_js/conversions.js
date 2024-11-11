let score = 33
console.log(typeof score)

let num = Number(score)
console.log(typeof num)
console.log(typeof(num)) // we can use type of also like this as on object

// "33" => convert easyly
// "33av" convert but value NaN

let booleanConvert = "rashid"

const conB = Boolean(booleanConvert)
console.log(booleanConvert)
console.log(typeof conB) // empty string "" means false && "filled string" is means true