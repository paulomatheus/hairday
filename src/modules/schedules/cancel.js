import { scheduleDay } from "./load.js"
import { scheduleCancel } from "../../services/schedule-cancel"

const periods = document.querySelectorAll(".period")

//Gera evento click para cada lista (manha, tarde e noite)
periods.forEach((period) => {
    //Captura o evento de clique na lista
    period.addEventListener("click", async (event) => {
        if (event.target.classList.contains("cancel-icon")) {
            //Obtem a li do pai do elemento clicado
            const item = event.target.closest("li")
            //{} significa desconstruir
            //Pega o id do agendamento para remover
            const { id } = item.dataset

            /*
            // Forma tradicional:
            // const id = item.dataset.id
            // const name = item.dataset.name
            // const time = item.dataset.time

            // Com desestruturação:
            const { id, name, time } = item.dataset 
            */

            //Confirma que o id foi selecionado
            if (id) {
                //Confirma se o usuario quer cancelar
                const isConfirm = confirm("Tem certeza que deseja cancelar o agendamento?")
                if (isConfirm) {
                    //Faz a requisicao na API para cancelar
                    await scheduleCancel({ id })
                    //Recarrega os agendamentos
                    scheduleDay()
                }
            }
        }
    })
})
