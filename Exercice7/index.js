function convertToBinary() {
    let deci = document.getElementById("decimalInput").value
    let bin = Number(deci).toString(2)
    isNaN(bin) ? document.getElementById("binaryResult").textContent = "" : document.getElementById("binaryResult").textContent = bin.toString()
}

