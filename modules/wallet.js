import {reload} from './functions.js'

let user_id = localStorage.getItem('user_id')
let users = JSON.parse(localStorage.getItem('users'))

let {email, cards, name, surname} = users.find(item => item.id === +user_id)
let emailTags = document.querySelectorAll('.email')

// ui
let walletPlace = document.querySelector('.koshelok')
emailTags.forEach(item => item.innerHTML = email)

reload(cards, walletPlace)