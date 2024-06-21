// function mostrarDataHora() {
//     const date = new Date();
//     console.log(date); 

//     document.getElementById('data_hora').innerText = date.toLocaleString();
// }

// mostrarDataHora();

// Função que atualiza o relógio digital
function updateClock() {

    const now = new Date();


    const hours = String(now.getHours()).padStart(2, '0');

    const minutes = String(now.getMinutes()).padStart(2, '0');


    const seconds = String(now.getSeconds()).padStart(2, '0');


    const timeString = `${hours}:${minutes}:${seconds}`;


    document.getElementById('hora').textContent = timeString;
}

// Chama a função updateClock imediatamente ao carregar a página para mostrar a hora atual sem atraso
updateClock();

// Configura um intervalo para chamar a função updateClock a cada 1000 milissegundos (1 segundo)
setInterval(updateClock, 1000);

