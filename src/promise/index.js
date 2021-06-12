const somethingWillHappen = () =>{
    return new Promise((resolve, reject) => {
        if(true){
            resolve('Heeey we done!')
        }else {
            reject ('Whooosps!');
        }
    });
};

somethingWillHappen()
.then(response => console.log(response))
.catch(err => console.log(err));

const somethingWillHappen2 = () => {
return new Promise((resolve, reject) =>{
    if (true){
        setTimeout(() => {
            resolve('True');
        }, 2000)
    } else {
        const error = new Error('Whoopps!')
    }
});
}

somethingWillHappen2()
.then(response =>{console.log(response)})
.catch(err => console.error(err));

Promise.all([somethingWillHappen(), somethingWillHappen2()])
.then(response => {
    console.log('Array of results', response);
})
.catch(err => {
    console.error(err);
})