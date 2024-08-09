function hitungTanah() {
    const panjang = parseFloat(document.getElementById('panjang').value);
    const lebar = parseFloat(document.getElementById('lebar').value);
    const harga = parseFloat(document.getElementById('perMeter').value);
    const ppn = parseFloat(document.getElementById('ppn').value);

    const luasTanah = panjang * lebar
    const hargaTanah = luasTanah * harga
    const hargaTotal = hargaTanah + (hargaTanah * ppn)

    document.getElementById('hasil').innerText = `Total Harga Tanah: Rp ${hargaTotal.toLocaleString()}`
}