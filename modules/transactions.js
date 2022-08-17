import {reloadTransactions} from './functions.js'

let user_id = localStorage.getItem('user_id')
let users = JSON.parse(localStorage.getItem('users'))

let {email, cards} = users.find(item => item.id === +user_id)
let emailTags = document.querySelectorAll('.email')
let tbody = document.querySelector('tbody')

let transactions = []

for(let item of cards) {
    transactions.push(item.transactions)
    console.log(item);
}

transactions = transactions.flat(Infinity)


// ui
emailTags.forEach(item => item.innerHTML = email)

reloadTransactions(transactions, tbody)