const toPromise = (promise) => {
    return promise
        .then((data) => [data, null])
        .catch((err) => [null, err])
}

// const [users, err] = await toPromise(getAllUsers())

// if(!users || err){
//     res.status(400)
// }

module.exports = {
    toPromise
}