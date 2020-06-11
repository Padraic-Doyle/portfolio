const addUserBtn = document.getElementById('add-user');
const doubleBtn = document.getElementById('double');
const sortBtn = document.getElementById('sort');
const showMillionairesBtn = document.getElementById('show-millionaires');
const calWealthBtn = document.getElementById('calculate-wealth');
const main = document.getElementById('main');

// // Array of ojects to store people
// let data = [];

// getRandomUser();
// getRandomUser();
// getRandomUser();


// async function getRandomUser() {
//     const res = await fetch('https://randomuser.me/api');
//     const data = await res.json();

//     const user = data.results[0];

//     const newUser = {
//         name: `${user.name.first} ${user.name.last}`,
//         money: Math.floor(Math.random() * 1000000)
//     };

//     console.log(newUser);

//     // addData(newUser);
//     // console.log('here');
//     // const res = await fetch('https://javascript.info/fetch-api', [{

//     //         method: "GET", // POST, PUT, DELETE, etc.
//     //         headers: {
//     //             // the content type header value is usually auto-set
//     //             // depending on the request body
//     //             "Content-Type": "text/plain;charset=UTF-8"
//     //         },
//     //         body: undefined, // string, FormData, Blob, BufferSource, or URLSearchParams
//     //         referrer: "about:client", // or "" to send no Referer header,
//     //         // or an url from the current origin
//     //         referrerPolicy: "no-referrer-when-downgrade", // no-referrer, origin, same-origin...
//     //         mode: "cors", // same-origin, no-cors
//     //         credentials: "same-origin", // omit, include
//     //         cache: "default", // no-store, reload, no-cache, force-cache, or only-if-cached
//     //         redirect: "follow", // manual, error
//     //         integrity: "", // a hash, like "sha256-abcdef1234567890"
//     //         keepalive: false, // true
//     //         signal: undefined, // AbortController to abort request
//     //         window: window // null
//     //     }])
//     //     .then((response) => {
//     //         return response.json();
//     //     })
//     //     .then((myJson) => {
//     //         console.log(myJson);
//     //     });
// }

// // //getRandomUser();
// // //getRandomUser();



// // // async function postData(url = 'https://randomuser.me/api', data = data) {
// // //     // Default options are marked with *
// // //     const response = await fetch(url, {
// // //         method: 'Get', // 'GET', //POST, PUT, DELETE, etc.
// // //         mode: 'cors', // no-cors, *cors, same-origin
// // //         cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
// // //         credentials: 'same-origin', // include, *same-origin, omit
// // //         headers: {
// // //             'Content-Type': 'application/json'
// // //                 // 'Content-Type': 'application/x-www-form-urlencoded',
// // //         },
// // //         redirect: 'follow', // manual, *follow, error
// // //         referrerPolicy: 'no-referrer', // no-referrer, *client
// // //         body: JSON.stringify(data) // body data type must match "Content-Type" header
// // //     });
// // //     return await response.json(); // parses JSON response into native JavaScript objects
// // // }

// // // fetch random user and add money
// // async function getRandomUser() {
// //     // const res = await fetch('https://randomuser.me/api');
// //     // const data = await res.json();
// //     console.log('here');
// //     // const response = await fetch(url = 'https://randomuser.me/api', {
// //     //     method: 'POST', //'GET', //POST, PUT, DELETE, etc.
// //     //     mode: 'no-cors', // no-cors, *cors, same-origin
// //     //     cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
// //     //     credentials: 'same-origin', // include, *same-origin, omit
// //     //     headers: {
// //     //         'Content-Type': 'application/json'
// //     //             // 'Content-Type': 'application/x-www-form-urlencoded',
// //     //     },
// //     //     redirect: 'follow', // manual, *follow, error
// //     //     referrerPolicy: 'no-referrer', // no-referrer, *client
// //     //     body: JSON.stringify(data) // body data type must match "Content-Type" header
// //     // });

// //     // const user = response.results[0];

// //     // const newUser = {
// //     //     name: `${user.name.first} ${user.name.last}`,
// //     //     money: Math.floor(Math.random() * 1000000),
// //     //     id: `${user.login.uuid}`,
// //     //     title: `${user.name.title}`,
// //     //     picture: `${user.picture.thumbnail}`
// //     // };
// //     // addData(newUser);
// //     // console.log('new user:', newUser.picture);
// //     // console.log('user variable', user.picture.thumbnail);
// //     // return await response.json(); // parses JSON response into native JavaScript objects
// // };







// // //Double money
// // function doubleMoney() {
// //     data = data.map(user => {
// //         return {
// //             ...user,
// //             money: user.money * 2
// //         };

// //     });
// //     updateDOM();
// // }

// // // Add new obj to data arr
// // function addData(obj) {
// //     data.push(obj);
// //     updateDOM();
// // }

