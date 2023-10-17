// console.log("Menyalakan mesin kopi");
// console.log("Menggiling biji kopi");
// console.log("Memanaskan air");
// console.log("Mencampurkan air dan kopi");
// console.log("Menuangkan kopi ke dalam gelas");
// console.log("Menuangkan susu ke dalam gelas");
// console.log("Kopi Anda sudah siap!");

const coffeStock = require('./state');

const makeCoffe = (type, miligrams) => {
    if(coffeStock[type] >= miligrams) {
        console.log("kopi berhasil dibuat!");
    } else {
        console.log("Biji kopi habis");
    }
}

makeCoffe('liberica', 100);