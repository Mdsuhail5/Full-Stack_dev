//callback example --> a function given as parameter to another function -> is called callback
function fetchData(callback) {
    setTimeout(() => {
        const data = "Hello, I m here";
        callback(data)
    }, 1000)
}

fetchData(result => {
    console.log(result)
})

//Promise- it is a cleaner and more efficient way to write asynchrous operations same as callbacks avoiding callback hell
function fetchDataPromise() {
    return new Promise(resolve => {
        setTimeout(() => {
            const data = "Yo i am here";
            resolve(data);
        }, 1000);
    })
}

fetchDataPromise().then(result => {
    console.log(result)
})

//Async await--> it is syntactic sugar to write promise and do asynchronus operations look synchronous.
async function fetchDataAsync() {
    const data = await new Promise(resolve => {
        setTimeout(() => {
            resolve("I am Async");
        }, 1000);
    });
    console.log(data);
}

fetchDataAsync()
    .then(result => {
        console.log(result);
    })
    .catch(error => {
        console.error(error);
    });



/// All of them
function fetchData(callback) {
    setTimeout(() => {
        const data = 'Hello, Callback!';
        callback(data);
    }, 1000);
}

function fetchDataPromise() {
    return new Promise(resolve => {
        setTimeout(() => {
            const data = 'Hello, Promise!';
            resolve(data);
        }, 1000);
    });
}

async function fetchDataAsyncAwait() {
    return new Promise(resolve => {
        setTimeout(() => {
            const data = 'Hello, Async/Await!';
            resolve(data);
        }, 1000);
    });
}

// Using callback
fetchData(result => {
    console.log(result);

    // Using Promise
    fetchDataPromise()
        .then(result => {
            console.log(result);

            // Using Async/Await
            fetchDataAsyncAwait()
                .then(result => {
                    console.log(result);
                })
                .catch(error => {
                    console.error(error);
                });
        })
        .catch(error => {
            console.error(error);
        });
});