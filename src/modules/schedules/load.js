import { scheduleFetchByDay } from "../../services/schedule-fetch-by-day.js";
import { hoursLoad } from "../form/hours-load.js";

//Seleciona o input de data
const selectedDate = document.getElementById("date")

    //Busca na API os agendamentos para carregar do lado direito da tela    
    //Carrega os horarios disponiveis (futuro + nao agendado) lado esquerdo form
export  async function scheduleDay(){
    //Obtém a data do input
    const date = selectedDate.value

    //Busca na API os agendamentos
    const dailySchedules = await scheduleFetchByDay({date})
    
    //Renderiza as horas disponiveis
    hoursLoad({date})
}
