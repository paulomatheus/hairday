const periods = document.querySelectorAll(".period")

//Gera evento click para cada lista (manha, tarde e noite)
periods.forEach((period) => {
    //Captura o evento de clique na lista
    period.addEventListener("click", (event) => {
        if (event.target.classList.contains("cancel-icon")) {
            //Obtem a li do pai do elemento clicado
            const item = event.target.closest("li")
            //{} significa desconstruir
            const { id } = item.dataset

            /*
            // Forma tradicional:
            // const id = item.dataset.id
            // const name = item.dataset.name
            // const time = item.dataset.time

            // Com desestruturação:
            const { id, name, time } = item.dataset 
            */


            if (id) {
                const isConfirm = confirm("Tem certeza que deseja cancelar o agendamento?")
                if (isConfirm) {
                    console.log("REMOVER")
                }
            }
        }
    })
})
