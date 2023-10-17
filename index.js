// console.log("Menyalakan mesin kopi");
// console.log("Menggiling biji kopi");
// console.log("Memanaskan air");
// console.log("Mencampurkan air dan kopi");
// console.log("Menuangkan kopi ke dalam gelas");
// console.log("Menuangkan susu ke dalam gelas");
// console.log("Kopi Anda sudah siap!");

// pemanggilan nilai dari state menggunakan detructuring object
import {coffeStock, isCoffeMachineReady as isReady} from './state.js';
    
console.log(coffeStock, isReady);

const displayStock = stock => {
    for(const type in stock) {
        console.log(type);
    }
}

displayStock(coffeStock);