const argvs = process.argv
const argv = argvs.slice(2)
const operator = argv[0]
const number1 = Number(argv[1])
const number2 = Number(argv[2])

switch (operator) {
    case '+':
        console.log(number1 + number2);
        break;
        case '-':
        console.log(number1 - number2);
        break;
        case '*':
        console.log(number1 * number2);
        break;
        case '/':
        console.log(number1 / number2);
        break;

    default:
        console.log("Not a valid operator");
        break;
}





