export function reloadTransactions(arr, place) {
    place.innerHTML = ""
    console.log(arr);

    for (let item of arr) {
        place.innerHTML += `
            <tr>
                <td>${item.id}</td>
                <td>${item.name}</td>
                <td>${item.category}</td>
                <td>${item.total}</td>
                <td>${item.date}</td>
            </tr>
        `
    }
}


export function reload(arr, place) {
    place.innerHTML = ""

    for (let item of arr) {
        place.innerHTML += `
            <div class="item">
                <div class="span">
                    <span>${item.name}</span>
                </div>
                <div class="rub">
                    <span>${item.balance} Rub</span>
                </div>
            </div>
        `
    }
}