const PHI = 1.6180339887;

function hitungRasio() {
    const nilai = parseFloat(document.getElementById("input").value);
    const mode = document.getElementById("mode").value;

    if (isNaN(nilai) || nilai <= 0) {
        alert("Masukkan angka yang valid!");
        return;
    }

    let tinggi = 0,
        lebar = 0;

    if (mode === "lebar") {
        lebar = nilai;
        tinggi = nilai / PHI;
    } else {
        tinggi = nilai;
        lebar = nilai * PHI;
    }

    document.getElementById("hasil").style.display = "block";
    document.getElementById("hasil").innerHTML = `
    <strong>Mode:</strong> ${
        mode === "lebar" ? "Input Lebar" : "Input Tinggi"
    }<br>
    <strong>Lebar:</strong> ${lebar.toFixed(2)}<br>
    <strong>Tinggi:</strong> ${tinggi.toFixed(2)}
    `;
}