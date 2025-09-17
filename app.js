const one = (num) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if(num !== 1) {
                console.log(`${num} is not 1`);
                reject();
                return;
            }
            console.log(`${num}`);
            resolve();
        }, 1000);
    })
}

const two = (num) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if(num !== 2) {
                console.log(`${num} is not 2`);
                reject();
                return;
            }
            console.log(`${num}`);
            resolve();
        }, 1500);
    })
}

const three = (num) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if(num !== 3) {
                console.log(`${num} is not 3`);
                reject();
                return;
            }
            console.log(`${num}`);
            resolve();
        }, 2000);
    })
}

one(1)
    .then(two(2))
    .then(three(3))
    .catch(console.error);


