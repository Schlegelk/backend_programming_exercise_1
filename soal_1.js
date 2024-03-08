const prompt = require("prompt-sync")({sigint:true});

const angkaAwal = parseInt(prompt("Masukkan angka Awal = "));
const angkaAkhir = parseInt(prompt("Masukkan angka Akhir = "));

function menentukanBilanganPrima(bilangan) {
    if(bilangan < 2) {
        return false;
    }
    for(let i = 2; i < bilangan; i++) {
        if(bilangan % i === 0) {
            return false;
        }
    }
    return true;
}

for(let i = angkaAwal; i < angkaAkhir; i++) {
    if(menentukanBilanganPrima(i)) {
        console.log(i);
    }
}