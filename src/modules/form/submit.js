import dayjs from "dayjs"
import { scheduleNew } from "../../services/schedule-new.js"
import { scheduleDay } from "../schedules/load.js"

const form = document.querySelector("form")
const clientName = document.getElementById("client")
const selectedDate = document.getElementById("date")

//Date atual para formataar o input
const inputToday = dayjs().format("YYYY-MM-DD")

//Carrega a data atual
selectedDate.value = inputToday

//Define a data min como atual
selectedDate.min = inputToday

form.onsubmit = async (event) => {
    //Previne de carregar a página
    event.preventDefault()

    try {
        //Recuperando o nome do cliente
        const name = clientName.value.trim()
        if(!name){
            return alert("Informe o nome do cliente!")
        }

        //Recupera o horario selecionado
        const hourSelected = document. querySelector(".hour-selected")
        if (!hourSelected) {
            return alert("Seleciona a hora")
        }

        //Recupera so a hora
        const[hour] =  hourSelected.innerText.split(":")

        //Insere a hora na data
        const when = dayjs(selectedDate.value).add(hour, "hour")
        //Gera um ID
        const id = new Date().getTime()
        //Usar caso o json server estiver atualizado
        /*
        const id = new Date().getTime().toString //Server agora eh string e nao mais number
        */
        //Faz o agendamento
        await scheduleNew({
            id, name, when,
        })
        //Recarrega os agendamentos
        await scheduleDay()
        //Limpa o input de nome do cliente
        clientName.value = ""
    } catch (error) {
        alert("Não foi possível realizar o agendamento")
        console.log(error)
    }
}
