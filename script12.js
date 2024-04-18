function calculateROI() {
    var investment = document.getElementById("investment").value;
    var duration = document.getElementById("duration").value;
    var rate = document.getElementById("rate").value;
    var result = document.getElementById("result");

    if (duration == "monthly") {
        var roi = (investment * (1 + (rate / 100))) - investment;
    } else if (duration == "annually") {
        var roi = (investment * (1 + (rate / 100))) - investment;
        roi = roi * 12;
    }

    result.innerHTML = "Return on Investment: $" + roi.toFixed(2);
}

document.getElementById("rate").addEventListener("input", function() {
    document.getElementById("rate-value").innerHTML = this.value + "%";
});