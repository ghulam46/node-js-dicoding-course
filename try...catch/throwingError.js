// const json = '{ "name": "Yoda", "age": 20 }';
// const json = '{ bad json }';
const json = '{ "age": 20 }';

class validationError extends Error {
    constructor(message) {
        super(message);
        this.name = "ValidationError";
    }
}

try {
    const user = JSON.parse(json);

    if(!user.name) {
        throw new SyntaxError("'name' is required");
    }

    if(!user.age) {
        throw new SyntaxError("'age' is required");
    }
    
    // errorCode;

    console.log(user.name);
    console.log(user.age);
} catch(error) {
    if(error instanceof SyntaxError) {
        console.log(`JSON Syntax Error: ${error.message}`);
    } else if(error instanceof validationError) {
        console.log(`Invalid data: error.message`);
    } else if(error instanceof ReferenceError) {
        console.log(error.message);
    } else {
        console.log(error.stack);
    }
}