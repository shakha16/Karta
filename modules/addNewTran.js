let select = document.querySelector('select')

let user_id = localStorage.getItem('user_id')
let users = JSON.parse(localStorage.getItem('users'))

let {cards} = users.find(item => item.id === +user_id)

for(let item of cards) {
    let opt = new Option(item.name, item.name)

    select.append(opt)
}