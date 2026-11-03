import { hoursLoad } from "../form/hours-load.js";

//Seleciona o input de data
const selectedDate = document.getElementById("date")

    //Busca na API os agendamentos para carregar do lado direito da tela    
    //Carrega os horarios disponiveis (futuro + nao agendado) lado esquerdo form
export function scheduleDay(){
    //Obtém a data do input
    const date = selectedDate.value
    //Renderiza as horas disponiveis
    hoursLoad({date})
}
