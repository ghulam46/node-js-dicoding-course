const getEvenNumber = (arr) => {
    if(!(typeof arr === 'object')) {
        throw new Error('Parameter harus sebuah object!');
    }

    const filteredArr = arr.filter((item) => {
        return item % 2 === 0;
    });
    return filteredArr;
}

const myArr = [1,2,3,4,5,6,7,8,9,10];

// console.log(getEvenNumber(myArr)); // object
console.log(getEvenNumber("myArr")); // bukan object