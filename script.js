function compute() {
    p = 0; r = 0; y = 0;
    p = document.getElementById("principal").value;
    r = document.getElementById("rate").value;
    y = document.getElementById("years").value;
    document.getElementById("result").innerText = (calc(p, r, y));
}

function calc(p, r, y) {
    sum = Number(p);
    for (i = 0; i < y; i++) {
        sum = sum + (sum * (r / 100));
        console.log(sum);
    }

    return sum;
}
