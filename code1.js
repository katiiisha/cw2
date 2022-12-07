const num1 = +prompt()
switch (num1) {
    case 1:
        console.log("Январь")
        break;
    case 2:
            console.log("Февраль")
        break;
    case 3:
            console.log("Март")
        break;
    case 4:
            console.log("Апрель")
        break;
    case 5:
            сonsole.log("Майл")
        break;
    default:
        сonsole.log("не верно")
        break;
}
//
const num2 = prompt()
switch (num2.toLocaleLowerCase()) {
    case "катя":
        console.log("Маежев")
        break;
    case "Маежев":
        console.log("катя")
        break; 
    default:
        сonsole.log("не верно")
        break;
}
//терминальный оператор 
num3 < 20 ? console.log(1) : console.log(2)
//сокращенная версия оператора if
let num5 = prompt(name6)
num5 = "kate" ? console.log("mend") : num5 = "mend" ? console.log("kate") : console.log("eroor")
//цикл
for (let i = 0; i < 20; i++) { 
    console.log(i)
}

let num = prompt("Введите число")
for (i = num; i >0; i --) { 
    alert(`${i}`)
}