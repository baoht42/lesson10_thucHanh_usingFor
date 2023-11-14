//bai 1
function bai1() {
    for (let i = 0; i < 5; i++) {
        document.write('The number is: ' + i + '<br>');
    }
}

//bai 2
function bai2() {
    let inputNum = +prompt("Enter random number bigger 0: ");
    let sum=0;
    for (let i = 1; i <= inputNum; i++) {
        sum = sum + i;
        document.write("Sum of numbers: " + sum + "<br/>");
    }

}
