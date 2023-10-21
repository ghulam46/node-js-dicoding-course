function getUsers(isOffline) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const users = ['John', 'Jack', 'Abigail'];
    
            if(isOffline) {
                reject(new Error('cannot retrieve users due offline'));
                return;
            }
    
            resolve(users);
        }, 3000);

    })
}

function usersCallback(error, users) {
    if(error) {
        console.log('process failed: ', error.message);
        return;
    }
    console.log('process success: ',users);
}

getUsers(false)
    .then(users => console.log(users))
    .catch(err => console.log(err.message));