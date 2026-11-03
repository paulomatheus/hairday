import dayjs from "dayjs"
import { openingHours } from "../../utils/opening-hours.js"

//Passa o parametro dentro de objeto para desestruturar {date}
export function hoursLoad({ date }) {
    const opening = openingHours.map((hour) => {
        //Recupera as horas
        const [scheduleHour] = hour.split(":")

        //Adiciona a hora na data e verifica se está no passado
        const isHourPast = dayjs(date).add(scheduleHour, "hour").isBefore(dayjs())
        //console.log(scheduleHour, isHourPast)

        //Define se o horario esta disponivel
        return {
            hour,
            available: isHourPast,
        }
    })
}
