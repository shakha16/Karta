import {users} from "./modules/database.js"

let form = document.forms.sign_up
let usersLinked = JSON.parse(localStorage.getItem('users')) || users

form.onsubmit = e => {
    e.preventDefault()

    let user = {
        id: Math.random(),
        cards: [
            {
                id: Math.random(),
                name: "visa",
                number: "8888 8888 8888 8888",
                date: "27/03",
                currency: "RUB",
                balance: 10000,
                transactions: [
                    {
                        id: Math.random(),
                        name: "visa",
                        category: "car",
                        total: "10000",
                        date: "29/07"
                    }
                ]
            }
        ]
    }

    let fm = new FormData(form)

    fm.forEach((value, key) => {
        user[key] = value
    })

    usersLinked.push(user)
    localStorage.setItem('users', JSON.stringify(usersLinked))
    localStorage.setItem('user_id', JSON.stringify(user.id))

    window.location.href = "pages/main.html"
}