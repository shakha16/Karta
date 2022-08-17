import {reload, reloadTransactions} from './functions.js'

let user_id = localStorage.getItem('user_id')
let users = JSON.parse(localStorage.getItem('users'))

let {email, cards, name, surname} = users.find(item => item.id === +user_id)
// ui 
let wallet = document.querySelector('.koshelok')
let userName = document.querySelector('#userName')
let emailTags = document.querySelectorAll('.email')
let tbody = document.querySelector('tbody')

let transactions = []

for(let item of cards) {
    transactions.push(item.transactions)
}

transactions = transactions.flat(Infinity)

userName.innerHTML = `${name} ${surname}`
emailTags.forEach(item => item.innerHTML = email)


reload(cards, wallet)


reloadTransactions(transactions, tbody)

{/* <div class="item four">
    <div class="span">
        <span>Visa</span>
    </div>
    <div class="rub">
        <span>Rub</span>
    </div>
</div>     */}