const userProfile = {
    username: 'Anton117',
    posts: 15,
    is_active: true,
    plan: 'premium'
};


function myFn(userObj) {
    const newArray = Object.entries(userObj);

    const a = newArray.map(element => {
    return `${element[0]} : ${element[1]}`
 })
 return a
};

console.log(myFn(userProfile))

// можно короче

function newMyFn(newObj) {
    const newArray = Object.entries(newObj);

    const a = newArray.map (([b, c]) =>
        `${b} : ${c}`)
    return a
}

console.log(newMyFn(userProfile))