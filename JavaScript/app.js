//conditional statements

//Operators.
//== equality operator
function calculator(type, first, second) {
    if (type == "*") {
        return first * second;
    } else if (type == "+") {
        return first + second;
    } else if (type == "-") {
        if (first >= second) {
            return first - second;
        } else {
            return second - first;
        }
    } else if (type == "/") {
        return first / second;
    } else if (type == "%") {
        return first % second;
    } else {
        return "Invalid operation"
    }
}

var result = calculator("%", 30, 3);

console.log(result);
