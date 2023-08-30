function cal(a = 0 , b = 0 , o){
    if(!isNaN (a + b)){
        switch (o) {
            case "+":
                return (a + b)
            case "-":
                return (a - b)
            case "*":
                return (a * b)
            case "/":
                return (a / b)
            default:
                ("operator is wrong!")                
        }
    }
    return "something wrong!"
}

const firstNumber = +prompt ("enter firstNumber")
const secoundNumber = +prompt ("enter secoundNumber")
const operator = prompt ("enter operator")
console.log(cal(firstNumber , secoundNumber , operator))