// const json = '{ "name": "Yoda", "age": 20 }';
// const json = '{ bad json }';
const json = '{ "age": 20 }';

try {
    const user = JSON.parse(json);

    if(!user.name) {
        throw new SyntaxError("'name' is required");
    }

    console.log(user.name);
    console.log(user.age);
} catch(error) {
    console.log(error.name);
    console.log(error.message);
}