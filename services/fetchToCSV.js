import fetch from 'node-fetch';

function getResult() {
    fetch("https://reqres.in/api/users")
    .then((response) => {
        console.log("response")
    })
    .catch(function (err) {
        console.log("Unable to fetch -", err);
    });
};

getResult();

console.log("response")