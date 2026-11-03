const dayjs = require("dayjs")

const form = document.querySelector("form")
const selectedDate = document.getElementById("date")

//Date atual para formataar o input
const inputToday = dayjs().format("YYYY-MM-DD")

//Carrega a data atual
selectedDate.value = inputToday

//Define a data min como atual
selectedDate.min = inputToday

form.onsubmit = (event) => {
    //Previne de carregar a página
    event.preventDefault()

    console.log("ENVIADO!")
}
