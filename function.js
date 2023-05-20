let name = ["Olufisayo" + " " + "Israel"]

function greet(name) {
    console.log('Hello, ' + name + '!');
}
greet(name)
  

function printFullName() {
    let firstName = "Israel";
    let middleName = "Tomide"
    let lastName = "Olufisayo";
    let fullName = firstName + " " + middleName + " " + lastName;
    return fullName;
}

console.log(printFullName());



function twoNums(a , b){
    let result = a * b
    if (result > 10) {
        console.log("more than a dacade")
    } else{
        console.log("less than a dacade")
    }
    return result
}
twoNums(10,10)