// // function updateDOM(providedata = data) {
// //     // Clear main div
// //     main.innerHTML = ' <h2> <strong> Person</strong> Wealth</h2> ';
// //     providedata.forEach(item => {
// //         const element = document.createElement('div');
// //         element.classList.add('person');
// //         let name = item.name.replace(/ /g, '');
// //         let pic = item.picture.replace(/ /g, '');

// //         element.classList.add(name);
// //         element.innerHTML = `<img src=${item.picture} </img><strong> ${item.title} ${item.name}</strong>  ${formatMoney(item.money)}`;
// //         main.appendChild(element);

// //     })
// // }

// // // format number as money

// // function formatMoney(number) {
// //     var formatter = new Intl.NumberFormat('en-US', {
// //         style: 'currency',
// //         currency: 'GBP',
// //     });
// //     return formatter.format(number);

// // }

// // // Sort by Richest
// // function sortByRichest() {
// //     data.sort((a, b) => b.money - a.money);
// //     updateDOM();




// //     // data.forEach((item, index) => {
// //     //     console.log(data[index].name, data[index].money);

// //     //     let size = data[0].money;
// //     //     let newdata1 = [];
// //     //     if (data[index].money > size) {
// //     //         let size = data[index].money;
// //     //         console.log(`${size} is bigger than size ${data[index].money}`);


// //     //     } else if (data[index].money === size) {
// //     //         console.log('initisl size of size');
// //     //     } else {
// //     //         console.log(' new value smaller than current size');
// //     //     }

// //     //     data
// //     //     // let wel = {
// //     //     //     money: data[index].money,
// //     //     //     name: data[index].name
// //     //     // }

// //     //     // console.log(wel.money + data[0].name);


// //     // })
// // };
// // //Function show only millionaires
// // // 1. loop through data ,compare against 1million

// // function showMillionaires(providedData = data) {
// //     // console.log(data);


// //     const newdata = data.filter(person => person.money > 1000000);

// //     updateDOM(newdata);
// //     // data.map((person) => {
// //     //     if (person.money < 1000000) {

// //     //         console.log(person.name, person.money);
// //     //     } else {

// //     //         main.innerHTML = ' <h2> <strong> Person</strong> Wealth</h2> ';
// //     //         data.forEach(item => {
// //     //             const element = document.createElement('div');
// //     //             element.classList.add('person');
// //     //             let name = item.name.replace(/ /g, '');
// //     //             let pic = item.picture.replace(/ /g, '');

// //     //             element.classList.add(name);
// //     //             element.innerHTML = `<img src=${item.picture} </img><strong>wewew ${item.title} ${item.name}</strong>  ${formatMoney(item.money)}`;
// //     //             main.appendChild(element);

// //     //         })

// //     //     }
// //     // });
// // };
// // //Event Listeners
// // addUserBtn.addEventListener('click', () => {
// //     getRandomUser();
// // });

// // showMillionairesBtn.addEventListener('click', showMillionaires);

// // doubleBtn.addEventListener('click', doubleMoney);

// // sortBtn.addEventListener('click', sortByRichest);

let data = [];

getRandomUser();
getRandomUser();
getRandomUser();

// Fetch random user and add money
async function getRandomUser() {
    const res = await fetch('https://randomuser.me/api');
    const data = await res.json();

    const user = data.results[0];

    const newUser = {
        name: `${user.name.first} ${user.name.last}`,
        money: Math.floor(Math.random() * 1000000)
    };

    addData(newUser);
}

// Add new obj to data arr
function addData(obj) {
    data.push(obj);

    updateDOM();
}

// Update DOM
function updateDOM(providedData = data) {
    // Clear main div
    main.innerHTML = '<h2><strong>Person</strong> Wealth</h2>';

    providedData.forEach(item => {
        const element = document.createElement('div');
        element.classList.add('person');
        element.innerHTML = `<strong>${item.name}</strong> ${formatMoney(
      item.money
    )}`;
        main.appendChild(element);
    });
}

// Double eveyones money
function doubleMoney() {
    data = data.map(user => {
        return {
            ...user,
            money: user.money * 2
        };
    });

    updateDOM();
}

// Sort users by richest
function sortByRichest() {

    data.sort((a, b) => b.money - a.money);

    updateDOM();
}

// Filter only millionaires
function showMillionaires() {
    data = data.filter(user => user.money > 1000000);

    updateDOM();
}

// Calculate the total wealth
function calculateWealth() {
    const wealth = data.reduce((acc, user) => (acc += user.money), 0);

    const wealthEl = document.createElement('div');
    wealthEl.innerHTML = `<h3>Total Wealth: <strong>${formatMoney(
    wealth
  )}</strong></h3>`;
    main.appendChild(wealthEl);
}





// fromat number as money
function formatMoney(number) {
    var formatter = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'GBP',
    });
    return formatter.format(number);

}

// Event listeners
addUserBtn.addEventListener('click', getRandomUser);
doubleBtn.addEventListener('click', doubleMoney);
sortBtn.addEventListener('click', sortByRichest);
showMillionairesBtn.addEventListener('click', showMillionaires);
calWealthBtn.addEventListener('click', calculateWealth);