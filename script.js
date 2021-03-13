var tmpr = document.getElementById("rate");
var output = document.getElementById("rateout");

output.innerHTML = tmpr.value;

tmpr.oninput = function () {
    output.innerHTML = this.value;
}

function compute() {
    p = document.getElementById("principal").value;
    var r = document.getElementById("rate").value;
    y = document.getElementById("years").value;
    sum = calc(p, r, y).toFixed(2);
    var yr = (2020 + Number(y));

    document.getElementById("am").innerHTML = "If you deposit <mark>" + p + "</mark>";
    document.getElementById("ir").innerHTML = "at an interest rate of <mark> " + r + ' </mark>%';
    document.getElementById("sm").innerHTML = "You will receive an amount of <mark>" + sum + "</mark>";
    document.getElementById("iy").innerHTML = "in the year <mark>" + yr + "</mark>";

}


function calc(p, r, y) {
    sum = Number(p);
    for (i = 0; i < y; i++) {
        sum = sum + (sum * (r / 100));
        console.log(sum);
    }
    return sum;
}
