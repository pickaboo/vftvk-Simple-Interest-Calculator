function compute() {

    p = document.getElementById("principal").value;
    r = document.getElementById("rate").value;
    y = document.getElementById("years").value;
    sum = calc(p, r, y);
    document.getElementById("result").innerText = sum;
}

function calc(p, r, y) {
    sum = Number(p);
    for (i = 0; i < y; i++) {
        sum = sum + (sum * (r / 100));
        console.log(sum);
    }

    return sum;
}
