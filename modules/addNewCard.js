let user_id = localStorage.getItem('user_id')
let users = JSON.parse(localStorage.getItem('users'))

let user = users.find(item => item.id === +user_id)
let newCardForm = document.forms.newCard

newCard.onsubmit = e => {
    e.preventDefault()

    let card = {
        id: Math.random(),
        transactions: []
    }


    let fm = new FormData(newCard)

    fm.forEach((value, key) => {
        card[key] = value
    })

    user.cards.push(card)

    localStorage.setItem('users', JSON.stringify(users))
}