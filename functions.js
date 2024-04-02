function splitAndSort() {
    let input = document.getElementById("input").value;
    let listArray = input.split(",").map(item => item.trim());
    listArray.sort();
    let output = listArray.join(", ");
    document.getElementById("result").innerText = output;
}
