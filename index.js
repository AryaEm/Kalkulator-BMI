function hitungBMI() {
    const tinggi = parseFloat(document.getElementById('Tinggi').value) / 100; // Ubah ke meter
    const berat = parseFloat(document.getElementById('Berat').value);

    if (isNaN(tinggi) || isNaN(berat)) {
        alert("Harap masukkan nilai yang valid untuk tinggi dan berat badan.");
        return;
    }

    const BMI = berat / (tinggi * tinggi);

    let kategori = "";

    if (BMI < 18.5) {
        kategori = "Kekurangan berat badan";
    } else if (BMI < 24.9) {
        kategori = "Normal";
    } else if (BMI < 29.9) {
        kategori = "Kelebihan Berat badan";
    } else if (BMI >= 30) {
        kategori = "Obesitas";
    } else {
        kategori = "ga normal "
    }

    document.getElementById('hasil').innerText = `BMI Anda: ${BMI.toFixed(2)} (${kategori})`;
}
