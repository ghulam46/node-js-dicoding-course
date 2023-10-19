const getEvenNumber = (arr) => {
    // cek apakah objek atau bukan
    if(!(typeof arr === 'object')) {
        throw new Error('Parameter harus sebuah object!');
    }

    // cek apakah array atau bukan
    if(!Array.isArray(arr)) {
        throw new Error('Parameter harus sebuah Array!');
    }

    const filteredArr = arr.filter((item) => {
        return item % 2 === 0;
    });
    return filteredArr;
}

const myArr = [1,2,3,4,5,6,7,8,9,10];

// console.log(getEvenNumber(myArr)); // array
// console.log(getEvenNumber('myArr')); // bukan object
console.log(getEvenNumber({
    nama: 'ghulam',
    email: 'ghulam@gmail.com'
})); // object