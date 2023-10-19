const getEvenNumber = (arr) => {
    const filteredArr = arr.filter((item) => {
        return item % 2 === 0;
    });
    return filteredArr;
}

const myArr = [1,2,3,4,5,6,7,8,9,10];

console.log(getEvenNumber(myArr));