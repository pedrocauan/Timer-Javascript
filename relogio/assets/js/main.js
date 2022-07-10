const relogio = document.querySelector(".relogio")

const btnIniciar = document.querySelector(".iniciar")

const btnPausar = document.querySelector(".pausar")

const btnZerar = document.querySelector(".zerar")
let segundos = 0 //Segundos contados
let timer

//cria a hora formatada com os segundos que se passaram
const createHour = function() {
  const data = new Date(segundos * 1000) //Converte de segundos para milisegundos
  return data.toLocaleTimeString("pt-BR", {
    hour12: false,
    timeZone: "UTC"
  })
}

 //Roda o relogio
const init = function() {
   //guarda a hora no timer 
   timer = setInterval(() =>{
    segundos++ //Atualiza a variavel segundos
    relogio.innerHTML =  createHour(segundos)
  }, 1000)
}


//Botao iniciar
btnIniciar.addEventListener("click", function() {
  init()
})

//Botao de pausar
btnPausar.addEventListener("click", function(){
  clearInterval(timer)
})


//Botao de zerar
btnZerar.addEventListener("click", function() {
  alert("Zerar")
})
