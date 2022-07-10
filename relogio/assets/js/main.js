const relogio = document.querySelector(".relogio")

const btnIniciar = document.querySelector(".iniciar")

const btnPausar = document.querySelector(".pausar")

const btnZerar = document.querySelector(".zerar")
let segundos = 0
const data = new Date(0)


//Botao iniciar
btnIniciar.addEventListener("click", function() {
  //Roda o relogio
  setInterval(() =>{
    segundos++ //Atualiza a variavel segundos
    relogio.innerHTML = segundos
  }, 1000)
})

//Botao de pausar
btnPausar.addEventListener("click", function(){
  alert("Pausar")
})


//Botao de zerar
btnZerar.addEventListener("click", function() {
  alert("Zerar")
})
