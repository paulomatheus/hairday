import { apiConfig } from "./api-config";

export async function scheduleCancel({id}) {
    try {
        //interpolacao ${id} >>> concatenacao "texto" + var
        await fetch(`${apiConfig.baseURL}/schedules/${id}`, /*objeto*/{
            method: "DELETE",
        })
        //Colocar para descobrir o bug de nao deletar (json-server em versao bugada)
        //if(!response.ok) throw new Error(`HTTP error! status: ${response.status}`); 
        alert("Agendamento cancelado com sucesso!")
        
    }catch (error) {
        console.log(error)
        alert("Não foi possível cancelar o agendamento.")
    }
    
}
