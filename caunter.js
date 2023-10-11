let increaseDOM = document.querySelector("#increase")

let decreaseDOM = document.querySelector("#decrease")

let caunterDOM = document.querySelector("#caunter")

let caunter = localStorage.getItem("caunter") ? Number(localStorage.getItem("caunter")) : 0

caunterDOM.innerHTML = caunter

increaseDOM.addEventListener("click", clickEvent)

decreaseDOM.addEventListener("click", clickEvent)

function clickEvent () {
    this.id == "increase" ? caunter += 1 : caunter -= 1
    localStorage.setItem("caunter", caunter)
    caunterDOM.innerHTML = caunter

}

