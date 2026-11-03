import { scheduleDay } from "./schedules/load.js"

//Arquivo para quando a tela parar de carregar os elementos
document.addEventListener("DOMContentLoaded", function(){
    scheduleDay()
})
