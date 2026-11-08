import { scheduleFetchByDay } from "../../services/schedule-fetch-by-day.js";
import { hoursLoad } from "../form/hours-load.js";
import { schedulesShow } from "../schedules/show.js";

//Seleciona o input de data
const selectedDate = document.getElementById("date")

//Busca na API os agendamentos para carregar do lado direito da tela    
//Carrega os horarios disponiveis (futuro + nao agendado) lado esquerdo form
export async function scheduleDay() {
    //Obtém a data do input
    const date = selectedDate.value

    //Busca na API os agendamentos
    const dailySchedules = await scheduleFetchByDay({ date })

    //Sort compara: conta negativa = a antes de b; positiva: b vem antes de a
    dailySchedules.sort((a, b) => new Date(a.when) - new Date(b.when))

    //Exibe os agendamentos
    schedulesShow({ dailySchedules })

    //Renderiza as horas disponiveis
    hoursLoad({ date, dailySchedules }) //passa tbm os agendamentos para bloquear os agendados
}
