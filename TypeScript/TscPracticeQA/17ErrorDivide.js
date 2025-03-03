function divideNumbers(numerator, denominator) {
    if (denominator === 0) {
        throw new Error("Cannot divide by zero");
    }
    return numerator / denominator;
}
try {
    console.log(divideNumbers(10, 2));
    console.log(divideNumbers(9, 3));
    console.log(divideNumbers(7, 0));
}
catch (error) {
    if (error instanceof Error) {
        console.error("Error:", error.message);
    }
}
